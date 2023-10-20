import React, { forwardRef } from 'react';
/* COMPONENTS */
import Header from '../../components/Header/Header';
import TitleDivider from '../../components/TitleDivider/TitleDivider';
import Experience from '../../components/Experience/Experience';
import {curriculumVitaeData} from '../../utils/utils-const';
/* MATERIAL UI COMPONENTS */
import './CurriculumVitae.css';
import Skill from '../../components/Skill/Skill';

const CurriculumVitae = forwardRef(() => {

    const experienceData = curriculumVitaeData.experiences.map((enterprise, i) => {
        return <Experience key={enterprise.id} data={enterprise} />
    })

    const skillData = curriculumVitaeData.skills.map((skill) => {
        return <Skill key={skill.id}>{skill.name}</Skill>
    })

    return (
        <div id="cv-page" className="cv-resume-container">
            {/* HEADER */}
            <Header
                name="VICTOR MANUEL VANEGAS RODRIGUEZ"
                degree="DESARROLLADOR FRONTEND"
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
                        <div className="cv-skills">
                            {skillData}
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
                                responsable, muy comprometido
                                con mi trabajo y con muchos
                                deseos de aprender, tengo 3 años
                                de experiencia como desarrollador
                                junior frontend desarrollando
                                interfaces con HTML, CSS,
                                JavaScript, Angular conocimientos en
                                HTML, CSS, JavaScript, React,
                                Angular, Typescript, Diseño
                                responsive, Maquetación web y
                                consumo de servicios rest api,
                                actualmente cursando la carrera
                                profesional en el área de
                                Ingeniería de software.
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
                        <a href="tel:+573007484716" target="_blank" rel="noopener noreferrer"><small>Cel +57 3007484716</small></a>
                    </div>
                </div>
                <div className="cv-footer-email">
                    <div className="cv-title-text">
                        <i className="far fa-envelope"></i>
                        <h2>Correo</h2>
                    </div>
                    <div className="cv-small-text">
                        <a href="mailto:vanegas.victor2001@gmail.com" target="_blank" rel="noopener noreferrer"><small>vanegas.victor2001@gmail.com</small></a>
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
    );
})

export default CurriculumVitae;
