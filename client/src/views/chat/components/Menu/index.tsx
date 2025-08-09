import { FC } from "react";
import map from "lodash/map";
import { Button } from "@/components/controls/Button";
import style from "./style.module.scss";
import { useUserStore } from "@/store/user";
import { IUserServer } from "../..";

interface IMenuProps {
  users: Array<IUserServer>;
}

export const Menu: FC<IMenuProps> = ({ users }) => {
    console.log(users)
  const { room } = useUserStore();
  return (
    <div className={style.menu}>
      <p className={style.menu__title}>Room: {room}</p>
      <div className={style.menu__usersBlock}>
        <p className={style.menu__usersTitle}>Users</p>

        <ul className={style.menu__usersList}>
          {[...users].map((user: IUserServer) => (

                <li className={style.menu__usersItem} key={user.id}>
                  {user.username}
                </li>


          ))}
        </ul>
      </div>

      <Button className={style.menu__button}>Leave</Button>
    </div>
  );
};
