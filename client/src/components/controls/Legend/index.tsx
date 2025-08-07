import { FC } from "react";
import styles from './styles.module.scss';

interface ILegendProps {
    text: string
}

export const Legend: FC<ILegendProps> = ({text}) => <span className={styles.legend}>{text}</span>
