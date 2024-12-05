import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as tvMaze from '../api/tvmaze.js';
import SearchForm from '../components/SearchForm.jsx';
import ShowsGrid from '../components/shows/ShowsGrid.jsx';
import ActorsGrid from '../components/actors/ActorsGrid.jsx';
import { TextCenter } from '../components/common/TextCenter.jsx';

const Home = () => {
   const [searchQuery, setSearchQuery] = useState(null);

   // Use query lib to fetch show data
   const { data: searchData, error: searchError } = useQuery({
      // Rerun whenever searchQuery changes
      queryKey: ['search', searchQuery],

      // Query depends on value of searchQuery.searchOption
      queryFn: () => {
         if (searchQuery.searchOption === 'shows') {
            return tvMaze.searchForShows(searchQuery.searchString);
         }
         else if (searchQuery.searchOption === 'people') {
            return tvMaze.searchForPeople(searchQuery.searchString);
         }
         return null;
      },

      // Disabled as long as searchQuery is null
      enabled: !!searchQuery,
   });

   // Handle search form submit
   const onSearchFormSubmit = async ({ searchString, searchOption }) => {
      setSearchQuery({ searchString, searchOption });
   };

   // Render search results if they exist, or a search error, or nothing
   const renderSearchResults = () => {
      if (searchError) {
         return <TextCenter>Error occurred: {searchError.message}</TextCenter>;
      }
      else if (searchData?.length === 0) {
         return <div>No results</div>;
      }
      else if (searchData) {
         if (searchData[0].show) {
            return <ShowsGrid shows={searchData} />;
         }
         else if (searchData[0].person) {
            return <ActorsGrid actors={searchData} />;
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
