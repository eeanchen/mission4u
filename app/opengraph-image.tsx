import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "每日啟示卡"
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "white",
          background: "linear-gradient(to bottom, #1e293b, #0f172a)",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 70, fontWeight: "bold", color: "#d8b4fe" }}>今日屬於你的啟示訊息</div>
          <div style={{ fontSize: 40, marginTop: 20, color: "#94a3b8" }}>點擊抽取今日專屬於你的靈魂卡片</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
