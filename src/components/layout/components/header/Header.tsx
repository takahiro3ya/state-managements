import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import { getTitleFromPath } from "@/constants"

import styles from "./Header.module.scss"

export const Header = () => {
  const [title, setTitle] = useState("")
  const location = useLocation()

  useEffect(() => {
    const title = getTitleFromPath(location.pathname)
    if (title) {
      setTitle(title)
    }
  }, [location.pathname])

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        State managements by{"\n"}
        <span>{title}</span>
      </h1>
    </header>
  )
}
