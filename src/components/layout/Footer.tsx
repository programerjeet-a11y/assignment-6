import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <Link className="brand" href="/">
        <img src="/images/logo.png" alt="" /> FITLOG
      </Link>
      <span>© 2026 FitLog — Workout Library. Train hard, log honest.</span>
    </footer>
  );
}
