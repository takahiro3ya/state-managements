import { Box } from "@/components"

import { Child } from "./Child"
import { useStore } from "./hooks/store"

import styles from "./Zustand.module.scss"

export const Parent = () => {
  const count = useStore((state) => state.count)

  console.log("Parent rendered")

  return (
    <Box p={{ size: "xs" }} className={styles.parent}>
      <h2>Parent</h2>
      <Box>{count}</Box>

      <Box
        m={{ size: "xs", dir: "y" }}
        p={{ size: "xs" }}
        className={styles.child}
      >
        <Child />
      </Box>
    </Box>
  )
}
