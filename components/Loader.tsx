"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [gone, setGone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setGone(true), 700);
    const t2 = setTimeout(() => setRemoved(true), 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (removed) return null;
  return (
    <div className={`loader ${gone ? "gone" : ""}`}>
      <div className="loader-mark"></div>
    </div>
  );
}
