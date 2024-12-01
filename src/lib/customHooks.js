import { useEffect, useReducer } from 'react';

// Custom useReducer hook that stores state in local storage instead of
// just at the component.
export const useReducerWithLocalStorage = (changeHandler, initialState, localStorageKey) => {
   // Wrap useReducer with the third initializer arg.
   // This arg is a function that determines the actual initial state.
   // Here, we'll check if local storage already contains something at
   // the given key, and if it does return that instead of the given
   // initial state.
   const [state, dispatch] = useReducer(changeHandler, initialState, (givenInitialState) => {
      let returnState = givenInitialState;
      const localStorageValue = localStorage.getItem(localStorageKey);

      // value will be non-null if local storage already contains localStorageKey
      if (localStorageValue) {
         returnState = JSON.parse(localStorageValue);
      }

      return returnState;
   });

   useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(state));
   }, [state, localStorageKey]);

   return [state, dispatch];
};
