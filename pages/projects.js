import ProjectCard from "../Components/ProjectCard";
import PorjectsBanner from "../Components/ProjectsBanner";
import projects from "../Data/ProjectsDetail";

export default function Projects() {
    return (
        <div className="innerPage projectsPage">
            <PorjectsBanner />
            <div className="projectsList">
                {projects.map((project) => {
                    return (
                        <ProjectCard name={project.name} id={project.id} description={project.description} imgPath={project.imgPath} technologies={project.technologies} key={project.id} index={project.index}/>
                    )
                })}
            </div>
        </div>
    )
}