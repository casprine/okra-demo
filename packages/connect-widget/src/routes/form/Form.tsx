import { FunctionalComponent, h } from "preact";
import { route } from "preact-router";

import { useContextState } from "../../context/Context";
import { Container, Header, TextInput } from "../../components";
import { useEffect } from "preact/hooks";

export const FormPage: FunctionalComponent = () => {
  const { selectedBank, onInputValueChange, form } = useContextState();

  useEffect(() => {
    if (!selectedBank) {
      route("/banks");
    }
  }, [selectedBank]);

  return (
    <Container>
      <Header onBackClick={() => route("/banks", true)} />
      <h3 className="title">Type in your credentials?</h3>

      <p className="subtitle">
        By entering your {selectedBank?.name} credentials here, you’re
        authorising Okra to pay Kent Woods the agreed amount.
      </p>

      <div className="banks-form">
        <TextInput
          value={form?.email!}
          onChange={onInputValueChange!}
          name="email"
          placeholder="Email Address / Phone Number"
        />
        <TextInput
          value={form?.password!}
          onChange={onInputValueChange!}
          name="pin"
          placeholder="Password / PIN"
        />
        <a href="" className="forgot-password">
          Forgot password?
        </a>
      </div>

      <button className="action-button" onClick={() => route("/account")}>
        Login
      </button>
    </Container>
  );
};
