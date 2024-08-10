// Projects.js
import React from 'react';

const Projects = () => (
  <section className="projects">
          <h2>Projects</h2>
          <ul>
            <h3>September 2022 - Present:</h3>

            <li>
              <a href="https://mathewtroy.github.io/whiteboard/" 
                target="_blank" rel="noreferrer noopener">
                <strong>React Application Whiteboard </strong>
              </a> 
                | JavaScript, React, HTML, CSS 
              <span>
                The "Whiteboard React" project is a web application developed 
                using the React library. The primary goal of the application is 
                to create an interactive drawing board with various functionalities.
              </span>
            </li>

            <li>
              <a href="https://github.com/mathewtroy/ear-pro" 
                target="_blank" rel="noreferrer noopener">
                <strong>Private Library </strong> 
              </a> 
              | Java Spring Boot, PostgreSQL 
              <span>
                The "Private Library" app employs Spring, JPA, and REST in 
                a Maven project, with crucial dependencies like 
                Spring Boot Starter Web and Data JPA.
              </span>
            </li>

            <li>
              <a href="https://github.com/mathewtroy/zwa" 
                target="_blank" rel="noreferrer noopener">
                <strong>Website with travel packages </strong> 
              </a>
                | HTML, CSS, JavaScript, MySQL, PHP 
              <span>
                Designed and built a full-stack travel package website, 
                implementing security measures against XSS, password hashing, 
                server and client-side validation during login.
              </span>
            </li>

            <li>
              <a href="https://github.com/mathewtroy/ts1-pro" 
                target="_blank" rel="noreferrer noopener">
                <strong>EShop testing </strong> 
              </a>
              | Java, ACTS, PCTgen 
                <span>Performed Selenium-based website testing.</span>
            </li>

            <li>
              <a href="https://github.com/mathewtroy/game2d" 
                target="_blank" rel="noreferrer noopener">
                <strong>Role-playing game 2D game </strong> 
              </a>
              | Java, Swing, Maven 
              <span>
                Developed a 2D role-playing game. Implemented 
                enemy characters with multi-threaded programming, including 
                animations, actions, and AI behavior such as walking, attacking, 
                and pursuing the main hero.
              </span>
            </li>

            <li>
              <a href="https://github.com/mathewtroy/game2d" 
                target="_blank" rel="noreferrer noopener">
                <strong>Database Application </strong>
              </a> 
              | Java Spring, PostgreSQL
              <span>
               Created a CRUD system for Travel Agency.
              </span>
            </li>

            <li>
              <a href="https://github.com/mathewtroy/pcc-pro" 
                target="_blank" rel="noreferrer noopener">
                <strong>String-searching algorithm </strong> 
              </a> 
              | C++, Cmake
              <span>
                The program is designed for substring search within a string 
                using various algorithms. Supported algorithms: 
                Boyer-Moore, Knuth-Morris-Pratt, Rabin-Karp.
              </span>
            </li>

            <li>
              <a href="https://github.com/mathewtroy/smp" 
                target="_blank" rel="noreferrer noopener">
                <strong>Project of a mobile bank </strong>
              </a> 
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
