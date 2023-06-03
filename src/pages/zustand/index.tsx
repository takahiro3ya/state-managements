import { Another } from "./Another"
import { Parent } from "./Parent"
import styles from "./Zustand.module.scss"

const Zustand = () => (
  <div className={styles.zustand}>
    <Parent />
    <Another />
  </div>
)

export default Zustand
