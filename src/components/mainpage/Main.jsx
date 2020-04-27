import React from "react";

import Header from "./Header";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

// const StyledDiv = styled.div`
//   width: 86%;
//   margin: 8%;
//   text-align: center;
// `;

const Main = () => {
  return (
    <>
      <Header />
      <About />
      <Works />
      <Contact />
    </>
  );
};
export default Main;
