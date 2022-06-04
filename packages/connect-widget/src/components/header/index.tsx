import { FunctionalComponent, h } from "preact";
import style from "./header.module.css";

interface HeaderProps {
  onBackClick?: () => void;
  showImage?: boolean;
  onClose: () => void;
}

export const Header: FunctionalComponent<HeaderProps> = ({
  onBackClick,
  showImage = true,
  onClose,
}) => {
  return (
    <header className={style.header}>
      {onBackClick && (
        <div className={style.backIcon}>
          <svg
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 8h-14M8.5 15l-7-7 7-7"
              stroke="#000"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {showImage && (
        <img
          src="/assets/linked-account-logo.png"
          width={64}
          height={34}
          alt="linked-image"
          style={{ objectFit: "contain" }}
        />
      )}

      <button className={style.closeButton}>
        <svg
          width={25}
          height={24}
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 6l-12 12M6.5 6l12 12"
            stroke="#5A5C5C"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
};
