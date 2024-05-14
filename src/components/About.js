import React from "react";
import { image } from "../data/user";

export default function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src={image} alt="profile" />
    </div>
  );
}

