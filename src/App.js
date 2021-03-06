import React from 'react';
/* COMPONENTS */
import Header from './components/header/header'
import Switch from './components/switch/switch'
/* MATERIAL UI COMPONENTS */
import './App.css';

function App() {

  return (
    <div className="App"> 
      <Switch />
      <div className="cv-resume-container">
        {/* HEADER */}
        <Header 
        name="VICTOR MANUEL VANEGAS RODRIGUEZ" 
        degree="DESARROLLADOR JUNIOR FRONTEND"
        />
        {/* HEADER END*/}
        <main className="cv-body">
          {/* LEFT SECTION */}
            <section className="cv-left-section">
              {/* EXPERIENCE */}
              <div className="cv-experience-section">
                <div className="cv-title-divider">
                    <div className="cv-title-text">
                      <i className="fas fa-suitcase"></i>
                      <h2>Experiencia</h2>
                    </div>                  
                  <hr/>
                </div>
                <div className="cv-experience">
                  <article className="cv-experience-text">
                    <div className="company-name">
                      <h4><b>Credyty |</b> Bogotá</h4>
                    </div>
                    <div className="date">
                      <small>Dic 2019 - Jul 2020</small>
                    </div>
                    <div className="activities">
                      <p>
                        Consumo de servicios rest api
                        Maquetación de Interfaces de Usuario
                        Desarrollo e implementación de interfaces (HTML, CSS, Javascript,
                        Angular)
                        Adaptación de páginas web a diferentes dispositivos(responsive)
                        </p>
                    </div>
                  </article>
                </div>
                <div className="cv-experience">
                  <article className="cv-experience-text">
                    <div className="company-name">
                      <h4><b>Elvecino.com sas |</b> Bogotá</h4>
                    </div>
                    <div className="date">
                      <small>Jun 2018 - Ene 2019</small>
                    </div>
                    <div className="activities">
                      <p>
                      Aplicar principios, conceptos, prácticas y estándares del campo
                      profesional a proyectos y tareas.
                      Diseño de Interfaces de Usuario
                      Soporte técnico
                      Desarrollo e implementación de interfaces (HTML, CSS, Javascript,
                      AngularJS)
                      Gestión de equipos de computo
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              {/* EXPERIENCE END*/}
              {/* SKILLS */}
              <div className="cv-left-skills">
                <div className="cv-title-divider">
                    <div className="cv-title-text">
                      <i className="far fa-futbol"></i>
                      <h2>Habilidades</h2>
                    </div>
                  <hr/>
                </div>
                <div className="cv-skills">
                  <div className="skill-range">
                    <label htmlFor="html-css">HTML / CSS</label>
                  </div>
                  <div className="skill-range">
                    <label htmlFor="javascript-typescript">JAVASCRIPT / TYPESCRIPT</label>
                  </div>
                  <div className="skill-range">
                    <label htmlFor="react">REACT</label>
                  </div>
                  <div className="skill-range">
                    <label htmlFor="angular">ANGULAR</label>
                  </div>
                  <div className="skill-range">
                    <label htmlFor="github">GITHUB</label>
                  </div>
                  <div className="skill-range">
                    <label htmlFor="api-services-conection">CONECCION SERVICIOS API</label>
                  </div>
                  <div className="skill-range">
                    <label htmlFor="responsive-design">DISEÑO RESPONSIVE</label>
                  </div>
                </div>
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
                    Soy una persona disciplinada,
                    responsable muy comprometido
                    con mi trabajo y con muchos
                    deseos de aprender, tengo 6
                    meses de practica en la empresa
                    elVecino.com como desarrollador
                    junior y 7 meses de experiencia en
                    la empresa Credyty desarrollando
                    interfaces con HTML CSS y
                    JavaScript, conocimientos en
                    HTML, CSS, JavaScript, React,
                    Angular, Typescript, Diseño
                    responsive, Maquetación web y
                    consumo de servicios rest api,
                    aspiró a estudiar una carrera
                    profesional en el área de
                    Ingeniería de sistemas y
                    especializarme en Desarrollo Web.
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
                    <h5>Técnico en programacion
                      de software</h5>
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
                    <h5>Tecnológo en análisis y desarrollo
                    de sistemas de informacion</h5>
                  </div>
                  <div className="cv-small-text">
                    <small>SENA</small>
                  </div>
                  <div className="cv-small-text">
                    <small>2020 - actualmente cursando</small>
                  </div>
                </div>
              </div>
              {/* EDUCATION END*/}
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
              <small>Cel +57 3007484716</small>
            </div>
          </div>
          <div className="cv-footer-email">
            <div className="cv-title-text">
              <i className="far fa-envelope"></i>
              <h2>Correo</h2>
            </div>
            <div className="cv-small-text">
              <small>vanegas.victor2001@gmail.com</small>
            </div>
          </div>
          <div className="cv-footer-network">
            <div className="cv-title-text">
              <i className="fas fa-user-friends"></i>
              <h2>Network</h2>
            </div>
            <div className="cv-small-text">
              <small><a href="https://www.linkedin.com/in/vmvanegas/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vmvanegas</a></small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
