import { skills } from "../../utils/data/skills.js";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <div id="skills" className=" lg:my-16 mx-8 relative ">
        <div className="flex justify-center items-center my-5 lg:py-8">
            <span className="w-screen h-[2px] bg-button_color"></span>
                <span className="bg-gradient-to-r from-violet-800 to-blue-500 w-fit text-white p-2 px-5 text-xl rounded-md">
                    Skills
                </span>
            <span className="w-screen h-[2px] bg-button_color"></span>
        </div>
        <div className="w-full my-12">
            <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
                {skills.map((skill) => (
                    <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                    key={skill.id}>
                    <div className="h-full w-full rounded-lg border-2 bg-gradient-to-b from-bg_color_2 to-bg_color_3 border-button_color shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                        <div className="flex -translate-y-[1px] justify-center">
                        <div className="w-3/4">
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                        </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 p-6">
                        <div className="h-8 sm:h-10">
                            <img src={skill.icon} className="h-10 w-10" /> 
                        </div>
                        <p className="text-white whitespace-nowrap text-sm sm:text-lg">
                            {skill.name}
                        </p>
                        </div>
                    </div>
                    </div>
                ))}
            </Marquee>
      </div>
    </div>
  )
}
