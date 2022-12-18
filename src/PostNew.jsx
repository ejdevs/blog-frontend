import axios from "axios";
import { useState } from "react";

export function PostNew() {
  const [errors, setErrors] = useState([]);

  const handleCreatePost = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        setErrors(error.response.data.errors ? error.response.data.errors : ["Must Login!"]);
      });
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleCreatePost}>
        <div>
          Title: <input name="title" className="form-control" type="text" />
        </div>
        <div>
          Body: <input name="body" className="form-control" type="text" />
        </div>
        <div>
          Image: <input name="image" className="form-control" type="text" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}

// export function PostNew(props) {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const params = new FormData(event.target);
//     props.onCreatePost(params);
//     event.target.reset();
//   };

//   return (
//     <div id="posts-new">
//       <h1>New post</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Title: <input name="title" type="text" />
//         </div>
//         <div>
//           Body: <input name="body" type="text" />
//         </div>
//         <div>
//           Image: <input name="image" type="text" />
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }
