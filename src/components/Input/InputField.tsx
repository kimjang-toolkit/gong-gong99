import { useInputContext } from "@/components/Input/context";
import { cn } from "@/lib/utils";
import { formatNumber, isFormattedNumber } from "@/types/FormattedNumber";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export default function InputField({ className, ...props }: InputFieldProps) {
  const { value, setValue } = useInputContext();
  // useState 사용해서 isValueNumber 상태 관리
  // const [isValueNumber] = useState(!isNaN(Number(value)));

  // console.log("value1 : ", value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    if (isFormattedNumber(nextValue)) {
      setValue(formatNumber(nextValue));
    } else {
      setValue(nextValue);
    }
  };

  let displayValue = value;
  if (isFormattedNumber(value)) {
    displayValue = formatNumber(value);
  }

  return (
    <input
      {...props}
      value={displayValue}
      autoComplete="off"
      spellCheck={false}
      // onChange={(e) => setValue(e.target.value)}
      onChange={handleChange}
      className={cn(
        "text-body text-black w-full focus:outline-none  bg-transparent",
        className
      )}
    />
  );
}
