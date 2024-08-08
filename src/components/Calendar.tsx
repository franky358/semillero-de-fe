import React from "react";

import ActivityCalendar, { ThemeInput } from "react-activity-calendar";
import chroma from "chroma-js";

const data = [
  {
    date: "2023-06-14",
    count: 2,
    level: 1,
  },
  {
    date: "2023-06-22",
    count: 16,
    level: 3,
  },
];

const createColorScale = (colors: string[]) =>
  chroma.scale(colors).mode("lab").colors(5);

const theme: ThemeInput = {
  light: createColorScale([
    "#ebedf0",
    "#9be9a8",
    "#40c463",
    "#30a14e",
    "#216e39",
  ]),
  dark: createColorScale([
    "#1c1c1c",
    "#0b6e1d",
    "#17b169",
    "#6fce88",
    "#ccf6c8",
  ]),
};

const Calendar: React.FC = () => {
  return <ActivityCalendar data={data} theme={theme} />;
};

export default Calendar;
