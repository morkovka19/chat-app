import { FC, useMemo } from "react";
import style from './style.module.scss'
import { IMessage } from "../Chat";
import { formatDate } from "@/scripts";

interface IMessageProps extends IMessage{};

export const Message: FC<IMessageProps> = ({message, username, __createdtime__}) => {

    const date = useMemo(() => formatDate(__createdtime__), [__createdtime__])
console.log(username)
    return (
    <div className={style.message}>
        <div className={style.message__infoBlock}>
            <p className={style.message__info}>{username}</p>
            <p className={style.message__info}>{date}</p>
        </div>
        <p className={style.message__text}>
            {message}
        </p>
    </div>
    )
}
