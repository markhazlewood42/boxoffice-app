import { useParams } from 'react-router-dom';
import * as tvMaze from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

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
            <div>Got show data</div>
            <div>{showData.name}</div>
         </div>
      );
   }

   return <div>Data is loading...</div>;
};

export default Show;
