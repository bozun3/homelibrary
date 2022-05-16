import React from "react";
import "../Components/footer.css";
import SocialFollow from "./SocialFollow";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-ftr">
        <div className="footer-bottom" style={{ textAlign: "left" }}>
          <p className="text-xs-center" style={{ paddingLeft: "20px" }}>
            HomeLibrary App <br /> &copy;{new Date().getFullYear()} HomeLibrary
            App. All Rights Reserved.
            <br />
            <a href="mailto:dean.bozunovic@blc.edu.ba">
              dean.bozunovic@blc.edu.ba
            </a>
          </p>
        </div>
        <SocialFollow />
      </div>
    </div>
  );
}
