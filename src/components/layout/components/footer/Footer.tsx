import styles from "./Footer.module.scss"
import { Box, A } from "@/components"

type Link = { href: string; title: string }

const linkList: Link[] = [
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
  // {
  //   href: "",
  //   title: "",
  // },
]

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Box
        className={styles.hr}
        p={{ size: "md", dir: "top" }}
        flex={{ isColumn: true, gap: "xxs" }}
      >
        {linkList.map((link) => (
          <A key={link.title} href={link.href}>
            {link.title}
          </A>
        ))}
      </Box>
    </footer>
  )
}
