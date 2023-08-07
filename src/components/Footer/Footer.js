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
} from "./StyledFooter";
import Whatsapp from "../../images/whatsapp.svg"
import Discord from "../../images/discord.svg"
import Linkedin from "../../images/linkedin.svg"
import Instagram from "../../images/instagram.svg"

import {HeroContainer} from "./../Hero/StyledHero"


const Footer = () => {
  return (
    <StyledFooterSection>
      <StyledFooterColumn2>
        <HeaderFooterP>Entre em Contato</HeaderFooterP>
        <FooterP>
        <FooterA href="https://wa.me/5519989937300"> 
        <ServicesIcon src={Whatsapp}/>
        </FooterA>
        <FooterA href="https://www.instagram.com/plantprodmj/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
        <ServicesIcon src={Instagram}/>
        </FooterA>
        </FooterP>
      </StyledFooterColumn2>
      <StyledFooterRow margin>
        <StyledFooterRow>
          <StyledFooterRow linkContainer>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Produtos</HeaderFooterP>
              {planets.map((item, index) => {
                return (
                  <FooterLink key={index} to={`/body/${item.id}`}>
                    {item.name}
                  </FooterLink>
                );
              })}
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Redes Sociais</HeaderFooterP>
              <FooterA href="https://api.whatsapp.com/send/?phone=5519989937300&text&type=phone_number&app_absent=0">Whatsapp</FooterA>
              <FooterA href="https://wa.me/5519989937300">Instagram</FooterA>
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Sobre Nós</HeaderFooterP>
              <FooterLink to="/about">
              <FooterA>Sobre Nós</FooterA>
              </FooterLink>       
              <FooterLink to="/FAQ">
              <FooterA>FAQ</FooterA>
              </FooterLink>
            </StyledFooterColumn>
          </StyledFooterRow>
        </StyledFooterRow>
      </StyledFooterRow>
      <Border />
      <StyledFooterRow bottomContainer>
        <FooterP bottom>
          Copyright 2023 Plant-Prod MJ ™, All rights reserved.
        </FooterP>
        <StyledFooterRow bottomDiv>
          <FooterP bottom>Terms of Service</FooterP>
          <FooterP bottom>Privacy Policy</FooterP>
        </StyledFooterRow>
      </StyledFooterRow>
    </StyledFooterSection>
    
  );
};

export default Footer;