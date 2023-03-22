import { create } from "zustand";

interface SignedInState {
    isSignedIn: boolean
    signedIn: () => void
    signedOut: () => void
}

export const useSignedInStore = create<SignedInState>((set) => ({
    isSignedIn: false,
    signedIn: () => set(() => ({ isSignedIn: true })),
    signedOut: () => set(() => ({ isSignedIn: false })),
}))
