import React, { useEffect } from "react";
import NavBar from "react-bootstrap/Navbar";
const fs = window.require("fs");

import MainForm from "./components/Form";

const App = () => {
  let users = [];
  useEffect(() => {
    localStorage.clear();
    fs.readFile("C:/frontEndSample/test.json", (err, data) => {
      if (data) {
        users = JSON.parse(data);
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        localStorage.setItem("users", JSON.stringify([]));
      }
    });
  }, [fs]);
  return (
    <>
      <div className="container container-height">
        <MainForm />
      </div>
    </>
  );
};

export default App;
