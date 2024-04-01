import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.jpg";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Notre Equipe</h2>
              <p>
              L'équipe de HearMe est composée d'une fondatrice passionnée et expérimentée, d'une experte en éducation, de développeurs web spécialistés en intelligence artificielle, d'un responsable du support client et marketing. Cette équipe multidisciplinaire permettra de combiner les compétences nécessaires pour concevoir, développer et promouvoir efficacement la plateforme d'apprentissage en ligne et l'intelligence artificielle de traduction du langage des signes malagasy.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={30} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">Projets digitales réaliser</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={30000} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">Bénéficiaires présumé</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={100} duration={2} suffix="M Ariary" />
                    </span>

                    <p className="counter__title">Fond requis</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={500} duration={2} suffix="M Ariary" />
                    </span>

                    <p className="counter__title">Valeur du marcher</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
