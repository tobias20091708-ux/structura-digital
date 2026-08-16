import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function LegalPage({
  badge,
  title,
  updated,
  children,
}: {
  badge: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-dark">
      <section className="pt-40 pb-28">
        <Container>
          <div className="mx-auto max-w-3xl">
          <Badge invert>{badge}</Badge>
          <h1 className="mt-6 text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-white/40">Sidst opdateret: {updated}</p>
          <article
            className={[
              "mt-12",
              "[&_h2]:mt-12 [&_h2]:text-xl [&_h2]:text-white",
              "[&_h3]:mt-8 [&_h3]:text-base [&_h3]:text-white",
              "[&_p]:mt-4 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-white/60",
              "[&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-[15px] [&_ul]:leading-relaxed [&_ul]:text-white/60 [&_li]:list-disc",
              "[&_strong]:font-semibold [&_strong]:text-white/85",
              "[&_a]:text-primary-light [&_a:hover]:underline",
            ].join(" ")}
          >
            {children}
          </article>
          </div>
        </Container>
      </section>
    </div>
  );
}

export function LegalTable({
  head,
  rows,
}: {
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.04]">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-white/5 last:border-0">
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-3 text-white/60">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
