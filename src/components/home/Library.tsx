"use client";
import { useEffect, useState } from "react";
import { getWorkouts } from "@/lib/api";
import type { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [sort, setSort] = useState("duration");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getWorkouts()
      .then(setWorkouts)
      .catch(() => setWorkouts([]))
      .finally(() => setLoading(false));
  }, []);
  const ordered = [...workouts].sort(
    (a, b) =>
      Number(a[sort as keyof Workout]) - Number(b[sort as keyof Workout]),
  );
  return (
    <section className="section" id="library">
      <div className="section-head">
        <div>
          <span className="section-kicker">The collection</span>
          <h2>The library</h2>
          <p className="section-subtitle">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <SortDropdown value={sort} onChange={setSort} />
      </div>
      {loading ? (
        <div className="loading">Loading workouts…</div>
      ) : (
        <div className="card-grid">
          {ordered.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
}
