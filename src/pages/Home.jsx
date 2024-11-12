import { useState } from "react";

const Home = () => {
    
    const [searchString, setSearchString] = useState("");
    
    const onSearchInputChange = (event) => {
        setSearchString(event.target.value);
    }

    const onSearch = async (event) => {
        // Prevent the default behavior for this event, since this 
        // is a React app and not a normal web form
        event.preventDefault();

        // https://api.tvmaze.com/search/shows?q=dogs
        const requestUrl = `https://api.tvmaze.com/search/shows?q=${searchString}`;

        const response = await fetch(requestUrl);
        const body = await response.json();
        console.log(body);
        
    }

    return <div>
        <form onSubmit={onSearch}>
            <input type="text" value={searchString} onChange={onSearchInputChange} />
            <button type="submit">Search</button>
        </form>
    </div>
};

export default Home;