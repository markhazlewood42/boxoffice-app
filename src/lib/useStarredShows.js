import { useReducerWithLocalStorage } from './customHooks';

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
         return currentStarredShows.filter((showId) => showId !== action.id);
      default:
         return currentStarredShows;
   }
};

// Convenience wrapper for any component to get or set the current list of
// starred shows from local storage.
export const useStarredShows = () => {
   return useReducerWithLocalStorage(starredShowsReducer, [], 'starredShows');
};
