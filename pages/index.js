import Link from 'next/link';

const Home = (props) => {
  return (
    <>
      <h2>Hello Roocket</h2>
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
      <h2>Blog Posts</h2>
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
