import { projects } from "@/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";

export default function ProjectList() {
    return (
        <section id="projects" className={styles.container}>
            <h2>PROJECTS</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    )
}