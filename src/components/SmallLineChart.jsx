"use client";
import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
} from "recharts";

export default function SmallLineChart({
  data = [
    { name: "Mon", value: 120 },
    { name: "Tue", value: 200 },
    { name: "Wed", value: 150 },
    { name: "Thu", value: 280 },
    { name: "Fri", value: 220 },
    { name: "Sat", value: 300 },
    { name: "Sun", value: 260 },
  ],
  dataKey = "value",
  height = 180,
}) {
  return (
    <div
      style={{
        height,
        background: "var(--color-card)",
        borderRadius: "1rem",
        padding: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
      className="w-full"
    >
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 15, right: 10, left: -10, bottom: 0 }}>
          {/* 🌈 Gradient tanımı */}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent1)" stopOpacity={0.8} />
              <stop offset="100%" stopColor="var(--color-accent1)" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          {/* 🧩 Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-card)",
              border: "1px solid var(--color-accent1)",
              borderRadius: "10px",
              color: "var(--color-text)",
            }}
            labelStyle={{ color: "var(--color-accent1)" }}
          />

          {/* 📊 Grid çizgileri */}
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />

          {/* 🕓 X ekseni */}
          <XAxis
            dataKey="name"
            stroke="var(--color-text)"
            fontSize={12}
            tickMargin={6}
          />
          {/* 🧭 Y ekseni (gizli) */}
          <YAxis stroke="var(--color-text)" fontSize={12} hide />

          {/* 💧 Dolgulu alan (gradient altında) */}
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="none"
            fill="url(#lineGradient)"
          />

          {/* 🔹 Ana çizgi */}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="var(--color-accent1)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: "var(--color-accent1)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
