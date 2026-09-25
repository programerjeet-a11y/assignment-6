"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();
  return (
    <header className="site-nav">
      <Link className="brand" href="/">
        <img src="/images/logo.png" alt="" /> FITLOG
      </Link>
      <nav className="nav-links">
        <Link
          className={
            pathname === "/workout" || pathname === "/" ? "active" : ""
          }
          href="/"
        >
          Workout
        </Link>
        <Link
          className={pathname === "/my-plan" ? "active" : ""}
          href="/my-plan"
        >
          My Plan
        </Link>
      </nav>
      <div className="badges">
        <Link className="badge plan" href="/my-plan">
          Plan {plan.length}
        </Link>
        <Link className="badge" href="/my-plan">
          Saved {saved.length}
        </Link>
      </div>
    </header>
  );
}
