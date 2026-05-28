import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { mockDeals } from "@/data/mockDeals";
import type { Deal } from "@/types/deal.types";

interface DealsContextValue {
  deals: Deal[];
  addDeal: (deal: Deal) => void;
  getDealById: (id: string) => Deal | undefined;
}

const DealsContext = createContext<DealsContextValue | undefined>(undefined);

interface DealsProviderProps {
  children: ReactNode;
}

export function DealsProvider({ children }: DealsProviderProps) {
  const [deals, setDeals] = useState<Deal[]>(mockDeals);

  function addDeal(deal: Deal) {
    setDeals((currentDeals) => [deal, ...currentDeals]);
  }

  function getDealById(id: string) {
    return deals.find((deal) => deal.id === id);
  }

  const value = useMemo(
    () => ({
      deals,
      addDeal,
      getDealById,
    }),
    [deals]
  );

  return (
    <DealsContext.Provider value={value}>
      {children}
    </DealsContext.Provider>
  );
}

export function useDeals() {
  const context = useContext(DealsContext);

  if (!context) {
    throw new Error("useDeals debe usarse dentro de DealsProvider");
  }

  return context;
}