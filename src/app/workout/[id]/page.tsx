import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";
import WorkoutDetails from "@/components/workout/WorkoutDetails";

export default async function WorkoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let workout;
  try {
    workout = await getWorkout(id);
  } catch {
    notFound();
  }
  return <WorkoutDetails workout={workout!} />;
}
