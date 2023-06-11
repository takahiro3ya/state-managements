import { FC } from "react"
import { Link, Outlet } from "react-router-dom"

import { Box } from "@/components"
import { pageKeyList, pageItem } from "@/constants"

import styles from "./Sidebar.module.scss"

export type Props = {
  errorOutlet?: React.ReactNode // for errorElement in createBrowserRouter
}

export const Sidebar: FC<Props> = ({ errorOutlet }) => (
  <Box isFlex>
    <Box p className={styles.sidebar}>
      <ul>
        {pageKeyList.map((pageKey) => (
          <li key={pageKey}>
            <Link to={pageItem[pageKey].path}>{pageItem[pageKey].title}</Link>
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
