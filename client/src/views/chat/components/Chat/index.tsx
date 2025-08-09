import { FC, useCallback, useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import map from "lodash/map";
import { Message } from "../Message";
import { PanelSendMessage } from "../PanelSendMessage";
import { Socket } from "socket.io-client";
import { useUserStore } from "@/store/user";

interface IChatProps {
  socket: Socket<any, any>;
}

export interface IMessage {
  message: string;
  username: string;
  __createdtime__: number;
}

export const Chat: FC<IChatProps> = ({ socket }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const {user} = useUserStore();

  const handleMessage = useCallback((data: IMessage) => {
    setMessages((prev) => [...prev, data]);
  }, []);

  useEffect(() => {
    socket.on("receive_message", handleMessage);
    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, [socket, handleMessage]);

  const handleSubmit = useCallback((text: string) => {
    const message: IMessage = {
      message: text,
      username: user || '',
      __createdtime__: Date.now()
    }

    socket.emit('new_message', message)

  }, []);

  return (
    <div className={style.chatPanel}>
      <div className={style.chatPanel__messages}>
        {messages.map((mes, index) => (
          <Message {...mes} username={mes.username} key={`${mes.__createdtime__}-${index}`} />
        ))}
      </div>
      <PanelSendMessage handleSubmit={handleSubmit}/>
    </div>
  );
};
