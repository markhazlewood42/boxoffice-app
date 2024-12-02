import { useEffect, useReducer, useState } from 'react';

// Custom useReducer hook that stores state in local storage.
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

// Custom useState that stores the value in session storage.
export const useStateWithSessionStorage = (initialState, sessionKey) => {

   // Wrap the standard useState
   const [state, setState] = useState(() => {
      // Set iniital state to current session value if it exists
      let returnState = initialState;
      const sessionValue = sessionStorage.getItem(sessionKey);
      if (sessionValue) {
         returnState = JSON.parse(sessionValue);
      }
      return returnState;
   });

   // Handle key changes ... ? Not sure why this is needed.
   useEffect(() => {
      sessionStorage.setItem(sessionKey, JSON.stringify(state));
   }, [state, sessionKey]);

   // Return state var with custom mutator function
   return [state, setState];
};
