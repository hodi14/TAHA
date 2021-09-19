import ProjectCard from "../Components/ProjectCard";
import PorjectsBanner from "../Components/ProjectsBanner";

export default function Projects() {
    const projects = [{'name': 'SamCafe', 'id': '01', 'description': 'Rebranding & change the website for moreuser friendly and having better user interface', 'technologies': 'App that used : Figma, Adobe Ps, Adobe Ai', 'imgPath': 'samCafe.jpg'},
                      {'name': 'YasmineGold', 'id': '02', 'description': 'Rebranding & change the website for moreuser friendly and having better user interface', 'technologies': 'App that used : Figma, Adobe Ps, Adobe Ai', 'imgPath': 'yasmineGold.jpg'},
                      {'name': 'Faramouj', 'id': '03', 'description': 'Rebranding & change the website for moreuser friendly and having better user interface', 'technologies': 'App that used : Figma, Adobe Ps, Adobe Ai', 'imgPath': 'faramouj.jpg'},
                      {'name': 'HERA', 'id': '04', 'description': 'Rebranding & change the website for moreuser friendly and having better user interface', 'technologies': 'App that used : Figma, Adobe Ps, Adobe Ai', 'imgPath': 'hera.jpg'},
                      {'name': 'MAMMUT Containers', 'id': '05', 'description': 'Rebranding & change the website for moreuser friendly and having better user interface', 'technologies': 'App that used : Figma, Adobe Ps, Adobe Ai', 'imgPath': 'mammutContainers.jpg'}]
    return (
        <div className="innerPage projectsPage">
            <PorjectsBanner />
            <div className="projectsList">
                {projects.map((project) => {
                    return (
                        <ProjectCard name={project.name} id={project.id} description={project.description} imgPath={project.imgPath} technologies={project.technologies}/>
                    )
                })}
            </div>
        </div>
    )
}