export function Footer() {
  return (
    <footer className="py-12 px-8 lg:px-12 border-t border-border">
      <div className="max-w-2xl">
        <p className="text-xs font-mono text-muted-foreground">
          <span className="text-primary">{"// "}</span>
          © {new Date().getFullYear()} Michael Melkonian
          <span className="mx-2 text-border">|</span>
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
