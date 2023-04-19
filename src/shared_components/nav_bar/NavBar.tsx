import Link from "next/link";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link href={"/"}>App</Link>
        </li>
        <li>
          <Link href={"/about_page"}>About</Link>
        </li>
      </ul>
    </div>
  );
};
