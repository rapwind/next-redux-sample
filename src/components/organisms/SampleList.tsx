// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import SampleEntity from "~/entities/SampleEntity";
import SampleListItem from "~/components/molecules/SampleListItem";
import styles from "./SampleList.module.css";

type Props = {
  items: SampleEntity[];
};

const SampleList: FC<Props> = ({ items }) => (
  <ul className={styles.sampleList}>
    {items.map((item) => (
      <SampleListItem key={item.id} item={item}></SampleListItem>
    ))}
  </ul>
);
export default SampleList;
