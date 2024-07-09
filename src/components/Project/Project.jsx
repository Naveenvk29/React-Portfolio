import Movie_rating from "../../assets/movie.png";
import nike_ui from "../../assets/nike-ui.png";

const Project = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="project">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">My Project</p>
        <p className="text-gray-400"> Check out some of Project</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
            shadow-[#040c16] group  rounded-md flex justify-center items-center h-[200px] bg-cover relative "
        >
          <img
            src="https://i.ytimg.com/vi/Wbc2db82jLQ/maxresdefault.jpg"
            alt=""
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="https://github.com/Naveenvk29/Ecommer-web">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="https://github.com/Naveenvk29/Ecommer-web">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Live
              </button>
            </a>
          </div>
        </div>
        <div
          className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
            shadow-[#040c16] group  rounded-md flex justify-center items-center h-[200px] bg-cover relative "
        >
          <img src={Movie_rating} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="https://github.com/Naveenvk29/movie-rating">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="https://github.com/Naveenvk29/movie-rating">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Live
              </button>
            </a>
          </div>
        </div>
        <div
          className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
            shadow-[#040c16] group  rounded-md flex justify-center items-center h-[200px] bg-cover relative "
        >
          <img
            src="https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdalle-clone.webp&w=750&q=75"
            alt=""
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="https://github.com/Naveenvk29/DALL-E-Clone-Mern">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Live
              </button>
            </a>
          </div>
        </div>
        <div
          className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
            shadow-[#040c16] group  rounded-md flex justify-center items-center h-[200px] bg-cover relative "
        >
          <img
            src="https://i.ytimg.com/vi/X3lvhCnXYaY/maxresdefault.jpg"
            alt=""
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="https://github.com/Naveenvk29/MERN-AUTH">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="simple-authentication.onrender.com">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Live
              </button>
            </a>
          </div>
        </div>
        <div
          className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
            shadow-[#040c16] group  rounded-md flex justify-center items-center h-[200px] bg-cover relative "
        >
          <img
            src="https://res.cloudinary.com/gummu/image/upload/v1716911568/b0zjjkgbimlynjymoneb.png"
            alt=""
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="https://github.com/Naveenvk29/CINELOVE">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="https://cinelove.vercel.app/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Live
              </button>
            </a>
          </div>
        </div>
        <div
          className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
            shadow-[#040c16] group  rounded-md flex justify-center items-center h-[200px] bg-cover relative "
        >
          <img src={nike_ui} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="https://github.com/Naveenvk29/Nike-Ui">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="https://nike-ui-theta.vercel.app/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Live
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
