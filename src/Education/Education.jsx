import { educations } from "../../utils/data/education.js";

function Education() {
  return (
    <div id="education" className=" lg:my-16 mx-8  relative ">
        <div className="flex justify-center items-center mb-16 my-5 lg:py-8">
            <span className="w-screen h-[2px] bg-button_color"></span>
                <span className="bg-gradient-to-r from-violet-800 to-blue-500 w-fit text-white p-2 px-5 text-xl rounded-md">
                    Education
                </span>
            <span className="w-screen h-[2px] bg-button_color"></span>
        </div>
        
        <div className="flex justify-center items-center flex-col">
            <div className="w-full lg:w-2/3">
                {educations.map((education) => (
                <div key={education.id} className="flex justify-center w-full  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 hover:border-violet-500 duration-300  bg-gradient-to-br from-bg_color_2 to-bg_color_3 border-button_color border-2 rounded-lg p-6 shadow-lg mb-8" >
                    <div className="relative isolate flex flex-col  gap-8 w-full">
                        <div className="flex flex-col w-full">
                            <p className="text-green text-center font-bold text-sm">{education.duration}</p>
                            <h2 className="text-2xl font-bold text-white mt-2">
                                {education.title}
                            </h2>
                            <p className="text-pink text-lg mt-1">{education.company}</p>
                            <div className=" w-full text-gray-300 mt-4">
                                {education.description}
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Education;