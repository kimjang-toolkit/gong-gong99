import FormButton from '@/components/Form/FormButton';
import FormInput from '@/components/Form/FormInput';
import SyncState from '@/components/Form/FormSyncState';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Children, createElement, isValidElement, useEffect } from 'react';
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
  onChange?: (data: T) => void;
  className?: string;
}

function Form<T extends FieldValues>({
  defaultValues,
  schema,
  children,
  onSubmit,
  onChange,
  className,
}: FormProps<T>) {
  const methods = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>,
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const { handleSubmit, watch } = methods;

  useEffect(() => {
    if (onChange) {
      const subscription = watch((data) => onChange(data as T));
      return () => subscription.unsubscribe();
    }
  }, [watch, onChange]);

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
Form.SyncState = SyncState;
export default Form;
