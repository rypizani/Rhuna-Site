import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { endpoints, colors } from "../../constants"
import Footer2 from "../../components/Footer2/Footer2";
import PageHeader from "../../components/PageHeader/PageHeader";
import CelestialObjectCardsContainer from "../../components/CelestialObjectCardsContainer/CelestialObjectCardsContainer";
import CelestialObjectCard from "../../components/CelestialObjectCard/CelestialObjectCard"
import Button from "../../components/Button/Button"
import {
  StyledPageHeaderLoadingBox,
  StyledCelestialObjectLoadingBox,
  StyledCelestialObjectSection,
  StyledInformationLoadingBox,
  StyledCelestialObject,
  StyledCelestialObjectInformation,
  StyledMoonsSection,
  Img,
} from "./StyledBody";

const BodyPage = () => {
  const [ isLoading, setIsLoading ] = useState(false);


  const [ data, setData ] = useState(null);

  const params = useParams();

  const fetchAndSetData = async () => {
    setIsLoading(true);

    try {
      const data = await fetch(`${endpoints.bodies}/${params.id}`).then(res => res.json());
      setData(data);
      console.log(data)

    } catch (err) {
      setData(null);
      console.error(err);
    
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAndSetData();

    // Cleanup
    return () => {
      setIsLoading(true);
      setData(null);
    }
  }, [params.id])

  if (isLoading) return (
    <>
      <PageHeader>
        <StyledPageHeaderLoadingBox />
      </PageHeader>

      <StyledCelestialObjectSection>
        <StyledCelestialObjectLoadingBox />
        <StyledInformationLoadingBox />
      </StyledCelestialObjectSection>
      <Button $isRed to="/service">Produtos</Button>
    </>
  )

  if (!data) return (
    <>
      <PageHeader title="Error" />
      <article>
        <p>Unable to find celestial body with the ID "{params.id}".</p>
      </article>
    </>
  )
  

  return (
    <>
      <PageHeader title={data.quemsomos} />
      <StyledCelestialObjectSection>
        
      <Img src={data.ficha}/>
      
      <StyledCelestialObjectInformation data={data} />

      </StyledCelestialObjectSection>
<p>Simples, mas científico.  A linha Plant-Prod MJ ™ de fertilizantes de cannabis solúveis em água foi projetada para trazer nossos 70 anos de experiência para os produtores de cannabis de hoje.  A Plant-Prod está entusiasmada em fornecer aos produtores licenciados produtos de maconha medicinal que são fertilizantes cientificamente otimizados, consistentes e completamente solúveis em água. Eleve seu grow ao nível máximo.</p>
    <p>
    </p>
    <p></p>

      <Footer2/>

    </>
  )
}
export default BodyPage;