import styles from "./Description.module.scss";
export default function Description() {
    return (
        <div className={styles.DescriptionContainer}>
            <div className={styles.DescriptionContainerTeks}>
                <p>Mahasiswa Sistem Informasi yang tertarik pada Web Development dan Database.</p>
            </div>
        </div>
    )
}