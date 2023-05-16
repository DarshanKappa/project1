import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';


export const FormStepperContext = React.createContext()

export default function StepperForm({ children, defaultValues, stepsName = [], sx }) {

    const [activeStep, setActiveStep] = React.useState(0);

    // Final Submit -> Run Function's Record
    // Means: It hold all onSubmission until final submit
    const [records, setRecords] = useState([]);

    const { watch, control, register, handleSubmit, getValues, setValue, reset } =
        useForm({ defaultValues });

    useEffect(() => {
        reset(defaultValues)
    }, [defaultValues])

    useEffect(() => {
        if (Array.isArray(children) && activeStep === children.length) {
            for (var fun of records) {
                if (typeof (fun) === "function") {
                    // Execute all submit Functions
                    fun(getValues());
                }
            }
        }
    }, [activeStep])

    const onPrevious = () => {
        setActiveStep(s => s - 1)
    }

    const submitHold = (fun) => {
        if (activeStep < records.length) {
            setRecords(r => { r.splice(activeStep, 1, fun); return r })
        } else {
            setRecords(r => { r.splice(activeStep, 0, fun); return r })
        }
        setActiveStep(s => s + 1)
    }

    return (
        <FormStepperContext.Provider value={Array.isArray(children) ? {
            // React-Hook Functions
            form: {
                watch: watch,
                control: control,
                register: register,
                handleSubmit: handleSubmit,
                getValues: getValues,
                setValue: setValue,
                // Function to Hold onSubmission: Argument=( async (data of all Form)=> {...} )
                onSubmit: submitHold
            },
            // For Previous Button
            previousProps: {
                isPrevious: activeStep !== 0,
                onPrevious: onPrevious
            },
            // For Next Button
            nextProps: {
                isNext: activeStep < children.length - 1,
                onNext: () => { }
            }
        } : {}}>
            <Box sx={{ width: '100%', ...sx }}>
                {
                    Array.isArray(children) ?
                        <>
                            <Box sx={{
                                display: "flex",
                                bgcolor: "#DEE7EB",
                                width: "100%",
                                p: 1,
                                my: 4,
                                borderRadius: 1,
                                justifyContent: "space-between"
                            }}>
                                {stepsName.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    return (
                                        <Box onClick={() => activeStep > index ? setActiveStep(index) : null} key={label + index} {...stepProps}
                                            sx={{ ...(activeStep === index ? { bgcolor: "#044766", color: "white" } : { bgcolor: "white", color: "#044766" }), width: "100%", borderRadius: 1, p: 2, ...(index !== 0 && { ml: 1 }) }}
                                        >
                                            <Typography sx={{ textAlign: "center", fontWeight: 600 }} variant="body1" color="inherit">{label}</Typography>
                                        </Box>
                                    );
                                })}
                            </Box>
                            {children.slice(activeStep, activeStep + 1)}
                        </>
                        :
                        <></>
                }
            </Box>
        </FormStepperContext.Provider>
    );
}