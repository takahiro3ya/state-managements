// TypeScript Guide - Slices pattern
// https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern

import { StateCreator } from "zustand"

// export const userNumList = [...Array(10)].map((_, i) => i + 1)
export const userNumList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const // as const 付与のため上記を書き換え

export type UserNum = (typeof userNumList)[number]

type UserState = {
  userName: string
}

type UserActions = {
  loading: boolean
  error: Error | null
  selectUser: (userNum: UserNum) => void
}

export type UserSlice = UserState & UserActions

const userInitialState: UserState = {
  userName: "(Not selected)",
}

const fetchUser = async (userNum: UserNum) => {
  const res = await fetch(
    // JSONPlaceholder
    // https://jsonplaceholder.typicode.com/
    // 10 users
    // https://jsonplaceholder.typicode.com/users
    `https://jsonplaceholder.typicode.com/users/${userNum}`,
  )
  return res.json()
}

type User = {
  id: number
  name: string
  email: string
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set,
) => ({
  userName: userInitialState.userName,
  // loading の設定方法
  // https://www.grepper.com/answers/464077/zustand+stores+manage+loading+state
  loading: false,
  error: null,
  selectUser: async (userNum: UserNum) => {
    try {
      set({ loading: true })
      const user: User = await fetchUser(userNum)
      set({ loading: false, userName: user.name })
    } catch (e) {
      set({ loading: false, error: e as Error })
    }
  },
})
