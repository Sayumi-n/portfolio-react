import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import SendIcon from "@material-ui/icons/Send";
import Link from "@material-ui/core/Link";

const StyledSection = styled.section`
  text-align: center;
  padding: 0 8% 8% 8%;
`;

const Contact = () => {
  return (
    <StyledSection align="center">
      <Typography variant="h6" align="center">
        Contact
      </Typography>
      <hr style={{ width: "50px" }} />
      <Grid container style={{ paddingTop: "16px" }} align="center">
        <Grid item xs={12}>
          <Typography variant="body1">Reach me by email:</Typography>
          <Typography variant="body1">
            <SendIcon />
          </Typography>
          <Typography
            variant="subtitle1"
            component={Link}
            href="mailto:sayumi.nkmr.2019@gmail.com"
            color="secondary"
          >
            sayumi.nkmr.2019@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </StyledSection>
  );
};

export default Contact;
