import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
//*STYLE
import "./Authentication.scss";

const SignIn = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Container className="SignIn__container">
      <div className="SignIn__wrapper">
        <animated.div style={props} className="SignIn__form">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            <Button className="SignIn__button" type="submit">
              SIGN IN
            </Button>
          </Form>
        </animated.div>
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
