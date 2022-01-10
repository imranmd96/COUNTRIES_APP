import { useRef } from "react";

export default function useDebounce(search: Function, delay: number){
    let timeout: any = useRef(null);

    function debouncedFn(...params: any) {
        window.clearTimeout(timeout.current)
        timeout.current = window.setTimeout(() => {
            search(...params)
        }, delay)
    }

    return debouncedFn
}