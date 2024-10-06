import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/new-post">
            New Post
          </Link>
          <Link className={styles.link} to="/profile">
            Profile
          </Link>
        </div>
        <Link className={styles.logout} to="/logout">
          Logout
        </Link>
      </nav>
    </header>
  );
}

export default Header;
