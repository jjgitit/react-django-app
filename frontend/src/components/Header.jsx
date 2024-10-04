import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/new-post">New Post</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
}

export default Header;
