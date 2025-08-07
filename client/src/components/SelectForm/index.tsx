import { FC, useCallback } from "react";
import style from './style.module.scss';
import { Input } from "../controls/Input";
import { Button } from "../controls/Button";
import { Form } from "../controls/Form";

interface IFormData {
  name: string;
  room: string;
}

interface ISelectFormProps {
  onSubmit: (data: IFormData) => void;
}

const defaultValues: IFormData = {
  name: '',
  room: ''
};

export const SelectForm: FC<ISelectFormProps> = ({ onSubmit }) => {
  return (
    <div className={style.form__container}>
      <Form
        className={style.form}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      >
        <Input name="user" className={style.form__input} legend="Логин" required />
        <Input name="room" className={style.form__input} legend="Комната" required />
        <Button className={style.form__button} type='submit'>Зайти</Button>
      </Form>
    </div>
  );
};
