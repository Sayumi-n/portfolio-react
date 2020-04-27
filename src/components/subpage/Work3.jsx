import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { StyledButton } from "../asset/button";
import { ProjectObj } from "./ProjectContent";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const StyledHeader = styled.header`
  width: 84%;
  margin: 0 8%;
  margin-top: -176px;
  text-align: center;
  background-image: linear-gradient(#f8f8f8, #b1ccdd);
  border-bottom-left-radius: 0 50%;
  border-bottom-right-radius: 45% 50%;

  display: flex-box;
  align-self: center;
  align-items: center;
  align-content: center;
`;

const StyledSection = styled.section`
  padding: 8%;
  text-align: center;
`;
const StyledContainer = styled(Grid)`
  padding: 32px;
  text-align: center;
`;

const StyledImg = styled.img`
  position: relative;
  margin: auto 0;
  padding: 20px;

  width: 100%;
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
`;

const StyledSpan = styled.span`
  padding: 8px;
  margin: 8px;
  background-color: rgba(30, 34, 51, 0.9);
  color: #f1f8f5;
  border-radius: 5px;
  font-size: 16px;
  display: inline-block;
`;

class Work3 extends React.Component {
  onBtnClick = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };

  render() {
    return (
      <>
        <StyledHeader>
          <Typography
            variant="h4"
            color="secondary"
            style={{ paddingTop: "24px" }}
          >
            {ProjectObj.project3.title}
          </Typography>
          <StyledImg src="./images/noella.png" alt="" srcset="" />
          <Box>
            <StyledButton
              component={Link}
              style={{ margin: "16px 32px" }}
              href="https://noellatradingcompany.netlify.app/"
            >
              Visit Website
              <NavigateNextIcon />
            </StyledButton>
            <StyledButton
              component={Link}
              style={{ margin: "16px 32px" }}
              href="https://github.com/Sayumi-n/noella-shop"
            >
              View Github
              <NavigateNextIcon />
            </StyledButton>
          </Box>
        </StyledHeader>
        <StyledSection>
          <Typography variant="h6">Summary</Typography>
          <hr style={{ width: "50px" }} />
          <StyledContainer container style={{ paddingTop: "16px" }}>
            <Grid item xs={12}>
              <Typography variant="body1">
                {ProjectObj.project3.description}
              </Typography>
            </Grid>
          </StyledContainer>
          <Typography variant="h6">Built with:</Typography>
          <hr style={{ width: "50px" }} />
          <StyledContainer container>
            <Grid item xs={12}>
              {ProjectObj.project3.madeWithMain.map((item, index) => (
                <StyledSpan variant="overline" key={index}>
                  {item}
                </StyledSpan>
              ))}
            </Grid>
          </StyledContainer>
          <StyledButton className="back" onClick={this.onBtnClick}>
            <ArrowBackIcon />
          </StyledButton>
        </StyledSection>
      </>
    );
  }
}

export default Work3;
