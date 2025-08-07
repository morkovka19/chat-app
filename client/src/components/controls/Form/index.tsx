import {
  UseFormProps,
  SubmitHandler,
  useForm,
  FormProvider,
} from "react-hook-form";

type FormProps<T extends Record<string, any>> = {
  defaultValues?: UseFormProps<T>["defaultValues"];
  onSubmit: SubmitHandler<T>;
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

export function Form<T extends Record<string, any>>({
  defaultValues,
  onSubmit,
  children,
  ...props
}: FormProps<T>) {
  const methods = useForm<T>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
}
