import {
  StyledCard,
  StyledCelestialObject,
  StyledDescription,
  StyledButton,
  Img
} from "./StyledCelestialObjectCard";
import img from '../../images/Icone original 2.png'

const CelestialObjectCard2 = ({
  className,
  color,
  name,
  to,
  description,
imagem
}) => (
  <StyledCard className={className}>
    <Img src={imagem}/>
    <StyledButton to={to || '/'}>{name}</StyledButton>
  </StyledCard>
);

export default CelestialObjectCard2;