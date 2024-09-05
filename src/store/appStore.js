import { create } from "zustand"

export const useStart = create((set) => ({
    showStart: false,
    toggleStart: () => set((state) => ({ showStart: !state.showStart })),
  }))

export default useStart