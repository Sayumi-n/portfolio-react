import React from "react";

import Header from "./Header";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Spinner from "../asset/Loader";

class Main extends React.Component {
  state = { loaded: false };
  componentDidMount() {
    this.setState({ loaded: true });
  }
  render() {
    return !this.state.loaded ? (
      <Spinner />
    ) : (
      <>
        <Header />
        <About />
        <Works />
        <Contact />
      </>
    );
  }
}
export default Main;
