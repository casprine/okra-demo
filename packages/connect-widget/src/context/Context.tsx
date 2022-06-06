import { createContext } from "preact";
import { FunctionalComponent, h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

import { fetcher, transformBanksResponse } from "../lib/helpers";
import { BankType } from "../types";

type PageStatus = "LOADING" | "ERROR" | "SUCCESS";

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
}

const initialState: ContextType = {
  banks: [],
  form: {
    email: "",
    password: "",
  },
  onBackSelect: () => {},
  onInputValueChange: () => {},
  pageStatus: "LOADING",
};

export const StateContext = createContext<Partial<ContextType>>(initialState);

export const Provider: FunctionalComponent = ({ children }) => {
  const [banks, setBanks] = useState<any[]>([]);
  const [pageStatus, setPageStatus] = useState<PageStatus>("LOADING");
  const [selectedBank, setSelectedBank] = useState<BankType | null>(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useContextState = () => useContext(StateContext);
