import { useEffect, useReducer } from "react";

// Custom useReducer hook that stores state in local storage instead of 
// just at the component.
export const useReducerWithLS = (dispatchHandler, initialState, localStorageKey) => {
    const [state, dispatch] = 
       useReducer(dispatchHandler, initialState, (initial) => {
          const value = localStorage.getItem(localStorageKey);
 
          return value ? JSON.parse(value) : initial
       });
 
    useEffect(() => {
       localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey]);
 
    return [state, dispatch];
 };