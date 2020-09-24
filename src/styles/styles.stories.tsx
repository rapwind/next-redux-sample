// eslint-disable-next-line no-use-before-define
import React from "react";

export default {
  title: "Colors",
};

const Color = ({ color }): JSX.Element => (
  <li
    key={color}
    style={{
      borderRadius: "5px",
      border: "1px solid lightgray",
      padding: "5px",
    }}
  >
    <span
      style={{
        backgroundColor: `var(${color})`,
        display: "block",
        height: "4em",
        marginBottom: "0.3em",
        borderRadius: "5px",
        border: "1px solid lightgray",
      }}
    />
    <span>{color}</span> <br />
  </li>
);

const ColorGroup = ({
  colors,
}: {
  colors: { color: string }[];
}): JSX.Element => (
  <ul
    style={{
      listStyle: "none",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 175px))",
      gridGap: "20px",
      marginBottom: "40px",
    }}
  >
    {colors
      .map((color) => Color(color))
      .reduce((acc, cur) => [...acc, cur], [])}
  </ul>
);

export const Colors = (): JSX.Element =>
  ColorGroup({
    colors: [
      { color: "--primary-color" },
      { color: "--secondary-color" },
      { color: "--accent-color" },
      { color: "--error-color" },
      { color: "--disabled-color" },
      { color: "--gray-color" },
      { color: "--text-link-color" },
      { color: "--text-color" },
      { color: "--text-sub-color" },
      { color: "--text-gray-color" },
      { color: "--text-light-gray-color" },
      { color: "--text-white-color" },
    ],
  });
