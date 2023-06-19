// TypeScript Guide - Slices pattern
// https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern

// Slices Pattern
// https://docs.pmnd.rs/zustand/guides/slices-pattern

import { create } from "zustand"

import { createCountSlice, CountSlice } from "./sliceCount"
import { createUserSlice, UserSlice } from "./sliceUser"

export const useStore = create<CountSlice & UserSlice>()((...a) => ({
  ...createCountSlice(...a),
  ...createUserSlice(...a),
}))
