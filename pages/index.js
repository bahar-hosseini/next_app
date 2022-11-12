import Link from 'next/link';

const Home = () => {
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
      <h2>Blog Articles</h2>
      <ul>
        <li>
          <Link href='/articles/[title]/[id]' as='/articles/article-1/1'>
            <p>Article 1</p>
          </Link>
        </li>
        <li>
          <Link href='/articles/[title]/[id]' as='/articles/article-2/2'>
            <p>Article 2</p>
          </Link>
        </li>
        <li>
          <Link href='/articles/[title]/[id]' as='/articles/article-3/3'>
            <p>Article 3</p>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
