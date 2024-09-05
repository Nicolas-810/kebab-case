import { Link } from "react-router-dom";
import './Links.css'

const Links = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/"> Inicio </Link>
          </li>
          <li>
            <Link to="/Home">Star</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Links;
