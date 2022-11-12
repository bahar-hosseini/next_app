import { useRouter } from 'next/router';

const SingleArticle = () => {
  const router = useRouter();
  console.log(router.query);

  return <h2>Article id: {router.query.id} </h2>;
};

export default SingleArticle;
