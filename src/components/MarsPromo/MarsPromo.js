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
      <StyledHeading>Plant-Prod MJ ™ Chegou no Brasil experiente agora mesmo</StyledHeading>
      <StyledParagraph>Desde 1945, a plant- Prod vem melhorando a produtividade da planta. Matérias-primas puras e moagem turbo garantem que suas plantas obtenham 100% do que precisam. Sem resíduos, sem sobras, sem entupimentos na irrigação.


A mais de 3 anos no mercado canadense e americano a Plant-Prod MJ ™ trás resultados surpreendentes até mesmo para os growers mais experientes.

A Plant-Prod se concentrou em uma coisa: alimentação de nutrientes mais eficiente e consistente para fazer seu fertilizante ir mais longe e sua planta crescer melhor. Os fertilizantes Plant-Prod MJ são feitos com ingredientes da mais alta qualidade, com formulações projetadas para atender às necessidades específicas de alimentação de suas plantas.

REDUZA SEUS CUSTOS, AUMENTE O RENDIMENTO.</StyledParagraph>
      <Button $isRed to="/service">Produtos</Button>
    </StyledContentContainer>
    <StyledMarsAndMoonsContainer>
      <Img src={img}/>
    </StyledMarsAndMoonsContainer>
  </StyledSection>
);

export default MarsPromo;