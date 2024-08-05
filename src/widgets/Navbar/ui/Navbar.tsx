import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {FC} from "react";

interface NavBarProps {
    className?: string;
}

export const Navbar:FC<NavBarProps> = (props) => {
    const { className } = props
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            
        </div>
    );
};

