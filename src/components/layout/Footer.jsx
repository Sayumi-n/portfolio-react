import React from "react";
import styled from "styled-components";

const year = new Date().getFullYear();
const StyledFooter = styled.footer`
  background-image: url("./images/footer.png");
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
