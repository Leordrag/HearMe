import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Pourquoi nous choisir?</h2>
              <p>
              HearMe est la première plateforme d'apprentissage en ligne destinée aux personnes sourdes et muettes malgaches. Grâce à l'utilisation de la langue des signes malagasy et à l'intelligence artificielle de traduction intégrée, la plateforme rend l'apprentissage accessible à tous.
              Les cours proposés par HearMe sont dispensés par des formateurs qualifiés ayant une expérience pratique dans leur domaine. Les cours sont conçus pour être adaptés aux besoins et aux niveaux de compétence des apprenants.
              HearMe offre la possibilité de suivre les cours en ligne à son propre rythme et à tout moment. Les apprenants peuvent également poser des questions et bénéficier d'un soutien personnalisé de la part des formateurs.
              Les cours proposés par HearMe sont axés sur les domaines de l'agri-business, de la comptabilité et du développement web, qui sont des secteurs en plein essor à Madagascar. Les apprenants pourront ainsi développer des compétences pertinentes pour leur future carrière.
              En choisissant HearMe, les clients contribuent à promouvoir l'inclusion sociale et l'égalité des chances pour les personnes sourdes et muettes malgaches.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
