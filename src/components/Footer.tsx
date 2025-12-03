export default function Footer() {
  return (
    <div className="mt-16 pt-6 border-t border-[var(--border)]">
      <p className="text-md font-light text-center text-[var(--muted)] flex items-center justify-center gap-1">
        © {new Date().getFullYear()}
        <span className="flex items-center gap-1">
          <span className="text-[var(--muted)]">David Zeff</span>
          <img
            src="/images/projects/ezgif.com-loop-count.gif"
            alt="Dolphin GIF"
            className="w-20 h-25 rounded-xl"
          />
        </span>
      </p>
    </div>
  );
}
