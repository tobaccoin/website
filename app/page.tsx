export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#f5f1e8]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 py-8 sm:px-10">
        <header className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            TobacCoin
          </div>

          <div className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70">
            Built on Solana
          </div>
        </header>

        <div className="py-20">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            The virtual cigarette
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Smokers smoke
            <br />
            cigarettes.
            <br />
            <span className="text-orange-400">
              We smoke TobacCoin.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
            A Solana meme coin inspired by every cigarette, every wasted
            dollar, and every sports car we could have bought.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-full bg-orange-400 px-7 py-4 font-bold text-black"
            >
              Coming Soon
            </button>

            <button
              type="button"
              className="rounded-full border border-white/20 px-7 py-4 font-bold text-white"
            >
              Join the Community
            </button>
          </div>
        </div>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:justify-between">
          <p>© 2026 TobacCoin</p>
          <p>Website · X · Telegram · Whitepaper</p>
        </footer>
      </section>
    </main>
  );
}