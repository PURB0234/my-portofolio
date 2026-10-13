"use client";

import { motion } from "motion/react";
import { FaArrowRight, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiTypescript,
  SiFlutter,
  SiPostgresql,
  SiOracle
} from "react-icons/si";
import Avatars from "../Avatars/Avatars";
import styles from "./Hero.module.scss";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const techStacks = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "React", icon: <SiReact />, color: "#0284c7" },
  { name: "Laravel", icon: <SiLaravel />, color: "#e11d48" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#2563eb" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#0284c7" },
  { name: "Flutter", icon: <SiFlutter />, color: "#0284c7" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#1d4ed8" },
  { name: "GitHub", icon: <FaGithub />, color: "#0f172a" },
  { name: "Oracle", icon: <SiOracle />, color: "#dc2626" },
];

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.ambientGlow} />

      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.textSide}>
          <motion.div variants={itemVariants} className={styles.statusBadge}>
            <span className={styles.pulseDot} />
            <span>Open to Work & Collaborations</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.headline}>
            Transforming Ideas into{" "}
            <span className={styles.gradientText}>
              High-Impact Digital Solutions
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.bio}>
            Hi, I&apos;m <strong>Purbo Jatmiko</strong>, an Information Systems student
            at Telkom University. Focused on developing robust web architectures,
            relational database systems, and engaging user interfaces.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.consoleBox}>
            <div className={styles.consoleHeader}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
              <span className={styles.consoleTitle}>developer.profile.ts</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.keyword}>const</span> <span className={styles.varName}>developer</span> = &#123;
            </div>
            <div className={`${styles.codeLine} ${styles.indent}`}>
              <span className={styles.property}>name</span>: <span className={styles.stringVal}>&apos;Purbo Jatmiko&apos;</span>,
            </div>
            <div className={`${styles.codeLine} ${styles.indent}`}>
              <span className={styles.property}>campus</span>: <span className={styles.stringVal}>&apos;Telkom University (IS)&apos;</span>,
            </div>
            <div className={`${styles.codeLine} ${styles.indent}`}>
              <span className={styles.property}>focus</span>: <span className={styles.stringVal}>&apos;Web Engineering & Databases&apos;</span>,
            </div>
            <div className={`${styles.codeLine} ${styles.indent}`}>
              <span className={styles.property}>availability</span>: <span className={styles.statusLive}>&apos;Open for Collaboration&apos;</span>,
            </div>
            <div className={styles.codeLine}>&#125;;</div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.ctaGroup}>
            <a href="#projects" className={styles.btnPrimary}>
              <span>Explore Projects</span>
              <FaArrowRight size={13} />
            </a>

            <a href="#contact" className={styles.btnSecondary}>
              <FaEnvelope size={14} />
              <span>Get in Touch</span>
            </a>

            <a
              href="https://github.com/PURB0234"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
              aria-label="GitHub Profile"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className={styles.visualSide}
        >
          <Avatars />
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.stackSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className={styles.stackTitle}>Tech Stack & Tools</span>
        <div className={styles.stackGrid}>
          {techStacks.map((tech) => (
            <motion.div
              key={tech.name}
              className={styles.stackBadge}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span style={{ color: tech.color }}>{tech.icon}</span>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
