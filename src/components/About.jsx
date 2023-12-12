import bg from "/banner-bg.png";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { CarouselWithContent } from "./CarouselWithContent";

const features = [
  {
    name: "Who Am I?",
    description: `I am more than a coder; I am a digital architect building bridges between imagination and functionality. Specializing in both front-end aesthetics and back-end efficiency, I craft digital landscapes that not only look stunning but also function flawlessly.`,
    icon: CloudArrowUpIcon,
  },
  {
    name: "What Sets Me Apart?",
    description:
      "In the vast realm of coding, I stand out by blending creativity with precision. From pixel-perfect designs to robust server-side solutions, I bring ideas to life with elegance and efficiency. My code doesn't just run; it dances.",
    icon: LockClosedIcon,
  },
  {
    name: "Why Choose Saber?",
    description:
      "In a world driven by technology, your digital presence matters. I don't just develop websites; I create digital experiences that leave a lasting impression. With a commitment to excellence and a keen eye for detail, I turn your vision into a digital masterpiece.",
    icon: ServerIcon,
  },
  {
    name: "Tech Toolbox:",
    icon: ServerIcon,
    list: [
      {
        title: "Languages",
        subList: [
          "JavaScript",
          "C# / .NET",
          "Typescript",
          "HTML",
          "CSS",
          "Solidity",
          "SQL",
        ],
        chipColor: "deep-purple",
        textColor: "text-purple-800",
      },
      {
        title: "Frameworks",
        subList: ["Angular", "React", "Express.js", "Node.js", ".Net Core"],
        chipColor: "purple",
        textColor: "text-purple-400",
      },
      {
        title: "Databases",
        subList: [
          "Sql Server",
          "PostgreSQL",
          "MongoDB",
          "MySQL",
          "Oracle",
          "Redis",
        ],
        chipColor: "indigo",
        textColor: "text-indigo-400",
      },
      {
        title: "Tools",
        subList: [
          "Git and GitHub",
          "Docker",
          "VS Code",
          "Postman",
          "Visual Studio",
          "Swagger/OpenAPI",
          "Heroku",
          "Netlify",
        ],
        chipColor: "cyan",
        textColor: "text-cyan-400",
      },
    ],
  },
];

function About() {
  return (
    <div
      id="about"
      style={{ backgroundImage: `url(${bg})` }}
      className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
    >
      <div className="about-wrapper text-center text-white bg-[#171717]  p-10 lg:p-2 rounded-[50px]">
        <div className="box flex justify-between items-center">
          <CarouselWithContent features={features} />
        </div>
      </div>
    </div>
  );
}

export default About;
