import { FunctionalComponent, h } from "preact";
import style from "./input.module.css";

interface TextInputProps {
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder: string;
  name: string;
}

export const TextInput: FunctionalComponent<TextInputProps> = ({
  placeholder,
  onChange: propInOnChange,
  name,
  value: propInValue,
}) => {
  function onChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const { value } = e.target;
      propInOnChange(name, value);
      return;
    }
  }

  return (
    <input
      className={style.baseTextInput}
      placeholder={placeholder}
      value={propInValue}
      onChange={onChange}
    />
  );
};
