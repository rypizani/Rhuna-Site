import { planets } from "../../constants";
import {
  Border,
  FooterA,
  FooterLink,
  FooterP,
  HeaderFooterP,
  StyledFooterColumn,
  StyledFooterColumn2,
  StyledFooterRow,
  StyledFooterSection,
  ServicesIcon
} from "./StyledFooter2";
import Whatsapp from "../../images/whatsapp.svg"
import Discord from "../../images/discord.svg"
import Linkedin from "../../images/linkedin.svg"
import Instagram from "../../images/instagram.svg"
import Tabela from "../../images/tabela.jpg"
import {HeroContainer} from "./../Hero/StyledHero"


const Footer2 = () => {
  return (
    <StyledFooterSection>
      <StyledFooterColumn2>
      <HeaderFooterP>Programa Nutricional</HeaderFooterP>

        <FooterP>
        <ServicesIcon src={Tabela}/>
        </FooterP>
      </StyledFooterColumn2>
    </StyledFooterSection>
    
  );
};

export default Footer2;