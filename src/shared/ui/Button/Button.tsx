import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss"
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

