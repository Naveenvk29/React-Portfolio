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
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg"
            alt=""
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <a href="/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
            </a>

          </div>
        </div>        
      </div>
    </div>
  );
};

export default Project;
