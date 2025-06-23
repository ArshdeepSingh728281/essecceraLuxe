/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";

interface HomePageStore {
  frontimages: any[];
  aboutusheading: string;
  aboutusdata: any[];
  brandimages: any[];
  essheading: string;
  essheadingend: string;
  ourbrands: any[];
  ourbrandsndbuisnesses: any[];
  ourstorytext: string;

  setfrontimages: (data: any[]) => void;
  setAboutusHeading: (data: string) => void;
  setaboutusdata: (data: any[]) => void;
  setbrandimages: (data: any[]) => void;
  setessheading: (data: string) => void;
  setessheadingend: (data: string) => void;
  setOurbrands: (data: any[]) => void;
  setourbrandsndbuisnesses: (data: any[]) => void;
  setourstorytext: (data: string) => void;
}

export const useHomePageStore = create<HomePageStore>((set) => ({
  frontimages: [],
  aboutusheading: "",
  aboutusdata: [],
  brandimages: [],
  essheading: "",
  essheadingend: "",
  ourbrands: [],
  ourbrandsndbuisnesses: [],
  ourstorytext: "",

  setfrontimages: (data) => set({ frontimages: data }),
  setAboutusHeading: (data) => set({ aboutusheading: data }),
  setaboutusdata: (data) => set({ aboutusdata: data }),
  setbrandimages: (data) => set({ brandimages: data }),
  setessheading: (data) => set({ essheading: data }),
  setessheadingend: (data) => set({ essheadingend: data }),
  setOurbrands: (data) => set({ ourbrands: data }),
  setourbrandsndbuisnesses: (data) => set({ ourbrandsndbuisnesses: data }),
  setourstorytext: (data) => set({ ourstorytext: data }),
}));
