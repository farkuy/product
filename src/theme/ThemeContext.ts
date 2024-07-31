import {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (switchTheme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
});

export const LOCAL_STORAGE_THEN_KEY = 'theme';