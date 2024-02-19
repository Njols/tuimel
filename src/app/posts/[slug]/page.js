import Dinglebon from "../../bingle.json";

async function getPost(slug) {
  post = Dinglebon.find((post) => {
    post.title === slug;
  });
  if (post[0]) {
    return post[0];
  }
}

async function Post({ params }) {
  const post = await getPost(params);
  return <div>{post.title}</div>;
}

export default Post;
