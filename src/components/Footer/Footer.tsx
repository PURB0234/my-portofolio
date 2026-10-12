import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.status}>
          <span className={styles.ping}>
            <span className={styles.pingDot} />
            <span className={styles.baseDot} />
          </span>
          <span>Available for projects & collaboration</span>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Purbo Jatmiko. Built with Next.js & Motion.
        </p>
      </div>
    </footer>
  );
}
