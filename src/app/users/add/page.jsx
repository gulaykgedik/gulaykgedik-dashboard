"use client";
import React, { useState } from "react";

export default function AddUserPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    online: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New User:", form);
    alert(`User "${form.name}" added!`);
    // Reset form
    setForm({ name: "", email: "", role: "", online: false });
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-5">Add New User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Role */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Moderator">Moderator</option>
          </select>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="online"
            checked={form.online}
            onChange={handleChange}
            id="online"
          />
          <label htmlFor="online">Online</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-indigo-600 text-white rounded px-4 py-2 font-medium hover:bg-indigo-700 transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
}
