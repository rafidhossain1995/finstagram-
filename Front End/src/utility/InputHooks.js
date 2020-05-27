import React, {useState} from "react"

export const useInputs = (initialValue)=>{
    const [value, setValue] = useState(initialValue)

    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    return {value, onChange: handleChange}
}