import { create } from "zustand"

// export const userNumList = [...Array(10)].map((_, i) => i + 1)
export const userNumList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const // as const 付与のため上記を書き換え

export type UserNum = (typeof userNumList)[number]

type User = {
  id: number
  name: string
  email: string
}

type State = {
  count: number

  userName: string
}

type Actions = {
  increase: () => void
  reset: () => void

  selectUser: (userNum: UserNum) => void
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

const initialState: State = {
  count: 0,
  userName: "(Not selected)",
}

export const useStore = create<State & Actions>()((set) => ({
  count: initialState.count,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),

  userName: initialState.userName,
  selectUser: async (userNum: UserNum) => {
    const user: User = await fetchUser(userNum)
    set({ userName: user.name })
  },
}))
