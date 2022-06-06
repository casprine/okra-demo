import { ComponentProps, FunctionalComponent, h } from "preact";
import { route } from "preact-router";
import { Container, Header, SearchInput, BankListItem } from "../../components";

import { useContextState } from "../../context/Context";

type Bank = ComponentProps<typeof BankListItem>;

export const BanksPage: FunctionalComponent = () => {
  const { banks, onBackSelect } = useContextState();

  function onBankClick(bank: Bank) {
    onBackSelect(bank);
    route("/form");
  }

  return (
    <Container>
      <Header onBackClick={() => {}} />
      <h3 className="title">What bank do you use?</h3>
      <SearchInput />

      <div className="banks-container">
        {banks?.map((bank: Bank, index: number) => {
          return (
            <BankListItem
              {...bank}
              onClick={() => onBankClick(bank)}
              key={index}
            />
          );
        })}
      </div>
    </Container>
  );
};
