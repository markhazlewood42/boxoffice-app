import ActorsCard from "./ActorsCard";

const ActorsGrid = ({ actors }) => {
    return <div> {
        actors.map((item) => (
            <ActorsCard key={item.person.id}
                name={item.person.name}
                image={item.person.image ? item.person.image.medium : '/not-found-image.png'}
                country={item.person.country ? item.person.country.name : null}
                birthday={item.person.birthday}
                deathday={item.person.deathday}
                gender={item.person.gender}
            />
        ))
    }
</div>;
};

export default ActorsGrid;