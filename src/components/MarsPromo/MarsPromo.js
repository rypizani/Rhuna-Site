import { colors } from "../../constants";
import Button from "../Button/Button";

import {
  StyledContentContainer,
  StyledDeimos,
  StyledHeading,
  StyledMars,
  StyledMarsAndMoonsContainer,
  StyledParagraph,
  StyledPhobos,
  StyledSection,
  Img
} from "./StyledMarsPromo";

import img from "../../images/Icone original 2.png"

const MarsPromo = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</StyledHeading>
      <StyledParagraph>Lorem Ipsum is simply dummy.</StyledParagraph>
      <Button $isRed to="/service">Produtos</Button>
    </StyledContentContainer>
    <StyledMarsAndMoonsContainer>
      <Img src={img}/>
    </StyledMarsAndMoonsContainer>
  </StyledSection>
);

export default MarsPromo;