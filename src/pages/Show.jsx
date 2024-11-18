import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as tvMaze from '../api/tvmaze';

const Show = () => {
   const { showId } = useParams();

   const [showData, setShowData] = useState(null);
   const [fetchError, setFetchError] = useState(null);

   useEffect(() => {
      async function fetchData() {
         try {
            // Clear any previous errors
            setFetchError(null);

            const showData = await tvMaze.getShowById(showId);
            console.log('Got some show data', showData);
            setShowData(showData);
         }
         catch (error) {
            setShowData(null);
            setFetchError(error);
         }
      }
      fetchData();
   }, [showId]);

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
