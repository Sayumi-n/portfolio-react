import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { AboutContent } from "./AboutContent";
import profileImg from "../asset/images/profile.png";

const StyledSection = styled.section`
  padding: 8% 8% 0 8%;
  text-align: center;
  @media only screen and (max-width: 600px) {
    padding-top: 60px;
  }
`;

const StyledItem1 = styled(Grid)`
  background: #b1ccdd;
  border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
  mix-blend-mode: multiply;
  margin-left: 3%;
  height: 300px;
  padding: 30px;
  margin-right: -3%;
`;
const StyledItem2 = styled(Grid)`
  color: #1e2233;
  background: #f1f8f5;
  border-radius: 80% 30% 50% 50%/50%;
  height: 300px;
  padding: 30px;
  mix-blend-mode: multiply;
  margin-right: -3%;
`;
const StyledItem3 = styled(Grid)`
  background: #b1ccdd;
  padding: 30px;
  border-radius: 40% 40% 50% 40%/40% 50% 50% 50%;
  height: 300px;
`;

const StyledHeadlineDiv = styled.div`
  @media only screen and (min-width: 600px) {
    margin-left: -20%;
    padding-top: 50px;
  }
`;

const About = () => {
  return (
    <>
      <StyledSection id="about" style={{ marginTop: "8%" }}>
        <Typography variant="h6">About</Typography>
        <hr style={{ width: "50px" }} />
        <Grid container style={{ paddingTop: "16px" }}>
          <Grid item xs={12} sm={5} align="center">
            <Fade left>
              <img
                src={profileImg}
                alt="profilepic"
                //   style={{ padding: "30px" }}
                width="60%"
              />
            </Fade>
          </Grid>
          <Grid item xs={12} sm={7}>
            <StyledHeadlineDiv>
              <Fade right>
                <Typography variant="subtitle1" align="left">
                  I'm Sayumi, a Solutions Engineer.
                </Typography>
              </Fade>
            </StyledHeadlineDiv>
            <p align="right" style={{ padding: "30px" }}>
              {AboutContent.aboutMe.text}
            </p>
          </Grid>
        </Grid>
      </StyledSection>
      <StyledSection style={{ paddingBottom: "8%" }}>
        <Typography variant="h6">What I Do</Typography>
        <hr style={{ width: "50px" }} />

        <Grid container text-align="center" style={{ paddingTop: "16px" }}>
          <StyledItem1 item xs={12} sm={4} align="center">
            <Zoom>
              <Box>
                <Typography
                  variant="subtitle1"
                  style={{ paddingBottom: "8px" }}
                >
                  Interests
                </Typography>
                {AboutContent.lists.interest.list.map((item, index) => (
                  <Typography variant="body1" key={index}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Zoom>
          </StyledItem1>

          <StyledItem2 item xs={12} sm={4} align="center">
            <Zoom>
              <Box>
                <Typography
                  variant="subtitle1"
                  style={{ paddingBottom: "8px" }}
                >
                  Technical Support
                </Typography>
                {AboutContent.lists.technicalSupport.list.map((item, index) => (
                  <Typography variant="body1" key={index}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Zoom>
          </StyledItem2>
          <StyledItem3 item xs={12} sm={4} align="center">
            <Zoom>
              <Box>
                <Typography
                  variant="subtitle1"
                  style={{ paddingBottom: "8px" }}
                >
                  Web Development
                </Typography>

                {AboutContent.lists.frontEnd.list.map((item, index) => (
                  <Typography variant="body1" key={index}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Zoom>
          </StyledItem3>
        </Grid>
      </StyledSection>
    </>
  );
};

export default About;
