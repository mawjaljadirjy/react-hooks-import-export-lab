import React from "react";
import { username, city } from "../data/user";

export default function Home() {
  return (
    <div id="home">
      <h1>Welcome, {username}!</h1>
      <p>{city}</p>
    </div>
  );
}
