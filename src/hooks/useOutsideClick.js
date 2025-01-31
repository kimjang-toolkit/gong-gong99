import { useEffect, useRef } from 'react';
export default function useOutsideClick(callback) {
    const ref = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (ref.current && !ref.current.contains(event.target))
                callback();
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [callback]);
    return ref;
}
