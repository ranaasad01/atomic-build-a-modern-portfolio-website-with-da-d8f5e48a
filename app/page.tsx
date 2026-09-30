"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUp, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, Sparkles, Layout, FileCode, Terminal, Clock, Circle, Star } from 'lucide-react';
import { socialLinks, primaryCta, type SocialLink } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "atlas",
    title: "Atlas Design System",
    category: "Design System",
    year: "2024",
    blurb:
      "A component library and documentation site built for a fintech team scaling from one product to a full suite, unifying tokens, patterns, and accessibility guidelines.",
    tags: ["Figma", "React", "Tokens Studio"],
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/d3e8389bcd8641279fb92f8afb6929ac.jpg",
    featured: true,
  },
  {
    id: "harbor",
    title: "Harbor",
    category: "Product Design",
    year: "2023",
    blurb: "Booking software for boutique marinas, redesigned end to end.",
    tags: ["UX Research", "Next.js"],
    image:
      "http://orthoticshop.com/cdn/shop/files/waco-RevitalignHarborShimmerWomensShoeswithCushionedSupport-Burgundy-2.jpg?v=1777693156",
    featured: false,
  },
  {
    id: "loop",
    title: "Loop Analytics",
    category: "Frontend Build",
    year: "2023",
    blurb: "Real-time dashboards for a small team of five, shipped solo.",
    tags: ["TypeScript", "Recharts"],
    image: "https://uxmag.com/wp-content/uploads/2021/06/FullLoop1-1.png",
    featured: false,
  },
  {
    id: "field-notes",
    title: "Field Notes",
    category: "Editorial Site",
    year: "2022",
    blurb: "A long-form publishing platform for independent researchers.",
    tags: ["Sanity CMS", "Framer Motion"],
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/4633bd9c33a04ef5a9b8eef94f7191a4.jpg",
    featured: false,
  },
];

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: "sparkles" | "layout" | "code" | "terminal";
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "I start by sitting with the people who'll use the thing, not just the brief. Interviews, existing analytics, and a lot of questions before any pixels move.",
    icon: "sparkles",
  },
  {
    number: "02",
    title: "Sketch the structure",
    description:
      "Low-fidelity flows and wireframes to settle the architecture first, so the visual design later has something solid to sit on top of.",
    icon: "layout",
  },
  {
    number: "03",
    title: "Design in high fidelity",
    description:
      "Componentized UI in Figma, built against a real type scale and token set, so what ships matches what was approved, down to the pixel.",
    icon: "code",
  },
  {
    number: "04",
    title: "Build and refine",
    description:
      "I write the frontend myself where I can, which keeps design honest about what's actually feasible, and keeps the build honest about what was intended.",
    icon: "terminal",
  },
];

interface SkillGroup {
  title: string;
  icon: "layout" | "code" | "terminal";
  items: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Design",
    icon: "layout",
    items: ["Product strategy", "Design systems", "Interaction design", "Prototyping"],
  },
  {
    title: "Engineering",
    icon: "code",
    items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Practice",
    icon: "terminal",
    items: ["User research", "Accessibility audits", "Handoff docs", "Design QA"],
  },
];

const ICONS: Record<"sparkles" | "layout" | "code" | "terminal", typeof Sparkles> = {
  sparkles: Sparkles,
  layout: Layout,
  code: FileCode,
  terminal: Terminal,
};

const SOCIAL_ICONS: Record<SocialLink["icon"], typeof Github> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

const STATS = [
  { label: "Years in practice", value: "7+" },
  { label: "Products shipped", value: "32" },
  { label: "Client industries", value: "9" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)] px-6 pb-20 pt-20 md:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center"
          >
            <div>
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)]"
              >
                <Circle className="h-2 w-2 fill-[var(--primary)] text-[var(--primary)]" aria-hidden="true" />
                Available for new work
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Product design and frontend craft, from idea to production.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]"
              >
                I'm Kiran Voss, a product designer and frontend developer who builds clean, considered
                digital products for startups and studios worldwide.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link
                  href="#featured-work"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--primary)]"
                >
                  See the work
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-12 grid max-w-md grid-cols-3 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-2xl font-semibold text-[var(--foreground)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-[var(--muted-foreground)]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                <Image
                  src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/d3e8389bcd8641279fb92f8afb6929ac.jpg"
                  alt="Kiran Voss workspace"
                  width={640}
                  height={760}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] sm:flex sm:items-center sm:gap-2">
                <Star className="h-4 w-4 fill-[var(--primary)] text-[var(--primary)]" aria-hidden="true" />
                <span className="text-xs font-medium text-[var(--foreground)]">Trusted by 20+ teams</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About intro */}
      <section id="about-intro" className="border-b border-[var(--border)] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-2">
              <h2
                className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A little about how I work.
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
                I split my time between design and code, which means fewer handoffs and fewer things lost in
                translation. Most projects start as a rough idea and end as a shipped product I'm proud to put
                my name on.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {SKILL_GROUPS.map((group, index) => {
              const Icon = ICONS[group.icon];
              return (
                <Reveal key={group.title} delay={index * 0.1}>
                  <div className="rounded-2xl border border-[var(--border)] p-6 transition-all duration-300 hover:border-[var(--primary)]">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3
                      className="mt-4 text-lg font-semibold text-[var(--foreground)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {group.title}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm text-[var(--muted-foreground)]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section id="featured-work" className="border-b border-[var(--border)] bg-[var(--card)]/5 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-sm font-medium text-[var(--primary)]">Selected work</p>
                <h2
                  className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  A handful of recent projects.
                </h2>
              </div>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--primary)]"
              >
                View all work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.08}>
                <Link
                  href="/work"
                  className={`group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] transition-all duration-300 hover:border-[var(--primary)] ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${project.featured ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium uppercase tracking-wide text-[var(--primary)]">
                        {project.category}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {project.year}
                      </span>
                    </div>
                    <h3
                      className="mt-3 text-xl font-semibold text-[var(--foreground)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{project.blurb}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-[var(--border)] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium text-[var(--primary)]">How I work</p>
            <h2
              className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A process built for clarity.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICONS[step.icon];
              return (
                <Reveal key={step.number} delay={index * 0.08} className="bg-[var(--background)] p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[var(--muted-foreground)]">{step.number}</span>
                      <h3
                        className="mt-1 text-lg font-semibold text-[var(--foreground)]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative overflow-hidden bg-[var(--foreground)] px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-10%] top-[-20%] h-[360px] w-[360px] rounded-full bg-[var(--primary)]/20 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2
              className="text-balance text-3xl font-semibold tracking-tight text-[var(--background)] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Have a project in mind? Let's build it well.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-[var(--background)]/70">
              I take on a small number of projects at a time, so every one gets full attention from first
              sketch to final deploy.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@kiranvoss.com"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Say hello
              </a>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--background)]/20 text-[var(--background)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Back to top */}
      <div className="flex justify-center px-6 py-10">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--primary)]"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
          Back to top
        </Link>
      </div>
    </main>
  );
}
