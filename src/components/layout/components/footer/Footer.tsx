import { useLocation } from "react-router-dom"

import { Box, A } from "@/components"
import { pageItem } from "@/constants"

import styles from "./Footer.module.scss"

type Link = { href: string; title: string }

type CaseLink = Link & { targetPath: string }

const commonList: Link[] = [
  // --------------------
  // common
  {
    href: "https://npmtrends.com/@reduxjs/toolkit-vs-recoil-vs-redux-vs-swr-vs-zustand",
    title: "npm trends",
  },
  {
    href: "https://zenn.dev/kazukix/articles/react-state-management-libraries",
    title: "React の状態管理ライブラリ9選",
  },
  {
    href: "https://ramble.impl.co.jp/2211/",
    title: "Reactの状態管理で悩む全ての人へ【2022年】",
  },
]

const caseList: CaseLink[] = [
  // --------------------
  // React Hooks

  // --------------------
  // Zustand
  {
    href: "https://docs.pmnd.rs/zustand/",
    title: "Zustand - Documentation",
    targetPath: pageItem.zustand.path,
  },
  {
    href: "https://github.com/pmndrs/zustand",
    title: "Zustand - GitHub",
    targetPath: pageItem.zustand.path,
  },
  {
    href: "https://devlog.neton.co.jp/develop/javascript/introduction-to-zustand/",
    title: "React向け 状態管理ライブラリ「Zustand」の紹介",
    targetPath: pageItem.zustand.path,
  },
  {
    href: "https://dev.classmethod.jp/articles/zustand_middleware/",
    title: "React状態管理ライブラリ Zustandのミドルウェアを使ってみた",
    targetPath: pageItem.zustand.path,
  },

  // --------------------
  // Recoil

  // --------------------
  // TanStack Query
  {
    href: "https://tanstack.com/query/latest/docs/react/overview",
    title: "TanStack Query - Documentation",
    targetPath: pageItem.tanStackQuery.path,
  },
  {
    href: "https://reffect.co.jp/react/tanstack-query/",
    title: "TanStack Query(React Query)で作るシンプルToDoアプリでCRUD処理",
    targetPath: pageItem.tanStackQuery.path,
  },
  {
    href: "https://reffect.co.jp/react/react-use-query/",
    title: "初めてReact Queryを使う人のため設定方法と動作の理解",
    targetPath: pageItem.tanStackQuery.path,
  },

  // --------------------
  // SWR
  {
    href: "https://zenn.dev/itizawa/articles/9f71e1f636d3d2",
    title: "SWR を 状態管理 として活用しているよという話",
    targetPath: pageItem.swr.path,
  },
  {
    href: "https://zenn.dev/mast1ff/articles/5b48a87242f9f0",
    title: "SWRを使おうぜという話2022",
    targetPath: pageItem.swr.path,
  },

  // --------------------
  // React Redux

  // --------------------
  // React Redux sample

  // --------------------
  // Redux Toolkit

  // --------------------
  // {
  //   href: "",
  //   title: "",
  //   targetPath: pageItem.●●●.path
  // },
]

export const Footer = () => {
  const location = useLocation()

  return (
    <footer className={styles.footer}>
      <Box className={styles.hr} p={{ size: "md", dir: "top" }}>
        I referred to these pages.
        <Box
          m={{ dir: "top", size: "sm" }}
          flex={{ isColumn: true, gap: "xxs" }}
        >
          {commonList.map((link) => (
            <A key={link.title} href={link.href}>
              {link.title}
            </A>
          ))}
          <Box className={styles.hr_sub} m={{ dir: "y", size: "xxs" }}></Box>
          {caseList.map((link) => {
            if (link.targetPath === location.pathname) {
              return (
                <A key={link.title} href={link.href}>
                  {link.title}
                </A>
              )
            } else {
              return null
            }
          })}
        </Box>
      </Box>
    </footer>
  )
}
