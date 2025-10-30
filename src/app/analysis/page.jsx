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

// Örnek veri
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
  // Özet kartları hesapla
  const totalUsers = roleDistribution.reduce((sum, r) => sum + r.count, 0);
  const admins = roleDistribution.find((r) => r.role === "Admin")?.count || 0;
  const moderators = roleDistribution.find((r) => r.role === "Moderator")?.count || 0;
  const regularUsers = roleDistribution.find((r) => r.role === "User")?.count || 0;

  return (
    <div className="p-5 space-y-8">
      <h1 className="text-2xl font-bold mb-4">User Analysis Dashboard</h1>

      {/* Aylık Kayıt Trendleri */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow">
        <h2 className="text-lg font-semibold mb-3">New Users Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyUsers}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="newUsers" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Roller Bazında Kullanıcı Dağılımı */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow">
        <h2 className="text-lg font-semibold mb-3">Role Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={roleDistribution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Özet Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500 dark:text-gray-300">Total Users</p>
          <p className="text-xl font-bold">{totalUsers}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500 dark:text-gray-300">Admins</p>
          <p className="text-xl font-bold">{admins}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500 dark:text-gray-300">Moderators</p>
          <p className="text-xl font-bold">{moderators}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500 dark:text-gray-300">Regular Users</p>
          <p className="text-xl font-bold">{regularUsers}</p>
        </div>
      </div>
    </div>
  );
}
