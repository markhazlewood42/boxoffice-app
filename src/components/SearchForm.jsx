import { useState } from 'react';
import { useSearchString } from '../lib/useSearchString';
import CustomRadio from './CustomRadio';
import styled from 'styled-components';

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
         <SearchInput
            type="text"
            placeholder='Search for something'
            value={searchString}
            onChange={(event) => setSearchString(event.target.value)}
         />

         <RadiosWrapper>
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
         </RadiosWrapper>

         <SearchButtonWrapper>
            <button type="submit">Search</button>
         </SearchButtonWrapper>
      </form>
   );
};

export default SearchForm;

// Styling components *********************************************************

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
      filter: drop-shadow(0 2px 0.1rem ${({ theme }) => theme.mainColors.dark})
    }
  }
`;