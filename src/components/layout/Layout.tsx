import { FC } from "react"

import { Header } from "./components/header/Header"
import { Sidebar, Props as PropsSidebar } from "./components/sidebar/Sidebar"
import { Footer } from "./components/footer/Footer"

export const Layout: FC<PropsSidebar> = ({ errorOutlet }) => (
  <>
    <Header />
    {/* has <Outlet /> */}
    <Sidebar errorOutlet={errorOutlet} />
    <Footer />
  </>
)
