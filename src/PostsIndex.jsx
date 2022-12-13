export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>

      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image_url} alt="" />
          <p>Body: {post.body}</p>
          <button onClick={() => props.onSelectPost(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
