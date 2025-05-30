import React from "react";
import "./Services.css";

// Services page listing what you can do as a web developer
function Services() {
  return (
    <div className="services-container">
      <h2>My Services</h2>

      {/* Decorative banner image */}
      <img
        src={process.env.PUBLIC_URL + "/images/services-banner.png"}
        alt="Development Services"
        className="services-banner"
      />

      {/* List of skills or services offered */}
      <ul className="service-list">
        <li><strong>Web Development:</strong> I can build responsive and accessible websites using HTML, CSS, and JavaScript.</li>
        <li><strong>Front-End Programming:</strong> I’m skilled in React and can develop interactive user interfaces.</li>
        <li><strong>Basic Back-End Work:</strong> I can set up and manage simple Node.js or Express.js backends.</li>
        <li><strong>Code Debugging:</strong> I enjoy troubleshooting and debugging problems in web applications.</li>
        <li><strong>Version Control:</strong> I use Git and GitHub to manage and track my code changes.</li>
      </ul>
    </div>
  );
}

export default Services;
