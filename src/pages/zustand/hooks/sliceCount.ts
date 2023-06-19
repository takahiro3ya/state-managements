// TypeScript Guide - Slices pattern
// https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern

import { StateCreator } from "zustand"

type CountState = {
  count: number
}

type CountActions = {
  increase: () => void
  reset: () => void
}

export type CountSlice = CountState & CountActions

const countInitialState: CountState = {
  count: 0,
}

export const createCountSlice: StateCreator<CountSlice, [], [], CountSlice> = (
  set,
) => ({
  count: countInitialState.count,
  increase: () => set((state) => ({ count: state.count + 1 })),
  // How to reset state
  // https://docs.pmnd.rs/zustand/guides/how-to-reset-state
  reset: () => set(countInitialState),
})
