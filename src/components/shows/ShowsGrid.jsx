import ShowCard from "./ShowCard";

const ShowsGrid = ({ shows }) => {
    return <div> {
            shows.map((item) => (
                <ShowCard key={item.show.id} 
                    id={item.show.id}
                    name={item.show.name} 
                    image={(item.show.image) ? item.show.image.medium : '/not-found-image.png'}
                    summary={item.show.summary}
                />
            ))
        }
    </div>;
};

export default ShowsGrid;