import React from "react"
import { Provider } from "react-redux"

import ReactDOM from "react-dom/client"

import App from "./App"
import { store } from "./pages/react-redux/app/store"
import "./index.css"

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
