import React from "react";
import logo from "../assets/login.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import background from "../assets/pic1.jpg";

function Header() {
  return (
    <>
      <Navbar
        className="py-1"
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="light"
        variant="light"
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            left: "40px",
          }}
        >
          <Navbar.Brand>
            <div style={{ display: "flex" }}>
              <img src={logo} width="80px" height="60px " alt="" />
            </div>
          </Navbar.Brand>
        </div>
        <div
          style={{
            fontFamily: "comic sans MS",
            fontWeight: "bold",
            textShadow: "2px 2px black",

            textAlign: "center",
          }}
        >
          <h2 style={{ fontWeight: "bold" }}>HomeLibrary</h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        ></div>
      </Navbar>
    </>
  );
}

export default Header;
