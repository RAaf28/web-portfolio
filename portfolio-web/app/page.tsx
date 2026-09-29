import { experience, profile, projects, skillGroups } from "@/lib/content";
import Image from "next/image";
import AsciiCamera from "./components/ascii-camera";

export default function Home() {
  return (
    <main className="desktop-shell">
      <div className="desktop-inner">
        <header id="bio" className="window p-0 overflow-hidden">
          <div className="toolbar">
            <div className="toolbar-title">Rafly Portfolio.exe</div>
            <div className="window-controls" aria-label="Window controls">
              <button type="button" className="window-control" aria-label="Minimize window">
                _
              </button>
              <button type="button" className="window-control" aria-label="Maximize window">
                □
              </button>
              <button type="button" className="window-control window-control-close" aria-label="Close window">
                ×
              </button>
            </div>
          </div>

          <nav className="tabs-strip" aria-label="Portfolio windows">
            <a className="tab active" href="#bio">General Profile</a>
            <a className="tab" href="#projects">Projects.dir</a>
            <a className="tab" href="#contact">Contact.msg</a>
          </nav>

          <div className="grid gap-6 p-5 md:p-7 xl:grid-cols-[1.45fr_0.8fr] xl:items-center">
            <div>
              <h1 className="hero-name mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base text-[#d7efe9] sm:text-lg">
                {profile.title}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#cdeae3] sm:text-base">
                {profile.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="mailto:rafly.tiarso@gmail.com">
                  Email Me
                </a>
                <a className="btn" href="/resume.pdf" download>
                  Download CV
                </a>
              </div>
            </div>

            <div className="panel">
              <p className="mono-label">SYSTEM_INFO</p>
              <ul className="space-y-3 text-sm text-[#d8f3ef]">
                <li>
                  <span className="mono-label">Role:</span> Systems / IT support + software engineer
                </li>
                <li>
                  <span className="mono-label">Focus:</span> Full-stack, mobile, cloud, troubleshooting
                </li>
                <li>
                  <span className="mono-label">Status:</span>{" "}
                  <span className="status-indicator">Open to opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <div id="about" className="window">
            <div className="section-header">About</div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="panel">
                <p className="mono-label">SUMMARY</p>
                <p className="mt-2 text-sm leading-7 text-[#d8f3ef]">
                  I build digital products from system design to release support. My work spans
                  frontend interfaces, mobile apps, SQL-backed systems, cloud services, and practical
                  client-facing troubleshooting.
                </p>
              </div>
              <div className="panel">
                <p className="mono-label">CORE STRENGTHS</p>
                <ul className="mt-2 space-y-2 text-sm text-[#d8f3ef]">
                  <li className="check-item">Structured SDLC and project execution</li>
                  <li className="check-item">JavaScript / Python / SQL development</li>
                  <li className="check-item">Android and cross-platform app delivery</li>
                  <li className="check-item">IT support, systems thinking, and problem solving</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="contact" className="window">
            <div className="section-header">Quick Links</div>
            <div className="space-y-3 p-4">
              <a className="nav-link" href="mailto:rafly.tiarso@gmail.com">
                <span className="contact-icon" aria-hidden="true">@</span>
                <span>Email: rafly.tiarso@gmail.com</span>
              </a>
              <a className="nav-link" href={profile.github} target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">&lt;/&gt;</span>
                <span>GitHub: RAaf28</span>
              </a>
              <a className="nav-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">in</span>
                <span>LinkedIn</span>
              </a>
              <a className="nav-link" href="/resume.pdf" download>
                <span className="contact-icon" aria-hidden="true">PDF</span>
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-6 window">
          <div className="grid gap-4 p-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-gallery">
                  <div className="project-visual">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      sizes="(max-width: 1024px) 90vw, 30vw"
                      className="project-image"
                    />
                    <span className="project-image-label">{project.name}</span>
                  </div>
                  <div className="project-thumbnails" aria-label={`${project.name} screenshots`}>
                    {project.images.slice(1).map((image) => (
                      <div key={image.src} className="project-thumbnail">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 1024px) 40vw, 15vw"
                          className="project-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="project-label">{project.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#d8f3ef]">{project.description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-[#d8f3ef]">
                  {project.highlights.map((item) => (
                    <li key={item} className="check-item">{item}</li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#7ce0cf]">
                  <a href={project.links.github || "#"} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div id="skills" className="window">
            <div className="section-header">Skills</div>
            <div className="grid gap-4 p-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="panel">
                  <p className="mono-label">{group.title}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag tag-soft">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="window">
            <div className="section-header">ASCII CAM</div>
            <AsciiCamera />
          </div>
        </section>

        <section id="experience" className="mt-6 window">
          <div className="section-header">Experience</div>
          <div className="space-y-4 p-4">
            {experience.map((item) => (
              <div key={item.role} className="experience-item">
                <div className="experience-meta">
                  <span className="experience-role">{item.role}</span>
                  <span className="experience-period">{item.period}</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[#d8f3ef]">
                  {item.details.map((detail) => (
                    <li key={detail} className="check-item">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="taskbar">
        <div className="taskbar-start">Start</div>
        <div className="taskbar-shortcuts">
          <a href="#bio" className="taskbar-pill">Bio</a>
          <a href="#projects" className="taskbar-pill">Projects</a>
          <a href="#skills" className="taskbar-pill">Skills</a>
          <a href="#experience" className="taskbar-pill">Experience</a>
          <a href="#contact" className="taskbar-pill">Contact</a>
        </div>
      </div>
    </main>
  );
}
