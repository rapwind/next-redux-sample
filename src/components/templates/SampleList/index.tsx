import { FC } from "react";
import Link from "next/link";
import SampleEntity from "~/entities/SampleEntity";
import styles from "./styles.module.css";

type Props = {
  loading?: boolean;
  items: SampleEntity[];
};

const SampleListTemplate: FC<Props> = ({ loading, items }) => (
  <div className={styles.container}>
    <main>
      <h2>{loading ? "ローディング中…" : ""}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href="/sample/[sampleId]" as={`/sample/${item.id}`}>
              <a>
                {item.id}: {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  </div>
);
export default SampleListTemplate;
