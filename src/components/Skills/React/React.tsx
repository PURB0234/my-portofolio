import Image from "next/image";
import styles from "./React.module.scss";
import { FaReact, FaGithub, FaLaravel } from 'react-icons/fa';

export default function React() {
    return (
        <div className={styles.Icon}>
            {/* <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOw1cvZ9NCnSg9yZDRJFvqjSCGy9r2xrduug&s"
            alt=""
            width={50}
            height={50}
            /> */}
            <FaReact size={50}/>
        </div>
    )
}