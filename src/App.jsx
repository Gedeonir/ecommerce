import React from "react";
import "./App.css";

function App() {

  return (
    <div className="app">
      {/* HEADER */}
      <header>
        <div class="logo">GOLFGRID.</div>

        <nav>
          <ul>
            <li>Products</li>
            <li>About us</li>
            <li>Tips</li>
            <li>Reviews</li>
            <li>Leaderboard</li>
          </ul>
        </nav>

        <button class="join-btn">Join Club ↗</button>
      </header>

      {/* HERO */}
      <section class="hero">
        <span class="tag">🎵 Swing with Purpose</span>

        <h1>
          Precision in every swing
          <br />
          power in every play
        </h1>

        <p>
          Experience the course like never before crafted in
          <br />
          3D, refined by PGA-level insight
        </p>

        <button class="cta">🎤 Book Tee Time</button>
      </section>

      {/* MAIN IMAGE */}
      {/* <img
        src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf"
        alt="Golfer"
        class="main-img"
      /> */}

      {/* FLOATING CARDS */}

      {/* Player Momentum */}
      <div class="card green momentum small">
        <h3>Player Momentum</h3>
        <p>Relative to the previous year</p>
        <div class="value">96.00%</div>
        <p>Improve your game today</p>
      </div>

      {/* Product */}
      {/* <div class="card product">
        <p>Golf balls</p>
        <strong>$35</strong>
        <p>Relieve pains</p>
      </div> */}

      {/* Benefits */}
      {/* <div class="card green benefits">
        <h3>Discover club benefits</h3>
        <span class="pill">Exclusive Events</span>
        <span class="pill">Tournaments</span>
        <span class="pill">PGA</span>
      </div> */}

      {/* Gear */}
      <div class="card gear">
        <div>
          <span class="pill">Accessories</span>
          <h3>Other winner gear by versus</h3>
          <p>Explore Product ↗</p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb"
            alt="Golf bag"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
