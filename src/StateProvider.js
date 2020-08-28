import React, { createContext, useContext, useReducer } from "react";

// Create Data Layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Use it inside a component
export const useStateValue = () => useContext(StateContext);
