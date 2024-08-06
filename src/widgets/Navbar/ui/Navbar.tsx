import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {FC} from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = (props) => {
    const { className } = props
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}
                    className={cls.maineLink}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/about'}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

