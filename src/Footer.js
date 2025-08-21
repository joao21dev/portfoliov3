import React from "react";
import styled from "styled-components";
import {
  Email,
  GitHub,
  LinkedIn,
  PictureAsPdf,
  WhatsApp,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <Container>
      <h1 id={"footer"}>Contato</h1>
      <a href="https://www.linkedin.com/in/joao21dev/" target="_blank">
        <LinkedIn style={{ fontSize: 40 }} />
      </a>
      <a href="https://github.com/joao21dev/" target="_blank">
        <GitHub style={{ fontSize: 40 }} />
      </a>
      <a
        href="https://web.whatsapp.com/send?phone=5571992525841"
        target="_blank"
      >
        <WhatsApp style={{ fontSize: 40 }} />
      </a>
      <a href="mailto:joao21dev@gmail.com">
        <Email style={{ fontSize: 40 }} />
      </a>
      <a
        href="https://docs.google.com/document/d/1hbfjtcS_sGQjcWNTifW9T4G13K8OAA7v/edit?usp=sharing&ouid=105091568570542229092&rtpof=true&sd=true"
        target="_blank"
      >
        <PictureAsPdf style={{ fontSize: 40 }} />
      </a>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    margin: 8vh;
  }

  h1 {
    color: #5434af;
  }
  a {
    color: inherit;
  }
`;

export default Footer;
