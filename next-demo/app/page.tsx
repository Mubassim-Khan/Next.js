// import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
// import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// If using Next version later than 13.0.6
// export const metadata: Metadata = {
//   title: 'Home page',
//   description: 'Generated by create next app',
// }

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/about">Link to About page</Link>
    </main>
  );
}
