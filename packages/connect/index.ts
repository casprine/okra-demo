import { addStyles, openWidget, setup } from "./lib";

declare global {
  interface Window {
    okra: any;
  }
}

export interface ConnectionProps {
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

class okra {
  constructor() {
    if (typeof window === "undefined") return;
  }

  create() {
    addStyles();
  }

  open(args: ConnectionProps) {
    setup(args);
    openWidget();
  }
}

if (typeof window !== "undefined") {
  window.okra = okra;
}

export default okra;
