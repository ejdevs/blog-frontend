import axios from "axios";

export function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((errors) => {
        console.log(errors.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          Email: <input name="email" className="form-control" type="email" />
        </div>
        <div>
          Password: <input name="password" className="form-control" type="password" />
        </div>
        <button className="mt-3 btn btn-secondary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
