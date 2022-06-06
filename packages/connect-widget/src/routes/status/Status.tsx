import { FunctionalComponent, h } from "preact";
import { Container, Header } from "../../components";

const CheckIcon = () => (
  <svg
    width={48}
    height={49}
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx={24} cy={24.1086} rx={24} ry={24.1086} fill="#031927" />
    <path
      d="M34.281 16.449a1.33 1.33 0 00-1.854 0l-12.404 12.46-4.395-4.416a1.33 1.33 0 00-1.887-.033 1.345 1.345 0 000 1.93l5.339 5.362a1.33 1.33 0 001.887 0l13.347-13.407a1.345 1.345 0 00-.033-1.896z"
      fill="#fff"
    />
  </svg>
);

export const StatusPage: FunctionalComponent = () => {
  return (
    <Container>
      <Header onClose={() => {}} showImage={false} />

      <div className="status-content">
        <CheckIcon />

        <p>
          Your account ending in 7823 has been successfully linked and debited.
        </p>
      </div>

      <button className="action-button">Return to CrossWallet</button>
    </Container>
  );
};
