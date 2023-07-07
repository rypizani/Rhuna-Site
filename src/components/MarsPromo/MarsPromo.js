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
      <StyledHeading>Gether information about Mars and its two moons, Phobos and Deimos</StyledHeading>
      <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledParagraph>
      <Button $isRed to="/service">Ver Serviços</Button>
    </StyledContentContainer>
    <StyledMarsAndMoonsContainer>
      <Img src={img}/>
    </StyledMarsAndMoonsContainer>
  </StyledSection>
);

export default MarsPromo;