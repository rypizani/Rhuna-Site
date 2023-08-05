import { planets } from "../../constants";
import { planets2 } from "../../constants";

import PageHeader from "../../components/PageHeader/PageHeader";
import CelestialObjectCardsContainer from "../../components/CelestialObjectCardsContainer/CelestialObjectCardsContainer";
import CelestialObjectCard from "../../components/CelestialObjectCard/CelestialObjectCard";
import CelestialObjectCard2 from "../../components/CelestialObjectCard2/CelestialObjectCard";

import { StyledSection } from "./StyledPlanets";

const Planos = () => (
  <>

   <PageHeader title="Planos"/>
    <StyledSection>
    <CelestialObjectCardsContainer>
        {planets2.map((planet2) => (
          <CelestialObjectCard2
            key={planet2.id}
            imagem={planet2.imagem}
            name={planet2.name}
            to={`/about`}
          />
        ))}
      </CelestialObjectCardsContainer>
    </StyledSection>

  </>
);

export default Planos;