import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const fs = window.require("fs");

const createFile = content => {
  fs.writeFile("C:/frontEndSample/sample.json", JSON.stringify(content), () =>
    window.alert("file saved")
  );
};

const saveAndCreateFileContent = content => {
  let storedData = JSON.parse(localStorage.getItem("users"));
  storedData.push(content);
  localStorage.setItem("users", JSON.stringify(storedData));
  return storedData;
};

const changeDataToObject = formData => {
  const {
    First_Name,
    Last_name,
    Email,
    confirm_email,
    Phone,
    tos,
    moreInfo
  } = formData;

  const formObj = {
    First_Name: First_Name.value,
    Last_name: Last_name.value,
    Email: Email.value,
    confirm_email: confirm_email.value,
    Phone: Phone.value,
    tos: tos.checked,
    moreInfo: moreInfo.checked
  };

  return formObj;
};

const handelSubmit = event => {
  event.preventDefault();
  const content = changeDataToObject(event.target);
  const saveData = saveAndCreateFileContent(content);
  createFile(saveData);
  event.target.reset();
};

const MainForm = () => {
  return (
    <Form
      onSubmit={handelSubmit}
      style={{ height: "100%" }}
      className="d-flex flex-column justify-content-around"
    >
      <section className="px-5">
        <Form.Group controlId="First_Name">
          <Form.Control
            className="input border-0 text-white"
            type="text"
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group controlId="Last_name">
          <Form.Control
            className="input border-0 text-white"
            type="text"
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Control
            className="input border-0 text-white"
            type="email"
            placeholder="E-mail"
          />
        </Form.Group>
        <Form.Group controlId="confirm_email">
          <Form.Control
            className="input border-0 text-white"
            type="Text"
            placeholder="Confirm Email"
          />
        </Form.Group>
        <Form.Group controlId="Phone">
          <Form.Control
            className="input border-0 text-white"
            type="phone"
            placeholder="Phone"
          />
        </Form.Group>
      </section>
      <section>
        <div className="my-3">
          <span className="rmi">request more information</span>
        </div>
        <Card className="custom-bg text-white card-height p-3">
          <Form.Check
            custom
            type="checkbox"
            label="Agree to TOS"
            id="tos"
            className="mb-5"
            required
          />
          <Form.Check
            custom
            type="checkbox"
            label="Would Like More Information"
            id="moreInfo"
          />
        </Card>
      </section>
      <section>
        <div className="bgrid mb-2">
          <Button
            type="submit"
            size="lg"
            className="px-5 border-0 custom-bg_button text-dark"
          >
            Submit
          </Button>
        </div>
        <div className="bgrid">
          <Button
            type="reset"
            size="sm"
            className="px-5 bg-dark custom-text border-0"
          >
            Cancel
          </Button>
        </div>
      </section>
    </Form>
  );
};

export default MainForm;
