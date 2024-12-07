import { useState } from "react";
import { experiences } from "../../utils/data/experience.js";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Experience() {
  return (
    <div id="experience" className="lg:my-16 mx-8 relative">
      <div className="flex justify-center items-center mb-16 my-5 lg:py-8">
        <span className="w-full h-[2px] bg-gradient-to-r from-violet-500 to-blue-500"></span>
        <span className="bg-gradient-to-r from-violet-800 to-blue-500 w-fit text-white p-2 px-5 text-xl rounded-md">
          Experience
        </span>
        <span className="w-full h-[2px] bg-gradient-to-r from-blue-500 to-violet-500"></span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full lg:w-2/3 space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ experience }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div onClick={() => setExpanded(!expanded)} className="hover:cursor-pointer bg-gradient-to-r from-bg_color_2 to-bg_color_3 border border-gray-700 rounded-lg shadow-lg p-6 hover:-translate-y-1 hover:scale-10 hover:border-violet-500 duration-300">
      <div className="flex flex-col w-full items-center text-center">
        <p className="text-green font-semibold text-sm tracking-wide">{experience.duration}</p>
        <h2 className="text-2xl font-bold text-white mt-2">{experience.title}</h2>
        <p className="text-pink text-lg mt-1 font-medium">{experience.company}</p>
        <div className="flex flex-wrap  justify-center gap-2 mt-8 mb-4">
          {experience.tools.split(",").map((tool, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-violet-900 to-button_color text-white text-sm px-3 py-1 rounded-full shadow-sm"
            >
              {tool.trim()}
            </span>
          ))}
        </div>
      </div>

      <div className={`text-gray-300 mt-4 ${expanded ? "" : "line-clamp-3"}`}>
        <div dangerouslySetInnerHTML={{ __html: expanded ? experience.description : experience.summary }} />
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-violet-500 hover:text-blue-400 font-semibold flex items-center transition-colors duration-200"
        >
          {expanded ? (
            <>
              Show Less <FaChevronUp className="ml-2" />
            </>
          ) : (
            <>
              Show More <FaChevronDown className="ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Experience;
