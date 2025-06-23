import React from "react";
import MyTimer from "@/components/MyTimer";

export default function Home() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
