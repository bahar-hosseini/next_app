import React from 'react';
import Link from 'next/link';

import styles from './posts.module.css';

const posts = (props) => {
  return (
    <div>
      <ul>
        {props.posts.map((post) => {
          return (
            <li key={post.id} className={styles.itemList}>
              <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                <p className={styles.title}>Title: {post.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default posts;
