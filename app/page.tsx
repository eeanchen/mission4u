"use client"

import { useState } from "react"
import { Sparkles } from 'lucide-react'

// Sample card data
const cards = [
  {
    title: "內在平靜",
    description: "今天是尋找內心平靜的一天，放下煩惱，專注於當下。",
  },
  {
    title: "新的開始",
    description: "機會就在眼前，勇敢踏出第一步，迎接新的挑戰。",
  },
  {
    title: "智慧選擇",
    description: "面對選擇時，傾聽你的直覺，它會引導你走向正確的道路。",
  },
  {
    title: "感恩之心",
    description: "花時間感謝生活中的美好，感恩會帶來更多祝福。",
  },
  {
    title: "堅持不懈",
    description: "成功需要耐心和毅力，堅持下去，你會看到努力的成果。",
  },
]

export default function Home() {
  const [currentCard, setCurrentCard] = useState<(typeof cards)[0] | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)

  const drawCard = () => {
    setIsDrawing(true)
    // Simulate card drawing with a delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * cards.length)
      setCurrentCard(cards[randomIndex])
      setIsDrawing(false)
    }, 1000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-[#141c26] text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-purple-300">今日屬於你的啟示訊息</h1>
        <p className="text-gray-300">每一天都有專屬於你的靈魂訊息，抽一張卡，聆聽內在的指引</p>

        <button
          onClick={drawCard}
          disabled={isDrawing}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-purple-700 text-white hover:bg-purple-600 h-10 px-4 py-2 w-auto"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          抽取今日啟示卡
        </button>

        {currentCard && (
          <div className="mt-8 animate-fade-in">
            <div className="rounded-lg border bg-gradient-to-b from-purple-900 to-indigo-900 border-purple-500 text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-center text-xl text-purple-200 font-semibold leading-none tracking-tight">
                  {currentCard.title}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-200">{currentCard.description}</p>
              </div>
              <div className="flex items-center justify-center p-6 pt-0">
                <p className="text-sm text-purple-300">願這個訊息能夠指引你的一天</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
