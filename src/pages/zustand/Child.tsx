// import { Box } from "@/components"
import { memo, ChangeEvent } from "react"

import { useStore, userNumList, UserNum } from "./hooks/store"

export const Child = memo(() => {
  const increase = useStore((state) => state.increase)
  const reset = useStore((state) => state.reset)
  const selectUser = useStore((state) => state.selectUser)

  const onChangUser = (e: ChangeEvent<HTMLSelectElement>) => {
    selectUser(Number(e.target.value) as UserNum)
  }

  console.log("Child rendered")

  return (
    <>
      <h2>Child</h2>
      <button onClick={increase}>click</button>
      <button onClick={reset}>click</button>

      <select defaultValue="" required onChange={onChangUser}>
        <option value="" disabled>
          ユーザーを選択
        </option>
        {userNumList.map((userNum) => (
          <option key={userNum} value={userNum}>
            ユーザー{userNum}
          </option>
        ))}
      </select>
    </>
  )
})
