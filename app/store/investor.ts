/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";

type ReportFile = {
  fname: string;
  file: string;
};

type Report = {
  title: string;
  files: ReportFile[];
};

type Store = {
  reports: Report[];
  setReports: (reports: Report[]) => void;
};

export const useInvestorStore = create<Store>((set) => ({
  reports: [],
  setReports: (reports) => set({ reports }),
}));
