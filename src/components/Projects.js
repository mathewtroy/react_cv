// Projects.js
import React from 'react';

const Projects = () => (
  <section className="projects">
          <h2>Projects</h2>
          <ul>
            <h3>September 2022 - Present:</h3>
            <li><strong>Website with travel packages:</strong> 
                | HTML, CSS, JavaScript, MySQL, PHP. 
              <span>
                Designed and built a full-stack travel package website, 
                implementing security measures against XSS, password hashing, 
                server and client-side validation during login.
              </span>
            </li>

            <li><strong>EShop testing:</strong> | Java, ACTS, PCTgen. 
                <span>Performed Selenium-based website testing.</span>
            </li>

            <li><strong>Role-playing game 2D game:</strong> | Java, Swing, Maven. 
              <span>
                Developed a 2D role-playing game. Implemented 
                enemy characters with multi-threaded programming, including 
                animations, actions, and AI behavior such as walking, attacking, 
                and pursuing the main hero.
              </span>
            </li>

            <li><strong>Database Application:</strong> 
              <span>
                Java Spring, PostgreSQL. Created a CRUD system for Travel Agency.
              </span>
            </li>

            <li><strong>Project of a mobile bank:</strong> 
                | Enterprise Architect.
              <span>
                Produced documentation for a mobile bank 
                project using Business Domain Model, Business Process, 
                Deployment, UML and Use Case diagrams.
              </span>
            </li>
          </ul>
  </section>
);

export default Projects;
