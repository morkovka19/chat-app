import {
  DetailedHTMLProps,
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import { Legend } from "../Legend";
import styles from "./styles.module.scss";
import { useFormContext } from 'react-hook-form';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  legend?: string;
  required?: boolean;
  name: string;
}

export const Input: FC<IInputProps> = ({
  legend,
  name,
  required = false,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <div className={styles.input__container}>
      {legend && <Legend text={legend} />}
      <input
        {...register(name, { required })}
        {...props}
        className={styles.input}
      />
    </div>
  );
};
