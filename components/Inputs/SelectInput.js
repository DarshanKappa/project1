import React, { useEffect, useRef, useState } from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import SimpleInput from "./SimpleInput";
import FocusableComponent from "./FocusableComponent";

export const SelectContext = React.createContext();


function SelectInput({ children, register = () => { }, label = "", name = "", icon, sx, watch, setValue, ...restProps }) {

    const ref = useRef()
    const value = watch(name)

    const [optionsVisible, setOptionsVisible] = useState(watch(name));

    useEffect(() => {
        ref?.current?.focus()
    }, [optionsVisible])

    const onSelectClick = () => {
        setOptionsVisible(!optionsVisible)
    }
    
    const preSetValue = (value)=>{
        setValue(name, value)
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
                            width: "90%",
                            alignSelf: "end",
                            mt: 2,
                            bgcolor: "background.project.paper.main",
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
