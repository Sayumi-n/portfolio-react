import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { StyledButton } from "../asset/button";
import { ProjectObj } from "../subpage/ProjectContent";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import Slide from "react-reveal/Slide";

const StyledSection = styled.section`
  padding: 0 8% 8% 8%;
  text-align: center;
`;
const StyledContainer = styled(Grid)`
  min-height: 60vh;
`;
const StyledBackgroundDiv = styled.div`
  background-color: #b1ccdd;
  display: block;
  min-height: 40vh;
  margin: 0 auto;
  width: 84%;
  box-shadow: 3rem 1rem 1rem 0rem #f1f8f5;
  position: absolute;
  @media only screen and (min-width: 600px) {
    width: 40%;
    margin: 5vh;
  }
`;
const StyledImg = styled.img`
  position: relative;
  margin: auto 0;
  padding: 20px;
`;

const StyledProjectDescBox = styled(Box)`
  min-height: 30vh;
  @media only screen and (min-width: 600px) {
    padding: 100px 30px 0 0;
    text-align: center;
  }
`;

const StyledSpan = styled.span`
  padding: 8px;
  margin: 8px;
  line-height: 3rem;
  background-color: rgba(30, 34, 51, 0.9);
  color: #f1f8f5;
  border-radius: 5px;
  font-size: 14px;
`;

const Works = () => {
  return (
    <StyledSection id="works">
      <Typography variant="h6">Works</Typography>
      <hr style={{ width: "50px" }} />
      <StyledContainer container style={{ paddingTop: "16px" }}>
        <Grid item xs={12} sm={6}>
          <StyledBackgroundDiv></StyledBackgroundDiv>
          <StyledImg src="./images/haiku.png" alt="" width="100%" />
        </Grid>
        <Grid item xs={12} sm={6} style={{ zIndex: "2" }}>
          <StyledProjectDescBox>
            <Typography variant="subtitle1" align="left">
              <Slide right cascade>
                {ProjectObj.project1.title}
              </Slide>
            </Typography>
            <Typography variant="body2" align="left">
              <Slide right cascade>
                {ProjectObj.project1.summary}
              </Slide>
            </Typography>
            {ProjectObj.project1.madeWithMain.map((item, index) => (
              <StyledSpan variant="overline" key={index}>
                {item}
              </StyledSpan>
            ))}
            <br />

            <StyledButton href="/work1" component={Link}>
              Detail
              <NavigateNextIcon />
            </StyledButton>
          </StyledProjectDescBox>
        </Grid>
      </StyledContainer>
      <StyledContainer container>
        <Grid item xs={12} sm={6}>
          <StyledBackgroundDiv></StyledBackgroundDiv>

          <StyledImg src="./images/pics.png" alt="" width="100%" />
        </Grid>
        <Grid item xs={12} sm={6} style={{ zIndex: "2" }}>
          <StyledProjectDescBox>
            <Typography variant="subtitle1" align="left">
              <Slide right cascade>
                {ProjectObj.project2.title}
              </Slide>
            </Typography>
            <Typography variant="body2" align="left">
              <Slide right cascade>
                {ProjectObj.project2.summary}
              </Slide>
            </Typography>
            {ProjectObj.project2.madeWithMain.map((item, index) => (
              <StyledSpan variant="overline" key={index}>
                {item}
              </StyledSpan>
            ))}
            <br />

            <StyledButton href="/work2" component={Link}>
              Detail
              <NavigateNextIcon />
            </StyledButton>
          </StyledProjectDescBox>
        </Grid>
      </StyledContainer>
      <StyledContainer container>
        <Grid item xs={12} sm={6}>
          <StyledBackgroundDiv></StyledBackgroundDiv>

          <StyledImg src="./images/noella.png" alt="" width="100%" />
        </Grid>
        <Grid item xs={12} sm={6} style={{ zIndex: "2" }}>
          <StyledProjectDescBox>
            <Typography variant="subtitle1" align="left">
              <Slide right cascade>
                {ProjectObj.project3.title}
              </Slide>
            </Typography>
            <Typography variant="body2" align="left">
              <Slide right cascade>
                {ProjectObj.project3.summary}
              </Slide>
            </Typography>
            {ProjectObj.project3.madeWithMain.map((item, index) => (
              <StyledSpan variant="overline" key={index}>
                {item}
              </StyledSpan>
            ))}
            <br />

            <StyledButton href="/work2" component={Link}>
              Detail
              <NavigateNextIcon />
            </StyledButton>
          </StyledProjectDescBox>
        </Grid>
      </StyledContainer>
    </StyledSection>
  );
};

export default Works;
