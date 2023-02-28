import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <Container>
      <h1 id="experience">Experiência Profissional</h1>
      <h2>Desenvolvedor Fullstack</h2>
      <h3>Devnology - IN8</h3>
      <p>Início: 11/2022 | Atualmente</p>
      <p>
        Atividades: Desenvolvedor Full Stack atuando tanto no Frontend em
        Sistemas Administrativas (Typescript/React/Chakra UI/Atomic Design),
        quanto no Backend com o desenvolvimento de REST API'S (NodeJS, nestHS,
        TypeORM) de pagamentos em microsserviços, utilizando Clean Archtecture. 
      </p>
      <h4>Tecnologias:</h4>
      <p>- Frontend: ReactJS, TypeScript, Redux, Chakra UI</p>
      <p>- Backend: NodeJS, NestJS, TypeORM, Docker</p>
      <p>- Testes Unitários: Jest e React Testing Library</p>
      <p>
        - Clean Archtecture, Microservices, Atomic Design e Design Principles
        (SOLID)
      </p>
      <p>- Versionamento: Git e GitLab</p>
      <p>- CI/CD</p>
      <p>- Metedologias Ágeis: Scrum utilizando ClickUp</p>
      <h2>Desenvolvedor Frontend</h2>
      <h3>Hiperbanco</h3>
      <p>Início: 04/2022 | 12/2022</p>
      <p>
        Atividades: Desenvolvedor Frontend responsável pelo desenvolvimento de
        plataformas de Internet Banking e outros produtos relacionados a Bank as
        a Service.
      </p>
      <h4>Tecnologias:</h4>
      <p>- React com TypeScript (Redux, Zustand e ContextAPI)</p>
      <p>- Rest API e GraphQL</p>
      <p>- Material UI</p>
      <p>- Testes Unitários (Jest e React Testing Library)</p>
      <p>- Versionamento: Git/Github</p>
      <p>- Metedologias Ágeis: Scrum utilizando Jira</p>
      <h4>Meu impacto na empresa:</h4>
      <p>
        - Utilização do Zustand ao invés do Redux ao perceber a dificuldade que
        novos devs tinham devido a curva de aprendizado do Redux. 
      </p>
      <p>
        - Implementação da biblioteca de interface Material-UI: para melhorar a
        padronização do código e aumentar a agilidade na criação de telas.
      </p>
      <p>
        - Aplicação de testes unitários: para garantir a integridade do código e
        facilitar a posterior manutenção.
      </p>
      <p>
        - Mentoria de desenvolvedores: Ajudando um desenvolvedor júnior a
        melhorar seu código e deixá-lo mais limpo, para manter a padronização do
        código entre a equipe.
      </p>
      <h2>Estágio em Sistemas de Informação</h2>
      <h3>Fundação José Silveira</h3>
      <p>Início: 03/2022 | 04/2022</p>
      <p>
        Atividades: Treinamento da equipe hospitalar para utilização do novo
        sistema implantado. Acompanhar o time de analistas e sugerir ideias para
        atender as necessidades requeridas pelos usuários.
      </p>
      <h2>Vendedor</h2>
      <h3>Mitchell Menswear</h3>
      <p>Início: 07/2018 | 01/2020</p>
      <p>
        Atividades: Realizar o atendimento direto ao consumidor, negociar preços
        de uma mercadoria, os prazos, as condições de pagamento e os descontos
        dessa venda. Além de orientar o cliente sobre as especificações dos
        produtos e/ou serviços, controlar a demanda dos pedidos em estoque e
        cumprir as meta de vendas.
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3rem;
  margin-inline: 43vh;

  @media (max-width: 768px) {
    margin: 8vh;
  }

  h1 {
    color: #5434af;
  }

  h2 {
    color: #5e41b0;
  }

  h3 {
    color: #6e58ad;
  }
  h4 {
    color: #6e58ad;
  }

  p {
    color: #75848a;
    line-height: 1.7;
    letter-spacing: 2px;
    font-weight: 300;
  }
`;
export default Experience;

