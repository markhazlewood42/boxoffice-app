import { Link } from "react-router-dom";

const ShowCard = ({ id, name, image, summary }) => {
    
    // Show the first ten words of the summary, stripping out HTML
    const strippedSummary = summary ? 
        summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') :
        'No summary';

    return <div>
        <div>
            <img src={image} alt={name} />
        </div>

        <h1>{name}</h1>
        <p>{strippedSummary}</p>

        <div>
            <Link to={`/show/${id}`}>Read more</Link>
            <button type="button">Star me</button>
        </div>
    </div>
};

export default ShowCard;