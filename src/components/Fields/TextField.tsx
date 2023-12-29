
import React, {useEffect, useState} from "react";
import Label from "../Label";
import Utils from "@/helpers";

type MyProps = {
    name: string
    value: string|number
    onChange: (_value: string) => void
    placeholder?: string
    disabled?: boolean
    required?: boolean
    error?: string
    maxLength?: number|string
    minLength?: number|string
}

const TextField = (props: MyProps) => {
    const [_value, setValue] = useState(`${props.value}`)
    const [error, setError] = useState<string|null>(null)

    useEffect(() => {
        setValue(`${props.value}`)
    }, [props.value])

    useEffect(() => {
        submit()
    }, [_value])

    const submit = () => {
        const _error = _value !== "" ? Utils.validateStringField(_value, props.name, {maxLength: Number(props.maxLength), minLength: Number(props.minLength)}) : null
        setError(_error)
        if(!_error && props.value !== _value) props.onChange(_value)
    }

    return (
        <div>
            <Label title={props.name} required={props.required}/>
            <input
            autoComplete="off" 
            disabled={props.disabled} 
            maxLength={props.maxLength ? Number(props.maxLength) : undefined} 
            minLength={props.minLength ? Number(props.minLength) : undefined} 
            onChange={(e) => setValue(e.target.value)} 
            value={_value} 
            type="text" id="default-input" 
            placeholder={props.placeholder && ''}
            className="disabled:bg-disabled bg-white mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5"/>

            {(error || props.error) &&
                <p id="helper-text-explanation" className="mt-1 text-sm text-red-500">{error ?? props.error}</p>}
        </div>
    )
};

export default TextField