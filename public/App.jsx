import React, { useEffect } from "react";
import NavBar from "react-bootstrap/Navbar";
const fs = window.require("fs");

import MainForm from "./components/Form";

const App = () => {
  let users = [];
  useEffect(() => {
    fs.readFile("C:/frontEndSample/test.json", (err, data) => {
      if (data) {
        users.push(JSON.parse(data));
      }
    });
    localStorage.setItem("users", JSON.stringify(users));
  }, []);
  return (
    <>
      <div className="container container-height">
        <MainForm />
      </div>
    </>
  );
};

export default App;
