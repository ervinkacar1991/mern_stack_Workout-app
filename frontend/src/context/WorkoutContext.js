import { useReducer } from "react";
import { createContext } from "react";

export const workoutContext = createContext();

const workoutsReducer = () => {};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workoust: null,
  });

  dispatch({ type: "CREATE_WORKOUT" });

  return <workoutContext.Provider>{children}</workoutContext.Provider>;
};
