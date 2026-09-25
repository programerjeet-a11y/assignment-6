export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">Workout library</span>
        <h1>Train with intent. Log every set.</h1>
        <p>
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <a className="button lime" href="#library">
          Browse workouts <span aria-hidden="true">→</span>
        </a>
      </div>
      <div
        className="hero-art"
        role="img"
        aria-label="Athlete training with weights"
      />
    </section>
  );
}
