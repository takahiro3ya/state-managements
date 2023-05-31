import { FC } from "react"

import styles from "./A.module.scss"

type Props = {
  href: string
  children: React.ReactNode
}

export const A: FC<Props> = ({ href, children }) => {
  return (
    <div className={styles.box}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </div>
  )
}
