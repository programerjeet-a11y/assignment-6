import type { Workout } from "@/types/workout";

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";

function read(key: string): Workout[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

export const getPlan = () => read(PLAN_KEY);
export const getSaved = () => read(SAVED_KEY);
export const savePlan = (items: Workout[]) =>
  localStorage.setItem(PLAN_KEY, JSON.stringify(items));
export const saveSaved = (items: Workout[]) =>
  localStorage.setItem(SAVED_KEY, JSON.stringify(items));
