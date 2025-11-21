export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-1.5 py-1 rounded-md bg-blue-600 text-white text-sm">
      {children}
    </span>
  );
}
