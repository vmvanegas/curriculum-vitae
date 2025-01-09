import React, { forwardRef } from "react";
/* COMPONENTS */
import Header from "../../components/header/header";
import TitleDivider from "../../components/TitleDivider/TitleDivider";
import Experience from "../../components/Experience/Experience";
import { curriculumVitaeData } from "../../utils/utils-const";
/* MATERIAL UI COMPONENTS */
import "./CurriculumVitae.css";
import Skill from "../../components/Skill/Skill";

const CurriculumVitae = forwardRef(() => {
  const experienceData = curriculumVitaeData.experiences.map(
    (enterprise, i) => {
      return <Experience key={enterprise.id} data={enterprise} />;
    }
  );

  const skillData = curriculumVitaeData.skills.map((skill) => {
    return <Skill key={skill.id}>{skill.name}</Skill>;
  });

  return (
    <div id="cv-page" className="cv-resume-container">
      {/* HEADER */}
      <Header
        name="VICTOR MANUEL VANEGAS RODRIGUEZ"
        degree="DESARROLLADOR SEMI SENIOR FRONTEND"
      />
      {/* HEADER END*/}
      <main className="cv-body">
        {/* LEFT SECTION */}
        <section className="cv-left-section">
          {/* EXPERIENCE */}
          <div className="cv-experience-section">
            <TitleDivider text="Experiencia" icon="fas fa-suitcase" />
            {experienceData}
          </div>
          {/* EXPERIENCE END*/}
          {/* SKILLS */}
          <div className="cv-left-skills">
            <TitleDivider text="Habilidades" icon="far fa-futbol" />
            <div className="cv-skills">{skillData}</div>
          </div>
          {/* SKILLS END*/}
        </section>
        {/* LEFT SECTION END*/}

        {/* RIGHT SECTION */}
        <aside className="cv-right-section">
          {/* PROFILE */}
          <div className="cv-profile-section">
            <div className="cv-title-text">
              <i className="far fa-user"></i>
              <h2>Perfil</h2>
            </div>
            <div className="profile-section-text">
              <p>
                Desarrollador Frontend con 4 años experiencia en proyectos de gran
                escala, Especializado en la implementación y mantenimiento de
                microfrontends con React y Angular, integrando sistemas de
                diseño Poseo sólidos conocimientos en: HTML, CSS,
                JavaScript/TypeScript: Aplicación de buenas prácticas para
                garantizar accesibilidad y rendimiento. Gestión de estado: Uso
                de bibliotecas como Zustand, Redux y Context API. Integración de
                APIs REST y GraphQL: Configuración de servicios eficientes y
                manejos de respuestas. Ecosistemas modernos de frontend:
                Experiencia con herramientas como Vite para optimizar el
                desarrollo. Control de versiones y CI/CD: Familiaridad con Git,
                GitHub y pipelines automatizados. Adicionalmente, tengo
                habilidades para colaborar en equipos multidisciplinarios,
                participar en decisiones arquitectónicas. Mi enfoque siempre
                está en crear soluciones escalables, optimizadas y alineadas con
                los objetivos de negocio.
              </p>
            </div>
          </div>
          {/* PROFILE END*/}
          {/* EDUCATION */}
          <div className="cv-education-section">
            <div className="cv-title-text">
              <i className="far fa-bookmark"></i>
              <h2>Educación</h2>
            </div>
            <div className="cv-education-text">
              <div className="carrer-name">
                <h5>Técnico en programacion de software</h5>
              </div>
              <div className="cv-small-text">
                <small>SENA</small>
              </div>
              <div className="cv-small-text">
                <small>2018 - 2019</small>
              </div>
            </div>
            <div className="cv-education-text">
              <div className="carrer-name">
                <h5>
                  Tecnológo en análisis y desarrollo de sistemas de informacion
                </h5>
              </div>
              <div className="cv-small-text">
                <small>SENA</small>
              </div>
              <div className="cv-small-text">
                <small>2020 - 2022</small>
              </div>
            </div>
            {/* <div className="cv-education-text">
                            <div className="carrer-name">
                                <h5>Ingeniería de software</h5>
                            </div>
                            <div className="cv-small-text">
                                <small>POLI</small>
                            </div>
                            <div className="cv-small-text">
                                <small>2023 - Actualmente</small>
                            </div>
                        </div> */}
          </div>
          {/* EDUCATION END*/}
          {/* LANGUAGES */}
          <div className="cv-education-section">
            <div className="cv-title-text">
              <i className="far fa-bookmark"></i>
              <h2>Idiomas</h2>
            </div>
            <div className="cv-education-text">
              <div className="cv-small-text">
                <small>Español - Lengua nativa</small>
              </div>
            </div>
            <div className="cv-education-text">
              <div className="cv-small-text">
                <small>Ingles - Nivel basico (A2)</small>
              </div>
            </div>
          </div>
          {/* LANGUAGES END*/}
        </aside>
        {/* RIGHT SECTION END*/}
      </main>
      {/* FOOTER */}
      <footer className="cv-footer">
        <div className="cv-footer-phone">
          <div className="cv-title-text">
            <i className="fas fa-phone-alt"></i>
            <h2>Teléfono</h2>
          </div>
          <div className="cv-small-text">
            <a
              href="tel:+573007484716"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>Cel +57 3007484716</small>
            </a>
          </div>
        </div>
        <div className="cv-footer-email">
          <div className="cv-title-text">
            <i className="far fa-envelope"></i>
            <h2>Correo</h2>
          </div>
          <div className="cv-small-text">
            <a
              href="mailto:vanegas.victor2001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>vanegas.victor2001@gmail.com</small>
            </a>
          </div>
        </div>
        <div className="cv-footer-network">
          <div className="cv-title-text">
            <i className="fas fa-user-friends"></i>
            <h2>Network</h2>
          </div>
          <div className="cv-small-text">
            <small>
              <a
                href="https://www.linkedin.com/in/vmvanegas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/vmvanegas
              </a>
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default CurriculumVitae;
