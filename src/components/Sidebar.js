// Sidebar.js
import React from 'react';

const Sidebar = () => (
  <aside className="sidebar">
    
    <footer>

          <section class="details">
            <h2>Details</h2>
            <ul>
                <li>+420 776 756 252</li>
                <li>alexkross@seznam.cz</li>
            </ul>
          </section>

          <section class="links">
            <h2>Links</h2>
            <ul>
                <li>
                    <a href="https://github.com/mathewtroy/" class="refer" 
                    target="_blank" rel="noreferrer noopener">GitHub</a>
                </li>

                <li>
                    <a href="https://gitlab.fel.cvut.cz/krossale/" class="refer" 
                        target="_blank" rel="noreferrer noopener">GitLab</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/aleksandrkross/" class="refer" 
                        target="_blank" rel="noreferrer noopener">LinkedIn</a>
                </li>
                
            </ul>
          </section>

          <section class="skills">
            <h2>Skills</h2>
            <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>PHP</li>
                <li>HTML</li>
                <li>Git</li>
                <li>PostgreSQL</li>
                <li>Linux</li>
                <li>Enterprise Architect</li>
            </ul>
          </section>

          <section class="languages">
            <h2>Languages</h2>
            <ul>
                <li>
                    <span>Czech</span>
                    <img src="images/middle.png" alt="Intermediate level"/>
                </li>
                <li>
                    <span>English</span>
                    <img src="images/middle.png" alt="Intermediate level"/>
                </li>
                <li>
                    <span>Russian</span>
                    <img src="images/native.png" alt="Native level"/>
                </li>
            </ul>
          </section>

        </footer>
  </aside>
);

export default Sidebar;
