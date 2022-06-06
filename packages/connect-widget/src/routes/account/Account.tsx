import { FunctionalComponent, h } from "preact";
import { route } from "preact-router";
import { useState } from "preact/hooks";

import { Container, Header, AccountCard } from "../../components";

const formatter = (amount: number, currency: string) => {
  const f = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });

  return f.format(amount);
};

const userData = {
  name: "TOKUNBO O. ADEDEJI",
  accounts: [
    {
      name: "Savings",
      nuban: "0123127823",
      balance: "440520.76",
      currency: "ngn",
    },
    {
      name: "Current",
      nuban: "0123127824",
      balance: "22827.30",
      currency: "ngn",
    },
    {
      name: "Domiciliary",
      nuban: "0123127825",
      balance: "3000.45",
      currency: "usd",
    },
  ],
};

export const AccountPage: FunctionalComponent = () => {
  const [checked, setChecked] = useState("");

  return (
    <Container>
      <Header onClose={() => {}} onBackClick={() => route("/form", true)} />
      <h3 className="title">Which account do you want to pay from?</h3>

      <p className="subtitle account-name">Account Name: {userData.name}</p>

      <div className="accounts-container">
        {userData.accounts.map((i: any, index: number) => {
          const amount = formatter(i.balance, i.currency);
          const name = i.name.toLowerCase();
          return (
            <AccountCard
              title={`${i.name}: ${i.nuban}`}
              amount={amount}
              checked={name === checked}
              key={index}
              onClick={() => setChecked(name)}
            />
          );
        })}
      </div>

      {/* 
      <div className="banks-form">
        <TextInput
          value=""
          onChange={() => {}}
          name="email"
          placeholder="Email Address / Phone Number"
        />
        <TextInput
          value=""
          onChange={() => {}}
          name="pin"
          placeholder="Password / PIN"
        />
        <a href="" className="forgot-password">
          Forgot password?
        </a>
      </div> */}

      <button className="action-button">Pay ₦1,000 + NIP Charges</button>
    </Container>
  );
};
