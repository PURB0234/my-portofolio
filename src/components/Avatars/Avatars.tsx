"use client";
import styles from "./Avatars.module.scss";
import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useSpring,
} from "motion/react";

import Image from "next/image";

export default function Avatars() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {
        stiffness: 150,
        damping: 20
    });
    const springY = useSpring(mouseY, {
        stiffness: 150,
        damping: 20
    });

    const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

    const photoZ = useTransform(springX, [-0.5, 0.5], [25, 45]);
    const glowX = useTransform(springY, [-0.5, 0.5], [25, 45]);

    function handleMouseMove(
        e: React.MouseEvent<HTMLDivElement>
    ) {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(
            (e.clientX - rect.left) / rect.width - 0.5
        );
        mouseY.set(
            (e.clientY - rect.top) / rect.height - 0.5
        );
    }

    function resetCard() {
        mouseX.set(0);
        mouseY.set(0);
    }

    // function handleTouchMove(touch: React.TouchEvent<HTMLDivElement>) {
    //     const rect = touch.currentTarget.getBoundingClientRect();
    //     const touchX = touch.touches[0].clientX - rect.left;
    //     const touchY = touch.touches[0].clientY - rect.top;
    //     mouseX.set(touchX / rect.width - 0.5);
    //     mouseY.set(touchY / rect.height - 0.5);
    // }

    return (
        <div
            className={styles.container}
            style={{ perspective: 600 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetCard}
        >
            <motion.div
                className={styles.card}
                whileHover={{ scale: 1.05 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.8
                }}
                style={{
                    // transformStyle: "preserve-3d",
                    rotateX,
                    rotateY,
                }}

                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
            // transition={{ duration: 0.8 }}
            >
                <motion.div
                    className={styles.cardGlow}
                    style={{
                        x: glowX,
                        z: -30
                    }}
                />

                <div
                    className={styles.cardLayer}
                    style={{
                        transform: "translateZ(-40px) translateX(16px)",
                    }}
                />

                <div
                    className={styles.cardFirst}
                    style={{ transform: "translateZ(0px)" }}
                >
                    <Image
                        src="/foto.png"
                        alt="Foto profil"
                        fill
                        priority
                        sizes="256px"
                        className="object-cover"
                    />

                    <div className={styles.bottomGradient} />

                    <div
                        className={styles.informationProfile}
                        style={{ transform: "translateZ(60px)" }}
                    >
                        <p className={styles.major}>
                            INFORMATION SYSTEMS
                        </p>
                        <h2 className={styles.name}>
                            Purbo Jatmiko
                        </h2>
                        <p className={styles.desc}>
                            Developer in progress ✦
                        </p>
                    </div>
                </div>

                <motion.div className={styles.badge}
                    style={{
                        z: 85,
                        x: glowX,
                    }}

                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    ✦ Creative Developer
                </motion.div>
            </motion.div>
        </div>
    )
}