"use client";

import { motion } from "motion/react";
import styles from "./About_me.module.scss";

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About_me() {
    return (
        <motion.section
            className={styles.wrapper}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={styles.glow} />

            <motion.div className={styles.card} variants={itemVariants}>
                <motion.div className={styles.tag} variants={itemVariants}>
                    <span className={styles.dot} />
                    ABOUT ME
                </motion.div>

                <motion.h2 className={styles.title} variants={itemVariants}>
                    Crafting Clean Code & Scalable Solutions
                </motion.h2>

                <motion.div className={styles.pills} variants={itemVariants}>
                    <span>🎓 Telkom University</span>
                    {/* <span>💻 Web Dev & Database</span> */}
                    <span>🚀 Problem Solver</span>
                </motion.div>

                <motion.div className={styles.content} variants={itemVariants}>
                    {/* <p>
            Hii! Saya adalah mahasiswa Sistem Informasi di Telkom University yang berfokus pada rekayasa web modern dan arsitektur database. Senang mengeksplorasi teknologi baru dan mengubah ide kompleks menjadi produk digital yang fungsional.
          </p>
          <p>
            Melalui proyek akademik dan personal, saya mengasah kemampuan problem solving, penulisan kode bersih, dan perancangan UI/UX yang responsif.
          </p> */}
                    <p> Hii! Saya adalah mahasiswa Sistem Informasi di Telkom University yang memiliki ketertarikan pada teknologi, khususnya pengembangan web dan pengelolaan database. Saya senang mempelajari hal-hal baru, mengeksplorasi teknologi, serta mengembangkan ide menjadi aplikasi yang bermanfaat.</p>

                    <p> Melalui berbagai proyek akademik dan pribadi, saya terus mengembangkan kemampuan dalam pemrograman, perancangan antarmuka, dan pengelolaan data. Bagi saya, setiap proyek merupakan kesempatan untuk belajar, mengasah kemampuan problem solving, dan menghasilkan solusi yang lebih baik.</p>

                    <p> Saya percaya bahwa proses belajar yang konsisten dan kemauan untuk terus berkembang merupakan bagian penting dalam perjalanan menjadi seorang developer yang kompeten.</p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
