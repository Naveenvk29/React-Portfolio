import { TypeAnimation } from "react-type-animation";
import resume from "../../assets/Naveen-Vinod_Kumar-resume.pdf";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[80vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto">
        <div className="w-[300px] h-auto lg:w-[400px]">
          <img
            src="https://i.pinimg.com/originals/84/e8/47/84e84792bd2f7489443c4bdbc20e182c.png"
            alt=""
          />
        </div>
      </div>

      <div className="col-span-2 px-5">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a</span> <br />
          <TypeAnimation
            sequence={[
              "Mern Dev",
              1000,
              "Frontend Dev",
              1000,
              "Backend Dev",
              1000,
              "Video Editor",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name Naveen Vinod Kumar{" "}
        </p>
        <br />
        <div className="my-8">
          <a
            href=""
            download={resume}
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 
                border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
