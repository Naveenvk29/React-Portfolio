import Movie_rating from "../../assets/movie-app.png";
import nike_ui from "../../assets/nike-ui.png";
import Work from "../../assets/work.png";
import myBlog from "../../assets/myBlog.png";
import R5_movies from "../../assets/R5-movies.png";

const Project = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="project">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">My Project</p>
        <p className="text-gray-400"> Check out some of Project</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div
          className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
            shadow-[#040c16] group  rounded-md flex justify-center items-center h-[200px] bg-cover relative "
        >
          <img src={myBlog} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="https://github.com/Naveenvk29/CODING_SAMURAI_INTERNSHIP_TASK-3">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="https://my-blog-41c5.onrender.com">
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
            <a href="https://github.com/Naveenvk29/Movies-Review">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="https://github.com/Naveenvk29/Movies-Review">
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
            src="https://t3.ftcdn.net/jpg/00/57/66/66/360_F_57666636_V9MQ890Xa4w3XBYZHWf383ZqpqURCkZY.jpg"
            alt=""
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="https://github.com/Naveenvk29/Ecommerce">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="https://github.com/Naveenvk29/Ecommerce">
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
          <img src={Work} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="https://github.com/Naveenvk29/refokus_clone">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="https://refokus-clone-liart.vercel.app">
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
          <img src={R5_movies} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="https://github.com/Naveenvk29/R5_Movie">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Git
              </button>
            </a>
            <a href="https://github.com/Naveenvk29/R5_Movie">
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
