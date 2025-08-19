import { create } from "zustand";

const useAuthStore = create((set) => ({
    activeTab: "login",  // login or register
    setTab: (tab) => set({ activeTab: tab }),
}));

export default useAuthStore;
