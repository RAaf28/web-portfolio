type Tag = {
  label: string;
  accent?: 'neutral' | 'highlight';
};

type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  team: string;
  status: string;
  tags: Tag[];
  imageLabel: string;
  details: {
    title: string;
    body: string;
  }[];
  outcome: string;
};

const projects: Project[] = [
  {
    id: 'TKT-000',
    title: 'BISINDO Recognition',
    subtitle: 'Real-time Indonesian Sign Language Translation',
    year: '2024',
    role: 'Lead Developer',
    team: '4 Members',
    status: 'Completed',
    imageLabel: 'Featured project preview placeholder',
    tags: [
      { label: 'TensorFlow' },
      { label: 'Python' },
      { label: 'React' }
    ],
    details: [
      {
        title: 'Overview',
        body:
          'A computer vision system designed to bridge communication gaps by translating Indonesian Sign Language (BISINDO) into text and speech in real time with high accuracy.'
      }
    ],
    outcome: 'Real-time prototype with a clear path to production deployment.'
  },
  {
    id: 'TKT-001',
    title: 'Clynic',
    subtitle: 'Healthcare Management System',
    year: '2023',
    role: 'Full Stack Developer',
    team: '3 Members',
    status: 'Completed',
    imageLabel: 'Project card preview placeholder',
    tags: [
      { label: 'React' },
      { label: 'Node.js' },
      { label: 'PostgreSQL', accent: 'highlight' }
    ],
    details: [
      {
        title: 'Issue',
        body: 'Fragmented patient record management causing data silos.'
      },
      {
        title: 'Diagnosis',
        body: 'Legacy monolithic db architecture unable to scale safely.'
      },
      {
        title: 'Solution',
        body: 'Migrated to microservices with role-based access control.'
      },
      {
        title: 'Outcome',
        body: '99.9% uptime, 40% reduction in data retrieval time.'
      }
    ],
    outcome: 'Production-ready platform with measurable performance gains.'
  },
  {
    id: 'TKT-002',
    title: 'GeoConnect',
    subtitle: 'Spatial Data Visualization',
    year: '2023',
    role: 'Frontend Engineer',
    team: '2 Members',
    status: 'Archived',
    imageLabel: 'Project card preview placeholder',
    tags: [
      { label: 'Vue.js' },
      { label: 'Python' },
      { label: 'PostGIS', accent: 'highlight' }
    ],
    details: [
      {
        title: 'Issue',
        body: 'Slow rendering of large-scale geographic datasets.'
      },
      {
        title: 'Diagnosis',
        body: 'Client-side rendering bottlenecking browser memory.'
      },
      {
        title: 'Solution',
        body: 'Implemented vector tiling and server-side clustering.'
      },
      {
        title: 'Outcome',
        body: 'Smooth 60fps interaction with 1M+ data points.'
      }
    ],
    outcome: 'Fast spatial exploration at scale.'
  }
];

