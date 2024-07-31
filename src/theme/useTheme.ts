import {useContext} from 'react';
import {LOCAL_STORAGE_THEN_KEY, Theme, ThemeContext} from "./ThemeContext";

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): useThemeResult => {

    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        localStorage.setItem(LOCAL_STORAGE_THEN_KEY, newTheme);
        setTheme(newTheme);
    }

    return {
        theme, toggleTheme
    };
};

