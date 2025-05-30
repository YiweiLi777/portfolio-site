import React from 'react';
import { Link } from 'react-router-dom';

// Home page component with welcome message and navigation to the About page
function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to my portfolio</h1>
      <p>
        I'm a centennial college student currently learning Web Application Development.
        I'm passionate about turning ideas into practical, user-friendly web experiences
        and continuously improving my skills in front-end and back-end technologies.
      </p>
      {/* Button that navigates to the About page */}
      <Link to="/about">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Learn More About Me
        </button>
      </Link>
    </div>
  );
}

export default Home;
