import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (key, initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    const toggleDarkMode = event => {
        event.preventDefault();
        return (darkMode) ? setDarkMode(false) : setDarkMode(true);
    }

    useEffect(() => {
        const body = document.querySelector("body");
        (darkMode) ? body.className="dark-mode" : body.className="";
    },[darkMode])

    return [darkMode, setDarkMode, toggleDarkMode]
}

export {useDarkMode};