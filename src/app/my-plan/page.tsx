"use client";
import Link from "next/link";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";
import type { Workout } from "@/types/workout";

function PlanCard({ workout, saved }: { workout: Workout; saved: boolean }) {
  const { removeFromPlan, removeSaved, markDone } = useFitLog();
  return (
    <article className="plan-card">
      <img src={workout.image} alt={workout.name} />
      <div>
        <h3>{workout.name}</h3>
        <div className="equipment">{workout.equipment}</div>
        <div className="stats">
          <span>◷ {workout.duration} min</span>
          <span>● {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>
      <div className="plan-actions">
        <Link className="small-button" href={`/workout/${workout.id}`}>
          View details
        </Link>
        {saved ? (
          <button
            className="small-button"
            onClick={() => removeSaved(workout.id)}
          >
            Remove
          </button>
        ) : (
          <>
            <button className="small-button" onClick={() => markDone(workout)}>
              ✓ Mark as done
            </button>
            <button
              className="small-button"
              onClick={() => removeFromPlan(workout.id)}
              aria-label={`Remove ${workout.name}`}
            >
              ×
            </button>
          </>
        )}
      </div>
    </article>
  );
}

export default function MyPlan() {
  const { plan, saved } = useFitLog();
  const [tab, setTab] = useState<"plan" | "saved">("plan");
  const list = tab === "plan" ? plan : saved;
  return (
    <div className="plan-page">
      <span className="section-kicker">Your daily log</span>
      <h1>My plan</h1>
      <p className="section-subtitle">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="metrics">
        <div className="metric">
          <span className="section-kicker">Exercises</span>
          <strong>{plan.length}</strong>
        </div>
        <div className="metric">
          <span className="section-kicker">Minutes</span>
          <strong>{plan.reduce((sum, item) => sum + item.duration, 0)}</strong>
        </div>
        <div className="metric">
          <span className="section-kicker">Calories</span>
          <strong>
            {plan.reduce((sum, item) => sum + item.caloriesBurned, 0)}
          </strong>
        </div>
      </div>
      <div className="tabs">
        <button
          className={`tab ${tab === "plan" ? "active" : ""}`}
          onClick={() => setTab("plan")}
        >
          Today&apos;s plan ({plan.length})
        </button>
        <button
          className={`tab ${tab === "saved" ? "active" : ""}`}
          onClick={() => setTab("saved")}
        >
          Saved ({saved.length})
        </button>
      </div>
      {list.length ? (
        <div className="plan-list">
          {list.map((workout) => (
            <PlanCard
              key={workout.id}
              workout={workout}
              saved={tab === "saved"}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nothing here yet</h2>
          <p>Browse the library and add a lift to get today moving.</p>
          <Link className="button lime" href="/">
            Go to workouts →
          </Link>
        </div>
      )}
    </div>
  );
}
