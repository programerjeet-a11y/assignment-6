"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Workout } from "@/types/workout";
import { getPlan, getSaved, savePlan, saveSaved } from "@/lib/storage";

type FitLogValue = {
  plan: Workout[];
  saved: Workout[];
  toast: string;
  addToPlan: (w: Workout) => void;
  saveForLater: (w: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeSaved: (id: number) => void;
  markDone: (w: Workout) => void;
};
const FitLogContext = createContext<FitLogValue | null>(null);

export function FitLogProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>(getPlan);
  const [saved, setSaved] = useState<Workout[]>(getSaved);
  const [toast, setToast] = useState("");
  useEffect(() => {
    savePlan(plan);
  }, [plan]);
  useEffect(() => {
    saveSaved(saved);
  }, [saved]);
  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };
  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id))
      return notify("Already in today's plan");
    if (plan.length >= 5) return notify("Today's plan is full");
    setPlan((items) => [...items, workout]);
    notify("Added to today's plan");
  };
  const saveForLater = (workout: Workout) => {
    if (!saved.some((item) => item.id === workout.id))
      setSaved((items) => [...items, workout]);
    notify("Saved for later");
  };
  const removeFromPlan = (id: number) => {
    setPlan((items) => items.filter((item) => item.id !== id));
    notify("Removed from today's plan");
  };
  const removeSaved = (id: number) => {
    setSaved((items) => items.filter((item) => item.id !== id));
    notify("Removed from saved");
  };
  const markDone = (workout: Workout) => {
    setPlan((items) => items.filter((item) => item.id !== workout.id));
    notify(`${workout.name} marked as done`);
  };
  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        toast,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeSaved,
        markDone,
      }}
    >
      {children}
      {toast && <div className="toast">{toast}</div>}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const value = useContext(FitLogContext);
  if (!value) throw new Error("useFitLog must be used inside FitLogProvider");
  return value;
}
