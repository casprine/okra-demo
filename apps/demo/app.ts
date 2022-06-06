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

const options: ConnectionProps = {
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

const okra = window.okra;

const client = new okra();

client.create();

const button = document.getElementById("get-started");

button.addEventListener("click", () => client.open(options));
