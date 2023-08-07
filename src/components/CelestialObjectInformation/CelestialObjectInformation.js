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
 
    <Teste $isRed href="https://api.whatsapp.com/send/?phone=5519989937300&text&type=phone_number&app_absent=0"> Adquirir Já</Teste>

  </StyledInformationContainer>
);

export default CelestialObjectInformation;