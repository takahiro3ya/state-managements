import { Box } from "@/components"

import { useStore } from "./hooks/store"

import styles from "./Zustand.module.scss"

export const Another = () => {
  const userName = useStore((state) => state.userName)

  console.log("Another rendered")

  return (
    <Box
      m={{ size: "sm", dir: "top" }}
      p={{ size: "xs" }}
      className={styles.another}
    >
      <h2>Another</h2>
      <Box>{userName}</Box>
    </Box>
  )
}
