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
  // 1. 데이터 필터링 및 정렬
  const data = [...WORLD_RECORDS]
    .filter((r) => r.rankInYear === 1) // 1위 기록만
    .sort((a, b) => a.year - b.year)
    .map((r) => ({
      year: r.year,
      time: r.time,
      athlete: r.athlete,
    }));

  // 2. 데이터에 포함된 실제 연도들만 추출 (축 레이블용)
  const ticks = data.map((d) => d.year);
  const minYear = Math.min(...ticks);
  const maxYear = Math.max(...ticks);

  return (
    <div className="w-full h-75 mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: -20, right: 10 }}>
          <defs>
            <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
          <XAxis
            dataKey="year"
            type="number"
            // 데이터의 최소/최대 연도로 범위를 자동 지정
            domain={[minYear, maxYear]}
            // 데이터가 있는 연도에만 눈금(Tick) 표시
            ticks={ticks}
            stroke="#666"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            dy={10}
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
            labelFormatter={(value) => `${value}년 기록`}
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
