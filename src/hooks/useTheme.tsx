import React, {useState, useEffect} from "react";
import {UseTheme} from "@/types/ThemeTypes";

export const useTheme = ():UseTheme => {
    const [theme, setTheme] = useState(loadTheme);

    const toggleTheme = () => {
        const newScheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newScheme);
        localStorage.setItem('theme', newScheme);

        const body = document.querySelector('body') as HTMLElement;
        body.classList.toggle('light', newScheme === 'light');
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.querySelector('.calculator')?.classList.toggle('light', savedTheme === 'light');
        }
    }, [theme]);

    return {theme, toggleTheme};
}

const loadTheme = () => {
    const theme = localStorage.getItem('theme');
    return theme || 'dark';
}