import { useStarredShows } from '../../lib/useStarredShows';
import ShowCard from './ShowCard';
import { FlexGrid } from "../common/FlexGrid"

const ShowsGrid = ({ shows }) => {
   const [starredShows, dispatchStarredChanged] = useStarredShows();

   const onStarMeClick = (showId) => {
      const isStarred = starredShows.includes(showId);

      // Dispatch state change to the reducer that manages starred
      // shows state.
      if (isStarred) {
         dispatchStarredChanged({ type: 'UNSTAR', id: showId });
      }
      else {
         dispatchStarredChanged({ type: 'STAR', id: showId });
      }
   };

   return (
      <FlexGrid>
         {' '}
         {shows.map((item) => (
            <ShowCard
               key={item.show.id}
               id={item.show.id}
               name={item.show.name}
               image={
                  item.show.image ? item.show.image.medium : '/not-found-image.png'
               }
               summary={item.show.summary}
               isStarred={starredShows.includes(item.show.id)}
               onStarMeClick={onStarMeClick}
            />
         ))}
      </FlexGrid>
   );
};

export default ShowsGrid;
