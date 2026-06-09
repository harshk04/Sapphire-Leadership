import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpenText,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  FileText,
  GraduationCap,
  Lightbulb,
  LineChart,
  Microscope,
  PenTool,
  ShieldCheck,
  Sparkles,
  Target,
  University,
  Users,
} from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';
import SectionShell from './SectionShell';
import StudentResourceShareButton from './StudentResourceShareButton';

export const studentsPageMetadata: Metadata = {
  title: 'For Students: Academic Support, IB Guidance & University Planning',
  description:
    'Academic mentoring, IB support, university application guidance, research help, and career counselling from Sapphire Leadership & Advisor.',
  alternates: {
    canonical: '/students',
  },
};

const supportCards = [
  {
    title: 'Academic Excellence',
    description:
      'Subject-specific support to strengthen understanding, performance, and confidence.',
    icon: BookOpenText,
  },
  {
    title: 'IB Programme Guidance',
    description:
      'Support for Internal Assessments, Extended Essays, TOK, and academic planning.',
    icon: GraduationCap,
  },
  {
    title: 'University Readiness',
    description:
      'Guidance for university selection, applications, personal statements, and admissions preparation.',
    icon: University,
  },
  {
    title: 'Career Direction',
    description:
      'Helping students identify strengths, interests, and future pathways through structured counselling.',
    icon: Compass,
  },
];

const studentSupportChecklist = [
  'Career Counselling',
  'Subject Guidance',
  'IB Internal Assessments (IA)',
  'Extended Essays (EE)',
  'TOK Support',
  'Research Projects',
  'University Applications',
  'Personal Statements & SOPs',
  'Study Skills & Time Management',
  'Mathematics Mentoring',
];

const ibSupport = [
  {
    title: 'Internal Assessments (IA)',
    description:
      'Topic selection, structure, mathematical modeling, analysis, and reflection.',
    icon: Lightbulb,
  },
  {
    title: 'Extended Essay (EE)',
    description:
      'Research question development, methodology, academic writing, and supervision support.',
    icon: FileText,
  },
  {
    title: 'TOK',
    description:
      'Essay planning, exhibition development, argument structure, and critical thinking.',
    icon: Brain,
  },
  {
    title: 'Mathematics AI & AA',
    description:
      'Academic support for SL and HL students.',
    icon: Sparkles,
  },
  {
    title: 'Research Skills',
    description:
      'Data collection, analysis, interpretation, and academic integrity.',
    icon: Microscope,
  },
  {
    title: 'Academic Writing',
    description:
      'Referencing, citations, structure, and scholarly communication.',
    icon: PenTool,
  },
];

const subjectSupportAreas = [
  {
    title: 'Mathematics',
    desc: 'IB, IGCSE, CBSE, ISC',
    icon: Target,
  },
  {
    title: 'Physics',
    desc: 'Conceptual understanding and problem solving',
    icon: LineChart,
  },
  {
    title: 'Chemistry',
    desc: 'Exam preparation and analytical skills',
    icon: Sparkles,
  },
  {
    title: 'Economics',
    desc: 'Theory, application, and assessment support',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Business Management',
    desc: 'Case studies, IA support, and exam readiness',
    icon: Users,
  },
  {
    title: 'Computer Science',
    desc: 'Project and coursework guidance',
    icon: BookOpenText,
  },
  {
    title: 'Research & Data Analysis',
    desc: 'For IAs, EEs, and academic investigations',
    icon: ShieldCheck,
  },
  {
    title: 'Biology',
    desc: 'Concepts, experiments, and assessment support',
    icon: Microscope,
  },
  {
    title: 'English Language & Literature',
    desc: 'Reading, writing, analysis, and academic expression',
    icon: PenTool,
  },
];

