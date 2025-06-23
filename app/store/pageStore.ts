
import { create } from "zustand";

export type Pages = "about" | "/" | "newsandevents" | "ourbrands" | "investorrelations" | "careers" |"";

interface PageStore {
  selectedPage: Pages;
  setSelectedPage: (page: Pages) => void;
}

export const usePageStore = create<PageStore>((set) => ({
  selectedPage: "",
  setSelectedPage: (page) => set({ selectedPage: page }),
}));


