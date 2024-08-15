import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './BugButton.module.scss';

interface BugButtonProps {
    className?: string;
}

export const BugButton:FC<BugButtonProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    const throwError = () => setError(true);

    useEffect(() => {
        throw new Error();
    }, [error]);

    return (
        <Button
            className={classNames(cls.BugButton, {}, [className])}
            onClick={throwError}
        >
            {t('Выбросить ошибку')}
        </Button>
    );
};
