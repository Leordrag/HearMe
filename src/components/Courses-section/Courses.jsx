import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/Agri.jpg";
import courseImg2 from "../../assests/images/Design.jpg";
import courseImg3 from "../../assests/images/Redaction.jpeg";
import "./courses.css";
import CourseCard from "./CourseCard";

// agribusiness, community manager, graphic desing, redaction web
const coursesData = [
  {
    id: "01",
    title: "Agri business",
    lesson: 12,
    students: 2,
    rating: 70000,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Graphics Design, Adobe XD, Canva",
    lesson: 12,
    students: 1,
    rating: 70000,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Redaction web",
    lesson: 12,
    students: 5,
    rating: 70000,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Nos cours tendances</h2>
                <p>
                Les cours proposés par HearMe sont très bénéfiques pour les personnes sourdes et muettes intéressées par les domaines de l'agri-business, et les metiers du web. La plateforme d'apprentissage en ligne est conçue pour fournir une expérience d'apprentissage interactive et accessible, en utilisant des vidéos, des images et des textes en langue des signes malagasy pour transmettre les informations de manière claire et précise.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">Voir tout</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
