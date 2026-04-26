import { useState, useEffect } from "react";

export default function SandikaPortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const skills = [
    {
      title: "HTML",
      desc: "Membuat struktur halaman website yang rapi, semantic, dan mudah dibaca.",
    },
    {
      title: "CSS",
      desc: "Mendesain tampilan website modern dengan warna, spacing, dan layout yang clean.",
    },
    {
      title: "Responsive Design",
      desc: "Membuat website nyaman digunakan di desktop, tablet, dan mobile.",
    },
    {
      title: "Flexbox",
      desc: "Mengatur posisi elemen agar layout lebih fleksibel dan rapi.",
    },
    {
      title: "CSS Grid",
      desc: "Membuat layout card, section, dan halaman menjadi lebih terstruktur.",
    },
    {
      title: "GitHub",
      desc: "Menyimpan, mengelola, dan menampilkan project secara online.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      desc: "Website portfolio pribadi untuk menampilkan profil, skill, project, dan kontak.",
    },
    {
      number: "02",
      title: "Landing Page",
      desc: "Tampilan landing page modern untuk produk digital atau startup sederhana.",
    },
    {
      number: "03",
      title: "E-commerce UI",
      desc: "Desain katalog produk sederhana dengan card, harga, dan tombol checkout.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%)]">
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? "bg-slate-950/95 border-sky-400/25 shadow-2xl"
            : "bg-slate-950/80 border-slate-400/15"
        }`}
      >
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-3xl font-extrabold text-slate-50">
            Sandika<span className="text-sky-400">.</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 flex h-8 w-9 flex-col justify-between border-0 bg-transparent md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-1 w-full rounded-full bg-sky-400 transition ${
                isOpen ? "translate-y-[14px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-1 w-full rounded-full bg-sky-400 transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-1 w-full rounded-full bg-sky-400 transition ${
                isOpen ? "-translate-y-[14px] -rotate-45" : ""
              }`}
            />
          </button>

          <ul
            className={`absolute left-1/2 top-20 flex w-[calc(100%-40px)] -translate-x-1/2 flex-col items-center gap-5 rounded-2xl border border-sky-400/25 bg-slate-950/95 py-6 transition md:static md:w-auto md:translate-x-0 md:flex-row md:border-0 md:bg-transparent md:py-0 ${
              isOpen
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-4 opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto"
            }`}
          >
            {[
              ["Tentang", "#about"],
              ["Skill", "#skills"],
              ["Project", "#projects"],
              ["Kontak", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="font-semibold text-slate-300 transition hover:text-sky-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full bg-sky-400 px-5 py-3 font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-500 md:inline-block"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100vh-76px)] max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[1.35fr_0.85fr]">
          <div className="text-center md:text-left">
            <p className="mb-5 inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-400">
              👋 Frontend Developer • Open for Internship
            </p>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-50 md:text-7xl">
              Membangun Website
              <span className="block text-sky-400">Modern, Responsif, dan User-Friendly</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:mx-0">
              Saya Sandika, Frontend Developer pemula yang fokus membangun tampilan website yang clean, responsif, dan mudah digunakan. Saya terus mengembangkan kemampuan dalam HTML, CSS, JavaScript, serta desain antarmuka modern.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a className="rounded-xl bg-sky-400 px-6 py-4 font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-500 hover:shadow-xl" href="#projects">
                Lihat Project Saya
              </a>
              <a className="rounded-xl border border-sky-400/60 px-6 py-4 font-extrabold text-sky-400 transition hover:-translate-y-1 hover:bg-sky-400/10" href="#contact">
                Hubungi Saya
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md rounded-[30px] border border-slate-400/20 bg-gradient-to-b from-slate-800/90 to-slate-900/95 p-9 text-center shadow-2xl">
            <div className="mx-auto mb-6 grid h-36 w-36 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-400 text-6xl font-black text-slate-950">
              S
            </div>
            <h3 className="text-3xl font-extrabold text-slate-50">Sandika</h3>
            <p className="mb-5 mt-2 text-slate-400">Frontend Developer</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-bold text-green-300">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              Available for Internship
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-400">Tentang Saya</p>
            <h2 className="text-4xl font-extrabold leading-tight text-slate-50 md:text-5xl">
              Saya membangun website sederhana yang clean, modern, dan profesional.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-300">
            Saya sedang mendalami frontend development dengan fokus pada HTML, CSS, JavaScript, responsive design, layout modern, typography, dan struktur website yang rapi. Saya senang membuat tampilan web yang tidak hanya menarik, tetapi juga mudah digunakan.
          </p>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
          <p className="mb-5 inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-400">Skill</p>
          <h2 className="text-4xl font-extrabold text-slate-50 md:text-5xl">Skill yang sedang saya kembangkan</h2>

          <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.title} className="rounded-3xl border border-slate-400/20 bg-slate-900/80 p-7 transition hover:-translate-y-2 hover:border-sky-400/60 hover:shadow-2xl">
                <h3 className="mb-3 text-2xl font-bold text-slate-50">{skill.title}</h3>
                <p className="text-slate-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
          <p className="mb-5 inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-400">Project</p>
          <h2 className="text-4xl font-extrabold text-slate-50 md:text-5xl">Project terbaru saya</h2>

          <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="overflow-hidden rounded-3xl border border-slate-400/20 bg-slate-900/80 transition hover:-translate-y-2 hover:border-sky-400/60 hover:shadow-2xl">
                <div className="grid h-44 place-items-center bg-gradient-to-br from-sky-500 to-indigo-500 text-6xl font-black text-white/90">
                  {project.number}
                </div>
                <div className="p-7">
                  <h3 className="mb-3 text-2xl font-bold text-slate-50">{project.title}</h3>
                  <p className="text-slate-400">{project.desc}</p>
                  <a href="#" className="mt-5 inline-block font-extrabold text-sky-400">
                    View Project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 text-center">
          <p className="mb-5 inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-400">Kontak</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold text-slate-50 md:text-5xl">Mari bangun project bersama.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Saya terbuka untuk belajar, kolaborasi, internship, atau project sederhana.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:sandikaa214@gmail.com" className="rounded-xl bg-sky-400 px-6 py-4 font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-500">
              📧 Email
            </a>
            <a href="https://wa.me/6287864772970" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-green-500 px-6 py-4 font-extrabold text-slate-950 transition hover:-translate-y-1">
              💬 WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/sandikadwiwibowo" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#0a66c2] px-6 py-4 font-extrabold text-white transition hover:-translate-y-1">
              💼 LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-400/15 px-5 py-7 text-center text-slate-400">
        <p>© 2026 Sandika. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
