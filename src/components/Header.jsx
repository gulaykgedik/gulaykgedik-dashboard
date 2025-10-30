"use client";
import React, { useEffect, useState, useRef } from "react";
import { Menu, Search, Bell, Settings, Sun, Moon, User, ShieldCheck, LogOut } from "lucide-react";

export default function Header({ onMenuClick, userName = "George King" }) {
  const [theme, setTheme] = useState("theme-dark");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "theme-dark";
    document.documentElement.className = savedTheme;
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "theme-dark" ? "theme-light" : "theme-dark";
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const avatarBg = theme === "theme-dark" ? "bg-indigo-600" : "bg-indigo-200";
  const avatarText = theme === "theme-dark" ? "text-white" : "text-indigo-800";

  return (
    <header
      className="w-full h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-40 backdrop-blur-md border-b border-white/10 transition-all"
      style={{
        background: "var(--color-surface)",
        color: "var(--color-text)",
      }}
    >
      {/* Sol */}
      <div className="flex items-center gap-3">
        <button className="lg:hidden p-2" onClick={onMenuClick}>
          <Menu size={22} style={{ color: "var(--color-text)" }} />
        </button>

        <div className="hidden sm:flex items-center gap-2">
          <Search size={18} style={{ color: "var(--color-text)" }} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm placeholder-opacity-70"
            style={{
              color: "var(--color-text)",
              caretColor: "var(--color-accent1)",
            }}
          />
        </div>
      </div>

      {/* Orta başlık */}
      <h2 className="text-lg font-semibold tracking-wide hidden md:block" style={{ color: "var(--color-text)" }}>
        Dashboard Overview
      </h2>

      {/* Sağ ikonlar */}
      <div className="flex items-center gap-4 sm:gap-5">
        <button onClick={toggleTheme}>
          {theme === "theme-dark" ? (
            <Sun size={18} style={{ color: "var(--color-text)" }} />
          ) : (
            <Moon size={18} style={{ color: "var(--color-text)" }} />
          )}
        </button>

        <Bell size={20} style={{ color: "var(--color-text)" }} />
        <Settings size={20} style={{ color: "var(--color-text)" }} />

        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold cursor-pointer ${avatarBg} ${avatarText}`}
          >
            {initials}
          </div>

          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 shadow-lg rounded-md z-50"
              style={{
                background: "var(--color-card)",
                color: "var(--color-text)",
              }}
            >
              <DropdownItem icon={<User size={16} />} label="My profile" href="/my-profile" />
              <DropdownItem icon={<Settings size={16} />} label="Settings" href="/settings" />
              <div style={{ borderTop: "1px solid var(--color-border)" }} className="my-1" />
              <DropdownItem icon={<ShieldCheck size={16} />} label="Privacy policy" href="/privacy-policy" />
              <div style={{ borderTop: "1px solid var(--color-border)" }} className="my-1" />
              <DropdownItem icon={<LogOut size={16} />} label="Sign out" href="/logout" />
            </div>
          )}
        </div>
      </div>
    </header>
    
  );
}

// DropdownItem component
function DropdownItem({ icon, label, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-4 py-2 text-sm transition-colors cursor-pointer hover:bg-[var(--color-accent2)] hover:text-white"
    >
      {icon}
      <span className="flex-1">{label}</span>
    </a>
  );
}
