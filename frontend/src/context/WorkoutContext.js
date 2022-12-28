import { createContext } from "react";

export const workoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  return <workoutContext.Provider>{children}</workoutContext.Provider>;
};
