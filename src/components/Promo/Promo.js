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
    <StyledHeading>PUREZA E CONSISTÊNCIA SIGNIFICAM CUSTOS MAIS BAIXOS.</StyledHeading>
    <StyledPlanet>
      <ServicesIcon src={img3}/>
      <StyledPlanetParagraph>
     
PUREZA E CONSISTÊNCIA SIGNIFICAM CUSTOS MAIS BAIXOS.<br/>
Os fertilizantes de cannabis Plant-Prod MJ são feitos com as melhores matérias-primas disponíveis no mundo, constantemente testados quanto à pureza, depois moídos e misturados, ao contrário de muitos fertilizantes.
Nenhum enchimento deixado no fundo de seus tanques ou entupindo suas linhas de irrigação, economizando tempo e dinheiro para limpá-los.
Você obtém 100% do que paga e, em vez de folhas amarelas e crescimento pequeno, obtém botões maiores e mais densos e crescimento mais rápido de forma mais consistente.
</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
    <ServicesIcon src={img2}/>
      <StyledPlanetParagraph>
      OBTENHA OS MAIORES BOTÕES PELO SEU DINHEIRO.<br/>

Tudo o que suas plantas precisam, nada que elas não precisem.
Fertilizante puro, sem enchimentos, significa uma entrega consistente de nutrientes mais eficiente que
chega aos seus botões mais rapidamente e não é deixado apenas no fundo do saco ou do tanque. Então
você recebe 100% do que você paga.
Colha até 5 vezes mais usando plantprodmj

      </StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
    <ServicesIcon src={img1}/>
      <StyledPlanetParagraph>Com as Características do Plant-Pros MJ
Oferecemos a proporção ideal de nitrogênio, fósforo e potássio que promove o crescimento ideal para garantir uma estrutura de planta suficiente para suportar os rendimentos desejados. O magnésio adicionado garante que não haja sinais de deficiência. Cada fase tem uma necessidade diferente e tratamos isso muito bem. Por exemplo: Grow contém um pacote de micronutrientes aprimorado com ferro EDDHA adicional para garantir a absorção eficiente em uma ampla gama de níveis de pH. O que gera tranquilidade para o cultivador e qualidade para o cultivo</StyledPlanetParagraph>
    </StyledPlanet>
  </StyledSection>
)

export default PromoSection;