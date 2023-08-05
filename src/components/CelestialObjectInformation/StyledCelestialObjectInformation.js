import styled from "styled-components";
const colors = {
  blue: ['#1E84FD', '#0238C5'],
  red:  ['#303c2c', '#495c42',]
}
export const StyledInformationContainer = styled.div`
  background-color: #303c2c;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-radius: 1em;

  > *:nth-child(odd):not(:first-child):not(:last-child) {
    margin-block-end: 1em;
  }

  b {
    font-weight: 600;
  }

  span {
    font-weight: 300;
  }

  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;

    > *:nth-child(odd):not(:first-child):not(:last-child) {
      margin: 0;
    }

    span {
      text-align: right;
    }
  }

  @media (min-width: 64em) {
    padding: 2em;
  }
`;

export const StyledHeading = styled.h3`
  margin-block: 0 1em;

  @media (min-width: 48em) {
    grid-column: 1 / 3;
  }
`;
export const StyledHeading2 = styled.h1`
  margin-block: 0 1em;
  
   `; 
    export const Divv = styled.div`
justify-items:center;
justify-content: center;
align-items: center;
margin-left:150px
    `;

  export const Teste= styled.a`
  display: inline-block;
  background-color: ${props => props.$isRed ? colors.red[0] : colors.blue[0]};
  background: linear-gradient(
    90deg,
    ${props => props.$isRed ? colors.red[0] : colors.blue[0]} 0%,
    ${props => props.$isRed ? colors.red[1] : colors.blue[1]} 100%
  );
  color: white;
  font-weight: 500;
  text-decoration: none;
  padding: .5em 1em;
  border-radius: .5em;
  transition: filter .25s ease-in-out;
  text-align: center;

  &:hover {
    filter: brightness(110%);
  }
`;