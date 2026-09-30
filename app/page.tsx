"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, Sparkles, Layout, FileCode, Terminal, Clock, Circle, Star } from 'lucide-react';
import { socialLinks, primaryCta, APP_NAME, APP_TAGLINE, type SocialLink } from "@/lib/data";
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
    id: "fund-diligence",
    title: "AI Due Diligence Platform",
    category: "Fintech / AI",
    year: "2024",
    blurb:
      "A fund management platform with portfolio tracking, investor management, and a GPT-4o powered chatbot that auto-fills compliance forms, cutting manual data entry by ~70% for 50+ fund managers.",
    tags: ["React", "NestJS", "FastAPI", "LangChain"],
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/d3e8389bcd8641279fb92f8afb6929ac.jpg",
    featured: true,
  },
  {
    id: "ngsa",
    title: "Next-Gen Sales App",
    category: "Telecom Platform",
    year: "2023",
    blurb:
      "Dealer-facing telecom sales and operations platform for CelcomDigi, covering registration, SIM replacement, bill payments, and end-to-end order management across markets.",
    tags: ["React", "Module Federation", "Node.js", "AWS"],
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/4633bd9c33a04ef5a9b8eef94f7191a4.jpg",
    featured: false,
  },
  {
    id: "ftrv",
    title: "FTRV Operations Platform",
    category: "Internal Tooling",
    year: "2023",
    blurb:
      "An internal platform with an LMS, FAQ system, and role-based ticket management, cutting support resolution time by 50% and reducing unauthorized access incidents to zero.",
    tags: ["React", "Express", "PostgreSQL"],
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/d3e8389bcd8641279fb92f8afb6929ac.jpg",
    featured: false,
  },
  {
    id: "srs-generator",
    title: "SRS Generator",
    category: "AI Documentation Tool",
    year: "2023",
    blurb:
      "An AI tool that converts natural-language prompts into structured SRS documents with auto-generated Mermaid diagrams and PDF export in under 30 seconds.",
    tags: ["LangChain", "CopilotKit", "React"],
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
    title: "Understand the requirements",
    description:
      "I start with discovery sessions and close client collaboration, translating complex business needs from fintech, telecom, and healthcare teams into clear technical scope.",
    icon: "sparkles",
  },
  {
    number: "02",
    title: "Architect the system",
    description:
      "Database schemas, API design, and microservice boundaries come first, whether it's PostgreSQL with TypeORM or a Node.js service mesh on AWS.",
    icon: "layout",
  },
  {
    number: "03",
    title: "Build the product",
    description:
      "Full-stack delivery with React, Next.js, FastAPI, and NestJS, plus AI features using LangChain and LangGraph where they genuinely add value.",
    icon: "code",
  },
  {
    number: "04",
    title: "Ship and support",
    description:
      "Testing with Jest and Cypress, CI/CD via GitHub Actions, and post-launch monitoring with Sentry, so what ships keeps working.",
    icon: "terminal",
  },
];

const ICON_MAP: Record<ProcessStep["icon"], typeof Sparkles> = {
  sparkles: Sparkles,
  layout: Layout,
  code: FileCode,
  terminal: Terminal,
};

const SOCIAL_ICON_MAP: Record<SocialLink["icon"], typeof Github> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)] px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-3xl" />
        </div>
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-start gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)]"
          >
            <Circle className="h-2 w-2 fill-[var(--primary)] text-[var(--primary)]" aria-hidden="true" />
            Available for new projects
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {APP_NAME}, {APP_TAGLINE}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]"
          >
            Full Stack Developer with 3+ years of experience building scalable, production-ready web
            applications. I specialize in React.js, Next.js, Node.js, NestJS, FastAPI, and PostgreSQL, with
            hands-on experience integrating AI-powered features and agentic workflows using LangChain and
            LangGraph, turning complex requirements into intuitive digital products across fintech, telecom,
            healthcare, and SaaS.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="#featured-work"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              View work
              <ArrowUp className="h-4 w-4 rotate-45" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.ul variants={fadeInUp} className="flex items-center gap-4 pt-2">
            {socialLinks.map((social) => {
              const Icon = SOCIAL_ICON_MAP[social.icon];
              return (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section id="featured-work" className="border-b border-[var(--border)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-12 flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
                Selected Projects
              </span>
              <h2
                className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Featured Work
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white/[0.02] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[var(--primary)]/40">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                      <span>{project.category}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {project.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">{project.blurb}</p>
                    <ul className="flex flex-wrap gap-2 pt-2">
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
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about-intro" className="border-b border-[var(--border)] bg-white/[0.02] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
                  How I Work
                </span>
                <h2
                  className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  About {APP_NAME}
                </h2>
              </div>
              <p className="text-pretty text-base leading-relaxed text-[var(--muted-foreground)]">
                With 3+ years of experience at Datics AI, I've built platforms serving fintech, telecom,
                healthcare, and SaaS clients, spanning React.js, Next.js, FastAPI, NestJS, and PostgreSQL,
                alongside AI integrations using LangChain and LangGraph for intelligent automation and
                conversational agents.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <Reveal key={step.number} delay={index * 0.08}>
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[var(--muted-foreground)]">{step.number}</span>
                      <Icon className="h-5 w-5 text-[var(--primary)]" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-6 py-20 md:py-28">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 rounded-3xl border border-[var(--border)] bg-white/[0.02] p-10 md:p-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              <Star className="h-3.5 w-3.5" aria-hidden="true" />
              Let's work together
            </span>
            <h2
              className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Have a project in mind? Let's start a conversation.
            </h2>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)]">
              Whether it's a fintech platform, an AI-powered workflow, or a full product build from idea to
              production, I'd love to hear about it.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:sammanniazi88@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email me
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
