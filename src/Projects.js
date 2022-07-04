import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container>
      <h1 id="projects">Projetos</h1>
      <h2>YelpRestaurants</h2>

      <Wrapper>
        <p>
          Nessa aplicação, após o usuário fazer login ou se cadastrar, ele
          poderá criar um post sobre um restaurante, incluindo imagem, endereço
          e uma descrição,possibilitando que outras pessoas comentem e avaliem o
          restaurante. No Front-end utilizei <b> Javascript </b>, <b>CSS </b> e
          <b> Bootstrap</b>. O Back-end foi feito com <b>NodeJs</b>,{" "}
          <b>Express</b> e <b>MongoDB</b> para criação do Banco de Dados. <br />{" "}
          Acesse o projeto em:{" "}
          <a
            href="https://quiet-anchorage-04201.herokuapp.com/"
            target="_blank"
          >
            https://quiet-anchorage-04201.herokuapp.com/
          </a>
        </p>
        <Img
          src="https://i.ibb.co/7kh9jYK/Screenshot-1.png"
          alt="The project miniature"
        />
      </Wrapper>
      <h2>Tesla Clone</h2>

      <Wrapper>
        <p>
          Clone simples do website da Tesla. Foi desenvolvido em <b>ReactJs </b>
          utilizando <b>Redux</b> e <b>Styled Components</b>. <br /> Acesse o
          projeto em:{" "}
          <a href="https://musing-clarke-9db6ae.netlify.app//" target="_blank">
            https://musing-clarke-9db6ae.netlify.app//
          </a>
        </p>
        <Img
          src="https://i.ibb.co/1bncKZh/Screenshot-from-2021-12-12-00-52-31.png"
          alt="The project miniature"
        />
      </Wrapper>
      <h2>Movie Search App</h2>

      <Wrapper>
        <p>
          Aplicação simples em react native que permite buscar por um filme e
          exibir informações sobre ele. Api utilizada:
          https://www.themoviedb.org/.
        </p>
        <Img
          src="https://raw.githubusercontent.com/joao21dev/movieSearchAppRN/master/assets/movieApp.gif"
          alt="The project miniature"
        />
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

  h1 {
    color: #5434af;
  }

  h2 {
    color: #6e58ad;
  }

  p {
    color: #75848a;
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

const Img = styled.img`
  max-width: 32%;
  height: 16rem;
  border-radius: 5px;
  margin-left: 3rem;

  @media (max-width: 768px) {
    max-width: 15rem;
  }
`;

export default Projects;
