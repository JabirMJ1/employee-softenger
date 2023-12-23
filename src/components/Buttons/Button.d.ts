import { PropsWithChildren } from "react";

export interface TButtonProps extends PropsWithChildren {
    type?: "button"|"submit"|"reset",
    border?: string|number,
    buttonStyle?: "primary"|"danger",
    id?: string,
    disabled?: boolean,
    className?: string
    disabledClassName?: string,
    color?: string
    onClick: React.MouseEventHandler,
}