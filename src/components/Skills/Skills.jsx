import html from "../../assets/html.png"
import Css from "../../assets/css.png"
import JS from "../../assets/js.png"
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/twilwind.png"
import react from "../../assets/react.png"
import redux from "../../assets/redux.png"
import node from "../../assets/node.png"
import express from "../../assets/express.png"
import mongodb from "../../assets/Mongod.png"
import Git from "../../assets/Git.png"

const Skills = () => {
  return (
    <div className="border text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
    place-items-center md:flex md:justify-between md:items-center"> 

        <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
            My <br />Tech <br />stack
        </h2>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={html} alt="" width={100} height={100} />
        <p className="mt-2">HTML</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={Css} alt="" width={100} height={100} />
        <p className="mt-2">Css</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={JS} alt="" width={100} height={100} />
        <p className="mt-2">JS</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={bootstrap} alt="" width={100} height={100} />
        <p className="mt-2">Bootstrap</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={tailwind} alt="" width={100} height={100} />
        <p className="mt-2">tailwind</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={react} alt="" width={100} height={100} />
        <p className="mt-2">React</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={redux} alt="" width={100} height={100} />
        <p className="mt-2">Redux</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={node} alt="" width={100} height={100} />
        <p className="mt-2">NodeJS</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={express} alt="" width={100} height={100} />
        <p className="mt-2">ExpressJS</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={mongodb} alt="" width={100} height={100} />
        <p className="mt-2">MongoDB</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={Git} alt="" width={100} height={100} />
        <p className="mt-2">Git</p>
    </div>

    </div>

  )
}

export default Skills