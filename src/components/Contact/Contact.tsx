"use client";

import { motion } from "motion/react";
import styles from "./cntk.module.scss";
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.card}>
        <span className={styles.badge}>GET IN TOUCH</span>
        <h1 className={styles.title}>Let's Connect!</h1>
        <p className={styles.description}>
          Punya ide, proyek, atau kesempatan untuk berkolaborasi? Saya terbuka untuk belajar bersama, berdiskusi, dan mengeksplorasi hal-hal baru di dunia teknologi.
        </p>

        <a href="mailto:purbojatmiko57@gmail.com" className={styles.emailButton}>
          <FaEnvelope />
          <span>purbojatmiko57@gmail.com</span>
        </a>

        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/prjtmko/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/purbo-jatmiko-558a8b373"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/PURB0234"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
}