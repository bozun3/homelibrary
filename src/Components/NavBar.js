import React, { useState } from "react";
import logo from "../assets/login.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Nav, Navbar } from "react-bootstrap";
import background from "../assets/pic1.jpg";
import { useAuth } from "../AuthContext";
import { useHistory } from "react-router-dom";

function NavBar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Navbar
        className="py-2"
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
            <div
              style={{
                display: "flex",
                fontWeight: "bold",
              }}
            >
              <img src={logo} width="80px" height="60px " alt="" />
            </div>
          </Navbar.Brand>

          <Nav>
            <Nav.Link href="/">App</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/about-us"> About</Nav.Link>
            <Nav.Link href="/contact"> Contact</Nav.Link>
          </Nav>
        </div>
        <div>
          <h2
            style={{
              fontFamily: "comic sans MS",
              fontWeight: "bold",
              textShadow: "2px 2px black",
            }}
          >
            HomeLibrary
          </h2>
          <div>
            <h6>User:{currentUser.email}</h6>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            className="btn btn-dark "
            onClick={handleLogout}
            style={{
              backgroundColor: "green",
              borderColor: "green",
              position: "relative",
              right: "30px",
            }}
          >
            Log out
          </Button>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
