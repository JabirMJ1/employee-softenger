import {useState} from "react";
import BorderedButton from "components/Button/BorderedButton";
import useClickOutside from "hooks/useClickOutside";

type MyProps = {
    name?: string
    disabled?: boolean
    onClick: (value: string) => void
    items?: { title: string, value: string }[],
    isDisabled: (id: string) => boolean
}
const StepDropDown = (props: MyProps) => {
    const { showMenu, ref, handleClick } = useClickOutside();

    return (
        <div ref={ref} className="w-min">
            <BorderedButton
                onClick={handleClick}
                aria-label="Add Load"
            >
                {props.name}
            </BorderedButton>
            {
            !showMenu ? <div/> : <div className="absolute top-100 z-10">
                {
                    props.items?.map((e, key) => (<div
                        key={key}
                        className="min-w-[252px] border border-[color:var(--shades-of-grey-20,#DADBDD)] bg-white flex items-center justify-between gap-5 px-3 py-3 border-solid">
                        <div
                            className="overflow-hidden text-black text-ellipsis text-sm leading-5 tracking-tight grow whitespace-nowrap my-auto">
                            {e.title}
                        </div>
                        <BorderedButton
                            disabled={props.isDisabled(e.value)}
                            onClick={() => props.onClick(e.value)}
                            className="text-primary border-primary text-xs min-w-min px-4 min-h-min hover:!bg-primary hover:text-white"
                            aria-label={e.title}
                        >
                            Add
                        </BorderedButton>
                    </div>
                    ))
                }
            </div>
            }

        </div>
    );
};

export default StepDropDown