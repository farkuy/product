import {classNames} from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss"
import {FC, useState} from "react";
import {ThemeSwitcher} from "widgets";

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
            <div className={cls.themeSwitcher}>
                <ThemeSwitcher/>
                {/*LangSwitcher сделать*/}
            </div>
        </div>
    );
};

