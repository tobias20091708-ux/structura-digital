import { cn } from "@/lib/cn";

export function DemoPreview({
  title,
  src,
  className,
}: {
  title: string;
  src: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_64px_-40px_rgba(15,23,42,0.4)]",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-black/10 bg-surface px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 truncate rounded-full border border-black/10 bg-white px-3 py-1 text-center text-xs text-muted">
          {title}
        </div>
      </div>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        className="h-[350px] w-full bg-white sm:h-[500px]"
      />
    </div>
  );
}
