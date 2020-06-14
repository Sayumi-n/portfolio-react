import React from "react";
import styled, { keyframes } from "styled-components";
import { Typography } from "@material-ui/core";
import Zoom from "react-reveal/Zoom";
import { HashLink } from "react-router-hash-link";
import HeaderImg from "../asset/images/top.png";

const StyledHeader = styled.header`
  width: 84%;
  margin: -184px 8% 0 8%;
  text-align: center;

  // &.loaded {
  background-image: url(${HeaderImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // }
  height: 90vh;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;

const TitleDiv = styled.div`
  padding: 35vh 10%;
`;

const ScrollBtn = styled.div`
  position: absolute;
  bottom: 80px;
  margin: 0 auto;
  width: 120px;
  height: 60px;
  display: inline-block;
  text-align: center;
`;

const arrowAnimation = keyframes`
0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }

`;
const ScrollArrow = styled.span`
  display: block;
  position: absolute;
  top: 0;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  margin-top: 12px;
  border-left: 1px solid #1e2233;
  border-bottom: 1px solid #1e2233;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: ${arrowAnimation} 1.5s infinite;
  animation: ${arrowAnimation} 1.5s infinite;
  box-sizing: border-box;
`;
const ScrollArrowText = styled.span`
  color: #1e2233;
  font-size: 1rem;
  margin-left: -120px;
`;

const Header = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 200);
  // }, []);
  // className={isLoading ? "" : "loaded"}
  return (
    <StyledHeader id="top">
      <TitleDiv>
        <Zoom>
          <Typography variant="h4" style={{ color: "#1E2233" }}>
            Hi, I'm Sayumi, <br />a Front-end Web Developer.
          </Typography>
        </Zoom>
      </TitleDiv>
      <HashLink smooth={true} to="/#works">
        <ScrollBtn>
          <ScrollArrow></ScrollArrow>
          <ScrollArrowText>View my work</ScrollArrowText>
        </ScrollBtn>
      </HashLink>
    </StyledHeader>
  );
};

export default Header;
