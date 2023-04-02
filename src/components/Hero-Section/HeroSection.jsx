import React from "react";
import { Container, Row, Col } from "reactstrap";
import videoAcceuil from "../../assests/images/Video.mp4";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                HearMe <br /> La premiere plateforme d'apprentissage pour les sourds et/ou muets a Madagascar <br />
              </h2>
              <p className="mb-5">
              HearMe est une startup qui vise à aider les personnes sourdes et muettes à acquérir des compétences dans des domaines spécifiques et à améliorer leur communication grâce à une plateforme d'apprentissage en ligne et à une intelligence artificielle de traduction du langage des signes.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Rechercher" />
              <button className="btn">Rechercher</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <video src={videoAcceuil} alt="" className="w-100 hero__img" width="600" height="300" controls="controls" autoplay="true"  />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
