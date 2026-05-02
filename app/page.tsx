import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Super AI Chat System</h1>
      <p className="mt-4">Your premium full-stack AI platform</p>
      <div className="mt-6 flex gap-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </main>
  );
}