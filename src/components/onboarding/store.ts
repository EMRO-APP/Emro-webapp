// import type { onboardingSchema } from "./schema";
// import { create } from "zustand";

// type onboardingState = Partial<onboardingSchema> & {
//     setData: (data: Partial<onboardingSchema>) => void;
//     getData: () => Partial<onboardingSchema>;
// }

// const useOnboardingStore = create<onboardingState>((set, get) => ({
//   setData: (data) => set((state) => ({ ...state, ...data })),

// getData: () => {
//     const state = get();
//     return {
//       userType: state.userType,
//       phoneNumber: state.phoneNumber,
//       email: state.email,
//       password: state.password,
//       confirmPassword: state.confirmPassword,
//       otp: state.otp,
//     };
//   },
// }));

// export default useOnboardingStore;
import type { onboardingSchema } from "./schema";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type onboardingState = Partial<onboardingSchema> & {
  setData: (data: Partial<onboardingSchema>) => void;
  getData: () => Partial<onboardingSchema>;
  clearData: () => void;
};

const useOnboardingStore = create<onboardingState>()(
  persist(
    (set, get) => ({
      // Initial state
      userType: undefined,
      phoneNumber: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
      otp: undefined,

      setData: (data) => set((state) => ({ ...state, ...data })),

      getData: () => {
        const state = get();
        return {
          userType: state.userType,
          phoneNumber: state.phoneNumber,
          email: state.email,
          password: state.password,
          confirmPassword: state.confirmPassword,
          otp: state.otp,
        };
      },

      clearData: () =>
        set({
          userType: undefined,
          phoneNumber: undefined,
          email: undefined,
          password: undefined,
          confirmPassword: undefined,
          otp: undefined,
        }),
    }),
    {
      name: "onboarding-storage", 
      storage: createJSONStorage(() => localStorage), // default is localStorage

      // Optional: Only persist certain fields (exclude sensitive data)
      partialize: (state) => ({
        userType: state.userType,
        phoneNumber: state.phoneNumber,
        email: state.email,
        // Exclude password, confirmPassword, and otp for security
      }),

      // Optional: Skip hydration on SSR
      skipHydration: false,

    
    }
  )
);

export default useOnboardingStore;