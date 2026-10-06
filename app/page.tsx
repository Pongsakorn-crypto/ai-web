"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  async function analyzeMessage() {
    const response = await fetch("/api/analyze", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        message: message
      })
    });

    const data = await response.json();

    setResult(data.result);
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-4xl font-bold mb-2">
          My First AI
        </h1>

        <p className="mb-6">
          พิมพ์ข้อความที่ต้องการวิเคราะห์
        </p>

        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="เช่น ระบบเข้าใช้งานไม่ได้"
          className="w-full border rounded-lg p-3 text-black"
        />

        <button
          onClick={analyzeMessage}
          className="mt-4 px-5 py-3 bg-white text-black rounded-lg"
        >
          Analyze
        </button>

        {result && (
          <div className="mt-6 text-2xl">
            Result: <strong>{result}</strong>
          </div>
        )}
      </div>
    </main>
  );
}
