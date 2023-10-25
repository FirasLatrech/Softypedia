import Link from "next/link";
import Shearch from "./Shearch";
import style from "./page.module.css";

export default function Navbar() {
  return (
    <nav className={style.NavBarContainer}>
      <h1>
        <Link href="/">WikiSoftyLine!</Link>
      </h1>
      <Shearch />
    </nav>
  );
}
