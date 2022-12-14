import Head from 'next/head';

const SinglePost = (props) => {
  const { post } = props;
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export async function getServerSideProps({ params }) {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  let post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default SinglePost;
