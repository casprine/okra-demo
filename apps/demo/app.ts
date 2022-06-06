interface ConnectionProps {
  key: string;
  env: "production" | "sandbox";
  token: string;
  country: string;
  payment: boolean;
  charge: {
    amount: number;
    currency: string;
  };
}

const baseOptions: ConnectionProps = {
  key: "1308hf301h83f1iweg0jhe",
  env: "production",
  token: "qwdnoufe3180u814001408jf",
  country: "NG",
  payment: true,
  charge: {
    amount: 100000,
    currency: "ngn",
  },
};

const withoutToken: ConnectionProps = {
  key: "1308hf301h83f1iweg0jhe",
  env: "production",
  token: "",
  country: "NG",
  payment: true,
  charge: {
    amount: 100000,
    currency: "ngn",
  },
};

const withoutKey: Partial<ConnectionProps> = {
  key: "",
  env: "production",
  token: "qwdnoufe3180u814001408jf",
  country: "NG",
  payment: true,
  charge: {
    amount: 100000,
    currency: "ngn",
  },
};

const okra = window.okra;

const client = new okra();
client.create();

const fullOptionButton = document.getElementById("get-started");
const withoutTokenButton = document.getElementById("without-token");
const withoutKeyButton = document.getElementById("without-key");

fullOptionButton.addEventListener("click", () => client.open(baseOptions));
withoutTokenButton.addEventListener("click", () => client.open(withoutToken));
withoutKeyButton.addEventListener("click", () => client.open(withoutKey));
