import { useEffect } from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';

interface SyncStateProps<T> {
  name: keyof T;
  value: T[keyof T];
}

/**
 * 특정 필드 값을 React Hook Form에 동기화하는 컴포넌트
 * 외부에서 setValue, value해야하는 경우
 */
export default function SyncState<T extends FieldValues>({
  name,
  value,
}: SyncStateProps<T>) {
  const { setValue } = useFormContext<T>();

  useEffect(() => {
    setValue(name as Path<T>, value);
  }, [name, value, setValue]);

  return null;
}
