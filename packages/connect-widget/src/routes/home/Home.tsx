import { FunctionalComponent, h } from "preact";
import { route } from "preact-router";
import style from "./home.module.css";

import { Container } from "../../components";

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

const ErrorScreen = () => {
  return <div></div>;
};

export const HomePage: FunctionalComponent = () => {
  return (
    <Container height={300}>
      <LinkAccount />
    </Container>
  );
};
