import { FC } from "react";
import SampleEntity from "~/entities/SampleEntity";
import styles from "./styles.module.css";

type Props = {
  loading?: boolean;
  item: SampleEntity;
};

const SampleDetailTemplate: FC<Props> = ({ loading, item }) => (
  <div className={styles.container}>
    <main>
      <h2>{loading ? "ローディング中…" : ""}</h2>
      <p>
        {item.id}: {item.name}
      </p>
    </main>
  </div>
);
export default SampleDetailTemplate;
