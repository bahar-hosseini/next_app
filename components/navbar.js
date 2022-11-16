import React from 'react';
import Link from 'next/link';

import styles from './navbar.module.css';

const navbar = () => {
  return (
    <div>
      {' '}
      <ul className={styles.list}>
        <li className={styles.itemList}>
          <Link href='/'>
            <p>Home</p>
          </Link>
        </li>
        <li className={styles.itemList}>
          <Link href='/articles'>
            <p>Articles</p>
          </Link>
        </li>
        <li className={styles.itemList}>
          <Link href='/courses'>
            <p>Courses</p>
          </Link>
        </li>
        <li className={styles.itemList}>
          <Link href='/about'>
            <p>About</p>
          </Link>
        </li>
        <li className={styles.itemList}>
          <Link href='/contact-us'>
            <p>Contact Us</p>
          </Link>
        </li>
        <li className={styles.itemList}>
          <Link href='/posts/create'>
            <p>Create Post</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
