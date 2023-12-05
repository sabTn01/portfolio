import img1 from "/project-hotel.png";
import img2 from "/project-img2.png";
import img3 from "/project-img3.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Hotel Booking Management Web app",
      description: "Design & Development",
      img: img1,
      link: "https://the-wild-oasis-ben.netlify.app/",
    },
    {
      id: 2,
      title: "Business Startup",
      description: "Design & Development",
      img: img2,
      link: "",
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
