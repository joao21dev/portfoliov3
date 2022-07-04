import React from "react";
import styled from "styled-components";

const Avatar = () => {
  return (
    <Img src="https://i.ibb.co/nLL1Qkg/myphoto.jpg" alt="My profile photo" />
  );
};

const Img = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: solid 3px transparent;
  margin-right: 15px;
`;

export default Avatar;
