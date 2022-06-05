import { FunctionalComponent, h } from "preact";
import { Container, Header, SearchInput } from "../../components";

export const BanksPage: FunctionalComponent = () => {
  return (
    <Container>
      <Header onClose={() => {}} onBackClick={() => {}} />
      <h3 className="title">What bank do you use?</h3>
      <SearchInput />
    </Container>
  );
};
