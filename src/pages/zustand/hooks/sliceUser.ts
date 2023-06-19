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
  selectUser: async (userNum: UserNum) => {
    const user: User = await fetchUser(userNum)
    set({ userName: user.name })
  },
})
