import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Image as LucideImage } from "lucide-react";
import { works, getWorkBySlug } from "@/data/works";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return {
    title: `${work.title} — Kana TK`,
    description: work.desc,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const otherWorks = works.filter((w) => w.slug !== work.slug);

  return (
    <main className="min-h-screen">
      {/* Back nav */}
      <div className="mx-auto max-w-7xl px-6 pt-10 md:px-10">
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-950"
        >
          <ArrowLeft size={15} />
          Portfolio へ戻る
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div
          className="rounded-[2rem] p-10 md:p-16"
          style={{ backgroundColor: work.tagColor + "18" }}
        >
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: work.tagColor, color: "#0a0a0a" }}
            >
              {work.tag}
            </span>
            {!work.hideYear && <span className="text-sm text-zinc-400">{work.year}</span>}
          </div>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            {work.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            {work.desc}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-8 md:px-10">
        <div className="flex flex-col gap-4">
          {/* メイン画像 / 動画 */}
          <div
            className="relative aspect-[16/9] overflow-hidden rounded-[2rem]"
            style={!work.images?.[0] && !work.video ? { backgroundColor: work.tagColor + "14" } : {}}
          >
            {work.video ? (
              <video
                src={work.video}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : work.images?.[0] ? (
              <Image
                src={work.images[0]}
                alt={work.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <>
                <span
                  className="absolute inset-0 flex items-center justify-center select-none text-[12rem] font-black leading-none"
                  style={{ color: work.tagColor + "20" }}
                >
                  {work.num}
                </span>
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-400 backdrop-blur-sm">
                  <LucideImage size={11} />
                  メイン画像
                </div>
              </>
            )}
          </div>

          {/* サブ画像 4カラム */}
          {work.subImages && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {work.subImages.map((sub, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                {sub.label && (
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    {sub.label}
                  </p>
                )}
                <div
                  className="relative aspect-square overflow-hidden rounded-[1.5rem]"
                  style={!sub.src ? { backgroundColor: work.tagColor + "0d" } : { backgroundColor: "#f4f4f0" }}
                >
                  {sub.src ? (
                    <Image
                      src={sub.src}
                      alt={sub.label || `${work.title} ${idx + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2">
                      <LucideImage size={18} className="text-zinc-300" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          {/* Main content */}
          <div className="flex flex-col gap-5">
            <ContentCard title="Overview" body={work.overview} />
            <ContentCard title="Process" body={work.process} />
            <ContentCard title="Result" body={work.result} />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-zinc-400">
                Details
              </h3>
              <dl className="flex flex-col gap-5">
                {!work.hideYear && (
                <div>
                  <dt className="mb-1 text-xs text-zinc-400">Year</dt>
                  <dd className="text-sm font-semibold">{work.year}</dd>
                </div>
                )}
                {work.client && (
                <div>
                  <dt className="mb-1 text-xs text-zinc-400">Client</dt>
                  <dd className="text-sm font-semibold">{work.client}</dd>
                </div>
                )}
                <div>
                  <dt className="mb-1 text-xs text-zinc-400">Category</dt>
                  <dd>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        backgroundColor: work.tagColor + "22",
                        color: work.tagColor,
                      }}
                    >
                      {work.tag}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-zinc-400">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {work.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other works */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="border-t border-zinc-200 pt-12">
          <p className="mb-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            Other Works
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherWorks.slice(0, 3).map((w) => (
              <Link
                key={w.slug}
                href={`/works/${w.slug}`}
                className="group flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <p className="mb-1 text-xs text-zinc-400">{w.tag}</p>
                  <p className="font-semibold">{w.title}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-zinc-200 transition-colors group-hover:text-zinc-950"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl border-t border-zinc-200 px-6 py-8 md:px-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xs text-zinc-400 transition-colors hover:text-zinc-950"
          >
            ← Kana TK Portfolio
          </Link>
          <p className="text-xs text-zinc-400">© 2025 Kana TK</p>
        </div>
      </footer>
    </main>
  );
}

function ContentCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-sm">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
        {title}
      </h3>
      <p className="text-sm leading-8 text-zinc-600">{body}</p>
    </div>
  );
}
