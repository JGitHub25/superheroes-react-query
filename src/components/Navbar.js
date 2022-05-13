import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional super heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ super heroes</Link>
          </li>
          <li>
            <Link to="/super-heroes-instyle">In style</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/rq-parallel">Parallel queries</Link>
          </li>
          <li>
            <Link to="/rq-dynamic-parallel">Dynamic parallel queries</Link>
          </li>
          <li>
            <Link to="/rq-dependent">Dependent queries</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
