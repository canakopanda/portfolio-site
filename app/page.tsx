"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Image as LucideImage } from "lucide-react";
import Navigation from "@/components/Navigation";
import { works } from "@/data/works";

const skillGroups = [
  { category: "Web", items: ["Web Design", "Banner", "LP", "LINE Rich Menu"] },
  { category: "Print", items: ["Graphic Design", "DTP", "Poster", "Flyer"] },
  { category: "Tool", items: ["Photoshop", "Illustrator", "InDesign"] },
  { category: "Other", items: ["Photo Retouch", "Direction", "Package"] },
];

const careers = [
  {
    year: "2018 — 2025",
    company: "GMOコマース株式会社",
    role: "In-house Web Designer",
  },
  {
    year: "2010 — 2018",
    company: "有限会社アップワード",
    role: "Web / Graphic Designer",
  },
  {
    year: "2007 — 2009",
    company: "さつま恵比寿堂",
    role: "Graphic Designer",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-x-hidden">
        {/* ── Hero ── */}
        <section className="mx-auto grid min-h-screen max-w-7xl px-6 pb-16 pt-28 md:px-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:items-center">
          <div className="flex flex-col justify-between lg:min-h-[68vh]">
            <div className="flex items-center justify-between border-t border-zinc-900 pt-4">
              <span className="text-xs font-semibold uppercase tracking-widest">
                Kana TK
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400">
                Designer Portfolio
              </span>
            </div>

            <div className="py-16 lg:py-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-xs font-bold uppercase tracking-widest"
              >
                Designer
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-[clamp(3.5rem,9vw,7rem)] font-semibold leading-[0.9] tracking-tight"
              >
                Clear,
                <br />
                <span className="text-zinc-300">Useful,</span>
                <br />
                Beautiful.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="max-w-xs pb-4 text-sm leading-7 text-zinc-500"
            >
              分かりやすさと美しさの両立を大切に、Web・グラフィック・販促物まで幅広く制作してきました。
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400">
                    Designer
                  </p>
                  <p className="mt-1 font-semibold">Kana TK</p>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-lg font-bold">
                  KT
                </div>
              </div>

              <p className="mb-8 text-2xl font-semibold leading-relaxed md:text-[1.75rem]">
                情報を整理し、見る人が迷わず理解できるデザインへ。
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-zinc-100 pt-8">
                {(
                  [
                    ["01", "Visual", "印象に残る見た目づくり"],
                    ["02", "Design", "目的に沿った情報設計"],
                    ["03", "Direction", "制作を進める調整力"],
                  ] as [string, string, string][]
                ).map(([num, title, text]) => (
                  <div key={num}>
                    <p className="text-3xl font-semibold text-lime-500">{num}</p>
                    <p className="mt-3 text-sm font-bold">{title}</p>
                    <p className="mt-2 text-xs leading-5 text-zinc-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Philosophy ── */}
        <section className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <SectionTitle label="Philosophy" title="伝わる形に、整える。" />
          <div className="grid gap-5 md:grid-cols-3">
            {(
              [
                [
                  "01",
                  "見やすくする",
                  "情報の優先順位を整理し、自然に目線が流れるレイアウトを設計します。",
                ],
                [
                  "02",
                  "らしさをつくる",
                  "色・余白・写真・文字のトーンを整え、ブランドやサービスの印象を伝えます。",
                ],
                [
                  "03",
                  "使いやすくする",
                  "見る人・使う人の行動を考え、目的に届きやすいデザインへ落とし込みます。",
                ],
              ] as [string, string, string][]
            ).map(([num, title, text], i) => (
              <motion.div
                key={num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="rounded-[2rem] bg-white p-8 shadow-sm"
              >
                <p className="text-5xl font-semibold text-lime-400">{num}</p>
                <h3 className="mt-10 text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Works ── */}
        <section id="works" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <SectionTitle label="Works" title="制作実績" />
          <div className="grid gap-5 md:grid-cols-2">
            {works.map((work, i) => (
              <motion.div
                key={work.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={`/works/${work.slug}`}
                  className="group block overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* 作品画像スペース */}
                  <div
                    className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
                    style={{ backgroundColor: work.tagColor + "14" }}
                  >
                    <span
                      className="select-none text-[7rem] font-black leading-none"
                      style={{ color: work.tagColor + "28" }}
                    >
                      {work.num}
                    </span>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-400 backdrop-blur-sm">
                      <LucideImage size={11} />
                      作品画像
                    </div>
                  </div>

                  {/* カード内容 */}
                  <div className="p-8">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-zinc-300">
                          {work.num}
                        </span>
                        <span
                          className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                          style={{
                            backgroundColor: work.tagColor + "22",
                            color: work.tagColor,
                          }}
                        >
                          {work.tag}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-zinc-200 transition-all duration-300 group-hover:text-zinc-950 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>

                    <div
                      className="mb-6 h-[3px] w-8 rounded-full transition-all duration-500 group-hover:w-20"
                      style={{ backgroundColor: work.tagColor }}
                    />

                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {work.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-500">
                      {work.desc}
                    </p>
                    <p className="mt-8 border-t border-zinc-100 pt-4 text-xs font-semibold uppercase tracking-widest text-zinc-300">
                      {work.meta}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <SectionTitle label="Skills" title="制作を支えるスキル" />
          <div className="rounded-[2rem] bg-zinc-950 p-8 md:p-12">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="mb-5 text-xs font-bold uppercase tracking-widest text-lime-400">
                    {group.category}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm font-medium text-zinc-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="mx-auto max-w-7xl border-t border-zinc-200 px-6 py-8 md:px-10">
          <div className="flex items-center justify-between">
            <p className="text-xs text-zinc-400">
              © 2026 Kana TK. All rights reserved.
            </p>
            <p className="text-xs text-zinc-400">Designer Portfolio</p>
          </div>
        </footer>
      </main>
    </>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-t border-zinc-200 pt-6">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-zinc-400">
        {label}
      </p>
      <h2 className="max-w-xl text-right text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
