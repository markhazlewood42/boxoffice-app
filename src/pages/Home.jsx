import { useState } from "react";
import * as tvMaze from '../api/tvmaze.js';

const Home = () => {
    
    // Set up some state vars
    const [searchString, setSearchString] = useState("");
    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);

    // Handle search form submit
    const onSearchFormSubmit = async (event) => {
        // Prevent the default behavior for this event, since this 
        // is a React app and not a normal web form
        event.preventDefault();

        try {
            // Clear any previous error states
            setApiDataError(null);
            
            // Search with the current searchString value from input
            const result = await tvMaze.searchForShows(searchString);
            setApiData(result);
        }
        catch (error) {
            setApiDataError(error);
        }
    };

    // Render search results if they exist, or a search error, or nothing
    const renderApiData = () => {
        if (apiDataError) {
           return <div>Error occurred: {apiDataError.message}</div> 
        }
        else if (apiData) {
            return apiData.map((data) => 
                    <div key={data.show.id}>
                        {data.show.name}
                    </div>);
        }
        return null;
    };

    // Main component render
    return <div>
        <form onSubmit={onSearchFormSubmit}>
            <input type="text" value={searchString} 
                onChange={(event) => setSearchString(event.target.value)} />
            <button type="submit">Search</button>
        </form>

        <div>
            {renderApiData()}
        </div>
    </div>
};

export default Home;