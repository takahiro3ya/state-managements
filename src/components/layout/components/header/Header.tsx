import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import styles from "./Header.module.scss"
import { pageItem } from "@/App"

export const getPageTitle = (path: string): string | null => {
  for (const key in pageItem) {
    if (pageItem[key].path === path) {
      return pageItem[key].title
    }
  }
  return null
}

export const Header = () => {
  const [title, setTitle] = useState("")
  const location = useLocation()

  useEffect(() => {
    setTitle("test")
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        State managements by <span>{title}</span>
      </h1>
    </header>
  )
}
