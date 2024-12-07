import { personalData } from "../../utils/data/personalInfo.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { MdFileDownload } from "react-icons/md";
import TypedComponent from "./typed.jsx";
import heroImage from "/public/hero.svg"
export default function MainPage(){
    
    return(
        <section id="home" className="relative flex flex-col items-center justify-between p-10 ">
            <img src={heroImage} alt="Hero" width={1672} height={495} className="absolute -top-[150px] z-0"/>
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-x-10 gap-y-8">
                <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 lg:pt-10 lg:pl-10 ">
                    <h1 className="text-2xl font-bold leading-[3.2rem] text-white md:font-extrabold lg:text-[1.5rem] lg:leading-[3.5rem]">
                        Hello, This is {' '}
                        <span className="text-pink">{personalData.name}</span>
                    </h1>
                    {''}<br/>
                    <h1 className="text-3xl font-bold leading-10 text-white lg:text-[2.5rem] lg:leading-[3.9rem]">
                        {`I'm a Professional `}
                        <div className=" text-green"><TypedComponent></TypedComponent></div>
                    </h1>
                    <div className="flex flex-row my-10 gap-5 z-50">
                        <a href={personalData.github} className="transition-all text-gray-400 hover:scale-125 hover:text-white duration-300" >
                            <FaGithub className='size-8' />
                        </a>
                        <a href={personalData.linkedIn} className="transition-all text-gray-400 hover:scale-125 hover:text-white duration-300" >
                            <FaLinkedin className='size-8' />
                        </a>
                        <a href={personalData.email} className="transition-all text-gray-400 hover:scale-125 hover:text-white duration-300" >
                            <MdOutlineMail className='size-8' />
                        </a>
                        <a href={personalData.leetcode} className="transition-all text-gray-400 hover:scale-125 hover:text-white duration-300" >
                            <SiLeetcode className='size-8' />
                        </a>
                        {/* <a
                            className="inline-flex items-center gap-x-2 rounded-lg bg-gray-400 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-white hover:scale-105 duration-300 "
                            href={personalData.resume}
                            >
                            Resume
                            <MdFileDownload className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                        </a> */}
                        
                    </div>
                    
                </div>
           
                <div className="order-1 lg:order-2  from-bg_color_2 to-bg_color_3 border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-br shadow-md">
                    <div className="px-4 lg:px-8 py-5">
                        <div className="flex flex-row space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-700"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green"></div>
                        </div>
                    </div>
                    <div className="overflow-hidden border-t-[2px] border-[#1b2c68a0] px-4 lg:px-8 py-4 lg:py-8">
                        <code className="text-xs md:text-sm lg:text-base">
                            <div className="blink">
                                <span className="mr-2 text-pink">const</span>
                                <span className="mr-2 text-white">coder</span>
                                <span className="mr-2 text-pink">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                <span className="text-gray-400">{`'`}</span>
                                <span className="text-amber-300">Sankeerthan R N</span>
                                <span className="text-gray-400">{`',`}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className="text-white">skills:</span>
                                <span className="text-gray-400">{`['`}</span>
                                <span className="text-amber-300">Spring Boot</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Oracle Database</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Python</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Java</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Oracle Cloud</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">OCI Generative AI</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Flask</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">React</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Angular</span>
                                <span className="text-gray-400">{"'],"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-green">hireable:</span>
                                <span className="text-orange-400">function</span>
                                <span className="text-gray-400">{'() {'}</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                                <span className="text-gray-400">{`(`}</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-600">this.</span>
                                <span className="mr-2 text-white">hardWorker</span>
                                <span className="text-amber-300">&amp;&amp;</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-600">this.</span>
                                <span className="mr-2 text-white">problemSolver</span>
                                <span className="text-amber-300">&amp;&amp;</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-600">this.</span>
                                <span className="mr-2 text-white">skills.length</span>
                                <span className="mr-2 text-amber-300">&gt;=</span>
                                <span className="text-orange-400">5</span>
                            </div>
                            <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                            <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                            <div><span className="text-gray-400">{`};`}</span></div>
                        </code>
                    </div>
                </div>
            </div>        
        </section>
    );
}