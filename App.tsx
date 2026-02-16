import React from 'react';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <div className="content-column">
        <h1 className="text-header">
          Flux Labs
        </h1>

        <h2 className="text-subhead">
          Faster spatial computing begins at the chip.
        </h2>

        <p className="text-body">
          Designing high-performance, energy-efficient silicon for augmented and virtual reality is one of the most important technical challenges of the coming decade.
        </p>

        <p className="text-body">
          Today’s chip design process is slow, complex, and difficult to scale with the growing computational demands of immersive spatial systems.
        </p>

        <p className="text-body">
          Flux Labs is building intelligent optimization and automation methods to accelerate how chips for AR, VR, and spatial computing are designed.
        </p>

        <p className="text-body">
          Our goal is to reduce the time, cost, and engineering friction required to bring next-generation spatial hardware to life.
        </p>

        <p className="text-body">
          This work is currently in the research phase.
        </p>

        <p className="text-body">
          We believe advances in chip design will define the future of spatial intelligence, and Flux Labs exists to help move that future forward with focus and discipline.
        </p>

        <p className="text-body">
          We are forming a small, deeply technical team dedicated to long-term research in semiconductor optimization for immersive computing.
        </p>

        <p className="text-body">
          Early access and research collaboration opportunities will be shared as meaningful progress is made.
        </p>

        <p className="text-body">
          <a 
            href="mailto:mailus-fluxlabs28@gmail.com" 
            className="hover:text-white transition-colors duration-200"
          >
            mailus-fluxlabs28@gmail.com
          </a>
        </p>

        <footer className="text-footer">
          © Flux Labs 2026
        </footer>
      </div>
    </div>
  );
};

export default App;