import { useLocation } from "react-router-dom"

import { Box, A } from "@/components"
import { pageItem } from "@/constants"

import styles from "./Footer.module.scss"

type Link = { href: string; title: string; target?: string }

const commonList: Link[] = [
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


  // --------------------
  // React Redux
  // --------------------
  // --------------------
  // --------------------
  // --------------------
  // --------------------
  // --------------------
  // Zustand
  // {
  //   href: "",
  //   title: "",
  //   target: pageItem.●●●
  // },
]

const zustandList: Link[] = [
  {
    href: "https://devlog.neton.co.jp/develop/javascript/introduction-to-zustand/",
    title: "React向け 状態管理ライブラリ「Zustand」の紹介",
    target: pageItem.zustand.path,
  },
]

export const Footer = () => {
  const location = useLocation()
  const pageList = Object.values(pageItem)

  console.log(location.pathname)
  return (
    <footer className={styles.footer}>
      <Box
        className={styles.hr}
        p={{ size: "md", dir: "top" }}
        flex={{ isColumn: true, gap: "xxs" }}
      >
        {commonList.map((link) => (
          <A key={link.title} href={link.href}>
            {link.title}
          </A>
        ))}
      </Box>
    </footer>
  )
}
