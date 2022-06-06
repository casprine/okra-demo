const options = {
  key: "xxx",
  env: "production", // or sandbox
  token: "xx",
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
