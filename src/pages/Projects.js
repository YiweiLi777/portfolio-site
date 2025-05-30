import React, { useState } from "react";
import "./Projects.css";

// Projects page with interactive project images and descriptions
function Projects() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Opens the clicked image in a larger modal view
  const openImage = (src) => {
    setEnlargedImage(src);
  };

  // Closes the enlarged image modal
  const closeImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="projects-container">
      <h2>My Projects</h2>

      {/* Project 1: Multiplication Table Generator */}
      <section className="project">
        <h3>Multiplication Table Generator</h3>
        <img
          src={process.env.PUBLIC_URL + "/images/multiplication.png"}
          alt="Multiplication Table"
          className="project-img"
          onClick={() =>
            openImage(process.env.PUBLIC_URL + "/images/multiplication.png")
          }
        />
        <p>
          This project generates a multiplication table based on user-defined row and column values.
        </p>
      </section>

      {/* Project 2: Registration Form */}
      <section className="project">
        <h3>Member Registration Form</h3>
        <img
          src={process.env.PUBLIC_URL + "/images/registration.png"}
          alt="Member Registration"
          className="project-img"
          onClick={() =>
            openImage(process.env.PUBLIC_URL + "/images/registration.png")
          }
        />
        <p>
          A basic form that collects user data and applies basic validation before submission.
        </p>
      </section>

      {/* Project 3: Cat Photo Viewer */}
      <section className="project">
        <h3>Cat Photo Viewer</h3>
        <img
          src={process.env.PUBLIC_URL + "/images/photo-viewer.png"}
          alt="Cat Photo Viewer"
          className="project-img"
          onClick={() =>
            openImage(process.env.PUBLIC_URL + "/images/photo-viewer.png")
          }
        />
        <p>
          A fun gallery app that allows users to select favorite cat images.
        </p>
      </section>

      {/* Enlarged image modal display */}
      {enlargedImage && (
        <div className="overlay" onClick={closeImage}>
          <img src={enlargedImage} alt="Enlarged" className="large-img" />
        </div>
      )}
    </div>
  );
}

export default Projects;
