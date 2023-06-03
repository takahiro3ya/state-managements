import { FC } from "react"

import styles from "./Box.module.scss"
import { Size, Space } from "@/utils/types"

type Props = {
  m?: Space
  p?: Space
  flex?: { isColumn?: boolean; gap?: Size }
  className?: string
  children: React.ReactNode
}

const makeClass = (space: Space) => {
  let str = ""

  if (space.dir === "x") {
    str += "_x"
  } else if (space.dir === "y") {
    str += "_y"
  } else if (space.dir === "top") {
    str += "_t"
  }
  str += `_${space.size}`

  return str
}

export const Box: FC<Props> = ({ m, p, flex, className, children }) => {
  return (
    <div
      className={`${styles[`p${p ? makeClass(p) : "_normal"}`]} ${
        m ? styles[`m${makeClass(m)}`] : ""
      } ${flex ? styles.flex : ""} ${
        flex?.isColumn ? styles.flex_column : ""
      } ${flex?.gap ? styles[`gap_${flex.gap}`] : ""} ${className}
      `}
    >
      {children}
    </div>
  )
}
