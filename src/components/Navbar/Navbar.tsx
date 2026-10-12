"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import styles from "./Navbar.module.scss";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about_me" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      // Prioritaskan #contact saat sudah di dasar halaman
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActive("#contact");
        return;
      }

      // Deteksi section yang sedang berada di area pandang
      const visibleSections = navItems
        .map((item) => {
          const el = document.getElementById(item.href.substring(1));
          return {
            id: item.href,
            top: el ? el.getBoundingClientRect().top : Infinity,
          };
        })
        .filter((sec) => sec.top <= 250);

      if (visibleSections.length > 0) {
        const currentSection = visibleSections[visibleSections.length - 1];
        setActive(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -60, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ul className={styles.menu}>
        {navItems.map((item) => {
          const isActive = active === item.href;
          return (
            <motion.li key={item.name} whileTap={{ scale: 0.92 }}>
              <a
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className={styles.activePill}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 2 }}>
                  {item.name}
                </span>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </motion.nav>
  );
}