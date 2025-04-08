import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "每日啟示卡 | Daily Revelation Card",
  description: "抽取今日專屬於你的靈魂訊息",
  openGraph: {
    title: "每日啟示卡 | Daily Revelation Card",
    description: "抽取今日專屬於你的靈魂訊息",
    url: "https://daily-revelation-card.vercel.app",
    siteName: "每日啟示卡",
    locale: "zh_TW",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
