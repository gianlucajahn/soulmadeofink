import * as React from 'react';
import css from './Footer.module.scss'

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <div className={css.footer}>
      <a href="/imprint">Impressum</a>
      <p>© 2025 - Soul Made of Ink, handcrafted by Gianni</p>
    </div>
  );
}
