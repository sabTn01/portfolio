import hbm from "/project-hotel.png";
import povo from "/project-povo.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Hotel Booking Management Web app",
      description: "Business and management",
      img: hbm,
      link: "https://booking-manager.netlify.app",
    },
    {
      id: 2,
      title: "Decentralized Votes tool",
      description: "Management and votes",
      img: povo,
      link: "https://povo-app.netlify.app",
    },
  ];

  return (
    <div
      id="projects"
      className="projects  bg-[#171717] text-white py-28 lg:py-20"
    >
      <h1 className="text-center text-4xl font-bold py-6">Projects</h1>

      <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
        {projects.map((item, i) => (
          <ProjectCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
