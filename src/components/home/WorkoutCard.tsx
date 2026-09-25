import Link from "next/link";
import type { Workout } from "@/types/workout";
export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link className="workout-card" href={`/workout/${workout.id}`}>
      <img className="workout-image" src={workout.image} alt={workout.name} />
      <div className="card-body">
        <div className="tags">
          {workout.muscleGroups.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className="card-title">{workout.name}</h3>
        <div className="equipment">{workout.equipment}</div>
        <div className="stats">
          <span>◷ {workout.duration} min</span>
          <span>● {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}
