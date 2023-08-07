import PageHeader from "../../components/PageHeader/PageHeader";
import { AboutP, AboutSection } from "./StyledContact";

const ContactPage = () => {
  return (
    <AboutSection>
      <PageHeader title="Sobre Nós" />
      <article>
        <AboutP>
          A empresa está no mercado desde 1945, fabricando fertilizantes
          solúveis em água de alta qualidade para produtores de culturas de alto
          valor, incluindo a indústria de horticultura, hortaliças de estufa e
          outros produtores com requisitos exigentes. Os fertilizantes
          Plant-Prod MJ ™ são vendidos em todo o mundo. Nos Estados Unidos, eles são
          vendidos sob a marca Plantex. Antes de junho de 2013, a empresa se
          chamava Plant Products Co. Ltd e também distribuía suprimentos
          agrícolas. Esta função agora é realizada por uma empresa separada, a
          Plant Products Inc. , com um depósito em Leamington, Ontário.
          Fertilizantes Plant-Prod MJ ™ selecionados estão disponíveis para o mercado
          doméstico e de jardim. Eles são distribuídos no Canadá por Gerard
          Bourbeau & Fils Inc. A missão da empresa é fornecer a melhor nutrição
          vegetal solúvel do mundo e suporte superior ao produtor - de forma
          consistente, para que os produtores da Plant-Prod MJ ™ prosperem além de
          outros
        </AboutP>
        <AboutP></AboutP>
      </article>
    </AboutSection>
  );
};

export default ContactPage;
