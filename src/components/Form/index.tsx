import FormButton from '@/components/Form/FormButton';
import FormInput from '@/components/Form/FormInput';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Children, createElement, isValidElement } from 'react';
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  useForm,
} from 'react-hook-form';
import { ZodSchema } from 'zod';

interface FormProps<T> {
  defaultValues: T;
  schema: ZodSchema<T>;
  children: React.ReactNode;
  onSubmit: (data: T) => void;
  className?: string;
}

function Form<T extends FieldValues>({
  defaultValues,
  schema,
  children,
  onSubmit,
  className,
}: FormProps<T>) {
  const methods = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>,
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('space-y-6', className)}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            const props = child.props as { name?: string };
            if (props.name) {
              return createElement(child.type, {
                ...props,
                key: props.name,
              });
            }
          }
          return child;
        })}
      </form>
    </FormProvider>
  );
}

Form.Input = FormInput;
// Form.Selector = FormSelector;
Form.Button = FormButton;

export default Form;
