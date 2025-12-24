"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function ClientLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className="fixed top-16 left-0 h-[calc(100%-4rem)] w-64 z-40"
      />

      {/* İçerik Alanı */}
      <div
        className={`
          flex flex-col flex-1 min-h-screen transition-all duration-300 ease-in-out
          ${sidebarOpen ? "ml-64" : "ml-0 lg:ml-64"}
        `}
      >
        {/* Header */}
        <Header
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-0 left-0 lg:left-64 w-full lg:w-[calc(100%-16rem)] z-50"
        />

        {/* Sayfa İçeriği */}
        <main className="flex-1 overflow-auto pt-16 p-4 sm:p-6 md:p-8 lg:p-10 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}
