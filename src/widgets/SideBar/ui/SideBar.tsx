import {classNames} from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss"
import React, {FC, useState} from "react";
import {ThemeSwitcher} from "widgets";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";

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
            <LangSwitcher/>
            <div className={cls.themeSwitcher}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

