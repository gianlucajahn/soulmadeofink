"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";
import css from "./ZoomOnScrollImage.module.scss";
import { Feather, Repeat2, Signature } from "lucide-react";

export default function ZoomOnScrollImage() {
  const zoomValue = useMotionValue(0);
  const smoothZoom = useSpring(zoomValue, { stiffness: 80, damping: 25 });
  const scale = useTransform(smoothZoom, [0, 1000], [1, 7]);

  const containerRef = useRef(null);

  const handleZoomClick = () => {
    animate(zoomValue, 1000, {
      duration: 3, // seconds
      ease: "easeInOut",
    });
  };

  return (
    <div ref={containerRef} className={css.zoomPage}>
      <motion.div style={{ scale }} className={css.zoomWrapper}>
        <Image
          src={require("../../../resources/images/soulmadeofink.png")}
          alt="Zooming Logo"
          width={600}
          height={300}
          className={css.zoomImage}
          priority
        />
      </motion.div>
      <div className={css.buttonContainer}>
        <a className={css.catBut} href="/experience">
          <button className={css.selectButton}>
            <Signature size={44} />
            Experience
          </button>
        </a>

        <p className={css.catText}>
          "Just me rambling about things I have experienced, my two cents on
          certain topics and the melancholy of human memories."
        </p>

        <a className={css.catBut} href="/poetry">
        <button className={css.selectButton}>
          <Feather size={42} />
          Poetry
        </button></a>

        <p className={css.catText}>
          "I don't write structured poems but I would still much rather
          categorize it under poetry rather than letters or texts, so here you
          go. This is pretty much as private as sharing thoughts can get."
        </p>

        <a className={css.catBut} href="/reposts">
        <button className={css.selectButton}>
          <Repeat2 size={44} />
          Reposts
        </button></a>

        <p className={css.catText}>
          "Letters, texts, poems and quotes that I identified enough with to
          feel the need to put them on here."
        </p>
      </div>
    </div>
  );
}
