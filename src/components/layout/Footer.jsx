import React from "react";
import styled from "styled-components";
import footerImg from "../asset/images/footer.png";

const year = new Date().getFullYear();
const StyledFooter = styled.footer`
  background-image: url(${footerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  display: flex-box;
  height: 184px;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p style={{ fontSize: "14px", color: "#F1F8F5", paddingTop: "120px" }}>
        Made with ♡ by Sayumi Nakamura, ©︎<span>{year}</span>
      </p>
    </StyledFooter>
  );
};
export default Footer;
