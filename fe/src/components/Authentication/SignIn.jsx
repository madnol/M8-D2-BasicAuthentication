import React from "react";
import { Form, Button, Container } from "react-bootstrap";

//*STYLE
import "./Authentication.scss";

const SignIn = () => {
  return (
    <Container className="SignIn__container">
      <div className="SignIn__wrapper">
        <Form className="SignIn__form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button className="SignIn__button" type="submit">
            Submit
          </Button>
        </Form>
        <div className="SignIn__balls1"></div>
        <div className="SignIn__balls2"></div>
        <div className="SignIn__balls3"></div>
        <div className="SignIn__balls4"></div>
        <div className="SignIn__balls5"></div>
      </div>
    </Container>
  );
};

export default SignIn;
