import React from "react";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { text } from "@fortawesome/fontawesome-svg-core";
import ContactForm from "./ContactForm";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection-wrapper {
    display: flex;
    gap: 5rem;
    margintop: 7rem;
    justify-content: center;
    position: relative;
  }
`;

export default function ContactSection() {
  return (
    <div>
      <div className="container" style={{ textAlign: "center" }}>
        <h1> Contact</h1>

        <div className="contactSection-wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+65397419" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="dean.bozunovic3@gmail.com"
            />
            <ContactInfoItem text="Brod, Republika Srpska " />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
