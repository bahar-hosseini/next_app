import React from 'react';
import Link from 'next/link';

const navbar = () => {
  return (
    <div>
      {' '}
      <ul>
        <li>
          <Link href='/'>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href='/articles'>
            <p>Articles</p>
          </Link>
        </li>
        <li>
          <Link href='/courses'>
            <p>Courses</p>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link href='/contact-us'>
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
