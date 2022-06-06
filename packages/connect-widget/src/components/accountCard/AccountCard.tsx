import { FunctionalComponent, h } from "preact";
import style from "./accountcard.module.css";

interface AccountProps {
  title: string;
  amount: string;
  checked: boolean;
  onClick: () => void;
}

const CheckedIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.08V12a10 10 0 11-5.93-9.14"
      stroke="#454749"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 4L12 14.01l-3-3"
      stroke="#040709"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AccountCard: FunctionalComponent<AccountProps> = ({
  title,
  amount,
  checked,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={style.accountCard}
      style={{
        boxShadow: checked ? "0px 8px 16px 0px rgba(57, 83, 123, 0.16)" : "",
      }}
    >
      <div className={style.accountDetails}>
        <p className={style.title}>{title}</p>
        <p className={style.amount}>{amount}</p>
      </div>

      {checked ? <CheckedIcon /> : <div className={style.uncheckIcon} />}
    </div>
  );
};
