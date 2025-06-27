import * as React from "react";
import css from "./Header.module.scss";
import { Feather, Home, Repeat2, Signature } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.headerContent}>

        <Link href="/">
        <button>
          <Home size={22} />
          <span className={css.conditional}>Home</span>
        </button>
        </Link>

        <div className={css.divider} />

        <Link href="/experience">
        <button>
          <Signature size={22} />
          <span className={css.conditional}>Experience</span>
        </button>
        </Link>

        <div className={css.divider} />

        <Link href="/poetry">
        <button>
          <Feather size={22} />
          <span className={css.conditional}>Poetry</span>
        </button>
        </Link>

        <div className={css.divider} />

        <Link href="/reposts">
        <button>
          <Repeat2 size={22} />
          <span className={css.conditional}>Reposts</span>
        </button>
        </Link>
      </div>
    </div>
  );
}
