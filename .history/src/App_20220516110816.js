import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login-Signin/Login";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Login-Signin/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import Calendar from "./Pages/Calendar/Calendar";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />

          <Container
            className="d-flex align-items-center justify-content-center "
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </div>

            <div>
              <Route path="/calendar" component={Calendar} />

              <Route path="/about-us" component={AboutUs} />
              <Route path="/contact" component={Contact} />
            </div>
          </Container>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
