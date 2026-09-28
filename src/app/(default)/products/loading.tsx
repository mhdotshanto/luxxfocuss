export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="h-8 w-40 animate-pulse rounded-full bg-white/10" />
      <div className="mt-6 h-12 w-3/4 animate-pulse rounded-2xl bg-white/10" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-96 animate-pulse rounded-3xl bg-white/5" />
        ))}
      </div>
    </main>
  );
}
