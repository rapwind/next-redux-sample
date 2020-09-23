import { FC } from "react";
import Link from "~/components/atoms/Link";
import SampleEntity from "~/entities/SampleEntity";
import styles from "./styles.module.css";

type Props = {
  item: SampleEntity;
};

const SampleListItemMolecules: FC<Props> = ({ item }) => (
  <li className={styles.sampleListItem}>
    <Link href="/sample/[sampleId]" as={`/sample/${item.id}`}>
      {item.id}: {item.name}
    </Link>
  </li>
);
export default SampleListItemMolecules;
