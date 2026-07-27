import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className="marquee-track flex w-max items-center gap-10 py-2">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-lg font-medium tracking-tight text-white/40"
          >
            {item}
            <span className="text-accent-violet/60">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
