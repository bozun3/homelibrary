import React, { Component } from "react";

import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import MainPage from "./MainPage";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="push" style={{ height: "150px" }}></div>
        <MainPage />
        <div className="push" style={{ height: "200px" }}></div>

        <Footer />
      </div>
    );
  }
}
export default Home;
