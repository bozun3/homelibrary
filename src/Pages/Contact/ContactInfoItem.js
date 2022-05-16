import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: black;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  width: 600px;
  color: white;
  height: 60px;
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "this is an info",
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon} </div>
      <div className="info">{text}</div>
    </ItemStyles>
  );
}
