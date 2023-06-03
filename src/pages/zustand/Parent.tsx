import { Child } from "./Child"

import styles from "./Zustand.module.scss"

export const Parent = () => {
  return (
    <div>
      <h2 className={styles.parent}>Parent</h2>
      <Child />
    </div>
  )
}
