"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { WORLD_RECORDS } from "@/data/records";

export default function RecordTimeline() {
  const data = [...WORLD_RECORDS]
    .sort((a, b) => a.year - b.year)
    .map((r) => ({ year: r.year, time: r.time, athlete: r.athlete }));

  return (
    <div className="w-full h-75 mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
          <XAxis
            dataKey="year"
            stroke="#666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            unit="s"
            domain={[0, "auto"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#171717",
              border: "1px solid #333",
              borderRadius: "8px",
            }}
            itemStyle={{ color: "#ef4444" }}
            labelStyle={{ color: "#fff", marginBottom: "4px" }}
          />
          <Area
            type="monotone"
            dataKey="time"
            stroke="#ef4444"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorTime)"
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
