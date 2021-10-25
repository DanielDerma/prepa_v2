import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  {
    name: 3001,
    uv: 70,
  },
  {
    name: 3002,
    uv: 84,
  },
  {
    name: 3003,
    uv: 94,
  },
  {
    name: 3004,
    uv: 90,
  },
  {
    name: 3005,
    uv: 74,
  },
  {
    name: 3006,
    uv: 81,
  },
  {
    name: 3007,
    uv: 81,
  },
  {
    name: 3008,
    uv: 91,
  },
  {
    name: 3009,
    uv: 67,
  },
  {
    name: 3010,
    uv: 78,
  },
  {
    name: 3011,
    uv: 86,
  },
  {
    name: 3012,
    uv: 51,
  },
  {
    name: 3013,
    uv: 65,
  },
  {
    name: 3014,
    uv: 95,
  },
  {
    name: 3015,
    uv: 86,
  },
  {
    name: 3016,
    uv: 55,
  },
  {
    name: 3017,
    uv: 63,
  },
  {
    name: 3018,
    uv: 75,
  },
  {
    name: 3019,
    uv: 75,
  },
  {
    name: 3020,
    uv: 61,
  },
  {
    name: 3021,
    uv: 72,
  },
  {
    name: 3022,
    uv: 71,
  },
  {
    name: 3023,
    uv: 60,
  },
  {
    name: 3024,
    uv: 93,
  },
  {
    name: 3025,
    uv: 55,
  },
  {
    name: 3026,
    uv: 57,
  },
  {
    name: 3027,
    uv: 97,
  },
  {
    name: 3028,
    uv: 77,
  },
  {
    name: 3029,
    uv: 65,
  },
  {
    name: 3030,
    uv: 70,
  },
  {
    name: 3031,
    uv: 56,
  },
  {
    name: 3032,
    uv: 89,
  },
  {
    name: 3033,
    uv: 71,
  },
  {
    name: 3034,
    uv: 60,
  },
  {
    name: 3035,
    uv: 64,
  },
  {
    name: 3036,
    uv: 84,
  },
  {
    name: 3037,
    uv: 65,
  },
  {
    name: 3038,
    uv: 86,
  },
  {
    name: 3039,
    uv: 85,
  },
  {
    name: 3040,
    uv: 77,
  },
  {
    name: 3041,
    uv: 62,
  },
  {
    name: 3042,
    uv: 51,
  },
  {
    name: 3043,
    uv: 95,
  },
  {
    name: 3044,
    uv: 74,
  },
  {
    name: 3045,
    uv: 72,
  },
  {
    name: 3046,
    uv: 84,
  },
  {
    name: 3047,
    uv: 79,
  },
  {
    name: 3048,
    uv: 72,
  },
  {
    name: 3049,
    uv: 64,
  },
  {
    name: 3050,
    uv: 54,
  },
];

export default function App() {
  return (
    <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.uv > 60 ? "#94BFE5" : "#C983BB"}
            ></Cell>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
