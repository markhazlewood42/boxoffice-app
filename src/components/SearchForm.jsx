import { useState } from 'react';
import { useSearchString } from '../lib/useSearchString';
import CustomRadio from './CustomRadio';

const SearchForm = ({ searchHandler }) => {
   const [searchString, setSearchString] = useSearchString();
   const [searchOption, setSearchOption] = useState('shows');

   const onRadioChange = (event) => {
      setSearchOption(event.target.value);
   };

   const onFormSubmit = (event) => {
      event.preventDefault();

      const options = {
         searchString: searchString,
         searchOption: searchOption,
      };

      searchHandler(options);
   };

   return (
      <form onSubmit={onFormSubmit}>
         <input
            type="text"
            value={searchString}
            onChange={(event) => setSearchString(event.target.value)}
         />

         <CustomRadio
            label="Shows"
            name="search-option"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
         />

         <CustomRadio
            label="People"
            name="search-option"
            value="people"
            checked={searchOption === 'people'}
            onChange={onRadioChange}
         />

         <button type="submit">Search</button>
      </form>
   );
};

export default SearchForm;
