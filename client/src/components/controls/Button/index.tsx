import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  MouseEventHandler,
  useCallback,
} from "react";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button: FC<IButtonProps> = ({ onClick, ...props }) => {

  const handleClick = useCallback((e?: any) => {
    if (onClick) onClick(e);
  }, [onClick]);

  return <button onClick={handleClick} {...props} />;
};
