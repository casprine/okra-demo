import { FunctionalComponent, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Container, Header, TextInput, BankListItem } from "../../components";
import { route } from "preact-router";

export const FormPage: FunctionalComponent = () => {
  return (
    <Container>
      <Header onClose={() => {}} onBackClick={() => route("/banks", true)} />
      <h3 className="title">Type in your credentials?</h3>

      <p className="subtitle">
        By entering your GTBank credentials here, you’re authorising Okra to pay
        Kent Woods the agreed amount.
      </p>

      <div className="banks-form">
        <TextInput placeholder="Email Address / Phone Number" />
        <TextInput placeholder="Password / PIN" />
        <a href="" className="forgot-password">
          Forgot password?
        </a>
      </div>

      <button className="action-button">Login</button>
    </Container>
  );
};
