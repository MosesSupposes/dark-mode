import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useDarkMode() {
    const [storedValue, setValue] = useLocalStorage('dark-mode', 'false')

    useEffect(() => {
        if (storedValue === 'true') {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [storedValue])

    const toggleDarkMode = ()  => {
        if (storedValue === 'true') {
            setValue('false')
        } else {
            setValue('true')
        }
    }

    return [toggleDarkMode, storedValue, setValue]
}