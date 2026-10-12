import styles from "./Teks.module.scss";

export default function Teks() {
    return (
        <div className={styles.TeksContainer}>
            <h1>Hello I'm</h1>

            <div className={styles.TeksContainerRow}>
                {/* <h1>Purbo Jatmiko</h1> */}
                <h1 className={styles.Teks}>Purbo Jatmiko</h1>
            </div>
        </div>
    )
}
