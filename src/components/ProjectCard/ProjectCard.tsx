"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "@/data/projects";
import NetflixDemo from "@/components/NetflixDemo/NetflixDemo";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({
  title,
  description,
  link,
  tech,
  demo,
}: Project) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className={styles.card}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setOpen(true)}
      >
        <div className={styles.cardGlow} />
        <div className={styles.header}>
          <span className={styles.icon}>📂</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.techs}>
          {tech.map((t) => (
            <span key={t} className={styles.techPill}>
              {t}
            </span>
          ))}
        </div>
        <span className={styles.viewLabel}>Click to preview →</span>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              <div className={styles.modalBody}>
                <div className={styles.demoWrap}>
                  {demo === "netflix" ? (
                    <NetflixDemo />
                  ) : (
                    <div className={styles.noDemo}>Preview not available</div>
                  )}
                </div>

                <div className={styles.modalInfo}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div className={styles.techs}>
                    {tech.map((t) => (
                      <span key={t} className={styles.techPill}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ghLink}
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}