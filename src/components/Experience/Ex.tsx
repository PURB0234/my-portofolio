import styles from "./Ex.module.scss";

type ExType = {
    title: string;
    description: string;
    at: string;
}

export default function Exam({ title, description, at }: ExType) {
    return (
        <div className={styles.container}>
            <div className={styles.containerHeaderFooter}>
                <div className={styles.header}>
                    <div className="flex flex-row">
                        {/* logo disini */}
                        <h1>{title}</h1>
                    </div>
                    <h2>{at}</h2>
                </div>

                <div className={styles.footer}>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    )
}