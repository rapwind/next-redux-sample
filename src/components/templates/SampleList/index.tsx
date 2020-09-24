// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import SampleList from "~/components/organisms/SampleList";
import SampleEntity from "~/entities/SampleEntity";
import styles from "./styles.module.css";

type Props = {
  loading?: boolean;
  error?: boolean;
  items: SampleEntity[];
};

const SampleListTemplate: FC<Props> = ({ loading, error, items }) => (
  <div className={styles.container}>
    <main>
      <h2>
        {loading ? "ローディング中…" : ""}
        {error ? "失敗しました" : ""}
      </h2>
      <SampleList items={items}></SampleList>
    </main>
  </div>
);
export default SampleListTemplate;
