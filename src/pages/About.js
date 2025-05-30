import React from 'react';

// About page component with photo, name, personal info, and resume button
function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>About Me</h1>

      {/* Profile photo */}
      <img
        src="/images/profile.JPG"
        alt="Yiwei Li"
        style={{
          borderRadius: '50%',
          width: '180px',
          height: '180px',
          objectFit: 'cover',
          marginBottom: '1rem'
        }}
      />

      <h2>Yiwei Li</h2>

      {/* Brief self-introduction */}
      <p style={{ fontSize: '1.1rem', margin: '1rem 0' }}>
        I am an international student from China, currently studying in the Software Engineering Technician program at Centennial College. I am now in my third semester.
      </p>

      {/* Resume download button (placeholder link) */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007acc',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        View My Resume (PDF)
      </a>
    </div>
  );
}

export default About;
