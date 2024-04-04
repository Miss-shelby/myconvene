import styles from "./NavBar.module.css";
import Button from "../Buttons";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div className={styles.nav_bar}>
        <div>logo</div>
        <div>
          <ul className={styles.nav_links}>
            <li>
              Home
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
            </li>
            <li>
              Services
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
            </li>
            <li>
              Feature
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
            </li>
          </ul>
        </div>
        <div className={styles.nav_buttons}>
          <Button variant="unique">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="primary" size="small">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button variant="primary" size="small">
            <Link to="/meetUp">meet up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Nav;
