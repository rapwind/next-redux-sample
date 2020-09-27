// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import Link from "~/components/atoms/Link";
import SampleEntity from "~/entities/SampleEntity";
import styles from "./SampleListItem.module.css";

type Props = {
  item: SampleEntity;
};

const SampleListItem: FC<Props> = ({ item }) => (
  <li className={styles.sampleListItem}>
    <Link href="/sample/[sampleId]" as={`/sample/${item.id}`}>
      {item.id}: {item.name}
    </Link>
  </li>
);
export default SampleListItem;
