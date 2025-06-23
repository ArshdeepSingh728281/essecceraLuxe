/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";

type NewsItem = {
  title: string;
  img: string;
  views: number;
  time: string;
  dis: string;
};

interface NewsStore {
  news: NewsItem[];
  setNews: (news: NewsItem[]) => void;
}

export const useNewsStore = create<NewsStore>((set) => ({
  news: [],
  setNews: (news) => set({ news }),
}));
