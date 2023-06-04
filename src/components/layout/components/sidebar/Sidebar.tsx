import { FC } from "react"
import { Link, Outlet } from "react-router-dom"

import { pageItem } from "@/App"
import { Box } from "@/components"

import styles from "./Sidebar.module.scss"

export type Props = {
  errorOutlet?: React.ReactNode // for errorElement in createBrowserRouter
}

export const Sidebar: FC<Props> = ({ errorOutlet }) => {
  const pageList = Object.values(pageItem)

  return (
    <Box isFlex>
      <Box p className={styles.sidebar}>
        <ul>
          {pageList.map((page) => (
            <li key={`${page.title}-${page.path}`}>
              <Link to={page.path}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </Box>
      <div className={styles.vertical_line}></div>

      <Box p fullFlex>
        {errorOutlet ? errorOutlet : <Outlet />}
      </Box>
    </Box>
  )
}
