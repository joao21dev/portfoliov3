import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h1 id="about">Sobre</h1>

      <p>
          Desenvolvedor Fullstack com 4 anos de experiência, especializado em desenvolvimento backend e arquitetura de
          software. Atuo em projetos de transformação digital, com expertise em Java, Quarkus, Typescript, React, MySQL, APIs
          REST, computação em nuvem (AWS, GCP) e padrões de design como princípios SOLID, Clean Architecture e
          Clean Code. Tenho sólida experiência em CI/CD, Docker, orquestração com Kubernetes e monitoramento com
          Grafana/Prometheus/Loki, garantindo alta disponibilidade e escalabilidade dos sistemas. Além disso, projeto
          sistemas de autenticação de nível empresarial usando Keycloak com Nginx para controle de acesso seguro. Minha
          carreira abrange múltiplas indústrias, incluindo fintech e bancário, saúde e sistemas hospitalares, turismo e viagens,
          educação e serviços para órgãos públicos. Busco novos desafios em projetos inovadores.
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
  b {
    color: #5434af;
  }

  p {
    color: #586063;
    line-height: 1.7;
    letter-spacing: 2px;
    font-weight: 300;
  }
`;

export default About;
