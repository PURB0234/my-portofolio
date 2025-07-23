import styles from "./ProjectCard.module.scss";

type ProjectTypeProps = {
    title: string;
    description: string;
    link: string;
}

export default function ProjectCard({ title, description, link }: ProjectTypeProps) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    )
}