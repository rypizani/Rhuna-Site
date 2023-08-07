import PageHeader from "../../components/PageHeader/PageHeader";
import { AboutP, AboutSection, StyledCard } from "./StyledAbout";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const AboutPage = () => {
  return (
    <AboutSection>
      <PageHeader title="FAQ" />
<StyledCard>
      <Accordion>
            <AccordionItem>
                <AccordionHeader>
                    <h3 className={`accordion-title`} >Porque usar Plant-Prod MJ ™?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                    Plantprodmj tem a formulação ideal para cannabis com macro e micro nutrientes disponíveis no melhor formato para as plantas.
Disponibilizando tudo que sua planta precisa.
Sem falar na praticidade de misturar apenas 2 produtos para ter uma rega completa.
                    </div>
                </AccordionBody>
            </AccordionItem>
              <p></p>
            <AccordionItem>
                <AccordionHeader>
                    <h3 className={`accordion-title`}>Tem diferença no rendimento?</h3>
                </AccordionHeader>
                <AccordionBody>
                    <div className="accordion-body">
                    OBTENHA BOTÕES MAIORES, MAIS DENSOS E UM CRESCIMENTO MAIS RÁPIDO EM UMA BASE MAIS CONSISTENTE  COM O FERTILIZANTE DE CANNABIS Plant-Prod MJ ™
Veja seu Bud mais gordo dia a dia
                    </div>
                </AccordionBody>
            </AccordionItem>
            <p></p>
            <AccordionItem>
                <AccordionHeader>
                    <h3 className={`accordion-title`}>O que é Plant-Prod MJ ™ ?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                    Plant-Prod MJ ™ é um
Fertilizante mineral de cannabis 100% solúvel em água.

Para NUTRIÇÃO DE PLANTAS DE ALTA PRODUTIVIDADE usamos Misturas personalizadas quelatadas para atender às necessidades exclusivas de suas plantas.

Feito com os materiais de maior qualidade técnica do mundo.

Sem ingredientes mais baratos ou altas concentrações de sais, usamos apenas nutrientes puros.
.

Testamos constantemente todas as novas matérias-primas para garantir que cada colheita tenha a mesma qualidade.</div>
                </AccordionBody>
            </AccordionItem>
            <p></p>
        </Accordion>
        </StyledCard>
    </AboutSection>
  );
};

export default AboutPage;