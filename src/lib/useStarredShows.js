import { useReducerWithLS } from "./customHooks";
 
 /*********************************************** */ 
 // Set up a reducer for handling starring and unstarring shows.
 // Starring dispatch actions:
 // { type: 'STAR', id: showId }
 // { type: 'UNSTAR', id: showId }
 
 // Handles updating starredShows array
 const starredShowsReducer = (currentStarredShows, action) => {
    switch (action.type) {
       case 'STAR':
          return currentStarredShows.concat(action.id);
       case 'UNSTAR':
          return currentStarredShows.filter((showId) => showId !== action.id );
       default:
          return currentStarredShows;
    }
 };

 export const useStarredShows = () => {
    return useReducerWithLS(starredShowsReducer, [], 'starredShows');
 }