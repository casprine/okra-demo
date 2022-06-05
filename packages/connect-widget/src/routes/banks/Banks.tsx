import { ComponentProps, FunctionalComponent, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Container, Header, SearchInput, BankListItem } from "../../components";
import { fetcher, transformBanksResponse } from "../../lib/helpers";
import { route } from "preact-router";

type Bank = ComponentProps<typeof BankListItem>;

export const BanksPage: FunctionalComponent = () => {
  const [banks, setBanks] = useState<Bank[]>([]);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await fetcher(
          "https://api.okra.ng/v2/banks/listForWidget"
        );

        if (response?.status === "success") {
          const transformedBanks = transformBanksResponse(response.data.banks);
          setBanks(transformedBanks as any);
        }
      } catch (error) {}
    };

    fetchBanks();
  }, []);

  // bank: Bank;

  function onBankClick() {
    route("/form");
  }

  return (
    <Container>
      <Header onClose={() => {}} onBackClick={() => {}} />
      <h3 className="title">What bank do you use?</h3>
      <SearchInput />

      <div className="banks-container">
        {banks.map((bank: Bank, index: number) => {
          return <BankListItem {...bank} onClick={onBankClick} key={index} />;
        })}
      </div>
    </Container>
  );
};