const careerGuidance = [
  {
    title: 'Discover Your Strengths',
    description:
      'Interest exploration, personality assessment, and goal setting.',
    icon: Compass,
  },
  {
    title: 'Choose the Right Path',
    description:
      'Academic streams, university options, and career planning.',
    icon: University,
  },
  {
    title: 'Build a Competitive Profile',
    description:
      'Projects, leadership experiences, portfolios, and application readiness.',
    icon: BriefcaseBusiness,
  },
];

const whyStudentsChoose = [
  {
    title: 'Experienced Educator',
    description: 'Guidance led by Dr. Sunil Kumawat.',
    icon: GraduationCap,
  },
  {
    title: 'Personalized Support',
    description: 'One-to-one academic mentoring.',
    icon: Users,
  },
  {
    title: 'Research-Focused Approach',
    description: 'Strong emphasis on inquiry and critical thinking.',
    icon: Microscope,
  },
  {
    title: 'Ethical Guidance',
    description: 'No shortcuts, no ghostwriting, no unrealistic promises.',
    icon: ShieldCheck,
  },
];

const studentResources = [
  {
    title: 'How to Choose a Strong IA Topic',
    category: 'IB Guidance',
    summary:
      'A practical guide to selecting a focused, manageable topic for an IB Internal Assessment.',
    image: '/images/classroomleadership.jpeg',
    anchor: '#resources',
  },
  {
    title: 'Common Extended Essay Mistakes to Avoid',
    category: 'Research Support',
    summary:
      'Learn the most common pitfalls that can weaken an Extended Essay and how to avoid them.',
    image: '/images/leadershipdevelopment.jpeg',
    anchor: '#resources',
  },
  {
    title: 'Building a University Application That Stands Out',
    category: 'University Readiness',
    summary:
      'What students should prepare to present a clear, authentic, and competitive application.',
    image: '/images/studentsuccess.jpeg',
    anchor: '#resources',
  },
];

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#061528_0%,#0a2f6b_56%,#f7f9fb_100%)] py-24 md:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-container gap-12 px-5 md:grid-cols-2 md:px-10 md:items-center">
            <div>
              <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
                STUDENT SUCCESS &amp; ACADEMIC ADVISORY
              </span>
              <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-white md:text-6xl">
                Academic guidance for ambitious students.
              </h1>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-white md:text-[17px]">
                Personalized support for academic excellence, university readiness, career clarity, and long-term success.
              </p>
              <p className="mt-4 max-w-lg text-[15px] leading-7 text-white md:text-[16px]">
                From subject mastery and IB coursework to university applications and research projects, we help students move forward with confidence.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-[12px] font-semibold tracking-tight text-ink transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="#student-services"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-7 py-4 text-[12px] font-semibold tracking-tight text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/18"
                >
                  Explore Student Services
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] border border-white/14 bg-white/10 p-3 shadow-[0_24px_70px_rgba(7,27,58,0.28)] backdrop-blur-md">
              <Image
                src="/images/studentsuccess.jpeg"
                alt="Student mentoring session"
                width={1100}
                height={900}
                className="h-full w-full rounded-[24px] object-cover"
                priority
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/12 bg-navy/78 p-5 text-white backdrop-blur-md">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Support Areas
                </div>
                <div className="mt-3 grid gap-2 text-[13px] leading-6 text-white/88 md:grid-cols-2">
                  <div>Academic mentoring</div>
                  <div>IB coursework support</div>
                  <div>University planning</div>
                  <div>Research guidance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionShell id="student-services" className="bg-surface">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
              How We Support Students
            </h2>
            <p className="mt-3 text-[13px] leading-7 text-ink-muted md:text-[15px]">
              Practical academic advisory designed around real student needs.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {supportCards.map((card) => {
              const Icon = card.icon;
              const id =
                card.title === 'Academic Excellence'
                  ? 'academic-excellence'
                  : undefined;
              return (
                <article
                  key={card.title}
                  id={id}
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

        <section id="ib-student-support" className="bg-[linear-gradient(180deg,#f4f7fb_0%,#ffffff_100%)] py-16 md:py-24 scroll-mt-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="glass rounded-[28px] p-6 md:p-8">
                <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
                  Everything a student needs in one place
                </h2>
                <p className="mt-4 text-[14px] leading-7 text-ink-muted">
                  Sapphire Leadership &amp; Advisor provides academic, research, and career guidance for students across school and pre-university programs.
                </p>
                <p className="mt-4 text-[14px] leading-7 text-ink-muted">
                  Whether preparing for examinations, developing an IB Extended Essay, completing Internal Assessments, exploring university options, or seeking career clarity, students receive structured support tailored to their goals.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {studentSupportChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[22px] border border-surface-variant/45 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <CheckCircle2 size={18} />
                    </div>
                    <div className="text-[13px] font-medium text-ink">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionShell className="bg-surface-low">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              IB Student Support
            </p>
            <h2 className="mt-3 [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
              Guidance from experienced IB Educators and academic mentors.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ibSupport.map((item) => {
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

        <SectionShell id="subject-support-areas" className="bg-surface scroll-mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
              Subject Support Areas
            </h2>
            <p className="mt-3 text-[13px] leading-7 text-ink-muted md:text-[15px]">
              Responsive academic mentoring across key school and pre-university subjects.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {subjectSupportAreas.map((subject) => {
              const Icon = subject.icon;
              return (
                <article
                  key={subject.title}
                  className="rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold text-primary">
                        {subject.title}
                      </h3>
                      <p className="text-[12px] text-ink-muted">{subject.desc}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </SectionShell>

        <section id="career-university-guidance" className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-16 md:py-24 scroll-mt-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="glass rounded-[28px] p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Career &amp; University Guidance
                </p>
                <h2 className="mt-3 [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
                  Helping students build a clear next step.
                </h2>
                <p className="mt-4 text-[14px] leading-7 text-ink-muted">
                  A good future plan starts with clarity. We help students understand strengths, identify realistic pathways, and build profiles that reflect genuine interests and ambition.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {careerGuidance.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm"
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
            </div>
          </div>
        </section>

        <SectionShell id="student-resources" className="bg-surface-low scroll-mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
              University Application Support
            </h2>
            <p className="mt-3 text-[13px] leading-7 text-ink-muted md:text-[15px]">
              Support available for Indian and international university applications.
            </p>
          </div>
        </SectionShell>

        <section className="bg-navy py-16 text-white md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Why Students Choose Sapphire
              </p>
              <h2 className="mt-3 [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-white md:text-[32px]">
                Advisory built on trust, experience, and real educational support.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {whyStudentsChoose.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/6 p-6 shadow-[0_12px_40px_rgba(7,27,58,0.18)] backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <item.icon size={18} />
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-white/82">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SectionShell id="resources" className="bg-surface">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
              Student Resources
            </h2>
            <p className="mt-3 text-[13px] leading-7 text-ink-muted md:text-[15px]">
              A starting point for future blog content and student guidance articles.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {studentResources.map((article) => (
              <article
                key={article.title}
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
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {article.category}
                  </div>
                  <h3 className="mt-3 text-[18px] font-semibold text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                    {article.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/resources"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[11px] font-semibold text-white"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                    <StudentResourceShareButton title={article.title} anchor={article.anchor} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionShell>

        <section className="bg-[linear-gradient(135deg,#083d86_0%,#08397f_58%,#0b4a9c_100%)] py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 text-center md:px-10">
            <h2 className="font-display text-4xl font-semibold text-white md:text-6xl">
              Ready to Take the Next Step?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-white md:text-[16px]">
              Whether you need support with academics, university planning, career direction, or IB coursework, Sapphire Leadership &amp; Advisor is here to help.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-5 text-[11px] font-semibold tracking-tight text-ink shadow-[0_10px_24px_rgba(11,34,78,0.22)]"
              >
                Book a Free Student Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 py-5 text-[11px] font-semibold tracking-tight text-white backdrop-blur-sm"
              >
                Speak With an Advisor
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
