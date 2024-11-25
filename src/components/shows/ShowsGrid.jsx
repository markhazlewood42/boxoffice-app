import { useStarredShows } from '../../lib/useStarredShows';
import ShowCard from './ShowCard';

const ShowsGrid = ({ shows }) => {
   const [starredShows, dispatchStarred] = useStarredShows();

   const onStarMeClick = (showId) => {
      const isStarred = starredShows.includes(showId);
      if (isStarred) {
         dispatchStarred({ type: 'UNSTAR', id: showId })
      }
      else {
         dispatchStarred({ type: 'STAR', id: showId })
      }
   };

   return (
      <div>
         {' '}
         {shows.map((item) => (
            <ShowCard
               key={item.show.id}
               id={item.show.id}
               name={item.show.name}
               image={
                  item.show.image
                     ? item.show.image.medium
                     : '/not-found-image.png'
               }
               summary={item.show.summary}
               isStarred={starredShows.includes(item.show.id)}
               onStarMeClick={onStarMeClick}
            />
         ))}
      </div>
   );
};

export default ShowsGrid;
