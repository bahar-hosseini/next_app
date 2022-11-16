import React from 'react';
import Link from 'next/link';

const users = (props) => {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              <Link href='#'>
                <p>{user.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default users;
