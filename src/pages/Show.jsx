import { useParams } from 'react-router-dom';
import * as tvMaze from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import ShowDetails from '../components/shows/ShowDetails';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

const Show = () => {
   const { showId } = useParams();

   // Use query lib to fetch show data
   const {data: showData, error: fetchError } = useQuery({
      queryKey: ['show', showId],
      queryFn: () => tvMaze.getShowById(showId)
   });

   // Render page depending on show data or error states
   if (fetchError) {
      return (
         <div>
            <div>Error fetching show data</div>
            <div>{fetchError.message}</div>
         </div>
      );
   }
   else if (showData) {
      return (
         <div>
            <ShowMainData 
               image={showData.image}
               name={showData.name} 
               rating={showData.rating} 
               summary={showData.summary}
               genres={showData.genres}
            />
            
            <div>
               <h2>Details</h2>
               <ShowDetails 
                  status={showData.status}
                  premiered={showData.premiered}
                  network={showData.network}
               />
            </div>

            <div>
               <h2>Seasons</h2>
               <Seasons 
                  seasons={showData._embedded.seasons}
               />
            </div>

            <div>
               <h2>Cast</h2>
               <Cast 
                  cast={showData._embedded.cast}
               />
            </div>
         </div>
      );
   }

   return <div>Data is loading...</div>;
};

export default Show;
