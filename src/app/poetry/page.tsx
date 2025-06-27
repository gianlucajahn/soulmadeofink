"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import Gallery from "../components/Gallery/Gallery";

const tabs = ["Apps", "Games"];

export default function AppStoreTabs() {
  const [active, setActive] = useState("Apps");

  return (
      <div className={styles.experience}>
        <h1>Poetry*</h1>
        <p className={styles.pageDesc}>
          *I don't write structured poems but I would still much rather
          categorize it under poetry rather than letters or texts, so here you
          go. This is pretty much as private as sharing thoughts can get.
        </p>

        <Gallery category="poetry" />
      </div>
  );
}
