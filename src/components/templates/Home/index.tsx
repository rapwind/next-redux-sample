import { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const HomeTemplate: FC = () => (
  <div className={styles.container}>
    <main>
      <Link href="sample">
        <a>Sample</a>
      </Link>
    </main>
  </div>
);
export default HomeTemplate;
