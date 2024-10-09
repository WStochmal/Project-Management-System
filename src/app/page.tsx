"use client";

import Button from "@/ui/Button/Button";

export default function Home() {
  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <div>
      <Button onClick={handleClick} disabled={false}>
        Button
      </Button>
    </div>
  );
}
