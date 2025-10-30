"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyBarChart({
  data = [
    { month: "Jan", logins: 400 },
    { month: "Feb", logins: 300 },
    { month: "Mar", logins: 500 },
    { month: "Apr", logins: 200 },
    { month: "May", logins: 480 },
    { month: "Jun", logins: 350 },
    { month: "Jul", logins: 600 },
  ],
}) {
  return (
    <div
      style={{ height: 240 }}
      className="w-full rounded-2xl p-4"
    >
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          {/* ✅ Tema uyumlu grid */}
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />

          {/* ✅ X / Y eksen stilleri */}
          <XAxis
            dataKey="month"
            stroke="var(--color-text)"
            tick={{ fontSize: 12 }}
          />
          <YAxis
            stroke="var(--color-text)"
            tick={{ fontSize: 12 }}
            axisLine={false}
          />

          {/* ✅ Tooltip temaya göre */}
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-card)",
              border: "1px solid var(--color-accent1)",
              borderRadius: "10px",
              color: "var(--color-text)",
            }}
            labelStyle={{ color: "var(--color-accent1)" }}
          />

          {/* ✅ Gradient tanımı */}
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent1)" stopOpacity={0.9} />
              <stop offset="100%" stopColor="var(--color-accent1)" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          {/* ✅ Bar’lar */}
          <Bar
            dataKey="logins"
            barSize={20}
            radius={[6, 6, 0, 0]}
            fill="url(#barGradient)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
