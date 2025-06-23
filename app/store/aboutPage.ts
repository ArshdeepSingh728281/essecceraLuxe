/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";

interface TeamMember {
  name: string;
  desc: string;
  img: string;
}

interface AboutPageStore {
  aboutText: string;
  missionText: string;
  team: TeamMember[];

  setAboutText: (data: string) => void;
  setMissionText: (data: string) => void;
  setTeam: (data: TeamMember[]) => void;
}

export const useAboutPageStore = create<AboutPageStore>((set) => ({
  aboutText: "",
  missionText: "",
  team: [],

  setAboutText: (data) => set({ aboutText: data }),
  setMissionText: (data) => set({ missionText: data }),
  setTeam: (data) => set({ team: data }),
}));
