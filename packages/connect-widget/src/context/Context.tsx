import { createContext } from "preact";
import { FunctionalComponent, h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import qs from "qs";

interface ContextType {
  banks: any[];
  form: {
    email: string;
    password: string;
  };
  onBackSelect: (bank: BankType) => void;
  selectedBank?: BankType;
  onInputValueChange?: (name: string, value: string) => void;
  pageStatus: PageStatus;
  errorMessage?: string;
  paymentCharge?: {
    currency: string;
    amount: number;
  };
}

import { fetcher, transformBanksResponse } from "../lib/helpers";
import { BankType } from "../types";

type envType = "production" | "sandbox";

const credentials: Record<envType, { token: string; key: string }> = {
  production: {
    token: "qwdnoufe3180u814001408jf",
    key: "1308hf301h83f1iweg0jhe",
  },

  sandbox: {
    token: "qwdnoufe3180u814001408jf",
    key: "1308hf301h83f1iweg0jhe",
  },
};

type PageStatus = "LOADING" | "ERROR" | "SUCCESS";

const initialState: ContextType = {
  banks: [],
  form: {
    email: "",
    password: "",
  },
  onBackSelect: () => {},
  onInputValueChange: () => {},
  pageStatus: "LOADING",
  errorMessage: "",
  paymentCharge: {
    currency: "",
    amount: 0,
  },
};

export const StateContext = createContext<Partial<ContextType>>(initialState);

export const Provider: FunctionalComponent = ({ children }) => {
  const [banks, setBanks] = useState<any[]>([]);
  const [pageStatus, setPageStatus] = useState<PageStatus>("LOADING");
  const [selectedBank, setSelectedBank] = useState<BankType | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [paymentCharge, setPaymentCharge] = useState({
    currency: "",
    amount: 0,
  });

  const searchQuery = location.search.substring(1);

  // @ts-ignore
  const params = qs.parse(qs.parse(searchQuery).config);

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

  function validateOptions() {
    const isTokenValid =
      // @ts-ignore
      credentials?.[params?.env]?.token === params?.token || params?.token;

    const isEnvironmentValid =
      (params?.env && params?.env === "production") ||
      params?.env === "sandbox";

    const isKeyValid =
      // @ts-ignore
      credentials?.[params?.env]?.key === params?.key || params?.key;

    if (!isEnvironmentValid) {
      setPageStatus("ERROR");
      setErrorMessage("Invalid environment");
      return;
    }

    if (!isTokenValid) {
      setPageStatus("ERROR");
      setErrorMessage("Invalid token");
      return;
    }

    if (!isKeyValid) {
      setPageStatus("ERROR");
      setErrorMessage("Invalid key");
      return;
    }

    setPageStatus("SUCCESS");
  }

  console.log(JSON.stringify(params, null, 2));

  useEffect(() => {
    validateOptions();

    // if (params?.charge) {
    //   setPaymentCharge(params?.charge as any);
    // }
  }, [params]);

  function onBackSelect(bank: BankType) {
    setSelectedBank(bank);
  }

  function onInputValueChange(name: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const value: ContextType = {
    banks,
    form,
    onBackSelect: onBackSelect!,
    selectedBank: selectedBank!,
    onInputValueChange: onInputValueChange!,
    pageStatus,
    errorMessage,
    paymentCharge: paymentCharge!,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useContextState = () => useContext(StateContext);
