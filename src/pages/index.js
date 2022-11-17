import Link from 'next/link';
import Error from 'next/error';

//components
import PostsList from '../components/posts';
import UsersList from '../components/users';
import Navbar from '../components/navbar';
import Head from 'next/head';

const Home = (props) => {
  if (props.errorCode) {
    return <Error statusCode={props.errorCode} title='There is an error' />;
  }

  return (
    <>
      <Head>
        <title>Bahar's Blog</title>
      </Head>
      <h2>Hello Bahar</h2>
      <Navbar />
      <div>
        <img
          style={{ height: '50vh', width: '100vw' }}
          src='/images/blog.jpg'
        />
        <h2>Blog Posts</h2>
        <PostsList posts={props.posts} />
        <UsersList users={props.users} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  let errorCode = res.ok ? false : res.status;
  let posts = await res.json();

  res = await fetch('http://localhost:3000/api/users');
  let users = await res.json();
  return {
    props: {
      errorCode,
      posts,
      users: users.data,
    },
  };
}

export default Home;
