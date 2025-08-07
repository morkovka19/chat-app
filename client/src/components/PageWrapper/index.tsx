import styles from './styles.module.scss'
import { FC, ReactNode } from "react";


interface IPageWrapperProps {
    children: ReactNode
}

export const PageWrapper: FC<IPageWrapperProps> = ({children}) => <div className={styles.block}>{children}</div>
