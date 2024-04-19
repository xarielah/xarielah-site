"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // Redirect to /works after 1 second
  useEffect(() => {
    router.replace("/works");
  }, []);

  return (
    <div className="font-bold text-center animate-bounce">
      <span className="animate-pulse">Loading works...</span>
    </div>
  );
}
