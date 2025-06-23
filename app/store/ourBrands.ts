/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";

type Brand = {
  brandname: string;
  img: string;
  showdelimg: boolean;
  color: string;
  paraone: string;
  paratwo: string;
};

type Store = {
  brands: Brand[];
  setBrands: (brands: Brand[]) => void;
};

export const useOurBrandsStore = create<Store>((set) => ({
  brands: [],
  setBrands: (brands) => set({ brands }),
}));
