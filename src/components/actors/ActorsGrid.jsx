import ActorsCard from './ActorsCard';
import { FlexGrid } from "../common/FlexGrid"
import NotFoundImSrc from '../../lib/not-found-image.png'

const ActorsGrid = ({ actors }) => {
   return (
      <FlexGrid>
         {' '}
         {actors.map((item) => (
            <ActorsCard
               key={item.person.id}
               name={item.person.name}
               image={
                  item.person.image
                     ? item.person.image.medium
                     : NotFoundImSrc
               }
               country={item.person.country ? item.person.country.name : null}
               birthday={item.person.birthday}
               deathday={item.person.deathday}
               gender={item.person.gender}
            />
         ))}
      </FlexGrid>
   );
};

export default ActorsGrid;