function Icon({ name }: { name: 'download' | 'arrowDown' | 'mail' | 'commit' | 'code' | 'terminal' | 'arrowForward' }) {
  const common = 'h-4 w-4 shrink-0';

  switch (name) {
    case 'download':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3v10m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'arrowDown':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5v14m0 0 6-6m-6 6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'mail':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'commit':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 12h5m6 0h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'code':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m9 8-4 4 4 4m6-8 4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'terminal':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="m8 10 3 2-3 2m5 0h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'arrowForward':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`relative overflow-hidden bg-surface-container-low ${featured ? 'brutal-border brutal-shadow' : 'brutal-border brutal-shadow p-6 md:p-8'}`}>
      <div className="absolute right-4 top-4 z-10 border border-primary bg-surface-container-low px-3 py-1 font-code text-[12px] uppercase tracking-[0.2em]">
        {project.id}
      </div>

      <div className={`${featured ? 'aspect-video border-b border-primary' : 'h-48 md:h-64 border border-primary -mx-6 -mt-6 mb-4 md:-mx-8 md:-mt-8 md:w-[calc(100%+4rem)] w-[calc(100%+3rem)]'} flex items-center justify-center bg-surface-variant`}>
        <div className="flex flex-col items-center gap-2 text-outline-variant">
          <svg className="h-12 w-12 md:h-16 md:w-16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 5h16v14H4z" stroke="currentColor" strokeWidth="1.5" />
            <path d="m6 15 3-3 3 3 2-2 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="9" r="1.4" fill="currentColor" />
          </svg>
          <span className="font-code text-[12px] uppercase tracking-[0.2em]">{project.imageLabel}</span>
        </div>
      </div>

      <div className={featured ? 'p-6 md:p-10 flex flex-col gap-6' : 'flex flex-col gap-6'}>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <h3 className={`${featured ? 'font-display text-3xl md:text-4xl' : 'font-display text-2xl md:text-3xl'} mb-2 transition-colors group-hover:text-secondary`}>
              {project.title}
            </h3>
            <p className="font-code text-sm text-on-surface-variant">{project.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.label}
                className={`border-2 border-primary px-2 py-1 font-code text-[12px] uppercase tracking-[0.18em] ${tag.accent === 'highlight' ? 'bg-tertiary-container/10 text-on-tertiary-container' : 'text-primary'}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-outline-variant/50 pt-4 font-code text-[12px] uppercase tracking-[0.18em] text-on-surface-variant">
          <span>STATUS: {project.status}</span>
          <span>YEAR: {project.year}</span>
          <span>ROLE: {project.role}</span>
          <span>TEAM: {project.team}</span>
        </div>

        {featured ? (
          <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">{project.details[0].body}</p>
        ) : (
          <div className="flex flex-col gap-6 border-t border-outline-variant pt-6">
            {project.details.map((detail) => (
              <div key={detail.title} className="flex flex-col gap-2">
                <span className={`w-fit px-2 py-1 font-code text-[12px] uppercase tracking-[0.18em] ${detail.title === 'Outcome' ? 'bg-tertiary-container/10 text-on-tertiary-container font-bold' : 'bg-surface-variant text-primary'}`}>
                  {detail.title}
                </span>
                <p className="text-base leading-7 text-on-surface-variant">{detail.body}</p>
              </div>
            ))}
          </div>
        )}

        <div className="pt-2">
          {featured ? (
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-code text-[14px] uppercase tracking-[0.18em] text-on-primary brutal-shadow brutal-hover">
              View Case Study
              <Icon name="arrowForward" />
            </a>
          ) : (
            <p className="font-code text-sm uppercase tracking-[0.18em] text-on-surface-variant">{project.outcome}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-max_width px-6 pb-24 pt-28 md:px-8 md:pt-32">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-outline bg-background/90 px-6 py-4 backdrop-blur-sm md:px-8">
        <a href="#top" className="font-display text-2xl text-primary">
          [RET]
        </a>

        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {['Work', 'Principles', 'Toolbox', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="border-b-2 border-transparent py-1 font-code text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant transition-all hover:border-primary hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="inline-flex items-center gap-2 border-2 border-primary px-4 py-2 font-code text-[14px] uppercase tracking-[0.18em] transition-colors hover:bg-primary hover:text-on-primary">
          Download CV
          <Icon name="download" />
        </a>
      </header>

      <section id="top" className="mb-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="hidden md:col-span-3 md:block" aria-hidden="true" />

          <div className="md:col-span-9 flex flex-col gap-6">
            <p className="flex items-center gap-2 font-code text-[12px] uppercase tracking-[0.24em] text-on-surface-variant">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-secondary" />
              Last build: 2 Days ago
            </p>
            <p className="font-code text-[14px] text-on-surface-variant">&gt; SYSTEM DIAGNOSTICS &amp; ENGINEERING — JAKARTA, ID</p>
            <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">Builder of systems that actually work.</h1>
            <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
              Information Systems student focused on full-stack web applications, database systems, and native Android development.
            </p>

            <div className="flex flex-wrap gap-4 border-l-2 border-outline-variant py-1 pl-4 font-code text-[14px] text-on-surface-variant">
              <span className="inline-flex items-center gap-1"><Icon name="commit" /> Projects Shipped: 04</span>
              <span className="inline-flex items-center gap-1"><Icon name="code" /> Technologies: 15+</span>
              <span className="inline-flex items-center gap-1"><Icon name="terminal" /> Current Status: Open to Internship</span>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#work" className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-code text-[14px] uppercase tracking-[0.18em] text-on-primary brutal-shadow brutal-hover">
                View Work
                <Icon name="arrowDown" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border-2 border-primary bg-surface px-6 py-3 font-code text-[14px] uppercase tracking-[0.18em] transition-colors hover:bg-surface-variant">
                Contact
                <Icon name="mail" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mb-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <h2 className="sticky top-24 mb-4 pt-4 font-code text-[12px] uppercase tracking-[0.24em] text-on-surface-variant md:mb-0">WORK</h2>
          </div>

          <div className="md:col-span-9 flex flex-col gap-12">
            <p className="font-display text-lg text-on-surface-variant"><code>Recent projects.</code></p>
            <ProjectCard project={projects[0]} featured />
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </div>
        </div>
      </section>

      <section id="principles" className="mb-32 grid grid-cols-1 gap-8 border-t border-outline-variant pt-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="font-code text-[12px] uppercase tracking-[0.24em] text-on-surface-variant">PRINCIPLES</h2>
        </div>
        <div className="md:col-span-9 max-w-3xl space-y-4 text-lg leading-8 text-on-surface-variant">
          <p>Simple systems beat clever systems when they need to survive contact with real users.</p>
          <p>Readable code, clean data flow, and deliberate UI structure matter more than decorative complexity.</p>
        </div>
      </section>

      <section id="toolbox" className="mb-32 grid grid-cols-1 gap-8 border-t border-outline-variant pt-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="font-code text-[12px] uppercase tracking-[0.24em] text-on-surface-variant">TOOLBOX</h2>
        </div>
        <div className="md:col-span-9 flex flex-wrap gap-3">
          {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Android', 'Figma'].map((tool) => (
            <span key={tool} className="border-2 border-primary bg-surface-container-low px-3 py-2 font-code text-[12px] uppercase tracking-[0.18em] text-primary">
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="grid grid-cols-1 gap-8 border-t border-outline-variant pt-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="font-code text-[12px] uppercase tracking-[0.24em] text-on-surface-variant">CONTACT</h2>
        </div>

        <div className="md:col-span-9 flex flex-col gap-6">
          <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
            Open for internship and collaborative work on full-stack, systems, and mobile projects.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {['Projects Shipped: 04', 'Technologies: 15+', 'Current Status: Open to Internship'].map((item) => (
              <div key={item} className="border-2 border-primary bg-surface-container-low px-4 py-3 font-code text-[14px] uppercase tracking-[0.18em] text-primary">
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="mailto:rafly@example.com" className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 font-code text-[14px] uppercase tracking-[0.18em] text-on-primary brutal-shadow brutal-hover">
              Email Me
              <Icon name="mail" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-primary bg-surface px-6 py-3 font-code text-[14px] uppercase tracking-[0.18em] transition-colors hover:bg-surface-variant">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-primary bg-surface px-6 py-3 font-code text-[14px] uppercase tracking-[0.18em] transition-colors hover:bg-surface-variant">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-outline bg-surface-container py-10 md:flex-row">
        <p className="font-code text-[12px] uppercase tracking-[0.2em] text-on-surface-variant">© 2024 Rafly Enggar Tiarso. SYSTEM_STATUS: ONLINE</p>
        <p className="font-code text-[12px] uppercase tracking-[0.2em] text-on-surface-variant">Location: Jakarta, ID</p>
      </footer>
    </main>
  );
}