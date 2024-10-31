import ParentPanel from "@/components/ParentPanel";
import { classes } from "@/utils/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={classes(
        "bg-zinc-800 font-[family-name:var(--font-geist-mono)] h-full",
        "items-center justify-center"
      )}
    >
      <ParentPanel />

      <div className="text-2xl text-red-400">
        <h1>Home</h1>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
