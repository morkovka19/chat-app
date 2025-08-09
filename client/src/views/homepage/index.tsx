import { PageWrapper } from "@/components/PageWrapper";
import { SelectForm } from "@/components/SelectForm";
import { IUser, useUserStore } from "@/store/user";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { Socket } from "socket.io-client";

interface IMainPageProps {
  socket: Socket<any, any>;
}
export const MainPage: FC<IMainPageProps> = ({ socket }) => {
  const { setRoom, setUser } = useUserStore();
  const { push } = useRouter();
  const handleSubmit = useCallback(
    async ({ user = "", room = "" }: IUser) => {

      setRoom(room);
      setUser(user);

      if (user && room) {
        await push("/chat");
        socket.emit("join_room", { username: user, room });
      }
    },
    [setRoom, setUser, socket, push]
  );

  return (
    <PageWrapper>
      <SelectForm onSubmit={handleSubmit} />
    </PageWrapper>
  );
};
