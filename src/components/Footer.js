import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Josiah Williams</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} All rights reserved | This portfolio is made with ❤️by Josiah williams</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/Josiah-williams" style={{ color: "white" }}>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/josiahwilliams"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Josiah51039920"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
