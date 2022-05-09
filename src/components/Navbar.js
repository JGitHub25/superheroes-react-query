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
        </ul>
      </nav>
    </>
  );
};
