import { useRouter } from 'next/router';

const SignleArticle = () => {
  const router = useRouter();

  return (
    <>
      <h2>Single Article</h2>
      <h2>{router.query.title}</h2>
    </>
  );
};

export default SignleArticle;
