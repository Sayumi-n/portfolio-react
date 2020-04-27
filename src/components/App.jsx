import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./asset/theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Main from "./mainpage/Main";
import Work1 from "./subpage/Work1";
import Work2 from "./subpage/Work2";
import Work3 from "./subpage/Work3";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/work1" component={Work1} />
            <Route exact path="/work2" component={Work2} />
            <Route exact path="/work3" component={Work3} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
