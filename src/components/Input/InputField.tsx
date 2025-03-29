import { useInputContext } from "@/components/Input/context";
import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export default function InputField({ className, ...props }: InputFieldProps) {
  const { value, setValue } = useInputContext();
  const valueType = typeof value;

  // console.log("value1 : ", value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    if (valueType === "number") {
      // const numericValue = nextValue.replace(",", "");
      // console.log("numericValue : ", numericValue);
      setValue(Number(nextValue));
    } else {
      setValue(nextValue);
    }
  };

  // let displayValue = value;

  // if (valueType === "number") {
  //   displayValue = value.toLocaleString();
  // }

  // console.log("value2 : ", displayValue);

  // const displayValue =
  //   typeof value === "number" ? value.toLocaleString() : value;

  return (
    <input
      {...props}
      value={value}
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
