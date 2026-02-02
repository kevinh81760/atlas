export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-white text-black">
      {children}
    </div>
  );
}
