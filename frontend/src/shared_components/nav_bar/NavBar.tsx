import Link from "next/link";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <h4 style={{ marginRight: "2rem" }}>
        <b>Budget tracker with React&.NET</b>
      </h4>
      <Link
        href={"/"}
        style={{ marginRight: "2rem", color: "black", textDecoration: "none" }}
      >
        <b>App</b>
      </Link>
      <Link
        href={"/about_page"}
        style={{ color: "black", textDecoration: "none" }}
      >
        <b>About</b>
      </Link>
    </div>
  );
};
