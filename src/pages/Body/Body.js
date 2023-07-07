import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { endpoints, colors } from "../../constants"

import PageHeader from "../../components/PageHeader/PageHeader";
import CelestialObjectCardsContainer from "../../components/CelestialObjectCardsContainer/CelestialObjectCardsContainer";
import CelestialObjectCard from "../../components/CelestialObjectCard/CelestialObjectCard"

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
    </>
  )
}
export default BodyPage;