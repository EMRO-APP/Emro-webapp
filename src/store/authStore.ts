import { create } from "zustand";

export type User = {
  user_id: string;
  full_name: string;
  email: string;
  phone_number: string;
  role: string;
  status: string;
  email_verified: string;
  profile_picture: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  clear: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    setUser: (user) => set({ user }),
  setAccessToken: (token) => set({ accessToken: token }),
  clear: () => set({ accessToken: null }),
}));
