import { Link, useParams } from 'react-router-dom';
import * as tvMaze from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import ShowDetails from '../components/shows/ShowDetails';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
import styled from 'styled-components';
import { TextCenter } from '../components/common/TextCenter'

const Show = () => {
   const { showId } = useParams();

   // Use query lib to fetch show data
   const { data: showData, error: fetchError } = useQuery({
      queryKey: ['show', showId],
      queryFn: () => tvMaze.getShowById(showId),
   });

   // Render page depending on show data or error states
   if (fetchError) {
      return (
         <TextCenter>
            <div>Error fetching show data</div>
            <div>{fetchError.message}</div>
         </TextCenter>
      );
   }
   else if (showData) {
      return (
         <ShowPageWrapper>
            <BackHomeWrapper>
               <Link to="/">Go back to home</Link>
            </BackHomeWrapper>

            <ShowMainData
               image={showData.image}
               name={showData.name}
               rating={showData.rating}
               summary={showData.summary}
               genres={showData.genres}
            />

            <InfoBlock>
               <h2>Details</h2>
               <ShowDetails
                  status={showData.status}
                  premiered={showData.premiered}
                  network={showData.network}
               />
            </InfoBlock>

            <InfoBlock>
               <h2>Seasons</h2>
               <Seasons seasons={showData._embedded.seasons} />
            </InfoBlock>

            <InfoBlock>
               <h2>Cast</h2>
               <Cast cast={showData._embedded.cast} />
            </InfoBlock>
         </ShowPageWrapper>
      );
   }

   return <TextCenter>Data is loading...</TextCenter>;
};

export default Show;

// Styling components *********************************************************

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;