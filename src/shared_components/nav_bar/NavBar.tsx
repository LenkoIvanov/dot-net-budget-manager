import Link from "next/link";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link href={"/"} style={{ marginRight: "2rem" }}>
        App
      </Link>
      <Link href={"/about_page"}>About</Link>
    </div>
  );
};
