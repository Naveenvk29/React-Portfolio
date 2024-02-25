import AboutImg from "../../assets/img1.jpeg"
const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
        <div className="md:grid md:grid-cols-2 sm:py-16">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py0">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                    <p className="text-base lg:text-lg">
                    I am a Web Developer with a passion for learning and can work with estimation of future tasks. I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Web Development Tools. I have a firm knowledge of JavaScript and React Js, Redux, Node-Js, Express-Js, MongoDB ,NPM ,HTML5, CSS3, Git, Tailwind CSS, Bootstrap, REST API, JSON, Axios, Adobe Photoshop,Adobe premiere pro and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.
                    </p>
                </div>
            </div>
            <img className="mx-auto rounded-3xl py-8 md:py-0" src={AboutImg} alt="" width={300} height={300} />
        </div>
    </div>
  )
}

export default About