import { div } from "motion/react-client";
import styles from "./cntk.module.scss";
import { FaUser, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Cntk() {
    return (
        <div className={styles.container}>
            <div className={styles.containerContact}>
                <h1>Contact</h1>

                <div className={styles.containerTeks}>
                    <p>
                        Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing
                        and implementing robust, scalable, and innovative web solutions. Adept at leveraging a
                        comprehensive skill set encompassing front-end and back-end technologies
                    </p>
                </div>

                <div className={styles.email}>
                    <FaUser color="white"/>
                    <p>purbojatmiko57@gmail.com</p>
                </div>

                <div className={styles.sosialMedia}>
                    <FaInstagram className={styles.icon}/>
                    <FaTwitter/>
                </div>

            </div>
        </div>
    )
}