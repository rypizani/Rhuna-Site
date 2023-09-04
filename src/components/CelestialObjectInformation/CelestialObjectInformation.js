import {
  StyledInformationContainer,
  StyledHeading,
  StyledHeading2,
  Divv,
  Teste

} from "./StyledCelestialObjectInformation";
import Button from '../Button/Button'


const CelestialObjectInformation = ({ className, data }) => (
  <StyledInformationContainer className={className}>
    <StyledHeading>Informações:</StyledHeading>
    <StyledHeading>{data.binicio}</StyledHeading>

    <Divv >
    </Divv>
 
    <Teste $isRed href="https://marcelomarcelo20230827124215.mercadoshops.com.br"> Adquirir Já</Teste>

  </StyledInformationContainer>
);

export default CelestialObjectInformation;