import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div style={{ height: "600px" }}>
      <h2>Your requested address was not found.</h2>
      <h1> Would You Like to Go Back to</h1>
      <div className="void" style={{ margin: "20px" }}></div>
      <Link to="/" className="redirects">
        Home
      </Link>
      <Link to="/about" className="redirects">
        About
      </Link>
      <Link to="/projects" className="redirects">
        Projects
      </Link>
      <Link to="./contact" className="redirects">
        Contact
      </Link>
    </div>
  );
};

export default Error;
