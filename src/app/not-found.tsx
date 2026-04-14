import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-fg-subtle">404</p>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <Link href="/" className="text-accent-1 underline underline-offset-4">
        Go home
      </Link>
    </main>
  );
}
