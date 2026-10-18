import { useContext } from "react"
import { Link, useParams } from "react-router"
import { ProjectContext } from "../../context/ProjectContext"
import { FaArrowLeft } from "react-icons/fa"

function ProjectDetailPage() {

    const {slug} = useParams()
    const {projects} = useContext(ProjectContext)

    const project = projects.find(project => project.slug === slug)

    return (
      <div className="pb-30 box-border">
        <div className="flex flex-col gap-y-5">
          <Link
            to="/"
            className="flex items-center gap-x-2 text-gray-200/70 font-medium"
          >
            <FaArrowLeft />
            <span className="text-[14.5px]">All projects</span>
          </Link>
          {project && Object.keys(project).length > 0 
            ? (
                <>
                    <div className="project-detail-heading flex flex-col gap-y-5 lg:gap-y-8 xl:gap-y-10 py-5 box-border">
                        <span className="text-gray-200/70 tracking-[3.5px] text-[14.5px]">
                        {project.category} • {project.year}
                        </span>
                        <span className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-white font-bold">
                        {project.title}
                        </span>
                        <div className="border border-gray-300/20 bg-gray-900/90 overflow-hidden rounded-2xl grayscale grid grid-cols-2 gap-1">
                        <div className="bg-gray-800/50 p-3 sm:p-5 box-border">
                            <span className="text-[11.5px] text-gray-200/70 tracking-[3.5px] uppercase">
                            Role
                            </span>
                            <span className="text-[15.5px] pt-2 box-border text-white block">
                            {project.role}
                            </span>
                        </div>
                        <div className="bg-gray-800/50 p-3 sm:p-5 box-border">
                            <span className="text-[11.5px] text-gray-200/70 tracking-[3.5px]">
                            TOOLS
                            </span>
                            <div className="flex flex-col pt-2 box-border gap-y-2">
                            {project.tools.map((tool, index) => (
                                <div key={`tool-${index + 1}`}>
                                <span className="text-[15.5px] text-white block">
                                    {tool}
                                </span>
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="project-information-container flex flex-col rounded-2xl overflow-hidden">
                        <img
                        src={project.image}
                        alt=""
                        className="w-full rounded-t-2xl object-cover"
                        />
                        <div className="project-description flex flex-col gap-y-3 p-8 box-border bg-gray-800/50 grayscale">
                        {project.description.map((desc, index) => (
                            <div
                            key={`description-${index + 1}`}
                            className="flex flex-col gap-y-2"
                            >
                            <span className="text-lg text-white font-medium">{desc.subtitle}</span>
                            <p className="text-gray-100/70 text-[13.5px] md:text-[14.5px]">
                                {desc.text}
                            </p>
                            </div>
                        ))}
                        </div>
                    </div>
                </>
            ) 
            : (
                <div className="flex flex-col gap-y-5">
                    <span className="text-gray-200/70 text-[13.5px] tracking-[3.5px]">404</span>
                    <span className="text-4xl text-white font-bold">This project doesn't exist(yet).</span>
                </div>
            )
          }
          
        </div>
      </div>
    );
}

export default ProjectDetailPage