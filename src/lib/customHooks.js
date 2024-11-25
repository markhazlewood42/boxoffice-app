import { useEffect, useReducer } from 'react';

// Custom useReducer hook that stores state in local storage instead of
// just at the component.
export const useReducerWithLS = (changeHandler, initialState, localStorageKey) => {
   // Wrap useReducer with the third initializer arg.
   // This arg is a function that determines the actual initial state.
   // Here, we'll check if local storage already contains something at
   // the given key, and if it does return that instead of the given
   // initial state.
   const [state, dispatch] = useReducer(changeHandler, initialState, (initial) => {
      // value will be non-null if local storage already contains localStorageKey
      const value = localStorage.getItem(localStorageKey);

      return value ? JSON.parse(value) : initial;
   });

   useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(state));
   }, [state, localStorageKey]);

   return [state, dispatch];
};
