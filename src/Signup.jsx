import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
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
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" className="form-control" type="text" />
        </div>
        <div>
          Email: <input name="email" className="form-control" type="email" />
        </div>
        <div>
          Password: <input name="password" className="form-control" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" className="form-control" type="password" />
        </div>
        <button className="mt-3 btn btn-secondary" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
