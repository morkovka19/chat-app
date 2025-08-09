import { PageWrapper } from "@/components/PageWrapper";
import { FC, useEffect, useState } from "react";
import { Chat } from "./components/Chat";
import { Menu } from "./components/Menu";
import style from "./style.module.scss";
import { Socket } from "socket.io-client";

interface IChatPageProps {
  socket: Socket<any, any>;
}

export interface IUserServer{
id: string,
    room: string,
    username: string
}

export const ChatPage: FC<IChatPageProps> = ({ socket }) => {
  const [users, setUsers] = useState<Array<IUserServer>>([]);

  useEffect(() => {
    socket.on("chatroom_users", (users: Array<IUserServer>) => {
      setUsers(users);
    });

    return () => {
      socket.off("chatroom_users");
    };
  }, [socket]);

  return (
    <PageWrapper>
      <div className={style.layout}>
        <Menu users={users} />
        <Chat socket={socket} />
      </div>
    </PageWrapper>
  );
};
