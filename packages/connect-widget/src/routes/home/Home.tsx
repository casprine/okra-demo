import { FunctionalComponent, h } from "preact";
import { route } from "preact-router";
import style from "./home.module.css";

import { Container } from "../../components";
import { useContextState } from "../../context/Context";

const LinkAccount: FunctionalComponent = () => {
  return (
    <div className={style.container}>
      <h2>CrossWallet uses Okra to link your bank account</h2>
      <p>
        Link your bank account with CrossWallet to be able to access the best
        financial products.
      </p>
      <button onClick={() => route("/banks")} className="action-button">
        Link your account
      </button>
    </div>
  );
};

const ErrorScreen: FunctionalComponent<{ errorMessage: string }> = ({
  errorMessage,
}) => {
  return (
    <div className={style.container}>
      <svg
        height={40}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.488 3.515a11.994 11.994 0 100 16.97 12.014 12.014 0 000-16.97zm-3.78 11.764a1 1 0 01-1.408 1.415l-3.11-3.11a.252.252 0 00-.354 0l-3.11 3.11a1.019 1.019 0 01-1.414 0 1 1 0 010-1.415l3.11-3.109a.248.248 0 000-.353l-3.11-3.11a1 1 0 011.41-1.415l3.109 3.11a.25.25 0 00.354 0l3.11-3.11a1 1 0 011.414 1.415l-3.11 3.11a.25.25 0 000 .353l3.11 3.11z"
          fill="#FF4040"
        />
      </svg>

      <p>{errorMessage}</p>
    </div>
  );
};

const LoadingStatus: FunctionalComponent = () => {
  return (
    <div className={style.container}>
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export const HomePage: FunctionalComponent = () => {
  const { pageStatus, errorMessage } = useContextState();

  return (
    <Container height={300}>
      {pageStatus === "ERROR" && <ErrorScreen errorMessage={errorMessage!} />}
      {pageStatus === "SUCCESS" && <LinkAccount />}
      {pageStatus === "LOADING" && <LoadingStatus />}
    </Container>
  );
};
