import { create } from "zustand";

interface useSessionStore {
  username: string | null;
  setUsername: (username: string | null) => void;
  isAuthenticated: boolean;
  logout: () => void;
}

export const useSession = create<useSessionStore>((set) => ({
  username: null,
  isAuthenticated: false,
  setUsername: (username) =>
    set({
      username,
      isAuthenticated: !!username,
    }),
  logout: () =>
    set({
      username: null,
      isAuthenticated: false,
    }),
}));
