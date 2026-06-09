import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Brain,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Compass,
  GraduationCap,
  Globe2,
  Layers3,
  LineChart,
  Megaphone,
  Mic,
  School2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  UserRound,
  Workflow,
} from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';
import SectionShell from './SectionShell';
import ResourceShareButtons from './ResourceShareButtons';

export const schoolsPageMetadata: Metadata = {
  title: 'For Schools: Educational Consulting & Leadership Advisory',
  description:
    'Sapphire Leadership & Advisor supports school founders, boards, principals, coordinators, and international schools with setup, affiliation readiness, leadership, curriculum, and continuous improvement.',
  alternates: {
    canonical: '/schools',
  },
};

const whoWeSupport = [
  {
    icon: School2,
    title: 'School Founders',
    description:
      'Planning and launching new schools with strong operational and academic foundations.',
  },
  {
    icon: ClipboardList,
    title: 'Governing Boards',
    description:
      'Governance structures, accountability systems, and strategic oversight.',
  },
  {
    icon: UserRound,
    title: 'Principals & Vice Principals',
    description:
      'Leadership coaching and school improvement planning.',
  },
  {
    icon: Layers3,
    title: 'Academic Coordinators',
    description:
      'Curriculum implementation, assessment systems, and academic quality.',
  },
  {
    icon: Building2,
    title: 'Educational Trusts',
    description:
      'Multi-campus strategy, expansion planning, and institutional development.',
  },
  {
    icon: Globe2,
    title: 'International Schools',
    description:
      'Support for IB, Cambridge, and globally aligned educational programs.',
  },
];

const setupStages = [
  'Vision & Strategic Planning',
  'School Structure & Governance',
  'Policies & Documentation',
  'Staff Recruitment Planning',
  'Curriculum Framework Selection',
  'Operational Readiness',
  'Academic Launch Support',
  'Continuous Improvement Planning',
];

const affiliationSupport = [
  {
    title: 'CBSE Affiliation',
    description:
      'Documentation, compliance, readiness, and quality systems.',
    icon: BadgeCheck,
  },
  {
    title: 'IB Candidate School Journey',
    description:
      'Guidance through candidacy requirements, standards, and practices.',
    icon: Compass,
  },
  {
    title: 'IB Programme Development',
    description:
      'PYP, MYP, DP implementation planning and readiness.',
    icon: GraduationCap,
  },
  {
    title: 'Cambridge Pathways',
    description:
      'Curriculum implementation and quality monitoring.',
    icon: BookOpenText,
  },
  {
    title: 'Accreditation Readiness',
    description:
      'Evidence collection, systems development, and review preparation.',
    icon: ShieldCheck,
  },
  {
    title: 'Continuous School Improvement',
    description:
      'Building a culture of reflection and accountability.',
    icon: Sparkles,
  },
];

const academicPillars = [
  {
    title: 'Curriculum Design',
    description: 'Align curriculum with learner outcomes.',
    icon: BookOpenText,
  },
  {
    title: 'Assessment Systems',
    description: 'Build meaningful assessment frameworks.',
    icon: Target,
  },
  {
    title: 'Teaching & Learning',
    description: 'Strengthen classroom practice and instructional quality.',
    icon: Users,
  },
  {
    title: 'Data-Informed Decision Making',
    description: 'Use evidence to improve learning outcomes.',
    icon: LineChart,
  },
  {
    title: 'Academic Monitoring',
    description: 'Create systems for accountability and progress tracking.',
    icon: Workflow,
  },
  {
    title: 'Student Achievement',
    description: 'Focus on long-term academic growth and success.',
    icon: GraduationCap,
  },
];

const teacherDevelopment = [
  'Instructional Strategies',
  'Inquiry-Based Learning',
  'Classroom Management',
  'Assessment Literacy',
  'Differentiation & Inclusion',
  'Technology Integration',
  'IB Teaching Practices',
  'Leadership Development',
];

const leadershipSupport = [
  'Leadership Hiring Frameworks',
  'Interview Process Design',
  'Role Descriptions',
  'Leadership Competency Models',
  'Succession Planning',
  'Leadership Coaching',
  'Middle Leadership Development',
  'Principal Mentoring',
];

const improvementSteps = [
  {
    title: 'Discover',
    description: 'Review systems, structures, and priorities.',
    icon: Compass,
  },
  {
    title: 'Diagnose',
    description: 'Identify strengths, gaps, and opportunities.',
    icon: Brain,
  },
  {
    title: 'Design',
    description: 'Develop strategic action plans.',
    icon: ClipboardList,
  },
  {
    title: 'Implement',
    description: 'Support execution and monitoring.',
    icon: CheckCircle2,
  },
  {
    title: 'Sustain',
    description: 'Embed systems for long-term success.',
    icon: ShieldCheck,
  },
];

