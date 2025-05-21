// hooks/useAICallTracker.js
import { useEffect, useState } from "react";

export default function useAICallTracker(dailyLimit = 10) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const saved = JSON.parse(localStorage.getItem("ai-call-tracker") || "{}");

    if (saved.date === today) {
      setCount(saved.count);
    } else {
      localStorage.setItem(
        "ai-call-tracker",
        JSON.stringify({ date: today, count: 0 })
      );
      setCount(0);
    }
  }, []);

  const increment = () => {
    const today = new Date().toISOString().split("T")[0];
    const newCount = count + 1;
    localStorage.setItem(
      "ai-call-tracker",
      JSON.stringify({ date: today, count: newCount })
    );
    setCount(newCount);
  };

  return {
    count,
    remaining: dailyLimit - count,
    limitReached: count >= dailyLimit,
    increment,
  };
}
