import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Sidebar } from "@/components/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}