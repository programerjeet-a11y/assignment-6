import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <span className="section-kicker">404 / Lost rep</span>
        <h1>That route missed.</h1>
        <p>The workout you are looking for does not exist.</p>
        <Link className="button lime" href="/">
          Back to the library →
        </Link>
      </div>
    </div>
  );
}
