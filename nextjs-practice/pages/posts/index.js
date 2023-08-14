import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>List of posts</h1>
      {posts.map((el) => (
        <Link key={el.id} href={`/posts/${el.id}`}>
          <div>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
          </div>
          <hr />
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts: posts,
    },
  };
}

export default Posts;
