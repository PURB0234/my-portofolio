import { Ex } from "@/data/experience";
import styles from "./Experience.module.scss";
import Image from "next/image";
import Exam from "../Experience/Ex";
export default function Experience() {
    return (
        <section id="experience" className={styles.conatiner}>
            <div className={styles.containerEx}>
            <h1>EXPERIENCE</h1>
            </div>

            <div>
               {Ex.map((ex, index) => (
                <Exam key={index} {...ex}/>
               ))}
            </div>
        </section>
    )
}