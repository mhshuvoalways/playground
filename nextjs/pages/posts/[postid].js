import { useRouter } from "next/router";

export default function Post({ post }) {
  // const route = useRouter();

  // if (route.isFallback) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <hr />
    </div>
  );
}

export async function getStaticPaths() { // because of dynamic page
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const post = await res.json();

    const path = post.map((el) => {
      return {
        params: {
          postid: el.id.toString(),
        },
      };
    });
    return {
      paths: path,
      fallback: false, //ssg. All the pages will be built in the build time
    };

  // return {
  //   paths: [
  //     { params: { postid: "1" } },
  //     { params: { postid: "2" } },
  //     { params: { postid: "3" } },
  //   ],
  //   fallback: true, // ssr. if you provide true then page 4 will be generate in the background. fallback: "blocking" is similar to fallback true. But it doesn't need loading as far as I understand
  // };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const post = await res.json();
  return { props: { post } };
}
