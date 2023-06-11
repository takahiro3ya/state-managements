export const pageKeyList = [
  "reactHooks",
  "zustand",
  "recoil",
  "swr",
  "reactRedux",
  "reactReduxDefaultSample",
  "reduxToolkit",
] as const

type PageItem = {
  [key in (typeof pageKeyList)[number]]: { path: string; title: string }
}

export const pageItem: PageItem = {
  reactHooks: { path: "/", title: "React Hooks" },
  zustand: { path: "/zustand", title: "Zustand" },
  recoil: { path: "/recoil", title: "Recoil" },
  swr: { path: "/swr", title: "SWR" },
  reactRedux: { path: "/react-redux", title: "React Redux" },
  reactReduxDefaultSample: {
    path: "/react-redux/default-sample",
    title: "React Redux sample",
  },
  reduxToolkit: { path: "/redux-toolkit", title: "Redux Toolkit" },
}

export const getTitleFromPath = (path: string): string | null => {
  const currentPageItem = Object.values(pageItem).find(
    (pageList) => pageList.path === path,
  )

  return currentPageItem ? currentPageItem.title : "! Non-existing page !"
}
