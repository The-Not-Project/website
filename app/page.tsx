import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
  <main>
    <h1>THE NOT PROJECT</h1>
    <Link href="/borough/queens">Queens</Link>
    <br />
    <Link href="/borough/brooklyn">Brooklyn</Link>
  </main>
  );
}
