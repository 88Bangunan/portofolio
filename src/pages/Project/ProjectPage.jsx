import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../context/ProjectContext";

function ProjectPage() {
  const { projects } = useContext(ProjectContext);

  const [categoryFilter, setCategoryFilter] = useState("");
  const [projectsCategoryFiltered, setProjectsCategoryFiltered] = useState([]);

  useEffect(() => {
    if (categoryFilter.trim().length <= 0) {
      return setProjectsCategoryFiltered([]);
    }

    setProjectsCategoryFiltered(
      projects.filter((project) => project.category === categoryFilter),
    );
  }, [categoryFilter]);

  return (
    <div className="project-lists-container flex flex-col gap-y-5 pb-27 box-border">
      <div className="project-heading flex flex-col gap-y-5">
        <span className="text-[11.5px] tracking-[3.5px] text-gray-200/70 uppercase">
          PORTFOLIO
        </span>
        <span className="text-5xl text-white tracking-tight font-bold sm:text-6xl lg:text-7xl">
          Selected Projects
        </span>
        <p className="text-gray-100/80 leading-6 text-[15.5px] sm:text-lg lg:text-xl lg:w-3/4">
          Full-stack applications, data architecture, responsive interfaces, and
          e-commerce optimization — a comprehensive archive of client work and
          digital experiments.
        </p>
      </div>
      <div className="filter-container flex flex-col gap-y-4">
        <div className="grid grid-cols-2 gap-3 justify-center md:grid-cols-3 md:w-12/13 lg:w-7/8 xl:w-3/4">
          {["E-Commerce Strategy", "Web Development", "UI/UX"].map(
            (category, index) => (
              <div
                key={category.id}
                className={`rounded-full p-3 box-border flex justify-center items-center text-center hover:bg-gray-700/50 hover:border-gray-100/70 cursor-pointer transition duration-500 ease-in-out grayscale ${categoryFilter === category ? "bg-gray-700/80 border border-gray-100/20" : "bg-gray-900/80 border border-gray-200/10"}`}
                onClick={() => setCategoryFilter(category)}
              >
                <span className="text-white tracking-tight text-sm">
                  {category}
                </span>
              </div>
            ),
          )}
        </div>
        <div className="reset-category-button w-3/8 mx-auto md:w-2/10 lg:w-2/13 xl:w-2/15">
          <button
            className="bg-white text-black rounded-full p-3 box-border cursor-pointer hover:bg-gray-100/90 font-medium transition duration-300 ease-in-out w-full"
            onClick={() => setCategoryFilter("")}
          >
            Reset Filter
          </button>
        </div>
        <div className="total-projects-text">
          {projectsCategoryFiltered.length > 0 ? (
            <span className="text-[12.5px] text-gray-200/70 tracking-[3.5px] uppercase">
              {projectsCategoryFiltered.length} PROJECTS
            </span>
          ) : (
            <span className="text-[12.5px] text-gray-200/70 tracking-[3.5px] uppercase">
              {projects.length} PROJECTS
            </span>
          )}
        </div>
      </div>

      <div className="project-content grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 lg:gap-8">
        {projectsCategoryFiltered.length > 0 ? (
          <>
            {projectsCategoryFiltered
              .slice(0, projectsCategoryFiltered.length)
              .map((project) => (
                <a
                  key={`project-${project.id}`}
                  href={`/projects/${project.slug}`}
                >
                  <div className="rounded-lg relative overflow-hidden group">
                    <img
                      className="rounded-xl shadow-xl w-full object-cover hover:scale-105 transition duration-500 ease-in-out hover:cursor-pointer"
                      src={project.image}
                      alt=""
                    />
                    <div className="absolute bg-black/90 blur-lg sm:blur-xl top-3/4 md:top-2/3 lg:top-3/4 left-0 right-0 bottom-0"></div>
                    <div className="top-information-section absolute top-5 md:top-3 left-5 right-5">
                      <div className="flex items-center justify-between text-[10.5px]">
                        <div className="bg-gray-500 grayscale p-2 box-border rounded-full border border-gray-300/30 text-white">
                          <span className="tracking-widest uppercase">
                            {project.category}
                          </span>
                        </div>
                        <div className="bg-gray-500 grayscale py-1 px-3 box-border rounded-full border border-gray-300/30 text-white">
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-information-section absolute top-3/4 md:top-2/3 lg:top-3/4 left-5 right-5">
                      <div className="flex flex-col gap-y-3">
                        <span className="text-white font-bold text-xl sm:text-2xl md:text-lg lg:text-2xl xl:text-[26px]">
                          {project.title}
                        </span>
                        <span className="animate-slideDownHidden group-hover:animate-slideUpShow transition duration-500 ease-out text-gray-100/80 text-[14px]">
                          {project.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </>
        ) : (
          <>
            {projects.length > 0 &&
              projects.map((project) => (
                <a
                  key={`project-${project.id}`}
                  href={`/projects/${project.slug}`}
                >
                  <div className="rounded-lg relative overflow-hidden group">
                    <img
                      className="rounded-xl shadow-xl w-full object-cover hover:scale-105 transition duration-500 ease-in-out hover:cursor-pointer"
                      src={project.image}
                      alt=""
                    />
                    <div className="absolute bg-black/90 blur-lg sm:blur-xl top-3/4 md:top-2/3 lg:top-3/4 left-0 right-0 bottom-0"></div>
                    <div className="top-information-section absolute top-5 md:top-3 left-5 right-5">
                      <div className="flex items-center justify-between text-[10.5px]">
                        <div className="bg-gray-500 grayscale p-2 box-border rounded-full border border-gray-300/30 text-white">
                          <span className="tracking-widest uppercase">
                            {project.category}
                          </span>
                        </div>
                        <div className="bg-gray-500 grayscale py-1 px-3 box-border rounded-full border border-gray-300/30 text-white">
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-information-section absolute top-3/4 md:top-2/3 lg:top-3/4 left-5 right-5">
                      <div className="flex flex-col gap-y-3">
                        <span className="text-white font-bold text-xl sm:text-2xl md:text-lg lg:text-2xl xl:text-[26px]">
                          {project.title}
                        </span>
                        <span className="animate-slideDownHidden group-hover:animate-slideUpShow transition duration-500 ease-out text-gray-100/80 text-[14px]">
                          {project.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
