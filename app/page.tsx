"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [cardContent, setCardContent] = useState("啟示牌卡");
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    startRotatingCards();
    return () => clearInterval(intervalId);
  }, []);

  function startRotatingCards() {
    const id = setInterval(() => {
      setCardContent("隨機啟示" + Math.floor(Math.random() * 100));
    }, 100);
    setIntervalId(id);
  }

  function stopRotatingCards() {
    clearInterval(intervalId);

    // Fetch the final card content from the backend
    fetch('/api/getCard')
      .then(response => response.json())
      .then(data => {
        setCardContent(data.cardContent);
      });
  }

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0"
    }}>
      <div id="card" style={{
        width: "200px",
        height: "300px",
        border: "1px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        backgroundColor: "#fff",
        marginBottom: "20px"
      }}>
        {cardContent}
      </div>
      <button
        id="stopButton"
        onClick={stopRotatingCards}
        style={{
          padding: "10px 20px",
          fontSize: "1rem"
        }}
      >
        停止
      </button>
    </main>
  );
}
