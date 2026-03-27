import './App.css';
import gmail from './gmail.png';
import facebook from './facebook-app-symbol.png';
import telephone from './telephone-handle-silhouette.png';

function App() {
  return (
    <div className="App page-enter">
      <header className="fade-down">
        <button className="explore">EXPLORE</button>
      </header>

      <div className="container">
        <div className="left slide-up">
          <h1 className="name">THRISTAN AVIV I.</h1>
          <h1 className="name1">TORRUBIA</h1>

          <hr className="line-grow" />

          <h2 className="webdev fade-in-delay">WEB DEVELOPER</h2>

          <div className="contacts fade-in-delay-2">
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

          <button className="github fade-in-delay-3">MY GITHUB</button>
        </div>

        <div className="right slide-left">
          <div className="card-stack">
            <div className="back-card back-card-1"></div>
            <div className="back-card back-card-2"></div>

            <div className="profile-card">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;