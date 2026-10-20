import {
    SiNextdotjs,
    SiLaravel,
    SiReact,
    SiFlutter,
    SiGithub,
    SiOracle,
    SiFigma,
    SiPhp
} from "react-icons/si";
import styles from "./TechStack.module.scss";

const techs = [
    { name: "PHP", role: "Base Language", icon: <SiPhp /> },
    { name: "Laravel", role: "Backend PHP", icon: <SiLaravel /> },
    { name: "React", role: "Frontend UI", icon: <SiReact /> },
    { name: "Flutter", role: "Mobile App", icon: <SiFlutter /> },
    { name: "GitHub", role: "Version Control", icon: <SiGithub /> },
    { name: "Oracle", role: "Database SQL", icon: <SiOracle /> },
    { name: "Figma", role: "UI/UX Design", icon: <SiFigma /> },
];

export default function TechStack() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Framework & Teknologi</h2>
                    <p className={styles.subtitle}>
                        Alat dan teknologi yang digunakan dalam pengerjaan proyek.
                    </p>
                </div>

                <ul className={styles.grid}>
                    {techs.map((item) => (
                        <li key={item.name} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <span className={styles.name}>{item.name}</span>
                            <span className={styles.role}>{item.role}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}