const internationalSupport = [
  'IB Schools',
  'IB Candidate Schools',
  'Cambridge Schools',
  'International Schools',
];

const internationalServices = [
  'Programme implementation',
  'Academic leadership',
  'Teacher capacity building',
  'Assessment systems',
  'Quality assurance',
  'Strategic planning',
];

const resourceArticles = [
  {
    title: 'How to Prepare for CBSE Affiliation Successfully',
    category: 'Affiliation Guidance',
    date: 'June 9, 2026',
    image: '/images/architecture-photo.png',
    slug: 'prepare-for-cbse-affiliation-successfully',
  },
  {
    title: 'Key Challenges for New School Founders',
    category: 'School Setup',
    date: 'June 9, 2026',
    image: '/images/schoolconsultancy.jpeg',
    slug: 'key-challenges-for-new-school-founders',
  },
  {
    title: 'Building Effective Leadership Teams in Schools',
    category: 'Leadership Development',
    date: 'June 9, 2026',
    image: '/images/leadershipdevelopment.jpeg',
    slug: 'building-effective-leadership-teams-in-schools',
  },
];

const faqs = [
  {
    question: 'How can Sapphire support a new school?',
    answer:
      'We help new schools move from concept to readiness through strategic planning, governance design, policy development, curriculum choices, staffing support, and operational preparation.',
  },
  {
    question: 'Do you assist with CBSE affiliation readiness?',
    answer:
      'Yes. We support documentation, compliance alignment, evidence systems, and readiness planning so schools can prepare more confidently for affiliation processes.',
  },
  {
    question: 'Can you support IB candidate schools?',
    answer:
      'Yes. We work with candidate schools on requirements, programme planning, staff readiness, standards, and implementation practices.',
  },
  {
    question: 'Do you provide teacher training workshops?',
    answer:
      'Yes. Training can be delivered onsite, online, or as customized professional development aligned with the school’s needs and goals.',
  },
  {
    question: 'Can school leaders receive coaching and mentoring?',
    answer:
      'Yes. We support principals, vice principals, coordinators, and leadership teams through mentoring, role clarity, decision-making support, and improvement planning.',
  },
  {
    question: 'Do you work with schools outside India?',
    answer:
      'Yes. We work with international schools and institutions that need support with IB, Cambridge, quality assurance, and strategic leadership across different contexts.',
  },
  {
    question: 'How are consultancy engagements structured?',
    answer:
      'Engagements are structured around the school’s priorities and may include strategic reviews, advisory sessions, workshops, implementation support, and follow-up planning.',
  },
];

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#061528_0%,#0a2f6b_56%,#f7f9fb_100%)] py-24 md:py-32">
          <div className="absolute inset-0">
            <Image
              src="/images/classroomleadership.jpeg"
              alt="School leadership meeting"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary/78" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,218,166,0.2),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12),transparent_20%),linear-gradient(180deg,rgba(7,27,58,0.24)_0%,rgba(7,27,58,0.44)_100%)]" />
          </div>

          <div className="relative mx-auto max-w-container px-5 md:px-10">
            <div className="max-w-none">
              <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
                FOR SCHOOLS &amp; EDUCATIONAL LEADERS
              </span>
              <h1 className="mt-6 max-w-none font-display text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-white md:text-6xl">
                Building stronger schools through leadership, systems, and educational excellence.
              </h1>
              <p className="mt-5 max-w-none text-[15px] leading-8 text-white md:text-[17px]">
                Sapphire Leadership &amp; Advisor partners with school founders, governing boards, principals, and academic leaders to establish, strengthen, and transform educational institutions.
              </p>
              <p className="mt-4 max-w-none text-[15px] leading-8 text-white md:text-[16px]">
                From school setup and affiliation readiness to leadership development, teacher training, curriculum implementation, accreditation, and continuous improvement, we help schools achieve sustainable success.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-[12px] font-semibold tracking-tight text-ink transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Book a Strategic Consultation
                </Link>
                <Link
                  href="#school-services"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-7 py-4 text-[12px] font-semibold tracking-tight text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/18"
                >
                  Explore School Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SectionShell id="school-services" className="bg-surface">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
              Who We Support
            </h2>
            <p className="mt-3 text-[13px] leading-7 text-ink-muted md:text-[15px]">
              Support for schools and educational leaders from conception to excellence.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whoWeSupport.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-[26px] border border-surface-variant/45 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </SectionShell>

        <section className="bg-[linear-gradient(180deg,#f4f7fb_0%,#ffffff_100%)] py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="glass rounded-[28px] p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Starting a New School?
                </p>
                <h2 className="mt-3 [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
                  From concept to operational readiness.
                </h2>
                <p className="mt-4 text-[14px] leading-7 text-ink-muted">
                  Sapphire helps founders translate vision into a practical establishment roadmap that covers governance, staffing, documentation, curriculum, and launch readiness.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {setupStages.map((stage, index) => (
                  <div
                    key={stage}
                    className="rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                      Stage {index + 1}
                    </div>
                    <div className="mt-3 text-[17px] font-semibold text-primary">
                      {stage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionShell className="bg-surface-low">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Affiliation, Accreditation &amp; Quality Assurance
            </p>
            <h2 className="mt-3 [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
              Supporting schools through readiness, standards, and continuous improvement.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {affiliationSupport.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell className="bg-surface">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
              Academic Excellence &amp; Curriculum Leadership
            </h2>
            <p className="mt-3 text-[13px] leading-7 text-ink-muted md:text-[15px]">
              Curriculum, assessment, teaching, and academic monitoring support designed to strengthen learning outcomes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {academicPillars.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </SectionShell>

        <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="glass rounded-[28px] p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Professional Learning for Educators
                </p>
                <h2 className="mt-3 [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
                  Building teacher capacity for lasting impact.
                </h2>
                <p className="mt-4 text-[14px] leading-7 text-ink-muted">
                  Training can be delivered onsite, online, or through customized professional development programs.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {teacherDevelopment.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-surface-variant/45 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Megaphone size={18} />
                    </div>
                    <div className="mt-4 text-[15px] font-semibold text-primary">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionShell className="bg-surface-low">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
              Building Strong Leadership Teams
            </h2>
            <p className="mt-3 text-[13px] leading-7 text-ink-muted md:text-[15px]">
              Advisory support for educational leadership hiring, mentoring, and role clarity.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {leadershipSupport.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-surface-variant/45 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users size={18} />
                </div>
                <div className="mt-4 text-[15px] font-semibold text-primary">
                  {item}
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-[13px] leading-7 text-ink-muted">
            We do not position this as a recruitment agency. Instead, Sapphire provides advisory support for educational leadership hiring, onboarding, and development.
          </p>
        </SectionShell>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="rounded-[28px] border border-surface-variant/45 bg-navy p-7 text-white shadow-[0_20px_60px_rgba(7,27,58,0.18)] md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Our School Improvement Approach
                </p>
                <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em]">
                  A structured pathway to sustainable school improvement.
                </h2>
                <p className="mt-4 text-[13px] leading-7 text-white/78">
                  We guide schools through a clear advisory process that turns reflection into action and helps teams sustain progress over time.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {improvementSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="rounded-[24px] border border-surface-variant/45 bg-[linear-gradient(180deg,#ffffff_0%,#f9fbfe_100%)] p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                          0{index + 1}
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon size={18} />
                        </div>
                      </div>
                      <h3 className="mt-5 text-[17px] font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <SectionShell className="bg-surface-low">
          <div className="mx-auto grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Supporting International Education Pathways
              </p>
              <h2 className="mt-3 [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
                International education support for schools that want robust systems and strong programme delivery.
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {internationalSupport.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/12 bg-white px-4 py-2 text-[12px] font-medium text-primary shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] border border-surface-variant/45 bg-white shadow-sm">
                <Image
                  src="/images/architecture-photo.png"
                  alt="Academic leadership planning session"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                {internationalServices.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-surface-variant/45 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <CheckCircle2 size={16} />
                      </div>
                      <div className="text-[15px] font-semibold text-primary">
                        {item}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="school-resources" className="bg-surface">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Thought Leadership &amp; Resources
            </p>
            <h2 className="mt-3 [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
              Resources for School Leaders
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {resourceArticles.map((article) => (
              <article
                key={article.slug}
                className="overflow-hidden rounded-[26px] border border-surface-variant/45 bg-white shadow-sm"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    <span>{article.category}</span>
                    <span className="flex items-center gap-1 text-ink-muted">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] font-semibold text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                    Practical guidance for school founders and leaders.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/resources"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[11px] font-semibold text-white"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                    <ResourceShareButtons title={article.title} path="/resources" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionShell>

        <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm open:shadow-soft"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <span className="text-[16px] font-semibold tracking-[-0.02em] text-primary">
                      {item.question}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-primary transition-transform duration-300 group-open:rotate-45">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-4 max-w-4xl text-[13px] leading-7 text-ink-muted">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-white md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Final CTA
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Ready to Strengthen Your School?
              </h2>
              <p className="mt-4 max-w-3xl text-[14px] leading-7 text-white/82 md:text-[16px]">
                Whether you are establishing a new school, preparing for affiliation, developing leadership capacity, implementing international programmes, or driving school improvement, Sapphire Leadership &amp; Advisor can help.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-5 text-[11px] font-semibold tracking-tight text-ink shadow-[0_10px_24px_rgba(11,34,78,0.22)]"
              >
                Schedule a Free Strategic Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 py-5 text-[11px] font-semibold tracking-tight text-white backdrop-blur-sm"
              >
                Contact Sapphire Leadership &amp; Advisor
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
