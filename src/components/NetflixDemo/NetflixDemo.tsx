"use client";

import styles from "./NetflixDemo.module.scss";

const POSTERS = [
  { title: "Stranger Things", color: "#831010" },
  { title: "Wednesday", color: "#1a1a2e" },
  { title: "The Witcher", color: "#2d3a1a" },
  { title: "Money Heist", color: "#8b0000" },
  { title: "Dark", color: "#0d1b2a" },
  { title: "Squid Game", color: "#1b4332" },
];

function PosterRow({ label }: { label: string }) {
  return (
    <div className={styles.section}>
      <p className={styles.sectionTitle}>{label}</p>
      <div className={styles.posterRow}>
        {POSTERS.map((p) => (
          <div
            key={p.title}
            className={styles.poster}
            style={{ backgroundColor: p.color }}
          >
            <span>{p.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NetflixDemo() {
  return (
    <div className={styles.phone}>
      <div className={styles.screen}>
        {/* Status bar */}
        <div className={styles.statusBar}>
          <span>9:41</span>
          <span>●●●</span>
        </div>

        {/* App bar */}
        <div className={styles.appBar}>
          <span className={styles.logo}>N</span>
          <div className={styles.navLinks}>
            <span>TV Show</span>
            <span>Movies</span>
            <span>Category</span>
          </div>
        </div>

        {/* Hero thumbnail */}
        <div className={styles.hero}>
          <div className={styles.heroGradient} />
          <p className={styles.heroTitle}>STRANGER THINGS</p>
          <div className={styles.heroButtons}>
            <button className={styles.btnMyList}>
              <span>+</span> My List
            </button>
            <button className={styles.btnPlay}>▶ Play</button>
            <button className={styles.btnInfo}>ⓘ Info</button>
          </div>
        </div>

        {/* Content rows */}
        <div className={styles.content}>
          <PosterRow label="Popular on Netflix" />
          <PosterRow label="Top Rated" />
          <PosterRow label="Trending Now" />
        </div>

        {/* Bottom nav */}
        <div className={styles.bottomNav}>
          <div className={styles.navItem}>
            <span>🏠</span>
            <span>Home</span>
          </div>
          <div className={styles.navItem}>
            <span>🔍</span>
            <span>Search</span>
          </div>
          <div className={styles.navItem}>
            <span>🎬</span>
            <span>Coming</span>
          </div>
          <div className={styles.navItem}>
            <span>⬇</span>
            <span>Download</span>
          </div>
          <div className={styles.navItem}>
            <span>☰</span>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
