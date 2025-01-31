import { useCallback, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useDebounce(callback, delay) {
    const timeoutRef = useRef(null);
    return useCallback((...args) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
export default useDebounce;
