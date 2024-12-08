import { useState } from "react";
import { projects } from "../../utils/data/projects.js";

function Projects() {
  return (
    <div id="projects" className="lg:my-16 mx-8 relative">
      <div className="flex justify-center items-center mb-16 my-5 lg:py-8">
        <span className="w-full h-[2px] bg-gradient-to-r from-violet-800 to-blue-500"></span>
        <span className="bg-gradient-to-r from-violet-800 to-blue-500 w-fit text-white p-2 px-5 text-xl rounded-md">
          Projects
        </span>
        <span className="w-full h-[2px] bg-gradient-to-r from-blue-500 to-violet-800"></span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full lg:w-5/6 space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} lg:gap-10 items-center space-y-4 lg:space-y-0 p-4 transition-transform duration-300 ease-in-out`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 md:w-2/3 flex justify-center">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="lg:w-2/3 md:w-2/3 w-full lg:text-left">
        
        {/* Header Section with Project Title and Link */}
        <div className="flex items-left ">
        <h2 className="text-2xl font-bold text-white mt-5 lg:mt-0 mr-4">
            {project.name}
            
        </h2>
        <h2>

          {/* Project Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-yellow-500 mt-5 hover:text-blue-400 font-semibold"
            >
              View code
            </a>
          )}
          </h2>
        </div>

        {/* Tools/Tags Section */}
        <div className="flex flex-wrap justify-start gap-2 mt-2 mb-4">
          {project.tools.split(",").map((tool, index) => (
            <span
              key={index}
              className="bg-pink text-white text-sm px-3 py-1 rounded-full shadow-sm"
            >
              {tool.trim()}
            </span>
          ))}
        </div>

        {/* Project Summary / Full Description */}
        <div
          className={`text-gray-300 mt-4 ${expanded ? "" : "line-clamp-2"} transition-all duration-300`}
          dangerouslySetInnerHTML={{ __html: expanded ? project.description : `<p>${project.summary}</p>` }}
        />

        {/* Read More / Less Button */}
        <div className="flex justify-center lg:justify-start mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-violet-800 hover:text-violet-500 font-semibold flex items-center"
          >
            {expanded ? "Read Less" : "Read More →"}
          </button>
        </div>
      </div>
    </div>
  );
}



export default Projects;
