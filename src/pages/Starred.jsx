import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import * as tvMaze from '../api/tvmaze.js';
import ShowsGrid from '../components/shows/ShowsGrid.jsx';
import { TextCenter } from '../components/common/TextCenter.jsx';

const Starred = () => {
   const [starredShowIds] = useStarredShows();
 
   // Use query lib to fetch show data
   const { data: starredShows, error: queryError } = useQuery({
      // Rerun whenever searchQuery changes
      queryKey: ['starred', starredShowIds],

      // Query depends on value of searchQuery.searchOption
      queryFn: async () => {
         // Want to make all individual show fetch calls at the same time,
         // rather than one after another in a loop.
         const results = tvMaze.getMultipleShowsById(starredShowIds)
                              .then((result) => {
                                 return result.map(show => ({ show }));
                              });

         return results;
      },
      refetchOnWindowFocus: false
   });

   if (starredShows?.length > 0) {
      return <ShowsGrid shows={starredShows} />
   }
   else if (starredShows?.length === 0 ) {
      return <TextCenter>No shows were starred</TextCenter>;  
   }
   else if (queryError) {
      return <TextCenter>Error getting starred show data: {queryError.message}</TextCenter>
   }

   return <TextCenter>Loading ...</TextCenter>
};

export default Starred;