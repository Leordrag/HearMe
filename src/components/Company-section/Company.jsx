import React from "react";
import { Container, Row, Col } from "reactstrap";
import ODC from "./ODC.png";
import UNDP from "./UNDP.png";
import Flamingo from "./Flamingo.png";

const Company = () => {
  return (
    <section>
      <h1>Collaborateurs:</h1>
      <Container>
        <Row>
          <Col lg="2" md="4" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <img className="logo" src={ODC}></img> <h5>Orange Digital Center</h5>
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <img className="logo" src={UNDP}></img> <h5>United Nations Development Programme</h5>
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <img className="logo" src={Flamingo}></img> <h5>Flamingo Girls for Change</h5>
            </h3>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
};

export default Company;
