import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

export interface PaginationProps {
  data?: any;
}

const COLORS = ["#4F75FF", "#FF8A48"];

const renderColorfulLegendText = (value: string, entry: any) => {
  return (
    <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
      {value}
    </span>
  );
};

function ChartDonut({ data }: PaginationProps) {
  return (
    <ResponsiveContainer height={230}>
      <PieChart width={800} height={230}>
        <Legend
          height={36}
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          formatter={renderColorfulLegendText}
        />
        <Pie
          data={data}
          cx={120}
          cy={120}
          innerRadius={60}
          outerRadius={95}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry: any, index: any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ChartDonut;
