import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h1 id="about">Sobre</h1>

      <p>
        Olá, me chamo João, sou desenvolvedor há mais de 1 ano e completamente
        apaixonado pelo Front-end. Possuo conhecimento em ReactJs, Javascript,
        TypeScript, React Native, NodeJS e outras tecnologias que uso para criar
        aplicações web/mobile de alto nível e valor. Também possuo habilidades
        no Back-end, onde tenho experiência desenvolvendo aplicações com NodeJs,
        Express e MongoDB.
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

  p {
    color: #75848a;
    line-height: 1.7;
    letter-spacing: 2px;
    font-weight: 300;
  }
`;

export default About;
