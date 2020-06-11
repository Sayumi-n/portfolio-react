import React from "react";
import styled from "styled-components";

// import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Nav = styled.nav`
  height: 48px;
  position: sticky;
  top: 0;
  background-color: #f8f8f8;
  z-index: 9999;
  margin: 0;
  padding: 0;
`;

const SubNav = styled.nav`
  width: 8%;
  position: sticky;
  top: 45%;
  text-align: center;
`;

const StyledList = styled.li`
  float: left;
  padding: 0 15px;
  line-height: 48px;
  list-style: none;
  a:hover {
    color: #b1ccdd;
  }
  a {
    svg {
      font-size: 1.6rem;
      height: 48px;
    }
  }
`;

const Logo = styled.p`
  float: left;
  padding-left: 30px;
  font-weight: 500;
  color: #3c4b62;
`;

const StyledHashLink = styled(HashLink)`
  text-decoration: none;
  color: #3c4b62;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #3c4b62;
`;

const StyledIconList = styled.li`
  list-style: none;
  padding: 8px 0;
  a {
    svg {
      font-size: 1.4em;
    }
  }

  a:hover {
    color: #b1ccdd;
  }
`;

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Navbar = () => {
  return (
    <>
      <Nav>
        <HashLink to="#top" smooth scroll={(el) => scrollWithOffset(el)}>
          <Logo>SAYUMI</Logo>
        </HashLink>
        <ul
          style={{
            margin: 0,
            position: "absolute",
            right: 0,
            padding: 0,
          }}
        >
          <StyledList>
            <StyledHashLink smooth={true} to="/#about">
              About
            </StyledHashLink>
          </StyledList>
          <StyledList>
            <StyledHashLink smooth={true} to="/#works">
              Works
            </StyledHashLink>
          </StyledList>
          <StyledList>
            <StyledLink href="mailto:sayumi.nkmr.2019@gmail.com">
              <MailOutlineIcon />
            </StyledLink>
          </StyledList>
        </ul>
      </Nav>
      <SubNav>
        <ul style={{ padding: 0 }}>
          <StyledIconList>
            <StyledLink href="https://github.com/Sayumi-n">
              <GitHubIcon />
            </StyledLink>
          </StyledIconList>
          <StyledIconList>
            <StyledLink href="https://www.linkedin.com/in/sayumi-n/">
              <LinkedInIcon />
            </StyledLink>
          </StyledIconList>
          <StyledIconList>
            <StyledLink href="./Sayumi_N_Resume.pdf">
              <DescriptionIcon />
            </StyledLink>
          </StyledIconList>
        </ul>
      </SubNav>
    </>
  );
};
export default Navbar;
