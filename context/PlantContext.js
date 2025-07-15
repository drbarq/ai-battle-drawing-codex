import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const PlantContext = createContext();

function plantReducer(state, action) {
  switch (action.type) {
    case "init":
      return action.payload;
    case "add":
      return [...state, action.payload];
    case "water":
      return state.map((p) =>
        p.id === action.payload ? { ...p, lastWatered: Date.now() } : p
      );
    default:
      return state;
  }
}

export function PlantProvider({ children }) {
  const [plants, dispatch] = useReducer(plantReducer, []);

  useEffect(() => {
    const stored = localStorage.getItem("plants");
    if (stored) {
      dispatch({ type: "init", payload: JSON.parse(stored) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  function addPlant(name, interval) {
    const newPlant = {
      id: uuidv4(),
      name,
      interval: parseInt(interval, 10),
      lastWatered: null,
    };
    dispatch({ type: "add", payload: newPlant });
    return newPlant;
  }

  function waterPlant(id) {
    dispatch({ type: "water", payload: id });
  }

  return (
    <PlantContext.Provider value={{ plants, addPlant, waterPlant }}>
      {children}
    </PlantContext.Provider>
  );
}

export function usePlants() {
  return useContext(PlantContext);
}
