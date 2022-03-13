import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Thứ 2",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Thứ 3",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Thứ 4",
    uv: 3000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thứ 5",
    uv: 4000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thứ 6",
    uv: 3200,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Thứ 7",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "CN",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function ChartLine() {
  return (
    <ResponsiveContainer height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#ff993b" fill="#feebde" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ChartLine;
