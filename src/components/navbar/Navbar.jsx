import { email, github, linkedin, ng } from "../../assets";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-icon">
          <img src={ng} alt="email" />
        </div>
        <div className="nav-spacer" />
        <div className="nav-order-list">
          <ul>
            <li>
              <a href="#">
                <img src={email} alt="email" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={github} alt="email" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedin} alt="email" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
