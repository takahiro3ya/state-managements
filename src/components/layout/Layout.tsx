import { FC } from "react"

import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Sidebar, Props as PropsSidebar } from "./components/sidebar/Sidebar"

export const Layout: FC<PropsSidebar> = ({ errorOutlet }) => (
  <>
    <Header />
    {/* has <Outlet /> */}
    <Sidebar errorOutlet={errorOutlet} />
    <Footer />
  </>
)
