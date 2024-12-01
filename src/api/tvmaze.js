const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async (queryString) => {
   const response = await fetch(`${BASE_URL}${queryString}`);
   return await response.json();
};

export const searchForShows = (searchString) => {
   return apiGet(`/search/shows?q=${searchString}`);
};

export const searchForPeople = (searchString) => {
   return apiGet(`/search/people?q=${searchString}`);
};

export const getShowById = (showId) => {
   return apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);
};

export const getMultipleShowsById = async (idArray) => {
   // Get an array of promises by calling getShowById for each 
   // show ID in the starred array.
   const promises = idArray.map((showId) => {
      return apiGet(`/shows/${showId}`);
   });

   // Resolves an array of promises in parallel
   // Returns an array with results in the same order as the promise array
   return Promise.all(promises);
};