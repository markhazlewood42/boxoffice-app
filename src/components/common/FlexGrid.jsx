import styled from 'styled-components';

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  animation: fadeIn 0.2s ease-in forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1.0;
    }
  }
`;