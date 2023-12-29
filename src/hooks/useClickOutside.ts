import { useState, useEffect, useRef, useCallback } from 'react';

const useClickOutside = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback(
        (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setShowMenu(false);
            }
        },
        [ref]
    );

    useEffect(() => {
        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside, showMenu]);

    const handleClick = () => {
        setShowMenu((prev) => !prev);
    };

    return { showMenu, ref, handleClick };
};

export default useClickOutside;