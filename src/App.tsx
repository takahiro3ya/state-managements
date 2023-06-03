import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Layout, RouterError } from "./components"
import ReactHooks from "./pages/react-hooks"
import ReactRedux from "./pages/react-redux"
import ReactReduxDefaultSample from "./pages/react-redux/defaultSample"
import Recoil from "./pages/recoil"
import ReduxToolkit from "./pages/redux-toolkit"
import Swr from "./pages/swr"
import Zustand from "./pages/zustand"

type PageItem = {
  path: string
  title: string
}

export const pageItem: Record<string, PageItem> = {
  reactHooks: { path: "/", title: "React Hooks" },
  reactRedux: { path: "/react-redux", title: "React Redux" },
  reactReduxDefaultSample: {
    path: "/react-redux/default-sample",
    title: "React Redux",
  },
  reduxToolkit: { path: "/redux-toolkit", title: "Redux Toolkit" },
  recoil: { path: "/recoil", title: "Recoil" },
  zustand: { path: "/zustand", title: "Zustand" },
  swr: { path: "/swr", title: "SWR" },
}

const routers = createBrowserRouter([
  {
    // path: "/",
    element: <Layout />,
    errorElement: <Layout errorOutlet={<RouterError />} />,
    children: [
      {
        index: true,
        element: <ReactHooks />,
      },
      {
        path: pageItem.reactRedux.path,
        element: <ReactRedux />,
      },
      {
        path: pageItem.reactReduxDefaultSample.path,
        element: <ReactReduxDefaultSample />,
      },
      {
        path: pageItem.reduxToolkit.path,
        element: <ReduxToolkit />,
      },
      {
        path: pageItem.recoil.path,
        element: <Recoil />,
      },
      {
        path: pageItem.zustand.path,
        element: <Zustand />,
      },
      {
        path: pageItem.swr.path,
        element: <Swr />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={routers} />
}

export default App
