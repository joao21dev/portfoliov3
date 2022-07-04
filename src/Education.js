import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <Container>
      <h1 id="education">Formação</h1>
      <h2>Graduações</h2>
      <h3>Análise e Desenvolvimento de Sistemas - Universidade Salvador</h3>
      <p>Início: 06/2021 | Atualmente</p>
      <h3>Direito - Universidade Católica de Salvador</h3>
      <p>Início: 06/2021 | Trancado no 8° semestre</p>
      <h2>Cursos</h2>

      <h3>The Web Developer Bootcamp (Colt Steele)</h3>
      <p>
        Skills: HTML5 | CSS3 | Bootstrap5 | Bulma | JavaScript | Express |
        NodeJs | MongoDB
      </p>
      <p>Duração: 63.5 horas</p>
      <p>
        Minha Review no Linkedin{" "}
        <a
          href="https://www.linkedin.com/posts/joao21dev_yelprestaurants-activity-6871026631956303872-iv18/?utm_source=linkedin_share&utm_medium=member_desktop_web"
          target="_blank"
        >
          (Clique para acessar){" "}
        </a>
      </p>
      <p>
        Certificado{" "}
        <a
          href="https://www.udemy.com/certificate/UC-1ece505e-7a62-4f69-8a2b-33bbc1147251/ "
          target="_blank"
        >
          (Clique para acessar){" "}
        </a>
      </p>

      <h3>
        JavaScript Algorithms and Data Structures Masterclass (Colt Steele)
      </h3>
      <p>
        Skills: Data Structure | Big O Notation | Recursion | Sorting Algorithms
      </p>
      <p>Duração: 21.5 horas</p>
      <p>
        Certificado{" "}
        <a
          href="https://www.udemy.com/certificate/UC-950e175a-b630-476e-8168-a7ea6749ef01/ "
          target="_blank"
        >
          (Clique para acessar){" "}
        </a>
      </p>

      <h3>DevReact (DevPleno - Túlio Faria)</h3>
      <p>
        Skills: ReactJS | ReactNative | Hooks | ContextAPI | Redux (Thunk and
        Sagas) | Testes | Storybook | Firebase
      </p>
      <p>Duração: + 50 horas</p>
      <p>Certificado: 70% (Em andamento)</p>
      <p>
        Link do Curso: <a href="https://go.devpleno.com/fsm"  target="_blank">https://go.devpleno.com/fsm</a>
      </p>

      <h3>
        UI & UX Design de aplicativos e sites - Adobe XD e PSD 2022 (Lucas
        Marte)
      </h3>
      <p>
        Skills: Adobe XD | UI&UX (Web and Mobile) | UX Research | Responsividade
        Algorithms
      </p>
      <p>Duração: 16 horas</p>
      <p>
        Certificado{" "}
        <a
          href="https://www.udemy.com/certificate/UC-61d895a7-cd0b-4212-8f4c-9dec0dcc8377/ "
          target="_blank"
        >
          (Clique para acessar){" "}
        </a>
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

  p {
    color: #75848a;
    line-height: 1.7;
    letter-spacing: 2px;
    font-weight: 300;
  }
`;
export default Education;
