"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const yearlyData = [
  { year: "2021", users: 500, orders: 1200 },
  { year: "2022", users: 650, orders: 1500 },
  { year: "2023", users: 800, orders: 1800 },
];

export default function YearlyReportPage() {
  const totalUsers = yearlyData.reduce((sum, d) => sum + d.users, 0);
  const totalOrders = yearlyData.reduce((sum, d) => sum + d.orders, 0);

  return (
    <div
      className="flex flex-col gap-8 min-h-screen mt-10"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">

        <h1 className="text-2xl font-bold mb-4">Yearly Report</h1>

        {/* Bar Chart */}
        <div
          className="rounded-2xl p-4 sm:p-6 md:p-6 mb-8"
          style={{ background: "var(--color-card)" }}
        >
          <h2 className="text-lg font-semibold mb-3">Yearly Users & Orders</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="year" stroke="var(--color-text)" />
              <YAxis stroke="var(--color-text)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-text)",
                  border: "none",
                }}
              />
              <Bar dataKey="users" fill="var(--color-accent2)" />
              <Bar dataKey="orders" fill="var(--color-accent3)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Özet Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className="rounded-2xl p-4 shadow"
            style={{ background: "var(--color-card)", color: "var(--color-text)" }}
          >
            <p className="text-sm opacity-70">Total Users</p>
            <p className="text-xl font-bold">{totalUsers}</p>
          </div>
          <div
            className="rounded-2xl p-4 shadow"
            style={{ background: "var(--color-card)", color: "var(--color-text)" }}
          >
            <p className="text-sm opacity-70">Total Orders</p>
            <p className="text-xl font-bold">{totalOrders}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
