import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo className="font-face-gm" href="">
        <Avatar />
        joao21<span>dev</span>
      </Logo>
      <Hamburguer onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburguer>
      <Menu isOpen={isOpen}>
        <MenuLink href="#about">Sobre</MenuLink>
        <MenuLink href="#projects">Projetos</MenuLink>
        <MenuLink href="#education">Educação</MenuLink>
        <MenuLink href="#experience">Profissional</MenuLink>
        <MenuLink href="#footer">Contato</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  background-color: #5434af;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Hamburguer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLink = styled.a`
  color: #f9f6ee;
  padding: 1rem 3rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-in;
  font-size: 1.1rem;

  &:hover {
    opacity: 0.7;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-right: 15vw;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    margin-right: 0;
    transition: max-height 0.3s ease-in;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #f9f6ee;
  font-weight: 800;
  font-size: 1.7rem;
  margin-left: 15vw;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export default Navbar;
