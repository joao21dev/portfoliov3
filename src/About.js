import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h1 id="about">Sobre</h1>

      <p>
        Desenvolvedor de Software apaixonado pelo <b>Frontend</b> com sólido
        conhecimento em <b>ReactJs</b>, <b>TypeScript</b> e outras tecnologias
        que uso para criar aplicações <b>Web</b> de alto nível e valor. Também
        possuo grande conhecimento no <b>Backend</b>, onde tenho experiência
        profissional desenvolvendo aplicações com <b>TypeScript</b> e{" "}
        <b>NestJs</b>. Atualmente trabalho na Devnology IN8, em um time{" "}
        <b>FullStack</b>, desenvolvendo <b>Back</b> e <b>Front</b> seguindo
        padrões de arquitetura (<b>Microsserviços</b>), design principles (
        <b>SOLID</b>). Atuei também por 8 meses como <b>Frontend</b> numa
        startup que desenvolve produtos relacionados a Bank as a Service onde
        era responsável pelo desenvolvimento <b>Frontend</b> de plataformas
        financeiras. Além disso, também tenho experiência profissional com
        desenvolvimento <b>Mobile</b> em <b>Flutter</b> e já desenvolvi projetos
        em <b>React Native</b>.
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
    color: #75848a;
    line-height: 1.7;
    letter-spacing: 2px;
    font-weight: 300;
  }
`;

export default About;
