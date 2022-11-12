import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Bahar learning</h1>
      <ul>
        <li>
          <Link href='/'> Home</Link>
        </li>
        <li>
          <Link href='/articles'> Articles</Link>
        </li>
        <li>
          <Link href='/courses'> Courses</Link>
        </li>
        <li>
          <Link href='/about'> About</Link>
        </li>
        <li>
          <Link href='/contact-us'> Contact-us</Link>
        </li>
      </ul>
      <h2>Blog Articles</h2>
      <ul>
        <li>
          <Link href='/articles?title=article-1&id=1'>Article 1</Link>
        </li>
        <li>
          <Link href='/articles?title=article-2&id=2'>Article 2</Link>
        </li>
        <li>
          <Link href='/articles?title=article-3&id=3'>Article 3</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
