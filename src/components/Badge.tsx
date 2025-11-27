"use client";

const COLOR_BLUE_400 = "oklch(0.707 0.165 254.624)";

export default function Badge({
  children,
  backgroundColor = COLOR_BLUE_400,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  return (
    <span
      className={`px-1.5 py-1 rounded-md text-white dark:text-black bg-blue-700 dark:bg-blue-300 font-semibold text-sm`}
    >
      {children}
    </span>
  );
}
