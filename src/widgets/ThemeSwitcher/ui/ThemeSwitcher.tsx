import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss"
import {FC} from "react";
import {Button, ButtonTheme} from "shared/ui/Button";
import {useTheme, Theme} from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {
                theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>
            }
        </Button>
    );
};

