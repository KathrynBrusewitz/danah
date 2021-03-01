import React from "react";
import "./layout.css";
import Colors from "./Colors";
import NavBar from "./NavBar";

const style = {
  color: Colors.black,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 100,
  paddingBottom: 100,
  maxWidth: 760,
  margin: "0 auto",
};

export default function Layout({ children }) {
  return (
    <main style={style}>
      <NavBar />
      {children}
    </main>
  );
}
