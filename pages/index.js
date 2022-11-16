import Link from 'next/link';

//components
import PostsList from '../components/posts';
import UsersList from '../components/users';
import Navbar from '../components/navbar';

const Home = (props) => {
  return (
    <>
      <h2>Hello Bahar</h2>
      <Navbar />
      <div>
        <h2>Blog Posts</h2>
        <img
          style={{ height: '50vh', width: '100vw' }}
          src='/images/blog.jpg'
        />
        <PostsList posts={props.posts} />
        <UsersList users={props.users} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await res.json();

  res = await fetch('http://localhost:3000/api/users');
  let users = await res.json();
  return {
    props: {
      posts,
      users: users.data,
    },
  };
}

export default Home;
