import {classNames} from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss"
import React, {FC, useState} from "react";
import {LangSwitcher, ThemeSwitcher} from "widgets";

interface SideBarProps {
    className?: string;
}

export const SideBar:FC<SideBarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <LangSwitcher className={cls.lang}/>
            <div className={cls.themeSwitcher}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

