import styled from "styled-components";

export default function AppTitle(props) {
   // Destructure title and subtitle from the props object, with some default
   // values in case they aren't provided in the component params.
   const {
      title = 'Box Office',
      subtitle = 'Are you looking for a movie or an actor?',
   } = props;

   return (
      <TitleWrapper>
         <h1>{title}</h1>
         <p>{subtitle}</p>
      </TitleWrapper>
   );
}

// Styling components *********************************************************

const TitleWrapper = styled.div`
   text-align: center;
   margin: 0 0 40px;
   h1 {
      color: ${({ theme }) => theme.mainColors.blue};
      letter-spacing: 10px;
      text-transform: uppercase;
      margin: 0 0 10px;
   }
   p {
      color: ${({ theme }) => theme.mainColors.dark};
      margin: 0;
   }
`;