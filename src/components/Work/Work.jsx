import React from 'react';

const Projects = () => {
  return (
    <section id='work' className="container bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-500 dark:text-gray-300">
          <span className="text-primary">My </span>Projects
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[800px] mx-auto">
          Welcome to my collection of projects! Here, I showcase the work I've done as a full-stack developer,
          combining creativity with technology. From web applications to AI experiments, each project reflects my
          passion for building impactful solutions that make a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {/* Project 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img src="project1-image.jpg" alt="Project 1" className="w-full h-64 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-primary">Portfolio Project</h3>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img src="project2-image.jpg" alt="Project 2" className="w-full h-64 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-primary">AI Web App</h3>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img src="project3-image.jpg" alt="Project 3" className="w-full h-64 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-primary">E-commerce Website</h3>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Projects;
