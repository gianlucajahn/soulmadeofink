import * as React from "react";
import css from "./Header.module.scss";
import { Feather, Home, Repeat2, Signature } from "lucide-react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className={css.header}>
      <div className={css.headerContent}>

        <a href="/">
        <button>
          <Home size={22} />
          <span className={css.conditional}>Home</span>
        </button>
        </a>

        <div className={css.divider} />

        <a href="/experience">
        <button>
          <Signature size={22} />
          <span className={css.conditional}>Experience</span>
        </button>
        </a>

        <div className={css.divider} />

        <a href="/poetry">
        <button>
          <Feather size={22} />
          <span className={css.conditional}>Poetry</span>
        </button>
        </a>

        <div className={css.divider} />

        <a href="/reposts">
        <button>
          <Repeat2 size={22} />
          <span className={css.conditional}>Reposts</span>
        </button>
        </a>
      </div>
    </div>
  );
}
