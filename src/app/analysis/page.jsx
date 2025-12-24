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
  BarChart,
  Bar,
} from "recharts";

const monthlyUsers = [
  { month: "Jan", newUsers: 50 },
  { month: "Feb", newUsers: 80 },
  { month: "Mar", newUsers: 65 },
  { month: "Apr", newUsers: 100 },
  { month: "May", newUsers: 90 },
  { month: "Jun", newUsers: 120 },
];

const roleDistribution = [
  { role: "Admin", count: 5 },
  { role: "User", count: 80 },
  { role: "Moderator", count: 15 },
];

export default function UserAnalysisPage() {
  const totalUsers = roleDistribution.reduce((sum, r) => sum + r.count, 0);
  const admins = roleDistribution.find((r) => r.role === "Admin")?.count || 0;
  const moderators = roleDistribution.find((r) => r.role === "Moderator")?.count || 0;
  const regularUsers = roleDistribution.find((r) => r.role === "User")?.count || 0;

  return (
    <div
      className="flex flex-col gap-8 min-h-screen mt-10"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="text-2xl font-bold mb-6">User Analysis Dashboard</h1>

        {/* Grafikler */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {/* Aylık Kullanıcı Artışı */}
          <div
            className="rounded-2xl p-4 sm:p-6 md:p-6 shadow-md"
            style={{ background: "var(--color-card)" }}
          >
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              New Users Over Time
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyUsers}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-text)" />
                <YAxis stroke="var(--color-text)" />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="newUsers"
                  stroke="var(--color-accent1)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Roller Bazında Kullanıcı Dağılımı */}
          <div
            className="rounded-2xl p-4 sm:p-6 md:p-6 shadow-md"
            style={{ background: "var(--color-card)" }}
          >
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Role Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={roleDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="role" stroke="var(--color-text)" />
                <YAxis stroke="var(--color-text)" />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                  }}
                />
                <Bar dataKey="count" fill="var(--color-accent2)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Özet Kartlar */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            className="p-4 sm:p-6 rounded-2xl shadow-md"
            style={{ background: "var(--color-card)" }}
          >
            <p className="text-sm opacity-80">Total Users</p>
            <p className="text-2xl font-bold">{totalUsers}</p>
          </div>

          <div
            className="p-4 sm:p-6 rounded-2xl shadow-md"
            style={{ background: "var(--color-card)" }}
          >
            <p className="text-sm opacity-80">Admins</p>
            <p className="text-2xl font-bold" style={{ color: "var(--color-accent1)" }}>
              {admins}
            </p>
          </div>

          <div
            className="p-4 sm:p-6 rounded-2xl shadow-md"
            style={{ background: "var(--color-card)" }}
          >
            <p className="text-sm opacity-80">Moderators</p>
            <p className="text-2xl font-bold" style={{ color: "var(--color-accent2)" }}>
              {moderators}
            </p>
          </div>

          <div
            className="p-4 sm:p-6 rounded-2xl shadow-md"
            style={{ background: "var(--color-card)" }}
          >
            <p className="text-sm opacity-80">Regular Users</p>
            <p className="text-2xl font-bold" style={{ color: "var(--color-accent3)" }}>
              {regularUsers}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
