import Link from 'next/link';

//components
import PostsList from '../components/posts';
import Navbar from '../components/navbar';

const Home = (props) => {
  return (
    <>
      <h2>Hello Bahar</h2>
      <Navbar />
      <h2>Blog Posts</h2>
      <PostsList posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
