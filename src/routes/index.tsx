import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Copy,
  Check,
  GraduationCap,
  Award,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nondumiso Tracy Ngomane — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Data analyst blending Psychology & Sociology with Python, SQL and Power BI to turn complex data into human-centered insight.",
      },
      { property: "og:title", content: "Nondumiso Tracy Ngomane — Data Analyst" },
      {
        property: "og:description",
        content:
          "Portfolio of analytics projects in people analytics, behavioral research and data privacy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skillData = [
  { name: "Python (Pandas, NumPy)", value: 25, color: "var(--chart-1)" },
  { name: "SQL & Database Queries", value: 20, color: "var(--chart-2)" },
  { name: "Power BI & Visualization", value: 20, color: "var(--chart-3)" },
  { name: "Advanced Excel", value: 15, color: "var(--chart-4)" },
  { name: "Behavioral Science & Research", value: 20, color: "var(--chart-5)" },
];

const projects = [
  {
    title: "Data Privacy, Security & ICT4D Analysis",
    description:
      "Exploratory data analysis investigating digital privacy perception, ethical data handling, and security trends across demographic clusters.",
    tech: ["Python", "Pandas", "Seaborn", "Jupyter"],
    github: "https://github.com/tracingdata",
  },
  {
    title: "HR & People Analytics Dashboard",
    description:
      "Interactive Power BI dashboard evaluating employee retention metrics, performance distribution, and behavioral workplace trends.",
    tech: ["Power BI", "Excel", "SQL", "DAX"],
    github: "https://github.com/tracingdata",
  },
  {
    title: "Behavioral Survey Data Pipeline",
    description:
      "Automated Python workflow designed to clean, transform, and structure messy raw survey data into statistical models.",
    tech: ["Python", "Data Cleaning", "Git", "ETL"],
    github: "https://github.com/tracingdata",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills Breakdown" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("tracynondumiso3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">
            Nondumiso<span className="text-primary">.data</span>
          </span>
          <div className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            Gauteng, South Africa | Open to Remote &amp; On-site Roles
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Nondumiso Tracy Ngomane
          </h1>
          <p className="mt-4 text-xl text-primary sm:text-2xl">
            Data Analyst | Bridging Human Behavior &amp; Quantitative Insights
          </p>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Combining a strong foundation in Psychology &amp; Sociology with Postgraduate studies
            in Data Analytics to transform complex datasets into actionable, human-centered
            decisions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Explore Projects <ChevronRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              <Download className="size-4" /> Download CV
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
              <span>tracynondumiso3@gmail.com</span>
            </button>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Me</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold text-primary">Behavioral Lens</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Groundwork in Psychology and Sociology gives me deep intuition for quantitative
                user metrics, survey dynamics, organizational behavior, and ethically handling
                digital data privacy.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold text-primary">Quantitative Precision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Technical skills in Python, SQL, Advanced Excel, and Power BI to clean unstructured
                raw datasets, construct dashboards, and perform exploratory statistical analysis.
              </p>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Technical Core &amp; Skill Distribution
          </h2>
          <p className="mt-2 text-muted-foreground">
            A quantitative breakdown of my technical domain competencies and analytical focus.
          </p>

          <div className="mt-8 grid items-center gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-10">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={105}
                    paddingAngle={3}
                    stroke="none"
                  >
                    {skillData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [`${value}%`, "Skill Weight"]}
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: "0.75rem",
                      color: "var(--popover-foreground)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <ul className="space-y-3">
              {skillData.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
                >
                  <span className="flex items-center gap-3 text-sm">
                    <span
                      className="size-3 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                    {skill.name}
                  </span>
                  <span className="text-sm font-semibold text-primary">{skill.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Key Analytics Projects
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((proj) => (
              <article
                key={proj.title}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition hover:border-primary/60"
              >
                <div>
                  <h3 className="text-lg font-semibold">{proj.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {proj.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Github className="size-4" /> Code
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Education &amp; Qualifications
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">
                  Postgraduate Diploma in Data Analytics (NQF Level 8)
                </h3>
                <p className="mt-1 text-sm text-primary">
                  IIE Rosebank College • Distance Learning
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Specialized research focus in Privacy, Security, and ICT4D.
                </p>
              </div>
            </article>
            <article className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Award className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">
                  Bachelor of Arts: Psychology &amp; Sociology (NQF Level 7)
                </h3>
                <p className="mt-1 text-sm text-primary">Undergraduate Degree</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Core foundation in human behavioral science, research methodology, and
                  qualitative data analysis.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-6xl border-t border-border px-6 py-20 text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let's Connect</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Looking for entry-level data analyst, people analytics, or junior research
            opportunities.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            {[
              { href: "https://github.com/tracingdata", Icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com", Icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:tracynondumiso3@gmail.com", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-border bg-card p-3 text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nondumiso Tracy Ngomane. Built with React, Tailwind CSS &amp;
            Recharts.
          </p>
        </section>
      </main>
    </div>
  );
}
