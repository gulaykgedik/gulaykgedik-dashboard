"use client";
import React from "react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import SmallLineChart from "../components/SmallLineChart";
import MonthlyBarChart from "../components/MonthlyBarChart";
import EventsList from "../components/EventsList";

export default function DashboardPage() {
  return (
    <div
      className="flex flex-col gap-8 min-h-screen mt-10"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >

      {/* Dashboard İçerik */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">

        {/* İstatistik Kartları */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <StatCard
            title="Online People"
            value="1,254"
            change="+8%"
            accent="var(--color-accent1)"
          />
          <StatCard
            title="Weekly Logins"
            value="4,832"
            change="+12%"
            accent="var(--color-accent2)"
          />
          <StatCard
            title="Monthly Logins"
            value="18,429"
            change="+5%"
            accent="var(--color-accent3)"
          />
          <StatCard
            title="Events Created"
            value="243"
            change="+2%"
            accent="var(--color-accent1)"
          />
        </section>

        {/* Grafikler */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div
            className="rounded-2xl p-4 sm:p-6 md:p-6"
            style={{ background: "var(--color-card)" }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Weekly Logins Trend
            </h3>
            <SmallLineChart />
          </div>

          <div
            className="rounded-2xl p-4 sm:p-6 md:p-6"
            style={{ background: "var(--color-card)" }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Monthly Logins Overview
            </h3>
            <MonthlyBarChart />
          </div>
        </section>

        {/* Etkinlik Listesi */}
        <section
          className="rounded-2xl p-4 sm:p-6 md:p-6"
          style={{ background: "var(--color-card)" }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Upcoming Events
          </h3>
          <EventsList />
        </section>
      </div>
    </div>
  );
}
