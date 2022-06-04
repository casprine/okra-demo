import { FunctionalComponent, h } from "preact";
import styles from "./style.module.css";

export const Container: FunctionalComponent = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
