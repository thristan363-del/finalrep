import './App.css';
import gmail from './gmail.png';
import facebook from './facebook-app-symbol.png';
import telephone from './telephone-handle-silhouette.png';
import pfp from './pfp.jpg';

function App() {
  return (
    <div className="portfolio">
      <aside className="sidebar">
        <div className="sidebar-top">
          <img src={pfp} alt="profile" className="card-pfp" />
          <p className="sidebar-name">THRISTAN AVIV I.</p>
          <p className="sidebar-name">TORRUBIA</p>
        </div>

        <nav className="sidebar-nav">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#education">EDUCATION</a>
          <a href="#experience">EXPERIENCE</a>
        </nav>
      </aside>

      <main className="main-scroll">
        <section id="about" className="page-section about-section">
          <div className="about-left">
            <h1 className="name">THRISTAN AVIV I.</h1>
            <h1 className="name1">TORRUBIA</h1>

            <hr className="line-grow" />

            <h2 className="webdev">WEB DEVELOPER</h2>

            <div className="contacts">
              <div className="contact-item">
                <img src={gmail} className="icon gmail-icon" alt="gmail" />
                <p>THRISTANAVIV.TORRUBIA@GMAIL.COM</p>
              </div>

              <div className="contact-item">
                <img src={telephone} className="icon phone-icon" alt="phone" />
                <p>+63 9273250941</p>
              </div>

              <div className="contact-item">
                <img src={facebook} className="icon fb-icon" alt="facebook" />
                <p>THRISTAN AVIV</p>
              </div>
            </div>

            <button className="github">MY GITHUB</button>
          </div>

          <div className="about-right">
            <div className="card-stack">
              <div className="back-card back-card-1"></div>
              <div className="back-card back-card-2"></div>

              <div className="profile-card">
                <img src={pfp} alt="profile" className="sidebar-pfp" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="page-section">
          <h1 className="section-title">PROJECTS</h1>

          <div className="project-grid">
            <div className="project-card">
              <h2>MY PORTFOLIO</h2>
              <p>THE SITE YOU ARE EXPLORING RIGHT NOW.</p>
            </div>

            <div className="project-card">
              <h2>FAMILY ATTENDANCE</h2>
              <p>
                A WEBSITE DEDICATED TO FAMILY REUNIONS TO TRACK THE ATTENDANCE
                OF THE POPULATION.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="page-section">
          <h1 className="section-title">EDUCATION</h1>

          <div className="edu-card">
            <h2>ATENEO DE DAVAO UNIVERSITY - BS INFORMATION TECHNOLOGY</h2>
            <ul>
              <li>STUDIED DATABASE HANDLING</li>
              <li>TOOK COURSES RELATED TO COMPUTER PROGRAMMING</li>
            </ul>
          </div>

          <div className="edu-card">
            <h2>PHILIPPINE NIKKEI JIN KAI INTERNATIONAL SCHOOL</h2>
            <ul>
              <li>STUDIED UNDER THE HUMSS STRAND</li>
              <li>TOOK SUBJECTS RELATED TO JAPANESE LANGUAGE</li>
            </ul>
          </div>

          <h1 className="section-title cert-title">CERTIFICATIONS</h1>

          <div className="cert-buttons">
            <button className="cert-btn active-cert">CSHARP</button>
            <button className="cert-btn">MICROSOFT</button>
          </div>
        </section>

        <section id="experience" className="page-section">
          <h1 className="section-title">EXPERIENCE</h1>
        </section>
      </main>
    </div>
  );
}

export default App;