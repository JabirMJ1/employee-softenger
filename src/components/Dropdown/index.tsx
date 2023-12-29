import React, { useState, useRef, useLayoutEffect, useCallback, forwardRef, PropsWithChildren, memo, MouseEventHandler } from 'react';
import ReactDOM from 'react-dom';

const DropdownToggle = forwardRef((props: PropsWithChildren<{}>, ref) => {
    return (
        <>{props.children}</>
    )
})
DropdownToggle.displayName = "DropdownToggle"

const DropdownItem = forwardRef((props: PropsWithChildren<{handleClick: MouseEventHandler<HTMLButtonElement>}>, ref) => {
    return (
        <button
            className={`py-2.5 pl-4 pr-12 hover:bg-gray-200 relative w-full min-w-max text-left`}
            onClick={props.handleClick}
        >{props.children}
        </button>
    )
})
DropdownItem.displayName = "DropdownItem"

/**
 * 
 * @todo reduce complexity
 * @returns 
 */
const DropdownLoyout = ({bgColor, index, options, item, getStickyToColor, children}: any) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    const handleDropdownToggle = () => {
        setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    };

    const handleClickOutside: React.MouseEventHandler<HTMLButtonElement|HTMLDivElement> = useCallback((event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as HTMLDivElement) &&
            !buttonRef.current?.contains(event.target as HTMLDivElement)
        ) {
            setShowDropdown(false);
        }
    }, [dropdownRef, buttonRef]);

    useLayoutEffect(() => {
        showDropdown ?
        document.addEventListener("mousedown", handleClickOutside as any) :
        document.removeEventListener("mousedown", handleClickOutside as any)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside as any);
        };
    }, [handleClickOutside, showDropdown])

    const Toggle = children.find((child: any) => child.type.displayName === "DropdownToggle")
    
    const portalRoot = document.getElementById('dropdown-portal') as HTMLDivElement; // Element outside of your app root

    if(!portalRoot) { // verify existence of dropdown-portal
        console.error("div named 'dropdown-portal' is defined")
        return <></>
    }
    return (
        <div className={`h-full`} 
        onMouseLeave={() => setShowDropdown(false)}
        >
        
        <button
        className={`relative h-full shadow-l pl-2 pr-4 py-2 flex space-x-2 items-center w-full ${bgColor}`} 
        ref={buttonRef} 
        onClick={handleDropdownToggle}>
            {Toggle}
        </button>

        {showDropdown &&
            ReactDOM.createPortal(
            <div
                className={`fixed z-[1003]  -translate-x-full -translate-y-1/2`}
                style={{
                    top: (buttonRef.current?.getBoundingClientRect().y ?? 0) + (buttonRef.current?.clientHeight ?? 0) / 2,
                    left: (buttonRef.current?.getBoundingClientRect().x ?? 0),
                }}
                ref={dropdownRef}
                onMouseLeave={() => setShowDropdown(false)}
            >
                <span className="p-2 bg-white absolute right-0
                    translate-x-1/2 top-1/2 -translate-y-1/2 
                    rotate-45 border-r border-t"></span>
                <div
                className={`w-min h-fit bg-white shadow-sm rounded border min-w-[198px]`}
                >
                {
                    // dynamic children gets listed as array inside array reduce is to distributes these children
                    children
                    .reduce((acc: any, child: any) => Array.isArray(child) ? [...acc, ...child] : [...acc, child],[])
                    .map((child: any) => {
                        if(child.type?.displayName !== 'DropdownItem') return <></>
                        return (
                            <>
                                {child}
                            </>
                        )
                    })
                }
                </div>
            </div>,
            portalRoot
            )
            }
        </div>
    );
};

const DynamicDropdown = Object.assign(memo(DropdownLoyout), {
    Toggle: (DropdownToggle),
    Item: (DropdownItem),
})

export default DynamicDropdown