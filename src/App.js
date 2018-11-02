import React from "react";
import "./App.less";
import Header from "./Header/Header.js";
import AboutUs from "./AboutUs/AboutUs.js";
// import Filters from './Filters/Filters';
import FloorPlan from "./FloorPlan/FloorPlan";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";

import Events from "./EventsSection/Events";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Events />
        <AboutUs />
        {/* <Filters /> */}
        <FloorPlan />
        <FAQ />
        <Contact />
      </div>
    );
  }
}
