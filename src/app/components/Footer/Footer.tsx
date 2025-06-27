import * as React from 'react';
import css from './Footer.module.scss'
import Link from 'next/link';

export default function Footer () {
  return (
    <div className={css.footer}>
      <Link href="/imprint">Impressum</Link>
      <p>© 2025 - Soul Made of Ink, handcrafted by Gianni</p>
    </div>
  );
}
