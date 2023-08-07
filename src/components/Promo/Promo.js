import { colors } from "../../constants";

import {
  StyledSection,
  StyledHeading,
  StyledPlanet,
  StyledCelestialObject,
  StyledPlanetParagraph,
  ServicesIcon
} from "./StyledPromo";

import img1 from "../../images/svg-1.svg"
import img2 from "../../images/svg-2.svg"
import img3 from "../../images/svg-3.svg"


const PromoSection = () => (
  <StyledSection>
    <StyledHeading>PUREZA E CONSISTÊNCIA SIGNIFICAM CUSTO MAIS BAIXOS.</StyledHeading>
    <StyledPlanet>
      <ServicesIcon src={img3}/>
      <StyledPlanetParagraph>
     
      Os fertilizantes para cannabis Plant-Prod MJ ™ são feitos com as melhores matérias-primas selecionadas no mundo,  constantemente testados quanto à pureza e só então moídos e misturados, ao contrário de muitos fertilizantes. Nenhum resíduo fica depositado no fundo de seus tanques de mistura, evitando entupimento em suas linhas de irrigação, economizando tempo e dinheiro para limpá-los. Você obtém 100% do que paga e em vez de folhas amarelas com crescimento pequeno, você obtém crescimento mais rápido de forma mais consistente para suportar buds maiores, mais densos e resinados.</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
    <ServicesIcon src={img2}/>
      <StyledPlanetParagraph>
      OBTENHA OS MAIORES BUDS PELO MELHOR CUSTO.<br/>

      Tudo o que suas plantas precisam, nada que elas não precisem. Tudo, desde fertilizante de zinco até fertilizante de ferro quelatado o melhor para as plantas. Fertilizante puro, no formato mais eficiente do nutriente, chegando aos seus buds mais rapidamente.Nossos produtos são projetados para reduzir seus custos e aumentar seus rendimentos com Buds maiores e resinados.  Então você recebe 100% do que você paga e alimenta sua planta da melhor forma. Colha até 5 vezes mais usando Plant-Prod MJ ™

      </StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
    <ServicesIcon src={img1}/>
      <StyledPlanetParagraph>Com as Características do Plant-Prod MJ ™ Oferecemos a proporção ideal de micros e macros nutrientes que promove o crescimento ideal para garantir uma estrutura de planta suficiente para suportar os rendimentos desejados. O magnésio adicionado garante que não haja sinais de deficiência e desenvolva uma fotossíntese plena. Cada fase do programa nutricional tem uma necessidade diferente e tratamos isso muito bem. Por exemplo: Grow contém um pacote de micronutrientes aprimorado com ferro EDDHA adicional para garantir a absorção eficiente em uma ampla gama de níveis de pH. O que gera tranquilidade para o cultivador e qualidade para o cultivo com maior praticidade e segurança.</StyledPlanetParagraph>
    </StyledPlanet>
  </StyledSection>
)

export default PromoSection;