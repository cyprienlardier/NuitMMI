import './app.css';

const team = ['Jullian', 'Melih', 'Vivien', 'Huzeyfe', 'Cyprien', 'Adrien'];

export default function App() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <div className="hero-badge">🎮 Move on the Pose</div>
          <h1 className="hero-title">Move your body, hold the pose.</h1>
          <p className="hero-subtitle">
            Exergaming made simple: dodge obstacles, hold the right pose, and explore new worlds built for Nuit MMI 2026.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="https://huzeyfe-ckr.github.io/nuitducodemmi26/" target="_blank" rel="noreferrer">
              ▶ Play the game
            </a>
          </div>
        </section>
      </div>

      <section className="section" id="team">
        <div className="container">
          <h2>The team</h2>
          <p className="lead">Six teammates united for Nuit MMI 2026.</p>
          <div className="team-grid">
            {team.map((name) => (
              <div className="card" key={name}>
                <div className="avatar">{name.charAt(0)}</div>
                <p className="card-title">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="rules">
        <div className="container">
          <h2>How to play</h2>
          <p className="lead">Simple rules, big moves.</p>
          <div className="rule-list">
            <div className="rule">
              <h3>Objective</h3>
              <ul>
                <li>Move across the three lanes.</li>
                <li>Avoid every incoming obstacle.</li>
                <li>Hold the pose that appears on screen.</li>
                <li>Discover new worlds as you progress.</li>
              </ul>
            </div>
            <div className="rule">
              <h3>Life system</h3>
              <ul>
                <li>You start with 3 lives.</li>
                <li>Lose 1 life when you hit an obstacle.</li>
                <li>Lose 1 life when you miss a pose.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            <strong>Nuit MMI 2026</strong> · Exergaming Challenge · Built with p5.play, ML5.js and MakeyMakey
          </p>
        </div>
      </footer>
    </div>
  );
}