"use client";
import { useFitLog } from "@/context/FitLogContext";
import type { Workout } from "@/types/workout";
export default function WorkoutDetails({ workout }: { workout: Workout }) {
  const { addToPlan, saveForLater } = useFitLog();
  return (
    <div className="detail">
      <div className="detail-visual">
        <img src={workout.image} alt={workout.name} />
      </div>
      <article className="detail-copy">
        <div className="tags">
          {workout.muscleGroups.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h1>{workout.name}</h1>
        <p className="detail-desc">{workout.description}</p>
        <div className="specs">
          {[
            ["Equipment", workout.equipment],
            ["Difficulty", workout.difficulty],
            ["Sets", workout.sets],
            ["Reps", workout.reps],
            ["Duration", `${workout.duration} min`],
            ["Calories", `${workout.caloriesBurned} kcal`],
            ["Rating", workout.rating],
          ].map(([label, value]) => (
            <div className="spec" key={String(label)}>
              <span className="spec-label">{label}</span>
              <span className="spec-value">{value}</span>
            </div>
          ))}
        </div>
        <h3 className="section-kicker">Instructions</h3>
        <ol className="instructions">
          {workout.instructions.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="actions">
          <button className="button lime" onClick={() => addToPlan(workout)}>
            ＋ Add to today&apos;s plan
          </button>
          <button
            className="button secondary"
            onClick={() => saveForLater(workout)}
          >
            ☆ Save for later
          </button>
        </div>
      </article>
    </div>
  );
}
