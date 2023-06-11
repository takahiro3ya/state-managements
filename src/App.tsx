import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Layout, RouterError } from "./components"
import { pageItem, pageKeyList } from "./constants"
import ReactHooks from "./pages/react-hooks"
import ReactRedux from "./pages/react-redux"
import ReactReduxDefaultSample from "./pages/react-redux/defaultSample"
import Recoil from "./pages/recoil"
import ReduxToolkit from "./pages/redux-toolkit"
import Swr from "./pages/swr"
import Zustand from "./pages/zustand"

type ElementItem = {
  [key in (typeof pageKeyList)[number]]: React.ReactNode
}

const elementItem: ElementItem = {
  reactHooks: <ReactHooks />,
  zustand: <Zustand />,
  recoil: <Recoil />,
  swr: <Swr />,
  reactRedux: <ReactRedux />,
  reactReduxDefaultSample: <ReactReduxDefaultSample />,
  reduxToolkit: <ReduxToolkit />,
}

const routers = createBrowserRouter([
  {
    // path: "/",
    element: <Layout />,
    errorElement: <Layout errorOutlet={<RouterError />} />,
    children: pageKeyList.map((pageKey) => ({
      path: pageItem[pageKey].path,
      element: elementItem[pageKey],
    })),
  },
])

function App() {
  return <RouterProvider router={routers} />
}

export default App
