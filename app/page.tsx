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
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/d3e8389bcd8641279fb92f8afb6929ac.jpg",
    featured: true,
  },
  {
    id: "harbor",
    title: "Harbor",
    category: "Product Design",
    year: "2023",
    blurb: "Booking software for boutique marinas, redesigned end to end.",
    tags: ["UX Research", "Next.js"],
    image: "http://orthoticshop.com/cdn/shop/files/waco-RevitalignHarborShimmerWomensShoeswithCushionedSupport-Burgundy-2.jpg?v=1777693156",
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
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/4633bd9c33a04ef5a9b8eef94f7191a4.jpg",
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
    icon: "sparkles",
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

const ICONS = {
  sparkles: Sparkles,
  layout: Layout,
  code: FileCode,
  terminal: Terminal,
} as const;

const SOCIAL_ICONS: Record<SocialLink["icon"], typeof Github> = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Mail: Mail,
};

const heroPanelVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: -2,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

export default function HomePage() {
  const featuredProject = PROJECTS.find((project) => project.featured);
  const otherProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero */}
      <Reveal>
        <section
          id="home"
          className="relative overflow-hidden border-b border-[var(--border)] px-6 pb-20 pt-28 sm:px-10 md:pt-36 lg:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]"
          />

          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div
                variants={fadeInUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-4 py-1.5 text-sm text-[var(--muted-foreground)]"
              >
                <Circle className="h-2 w-2 fill-cyan-400 text-cyan-400" aria-hidden="true" />
                Open to select freelance work
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
              >
                Kiran Voss
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-4 text-pretty text-xl text-[var(--muted-foreground)] sm:text-2xl"
              >
                Product designer and frontend developer, building interfaces that
                hold up under real use, not just in a portfolio shot.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-xl text-pretty leading-relaxed text-[var(--muted-foreground)]"
              >
                I work across the full arc of a product, from early research and
                flows through to shipped, production frontend. Based in Berlin,
                working with teams everywhere.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href={primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-neutral-950 transition-all duration-300 ease-out hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  {primaryCta.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                >
                  See the work
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-10 flex items-center gap-3 text-sm text-[var(--muted-foreground)]"
              >
                <Clock className="h-4 w-4" aria-hidden="true" />
                Usually replies within one business day
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroPanelVariants}
              className="relative rounded-3xl border border-[var(--border)] bg-white/5 p-8 shadow-2xl backdrop-blur"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
                <Star className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" aria-hidden="true" />
                Featured project
              </div>

              {featuredProject ? (
                <>
                  <div className="mt-4 overflow-hidden rounded-2xl">
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      width={640}
                      height={420}
                      className="h-56 w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{featuredProject.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {featuredProject.blurb}
                  </p>
                </>
              ) : null}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Featured Work */}
      <Reveal>
        <section id="featured-work" className="border-b border-[var(--border)] px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h2>
            <p className="mt-3 max-w-xl text-[var(--muted-foreground)]">
              A handful of projects that represent the range of problems I like to solve.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl border border-[var(--border)] bg-white/5 p-6 transition-colors duration-300 hover:border-white/30"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={640}
                      height={420}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
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
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* About / Skills */}
      <Reveal>
        <section id="about-intro" className="border-b border-[var(--border)] px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What I bring</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {SKILL_GROUPS.map((group) => {
                const Icon = ICONS[group.icon];
                return (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-[var(--border)] bg-white/5 p-6"
                  >
                    <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-semibold">{group.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--muted-foreground)]">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Process */}
      <Reveal>
        <section id="process" className="border-b border-[var(--border)] px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How I work</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {PROCESS_STEPS.map((step) => {
                const Icon = ICONS[step.icon];
                return (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[var(--border)] text-sm font-semibold">
                      {step.number}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section id="cta" className="px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="max-w-xl text-[var(--muted-foreground)]">
              I'm currently taking on a small number of new projects. If what you're building
              needs both design and frontend care, let's talk.
            </p>
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-neutral-950 transition-all duration-300 ease-out hover:bg-cyan-300"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <ul className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </Reveal>

      <a
        href="#home"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]/90 text-[var(--foreground)] shadow-lg backdrop-blur transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400"
      >
        <ArrowUp className="h-4 w-4" aria-hidden="true" />
      </a>
    </main>
  );
}
