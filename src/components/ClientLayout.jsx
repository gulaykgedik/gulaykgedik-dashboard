"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function ClientLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* İçerik Alanı */}
      <div
        className={`
          flex flex-col flex-1 transition-all duration-300 ease-in-out
          ${sidebarOpen ? "ml-64" : "ml-0 lg:ml-64"}
        `}
      >
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Sayfa İçeriği */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}
