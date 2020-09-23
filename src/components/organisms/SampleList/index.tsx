import { FC } from "react";
import SampleEntity from "~/entities/SampleEntity";
import SampleListItem from "~/components/molecules/SampleListItem";
import styles from "./styles.module.css";

type Props = {
  items: SampleEntity[];
};

const SampleListOrganisms: FC<Props> = ({ items }) => (
  <ul className={styles.sampleList}>
    {items.map((item) => (
      <SampleListItem item={item}></SampleListItem>
    ))}
  </ul>
);
export default SampleListOrganisms;
