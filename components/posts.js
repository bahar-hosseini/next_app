import React from 'react';
import Link from 'next/link';

const posts = (props) => {
  return (
    <div>
      <ul>
        {props.posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                <p>{post.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default posts;
