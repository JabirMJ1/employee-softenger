import Utils from "@/helpers";
import {ChangeEventHandler, useEffect, useState} from "react";
import Label from "../Label";

type MyProps = {
    name: string
    value?: number
    onChange: (_value: number) => void
    placeholder?: string
    disabled?: boolean
    required?: boolean
    error?: string
    min?: number|string,
    max?: number|string,
    increment?: number|string
}

const NumberField = (props: MyProps) => {
    const [_value, setValue] = useState<number|string>("")
    const [error, setError] = useState<string|null>(null)

    useEffect(() => {
        setValue(props.value ?? "")
    }, [props.value])

    useEffect(() => {
        submit()
    }, [_value])

    const submit = () => {
        const _error = _value!=="" ? Utils.validateNumericField(_value, props.name, {min: props.min, max: props.max, increment: props.increment}): null
        setError(_error)
        if((!_error && Number(props.value) !== Number(_value))) props.onChange(Number(_value))
    }

    return (
        <div>
            <Label title={props.name} required={props.required}/>
            <input 
            autoComplete="off" 
            disabled={props.disabled}  
            min={props.min ?? undefined} 
            max={props.max ?? undefined}  
            onWheel={(e) => (e.target as any).blur()} // disable input update on scroll hovering input
            onChange={(e) => setValue(e.target.value)} 
            value={_value} type="number" id="number-input" 
            placeholder={props.placeholder && ''}
            className="disabled:bg-disabled bg-white mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5"/>

            {error &&
                <p id="helper-text-explanation" className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    )
};

export default NumberField