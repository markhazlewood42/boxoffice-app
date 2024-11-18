import { useState } from 'react';
import * as tvMaze from '../api/tvmaze.js';
import SearchForm from '../components/SearchForm.jsx';
import ShowsGrid from '../components/shows/ShowsGrid.jsx';
import ActorsGrid from '../components/actors/ActorsGrid.jsx';

const Home = () => {
   // Set up some state vars
   const [apiData, setApiData] = useState(null);
   const [apiDataError, setApiDataError] = useState(null);

   // Handle search form submit
   const onSearchFormSubmit = async ({ searchString, searchOption }) => {
      try {
         // Clear any previous error states
         setApiDataError(null);

         // Search TV API depending on selected search filter
         let result = null;
         if (searchOption === 'shows') {
            result = await tvMaze.searchForShows(searchString);
         }
         else if (searchOption === 'people') {
            result = await tvMaze.searchForPeople(searchString);
         }
         setApiData(result);
      }
      catch (error) {
         setApiDataError(error);
      }
   };

   // Render search results if they exist, or a search error, or nothing
   const renderSearchResults = () => {
      if (apiDataError) {
         return <div>Error occurred: {apiDataError.message}</div>;
      }
      else if (apiData?.length === 0) {
         return <div>No results</div>;
      }
      else if (apiData) {
         if (apiData[0].show) {
            return <ShowsGrid shows={apiData} />;
         }
         else if (apiData[0].person) {
            return <ActorsGrid actors={apiData} />;
         }
      }
      return null;
   };

   // Main component render
   return (
      <div>
         <SearchForm searchHandler={onSearchFormSubmit} />

         <div>{renderSearchResults()}</div>
      </div>
   );
};

export default Home;
