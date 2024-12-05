import styled from "styled-components";

const ShowDetails = (props) => {
   const { status, premiered, network } = props;

   return (
      <DetailsWrapper>
         <p>Status: {status}</p>

         <p>
            Premiered on {premiered} {!!network && `on ${network.name}`}
         </p>
      </DetailsWrapper>
   );
};

export default ShowDetails;


// Styling components *********************************************************

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;