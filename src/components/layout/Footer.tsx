export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="no-print mt-24 border-t border-border">
      <div className="section-frame flex items-center py-10 text-sm text-fg-subtle">
        <p>© {year} Ted Ryu · Jaeyeong You</p>
      </div>
    </footer>
  );
}
