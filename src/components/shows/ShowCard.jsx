import styled from "styled-components";
import { SearchCard, SearchImgWrapper } from "../common/SearchCard"
import { StarIcon } from "../common/StarIcon"
import { useRef } from "react";

const ShowCard = ({ id, name, image, summary, isStarred, onStarMeClick }) => {
   // Show the first ten words of the summary, stripping out HTML
   const strippedSummary = summary
      ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + "..."
      : 'No summary';

   // useRef is used to reference a React element in the DOM. 
   // Equivalent to doc.getElementById.
   const starBtnRef = useRef();

   const handleStarClick = () => {
      onStarMeClick(id);

      // Remove star button animation class if it's already starred when
      // this component mounts (meaning the animation already happened)
      const starBtnElement = starBtnRef.current
      if (starBtnElement) {
         if (isStarred) {
            starBtnElement.classList.remove('animate');
         }
         else {
            starBtnElement.classList.add('animate');
         }
      }
   };

   return (
      <SearchCard>
         <ShowLink>
            <a href={`/show/${id}`} target="_blank" rel="noreferrer">
               <SearchImgWrapper>
                  <img src={image} alt={name} />
               </SearchImgWrapper>
            </a>
         </ShowLink>

         <h1>{name}</h1>
         <p>{strippedSummary}</p>

         <ActionSection>
            {/* <a href={`/show/${id}`} target="_blank" rel="noreferrer">
               Read more
            </a> */}
            <StarBtn ref={starBtnRef} type="button" onClick={handleStarClick} >
               <StarIcon active={isStarred.toString()} />
            </StarBtn>
         </ActionSection>
      </SearchCard>
   );
};

export default ShowCard;

// Styling components *********************************************************

const ShowLink = styled.div`
   cursor: pointer;
   &:hover {
      animation: showPop 0.2s ease-out forwards;
      @keyframes showPop {
         0% {
            transform: scale(1);
         }
         100% {
            transform: scale(1.025);
         }
      }
   }
`;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
   ${StarIcon} {
      animation: starPop 0.3s ease-in-out forwards;
      @keyframes starPop {
         0% {
            transform: scale(1);
         }
         50% {
            transform: scale(1.5);
         }
         100% {
            transform: scale(1);
         }
      }
   }
  }
`;