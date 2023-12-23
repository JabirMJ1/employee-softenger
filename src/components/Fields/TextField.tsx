
import React, {useEffect, useState} from "react";
import Title from "../Title";
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
}

const TextField = (props: MyProps) => {
    const [_value, setValue] = useState("")
    const [error, setError] = useState<string|null>(null)

    useEffect(() => {
        setValue(`${props.value}`)
    }, [props.value])

    const submit = () => {
        const _error = Utils.validateStringField(_value, {maxLength: Number(props.maxLength)})
        setError(_error)
        if(!_error && props.value !== _value) props.onChange(_value)
    }

    const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        submit()
    }

    const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            submit()
        }
    }

    return (
        <div>
            <Title title={props.name} required={props.required}/>
            <input disabled={props.disabled} onBlur={handleBlur} maxLength={props.maxLength ? Number(props.maxLength) : undefined} onKeyDown={handleKeyPress} onChange={(e) => setValue(e.target.value)} value={_value} type="text" id="default-input" placeholder={props.placeholder && ''}
                    className="disabled:bg-disabled bg-white mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5"/>

            {error &&
                <p id="helper-text-explanation" className="mt-1 ml-2 text-sm text-red-500">{error}</p>}
        </div>
    )
};

export default TextField