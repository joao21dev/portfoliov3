import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container>
      <h1 id="projects">Projetos</h1>
      <a href="https://buscamilhas.com/" target="_blank">
        <h2 id="paymentHubAdmin"> Busca Milhas: Payment Hub Admin</h2>
      </a>

      <Wrapper>
        <p>
          Como Frontend atuei desenvolvendo uma dashboard administrativa para
          uma API de pagamentos (Payment Hub) utilizada pelo{" "}
          <a href="https://buscamilhas.com/" target="_blank">
            Busca Milhas
          </a>{" "}
          que faz o gerenciamento de clientes, usuários e pagamentos de planos e
          assinaturas. O projeto foi desenvolvido utilizando <b>React</b> com
          <b> Typescript</b>, <b>NextJS</b>, <b>Docker</b> e <b>Chakra UI</b>{" "}
          para estilização, além de seguir o modelo de Atomic Design para
          criação do Design System do projeto e Jest para realização de testes
          unitários. Essa dashboard foi desenvolvida buscando faciliar o
          gerencimaneto dos clientes, usuários e assinaturas, antes feito
          diretamente na pela API. Uma das dificuldades do projeto foi a
          aplicação do Atomic Design, pois não conhecia tal metodologia, e por
          ser um dos únicos desenvolvedores com mais experiêncica Frontend da
          equipe, fiquei responsável por arquitetar e desenolver o projeto desde
          o começo.
        </p>
      </Wrapper>
      <a href="https://buscamilhas.com/lp/?" target="_blank">
        <h2 id="start">
          {" "}
          Busca Milhas Start: Microsserviço de cancelamento de recorrência{" "}
        </h2>
      </a>

      <Wrapper>
        <p>
          Como Backend desenvolvi em pair programming um microsserviço que cria
          um fluxo de cancelamento através de questionários customizados a
          partir de uma dashboard para confirmar o cancelamento da assinatura de
          clientes do{" "}
          <a href="https://buscamilhas.com/lp/?" target="_blank">
            Busca Milhas Start{" "}
          </a>
          Iniciamos o projeto levantando os requisitos e analisando as regras de
          negócio, para então começarmos a modelagem do banco de dados. Uma das
          dificuldades encontradas nessa etapa foi possibilitar que questionário
          tivesse perguntas que a depender da resposta assinalada levasse o
          usário a uma nova pergunta específica e assim por diante. Para isso
          crámos uma coluna "triggerQuestionId" na entidade "answer",
          sinalizando que para aquela resposta haveria um nova pergunta
          específica, e um controller para que o front fizesse tal assossiação.
          O projeto foi desenvolvido utilizando conceitos de{" "}
          <b>Clean Archtechture</b>e seguindo princípios de{" "}
          <b>Domain Driven Design (DDD)</b>. Foi desenvolvido em <b>NodeJs</b>{" "}
          com <b>TypeScript</b>, utilizando <b>NestJS</b>
          com <b>TypeORM</b> e <b>MySQL</b> como banco de dados e também{" "}
          <b>Jest</b>
          para os testes unitários. Esse microsserviço foi uma solução para
          coletar respostas dos usuários que buscavam o cancelamento da
          assinatura, de forma customizada já que os os questionários e suas
          opções de respostas eram salvos no banco de dados através de
          requisições feitas pela API.
        </p>
      </Wrapper>
      <a href="https://buscamilhas.com/" target="_blank">
        <h2 id="paymentHub">Payment Hub</h2>
      </a>

      <Wrapper>
        <p>
          API Rest responsável pelo gerenciamento de clientes, pagamentos de
          planos e assinaturas e dos prórpios usuários do{" "}
          <a href="https://buscamilhas.com/" target="_blank">
            {" "}
            Busca Milhas
          </a>
          O projeto foi arquitetado em microsserviços, com exceção da API
          principal, sendo que cada mcirosserviço é responsável por fazer uma
          integração direta com os gateways de pagamento, como Pagar.me,
          Mercadopago, Vindi, Koin, PayPal e PagSeguro. Participei nas
          principais features do microsserviço que fazia a integração com o
          Gateway de Pagamento Vindi. O projeto foi desenvolvido a partir de
          conceitos de <b>Clean Archtechture</b>,{" "}
          <b>Driven Domain Design (DDD)</b>,<b>SOLID</b> e{" "}
          <b>Port & Adapters</b>. Utilizamos <b>NodeJs</b> com <b>NestJs</b> e{" "}
          <b>TypeORM</b>, a autenticação foi feita com <b>Passport</b>e{" "}
          <b>Bcrypt</b>, os testes com <b>Jest</b> e <b>MongoDB</b> como banco
          de Dados. Nesse projeto pude entender melhor o uso de Arquitetura
          Limpa, a aplicação prática da <b>Inversão de Dependência</b>, o
          objetivo da arquitetura <b>Port & Adapters</b> em um projeto que
          interaje com diversos eventos externos e também a abordagem de
          desenvolvimento <b>DDD</b>.
        </p>
      </Wrapper>

      <a href="https://buscamilhas.com/" target="_blank">
        <h2 id="geopay">GeoPay (Gateway de Pagamento)</h2>
      </a>

      <Wrapper>
        <p>
          Participei ativamente na escolha da stack e no desenvolvimento
          Frontend da dashboard deste Gateway de Pagamento. O projeto foi
          desenvolvido em Typescript com React, utilizando Zustand para o
          gerenciamento dos estados, Apollo Client para o consumo da API em
          GraphQL, Material UI para estilização e Jest para os testes unitários.
          Uma das dificuldades do projeto foi o time de Frontend ser composto
          por Desenvolvedores Juniores não habituados com o uso do Redux, para
          solucionar isso sugeri o uso do Zustand, já que sua curva de
          aprendizado é menor, além de ser menos verboso que o Redux. Outro
          obstáculo foi o consumo de uma Api em GraphQL, pois até então eu só
          tinha conhecimento do modelo REST, isso me possibilitou enxergar uma
          solução para quando o client-side precisa apenas de alguns dados
          fornecidos pela API, e não todos como é entregue pelo modelo REST.
        </p>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3rem;
  margin-inline: 43vh;

  @media (max-width: 768px) {
    margin: 5vh;
  }

  a {
    cursor: "pointer";
  }

  h1 {
    color: #5434af;
  }

  h2 {
    color: #6e58ad;
  }

  p {
    color: #586063;
    line-height: 1.7;
    letter-spacing: 2px;
    font-weight: 300;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Projects;
