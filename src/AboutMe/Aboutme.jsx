import { personalData } from "../../utils/data/personalInfo.js";

function Aboutme() {
  return (
    <div id="about" className="relative lg:my-16 mx-10 z-50">
      <div className="flex justify-center items-center mb-16 my-5 lg:py-8">
        <span className="w-screen h-[2px] bg-button_color"></span>
        <span className="bg-gradient-to-r from-violet-800 to-blue-500 w-fit text-white p-2 px-5 whitespace-nowrap text-xl rounded-md">
          About Me
        </span>
        <span className="w-screen h-[2px] bg-button_color"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 px-4 lg:px-56">
        <div className="lg:col-span-2 flex flex-col justify-center order-2 lg:order-1">
        <p 
          className="text-gray-200 text-justify mb-4 lg:mb-0" 
          dangerouslySetInnerHTML={{ __html: personalData.description }} 
        />

        </div>
        <div className="lg:col-span-1 flex justify-center  items-center order-1 lg:order-2">
          <div className="w-auto h-60 lg:h-80 relative">
            <div className="w-[300px] h-80 lg:h-[300px] bg-bg_color_1 rounded-full absolute filter blur-3xl -z-10 opacity-80"></div>
            <img
              src={personalData.profile}
              alt="Sankeerthan R N"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Aboutme;
