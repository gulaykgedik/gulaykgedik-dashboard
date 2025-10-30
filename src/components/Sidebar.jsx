"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  BarChart3,
  Users,
  FileText,
  Settings,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  // Alt menü açık/kapalı state
  const [usersOpen, setUsersOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);

  // Sayfa yüklenirken active path varsa alt menüyü otomatik aç
  useEffect(() => {
    if (pathname.startsWith("/users")) setUsersOpen(true);
    if (pathname.startsWith("/reports")) setReportsOpen(true);
  }, [pathname]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-64 p-5 flex flex-col justify-between transition-transform duration-300 ease-in-out z-50
          bg-[linear-gradient(180deg,var(--color-surface),var(--color-bg))]
          text-[var(--color-text)]
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Üst Logo */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl font-bold"
                style={{ background: "var(--color-accent2)", color: "#fff" }}
              >
                D
              </div>
              <h1 className="text-lg font-semibold" style={{ color: "var(--color-text)" }}>
                Didiyos
              </h1>
            </div>

            <button className="lg:hidden" onClick={onClose}>
              <X size={20} style={{ color: "var(--color-text)" }} />
            </button>
          </div>

          {/* Menü */}
          <nav className="flex flex-col gap-3">
            <MenuItem icon={<Home size={18} />} label="Dashboard" href="/" active={pathname === "/"} />
            <MenuItem icon={<BarChart3 size={18} />} label="Analysis" href="/analysis" active={pathname === "/analysis"} />

            {/* Users Collapse Menu */}
            <CollapsibleMenu
              icon={<Users size={18} />}
              label="Users"
              isOpen={usersOpen}
              setIsOpen={setUsersOpen}
              items={[
                { label: "User List", href: "/users/list" },
                { label: "Add User", href: "/users/add" },
              ]}
              pathname={pathname}
            />

            {/* Reports Collapse Menu */}
            <CollapsibleMenu
              icon={<FileText size={18} />}
              label="Reports"
              isOpen={reportsOpen}
              setIsOpen={setReportsOpen}
              items={[
                { label: "Monthly", href: "/reports/monthly" },
                { label: "Yearly", href: "/reports/yearly" },
              ]}
              pathname={pathname}
            />
          </nav>
        </div>

        {/* Alt Ayarlar */}
        <div className="pt-4 mt-4" style={{ borderTop: "1px solid var(--color-text)", opacity: 0.2 }}>
          <MenuItem icon={<Settings size={18} />} label="Settings" href="/settings" active={pathname === "/settings"} />
        </div>
      </aside>
    </>
  );
}

// Tekil MenuItem
function MenuItem({ icon, label, active, href }) {
  const content = (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition-all cursor-pointer
        ${active ? "opacity-100 bg-[var(--color-accent2)] text-white" : "opacity-80 hover:opacity-100 hover:bg-gray-200/20"}
      `}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );

  if (!href) return content;
  return <Link href={href}>{content}</Link>;
}

// Collapsible Menu (alt menüleri olan)
function CollapsibleMenu({ icon, label, isOpen, setIsOpen, items, pathname }) {
  // Alt menüde hangi item active
  const isActive = items.some((item) => item.href === pathname);

  return (
    <div>
      <div
        className={`flex items-center justify-between gap-3 px-3 py-2 rounded-lg w-full cursor-pointer transition-all
          ${isActive ? "bg-[var(--color-accent2)] text-white" : "text-[var(--color-text)] hover:bg-gray-200/20"}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="text-sm">{label}</span>
        </div>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {isOpen && (
        <div className="flex flex-col pl-10 mt-1 gap-1">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`px-3 py-2 rounded-lg text-sm transition-all cursor-pointer
                  ${pathname === item.href ? "bg-[var(--color-accent2)] text-white" : "hover:bg-gray-200/20"}
                `}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
