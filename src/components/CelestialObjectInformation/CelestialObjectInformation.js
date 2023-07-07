import {
  StyledInformationContainer,
  StyledHeading,
  StyledHeading2

} from "./StyledCelestialObjectInformation";


const CelestialObjectInformation = ({ className, data }) => (
  <StyledInformationContainer className={className}>
    <StyledHeading>Informações:</StyledHeading>
    <StyledHeading>{data.binicio}</StyledHeading>
  </StyledInformationContainer>
);

export default CelestialObjectInformation;