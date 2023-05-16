import { Divider, Stack, Typography } from "@mui/material";
import SimpleInput from "./SimpleInput";
import React, { useEffect, useRef, useState } from "react";
import FocusableComponent from "./FocusableComponent";

export const SelectContext = React.createContext();


function SelectInput({ children, register = () => { }, label = "", name = "", icon, sx, ...restProps }) {

    const ref = useRef()

    const [value, setValue] = useState("");
    const [optionsVisible, setOptionsVisible] = useState(false);

    useEffect(() => {
        ref?.current?.focus()
    }, [optionsVisible])

    const onSelectClick = () => {
        setOptionsVisible(!optionsVisible)
    }

    const preSetValue = (value)=>{
        setValue(value)
        setOptionsVisible(false)
    }

    return (
        <>
            <SelectContext.Provider value={{
                value: value,
                setValue: preSetValue
            }}>
                <Stack sx={{ width: "100%", ...sx }}>

                    <SimpleInput
                        label={label}
                        register={register}
                        name={name}
                        icon={icon}
                        value={value}
                        onClick={onSelectClick}
                        readOnly
                        inputProps={{
                            style: {
                                cursor: "pointer"
                            }
                        }}
                        {...restProps}
                    />

                    <Stack
                        sx={{
                            width: "80%",
                            alignSelf: "end",
                            mt: 2,
                            bgcolor: "#DEE7EB",
                            borderRadius: "4px"
                        }}
                    >
                        {optionsVisible &&
                            (<>
                                {children?.map?.((component, index) => (
                                    <>
                                        {component}
                                        {index < children?.length - 1 && (
                                            <Divider />
                                        )}
                                    </>
                                ))}
                                <FocusableComponent ref={ref} />
                            </>)
                        }
                    </Stack>
                </Stack>
            </SelectContext.Provider>
        </>
    );
}

export default SelectInput;
