import { FunctionalComponent, h } from "preact";
import styles from "./style.module.css";

export const Container: FunctionalComponent<{ height?: number }> = ({
  children,
  height = 700,
  ...rest
}) => {
  return (
    <div className={styles.wrapper} {...rest}>
      <div
        style={{
          height,
        }}
        className={styles.container}
      >
        {children}
      </div>
    </div>
  );
};
