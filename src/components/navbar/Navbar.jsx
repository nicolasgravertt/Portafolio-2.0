import { motion } from "framer-motion";
import { email, github, linkedin, ng } from "../../assets";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-icon">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            src={ng}
            alt="email"
          />
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
      <Sidebar />
    </nav>
  );
};

export default Navbar;
