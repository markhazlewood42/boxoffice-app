import { useState } from 'react';
import * as tvMaze from '../api/tvmaze.js';

const Home = () => {
   // Set up some state vars
   const [searchString, setSearchString] = useState('');
   const [apiData, setApiData] = useState(null);
   const [apiDataError, setApiDataError] = useState(null);
   const [searchOption, setSearchOption] = useState('shows');

   // Handle search form submit
   const onSearchFormSubmit = async (event) => {
      // Prevent the default behavior for this event, since this
      // is a React app and not a normal web form
      event.preventDefault();

      try {
         // Clear any previous error states
         setApiDataError(null);

         // Search TV API depending on selected search filter
         if (searchOption === 'shows') {
            const result = await tvMaze.searchForShows(searchString);
            setApiData(result);
         } else if (searchOption === 'people') {
            const result = await tvMaze.searchForPeople(searchString);
            setApiData(result);
         }
      } catch (error) {
         setApiDataError(error);
      }
   };

   const onRadioChange = (event) => {
      setSearchOption(event.target.value);
   };

   // Render search results if they exist, or a search error, or nothing
   const renderApiData = () => {
      if (apiDataError) {
         return <div>Error occurred: {apiDataError.message}</div>;
      } else if (apiData) {
         if (apiData[0].show) {
            return apiData.map((data) => (
               <div key={data.show.id}>{data.show.name}</div>
            ));
         } else if (apiData[0].person) {
            return apiData.map((data) => (
               <div key={data.person.id}>{data.person.name}</div>
            ));
         }
      }
      return null;
   };

   // Main component render
   return (
      <div>
         <form onSubmit={onSearchFormSubmit}>
            <input
               type="text"
               value={searchString}
               onChange={(event) => setSearchString(event.target.value)}
            />

            <label>
               Shows
               <input
                  type="radio"
                  name="search-option"
                  value="shows"
                  checked={searchOption === 'shows'}
                  onChange={onRadioChange}
               />
            </label>

            <label>
               People
               <input
                  type="radio"
                  name="search-option"
                  value="people"
                  checked={searchOption === 'people'}
                  onChange={onRadioChange}
               />
            </label>

            <button type="submit">Search</button>
         </form>

         <div>{renderApiData()}</div>
      </div>
   );
};

export default Home;
