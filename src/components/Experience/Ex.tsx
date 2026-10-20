import styles from "./Ex.module.scss";

type ExType = {
    title: string;
    description: string;
    period: string;
    category: string;
};

export default function Exam({
    title,
    description,
    period,
    category,
}: ExType) {
    return (
        <article className={styles.experience}>
            <div className={styles.marker} aria-hidden="true">
                <span />
            </div>

            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.category}>{category}</span>
                    <span className={styles.period}>{period}</span>
                </div>

                <h3 className={styles.title}>{title}</h3>

                <p className={styles.description}>{description}</p>
            </div>
        </article>
    );
}