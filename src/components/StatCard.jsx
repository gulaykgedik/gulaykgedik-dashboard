import React from "react";

export default function StatCard({ title, value, change, accent }) {
  return (
    <div
      className="p-5 rounded-2xl shadow-md hover:shadow-lg transition-all"
      style={{
        background: "var(--color-card)",
        border: `1px solid ${accent || "var(--color-accent1)"}`,
      }}
    >
      <h4 className="text-sm opacity-80 mb-1">{title}</h4>
      <p className="text-2xl font-semibold mb-1">{value}</p>
      <span style={{ color: accent || "var(--color-accent1)" }}>{change}</span>
    </div>
  );
}
