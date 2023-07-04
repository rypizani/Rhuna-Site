import { planets } from "../../constants";
import {
  Border,
  FooterA,
  FooterLink,
  FooterP,
  HeaderFooterP,
  StyledFooterColumn,
  StyledFooterRow,
  StyledFooterSection,
} from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooterSection>
      <StyledFooterColumn>
        <HeaderFooterP>Rhuna</HeaderFooterP>
        <FooterP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </FooterP>
      </StyledFooterColumn>
      <StyledFooterRow margin>
        <StyledFooterRow>
          <StyledFooterRow linkContainer>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Serviços</HeaderFooterP>
              {planets.map((item, index) => {
                return (
                  <FooterLink key={index} to={`/body/${item.id}`}>
                    {item.name}
                  </FooterLink>
                );
              })}
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Information</HeaderFooterP>
              <FooterA href="#">How it works</FooterA>
              <FooterA href="#">Download app</FooterA>
              <FooterA href="#">Developer portal</FooterA>
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>About</HeaderFooterP>
              <FooterA href="#">News and press</FooterA>
              <FooterA href="#">Personal data and collection</FooterA>
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
          Copyright 2023 Rhuna, All rights reserved.
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