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
    </>
  );
};

export default Home;
