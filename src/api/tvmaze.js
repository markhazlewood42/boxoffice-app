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
   return apiGet(`/shows/${showId}`);
};
