import * as React from 'react';
import css from './Footer.module.scss'
import Link from 'next/link';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <div className={css.footer}>
      <Link href="/imprint">Impressum</Link>
      <p>© 2025 - Soul Made of Ink, handcrafted by Gianni</p>
    </div>
  );
}
