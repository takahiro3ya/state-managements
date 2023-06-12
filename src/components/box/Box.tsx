import { FC } from "react"

import { Size, Space } from "@/utils/types"

import styles from "./Box.module.scss"

type Props = {
  m?: Space
  p?: Space | true
  isFlex?: boolean
  flex?: { isColumn?: boolean; gap?: Size }
  fullWidth?: boolean
  fullFlex?: boolean
  className?: string
  children?: React.ReactNode
}

const makeClass = (space: Space | true) => {
  if (space === true) {
    return "_basic"
  }

  let str = ""
  if (space.dir) {
    str += `_${space.dir}`
  }
  str += `_${space.size}`

  return str
}

export const Box: FC<Props> = ({
  m,
  p,
  isFlex,
  flex,
  fullWidth,
  fullFlex,
  className,
  children,
}) => {
  return (
    <div
      className={`${p ? styles[`p${makeClass(p)}`] : ""} ${
        m ? styles[`m${makeClass(m)}`] : ""
      } ${isFlex || flex ? styles.flex : ""} ${
        flex?.isColumn ? styles.flex_column : ""
      } ${flex?.gap ? styles[`gap_${flex.gap}`] : ""} ${
        fullWidth ? styles.full_width : ""
      } ${fullFlex ? styles.full_flex : ""} ${className ?? ""}
      `}
    >
      {children}
    </div>
  )
}
