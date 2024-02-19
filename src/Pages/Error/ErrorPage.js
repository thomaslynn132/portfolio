import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div style={{ height: "600px" }}>
      <h2>Your requested address was not found.</h2>
      <h1> Would You Like to Go Back to</h1>
      <Link to="/" className="redirects">
        Home Page
      </Link>{" "}
      <br />
      <p> or</p>
      <Link to="/about" className="redirects">
        About Page
      </Link>
      <p> or</p>
      <Link to="/projects" className="redirects">
        Projects Page
      </Link>
    </div>
  );
};

export default Error;
