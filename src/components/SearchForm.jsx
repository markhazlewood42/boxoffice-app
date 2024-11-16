import { useState } from 'react';

const SearchForm = ({ searchHandler }) => {
   const [searchString, setSearchString] = useState('');
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
   );
};

export default SearchForm;
