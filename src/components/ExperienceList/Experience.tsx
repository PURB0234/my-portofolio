import { Ex } from "@/data/experience";
import styles from "./Experience.module.scss";
import Exam from "../Experience/Ex";

export default function Experience() {
    return (
        <section
            id="experience"
            className={styles.container}
            aria-labelledby="experience-heading"
        >
            <div className={styles.inner}>
                <header className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>BACKGROUND</span>

                    <h2 id="experience-heading">
                        Experience &amp; Activities
                    </h2>

                    <p>
                        Pengalaman yang saya dapatkan melalui kegiatan kampus,
                        proyek mandiri, dan kolaborasi bersama orang lain.
                    </p>
                </header>

                <div className={styles.timeline}>
                    {Ex.map((ex) => (
                        <Exam key={ex.id} {...ex} />
                    ))}
                </div>
            </div>
        </section>
    );
}