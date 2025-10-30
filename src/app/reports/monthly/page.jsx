"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", users: 50, orders: 120 },
  { month: "Feb", users: 80, orders: 150 },
  { month: "Mar", users: 65, orders: 90 },
  { month: "Apr", users: 100, orders: 200 },
  { month: "May", users: 90, orders: 170 },
  { month: "Jun", users: 120, orders: 210 },
];

export default function MonthlyReportPage() {
  const totalUsers = monthlyData.reduce((sum, d) => sum + d.users, 0);
  const totalOrders = monthlyData.reduce((sum, d) => sum + d.orders, 0);

  return (
    <div
      className="flex flex-col gap-8 min-h-screen"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">

        <h1 className="text-2xl font-bold mb-4">Monthly Report</h1>

        {/* Line Chart */}
        <div
          className="rounded-2xl p-4 sm:p-6 md:p-6 mb-8"
          style={{ background: "var(--color-card)" }}
        >
          <h2 className="text-lg font-semibold mb-3">Monthly Users & Orders</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-text)" />
              <YAxis stroke="var(--color-text)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-text)",
                  border: "none",
                }}
              />
              <Line type="monotone" dataKey="users" stroke="var(--color-accent2)" strokeWidth={2} />
              <Line type="monotone" dataKey="orders" stroke="var(--color-accent3)" strokeWidth={2} />
            </LineChart>
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
