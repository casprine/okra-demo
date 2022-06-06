import { FunctionalComponent, h } from "preact";
import style from "./bankItem.module.css";

import { BankType } from "../../types";

interface BankListItemProps extends BankType {
  onClick: () => void;
}

export const BankListItem: FunctionalComponent<BankListItemProps> = ({
  name,
  image,
  onClick,
}) => {
  return (
    <div className={style.container} onClick={onClick}>
      <img src={image} className={style.logo} />
      <p className={style.name}>{name}</p>
    </div>
  );
};
