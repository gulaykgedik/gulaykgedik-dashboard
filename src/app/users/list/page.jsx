"use client";

// Basit Avatar component – artık isim baş harflerini gösteriyor
export function Avatar({ name, className }) {
  // İsmin baş harflerini al
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center bg-indigo-500 text-white font-bold ${className}`}
    >
      {initials}
    </div>
  );
}

// Basit Badge component
export function Badge({ children, color }) {
  const colors = {
    lime: "bg-lime-500 text-white",
    zinc: "bg-zinc-400 text-white",
  };
  return <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[color]}`}>{children}</span>;
}

// Basit Table componentler
export const Table = ({ children, className }) => <table className={`min-w-full ${className}`}>{children}</table>;
export const TableHead = ({ children }) => <thead>{children}</thead>;
export const TableBody = ({ children }) => <tbody>{children}</tbody>;
export const TableRow = ({ children }) => <tr className="border-b">{children}</tr>;
export const TableHeader = ({ children }) => <th className="text-left p-2">{children}</th>;
export const TableCell = ({ children, className }) => <td className={`p-2 ${className}`}>{children}</td>;

const users = [
  { name: "John Doe", email: "john@example.com", handle: "john123", access: "Admin", online: true },
  { name: "Jane Smith", email: "jane@example.com", handle: "jane123", access: "User", online: false },
  { name: "Alice Johnson", email: "alice@example.com", handle: "alice123", access: "Moderator", online: true },
];

export default function UserListPage() {
  return (
    <div className="p-5 mt-12">
      <h1 className="text-2xl font-bold mb-5">User List</h1>
      <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.handle}>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Avatar name={user.name} />
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-zinc-500">
                      <a href={`mailto:${user.email}`} className="hover:text-zinc-700">
                        {user.email}
                      </a>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-zinc-500">{user.access}</TableCell>
              <TableCell>
                {user.online ? <Badge color="lime">Online</Badge> : <Badge color="zinc">Offline</Badge>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
