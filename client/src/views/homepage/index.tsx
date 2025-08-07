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
  const { replace } = useRouter();
  const handleSubmit = useCallback(
    ({ user = "", room = "" }: IUser) => {
      setRoom(room);
      setUser(user);
      if (user !== "" && room !== "") {
        socket.emit("join_room", { user, room });
        replace("/chat");
      }
    },
    [setRoom, setUser]
  );

  return (
    <PageWrapper>
      <SelectForm onSubmit={handleSubmit} />
    </PageWrapper>
  );
};
