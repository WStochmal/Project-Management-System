import { UserIcon } from "@/_assets/icons/User";
import { InputProps } from "@/interfaces/input-props";
import style from "./Input.module.css";
const Input = ({
  type,
  placeholder,
  onChange,
  icon,
  ...props
}: InputProps) => {
  return (
    <span>
      { icon && <UserIcon name={icon} size={1} color={"black"} />}
      <input
        className={style.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </span>
  );
};

export default Input;
