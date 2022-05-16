import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faSteam,
  faInstagram,
  faGithub,
  faEnvelope,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div
      className="social-container"
      style={{ justifyContent: "center", paddingLeft: "15px" }}
    >
      <a
        href="https://github.com/bozun3"
        className="github social"
        style={{ margin: " 0 0.5rem" }}
      >
        {" "}
        <FontAwesomeIcon icon={faGithub} size="2x" />{" "}
      </a>

      <a
        href="https://instagram.com/brdinamnam"
        className="instagram social"
        style={{ margin: " 0 0.5rem" }}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCIIKeEsnC6hdTv2fkjLfKJg"
        className="youtube social"
        style={{ margin: " 0 0.5rem" }}
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />{" "}
      </a>
      <a
        href="https://steamcommunity.com/profiles/76561198350648094"
        className="steam social"
        style={{ margin: " 0 0.5rem" }}
      >
        <FontAwesomeIcon icon={faSteam} size="2x" />{" "}
      </a>
    </div>
  );
}
