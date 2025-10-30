"use client";
import React from "react";

export default function EventsList() {
  const items = [
    { id: 1, title: "Marketing Meetup", date: "2025-10-15", location: "Online" },
    { id: 2, title: "Dev Conference", date: "2025-10-18", location: "San Francisco" },
    { id: 3, title: "UX Workshop", date: "2025-10-21", location: "Remote" },
  ];

  return (
    <div className="space-y-3">
      {items.map((ev) => (
        <div
          key={ev.id}
          className="p-4 rounded-xl flex items-center justify-between"
          style={{
            background: "var(--color-card)",
            border: "1px solid var(--color-accent2)",
          }}
        >
          <div>
            <div className="font-medium">{ev.title}</div>
            <div className="text-sm opacity-75">{ev.date}</div>
          </div>
          <span
            className="px-3 py-1 rounded-lg text-xs font-medium"
            style={{ background: "var(--color-accent2)", color: "#fff" }}
          >
            {ev.location}
          </span>
        </div>
      ))}
    </div>
  );
}
