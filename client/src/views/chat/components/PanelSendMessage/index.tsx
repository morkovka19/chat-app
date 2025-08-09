import { FC, useCallback, useState } from "react";
import style from "./style.module.scss";
import { Form } from "@/components/controls/Form";
import { Input } from "@/components/controls/Input";
import { Button } from "@/components/controls/Button";

interface IPanelSendMessageProps {
  handleSubmit: (text: string) => void;
}

export const PanelSendMessage: FC<IPanelSendMessageProps> = ({
  handleSubmit,
}) => {
  const [value, setValue] = useState("");

  const onSubmit = useCallback((data: { message: string }) => {
    setValue("");
    handleSubmit(value);
  }, [value]);

  const handleChange = useCallback((e: any) => {
    const valueInput = e?.target?.value;
    setValue(valueInput);
  }, []);

  return (
    <div className={style.panelMessage}>
      <Form onSubmit={onSubmit} className={style.panelMessage__form}>
        <Input
          name="message"
          className={style.panelMessage__input}
          placeholder="Message..."
          value={value}
          onChange={handleChange}
        />
        <Button className={style.panelMessage__button} type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};
