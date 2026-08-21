"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { FormEvent } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwvjjrg", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-6rem] h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute right-[-4rem] top-40 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-slate-800 bg-slate-950/95 backdrop-blur shadow-lg/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <span className="text-lg font-semibold tracking-tight">
            Swaroop Mudholkar
          </span>

          <div className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-slate-200 hover:text-emerald-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/swaroop6031"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-slate-700 p-2 text-slate-300 hover:border-emerald-400 hover:text-emerald-300 transition-colors md:inline-flex"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.58.11.79-.25.79-.55 0-.27-.01-1.15-.02-2.09-3.22.7-3.9-1.39-3.9-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.46-2.31 1.21-3.13-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.76.11 3.05.75.82 1.2 1.86 1.2 3.13 0 4.45-2.71 5.44-5.29 5.73.42.36.8 1.09.8 2.2 0 1.59-.02 2.87-.02 3.26 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/swaroop-mudholkar-entc6031a"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-slate-700 p-2 text-slate-300 hover:border-emerald-400 hover:text-emerald-300 transition-colors md:inline-flex"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.1 3.4 6.1 7.8V24h-5V16c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z" />
              </svg>
            </a>

            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-1 text-xs font-medium text-slate-950 shadow-md transition-transform duration-200 hover:-translate-y-0.5 md:inline-block"
            >
              Contact me
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 p-2 md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
              </svg>
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="mx-auto mt-1 flex max-w-6xl flex-wrap gap-2 px-4 pb-3 text-sm sm:px-6 lg:px-8 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 hover:border-emerald-400 hover:text-emerald-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 space-y-24 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-slate-900/80 px-3 py-1 text-[11px] text-emerald-300 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Electronics • Embedded • IoT • Edge AI
            </div>
            <div>
              <h1 className="mt-1 bg-gradient-to-r from-emerald-300 via-sky-300 to-indigo-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-5xl">
                I like making hardware talk <br className="hidden md:block" /> to the digital world.
              </h1>
            </div>
            <p className="text-base text-slate-300 md:text-lg">
              I&apos;m an{" "}
              <span className="text-emerald-300">
                Electronics Engineering Student &amp; Embedded / IoT enthusiast
              </span>{" "}
              who enjoys turning ideas into working prototypes. From register-level firmware and sensors to real-time object detection and clean web interfaces—I like owning the full flow of a project.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/Swaroop_Resume.pdf"
                target="_blank"
                className="rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-md transition-transform duration-200 hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-400 hover:text-emerald-300 hover:-translate-y-0.5 transition-transform duration-200"
              >
                View Projects
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                <p className="text-[11px] text-slate-400">Focus</p>
                <p className="font-semibold text-emerald-300">
                  Embedded Systems · IoT · Edge AI
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                <p className="text-[11px] text-slate-400">Currently</p>
                <p className="font-semibold">B.Tech EnTC @ PCCOE (2023-2027)</p>
              </div>
            </div>
          </div>

          {/* PHOTO CARD */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-emerald-500/60 via-slate-900 to-sky-500/60 blur-xl opacity-70" />
              <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/80 p-3 shadow-2xl backdrop-blur">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/swaroop.jpg"
                    alt="Swaroop Mudholkar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 space-y-1 text-xs text-slate-300">
                  <p className="font-semibold text-slate-100">
                    Swaroop Mudholkar
                  </p>
                  <p>Electronics &amp; Telecommunication Engineering · PCCOE</p>
                  <p className="text-emerald-300">
                    Embedded Systems • IoT • Edge AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="space-y-4 scroll-mt-28">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">
            <p className="text-slate-300 leading-relaxed">
              I am an engineering student passionate about embedded systems, electronics, and real-world problem solving. I enjoy designing hardware projects, coding microcontrollers, writing register-level firmware drivers, and learning new technologies that bridge the gap between hardware and software.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Currently pursuing a <span className="text-slate-100">B.Tech in Electronics and Telecommunication Engineering (2023-2027)</span> at <span className="text-slate-100">Pimpri Chinchwad College of Engineering (PCCOE), Nigdi, Pune</span> with a Multi-Disciplinary Minor (MDM) in Generative AI.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I completed a 4-week internship at <span className="text-slate-100">Cotmac Electronics Pvt. Ltd., Bhosari MIDC, Pune</span>, and have participated in <span className="text-slate-100">Smart India Hackathon (SIH) 2024</span>, <span className="text-slate-100">IETE National Level Project Competition</span>, and <span className="text-slate-100">E-Yantra 2025</span>. I am also the <span className="text-slate-100">Documentation Team Lead at PCCOE EnTC Internship Cell</span>.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-4 scroll-mt-28">
          <h2 className="text-2xl font-semibold">Experience &amp; Achievements</h2>
          <div className="grid gap-4 md:grid-cols-2 md:auto-rows-fr">
            {[
              {
                title: "Intern - Cotmac Electronics Pvt. Ltd.",
                subtitle: "Bhosari MIDC, Pune",
                time: "June 2025 - July 2025",
                bullets: [
                  "Engineered industrial PLC panel schematics and wiring layouts in E-Plan Electric P8, ensuring compliance with control automation standards.",
                  "Conducted hardware-in-the-loop (HIL) signal verification, point-to-point wiring checks, and fault diagnostics across live industrial panels."
                ]
              },
              {
                title: "Documentation Lead - PCCOE EnTC Internship Cell",
                subtitle: "PCCOE, Nigdi, Pune",
                time: "2025 - Present",
                bullets: [
                  "Directed a student team managing technical documentation, reporting, and tracking data for 100+ candidates.",
                  "Coordinated with departmental faculty and industry leads to streamline internship drives and placement workflows."
                ]
              },
              {
                title: "Project Competitions & Robotics Events",
                subtitle: "IETE Project Competition & E-Yantra 2025",
                time: "2024 - 2025",
                bullets: [
                  "Presented hardware and embedded projects at national-level platforms, strengthening my interest in robotics and embedded systems.",
                  "Published research in Scitepress ICITSC 2025 conference proceedings."
                ]
              },
              {
                title: "Participant - Smart India Hackathon (SIH) 2024",
                subtitle: "National Level Hackathon",
                time: "2024",
                bullets: [
                  "Worked in a team to design and propose solutions for a real-world problem statement, focusing on innovation, feasibility, and implementation strategy."
                ]
              }
            ].map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-slate-900/90"
              >
                <div>
                  <p className="text-xs text-emerald-300">{item.time}</p>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.subtitle}</p>
                  <ul className="mt-3 list-disc list-inside text-xs text-slate-400 space-y-1">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-4 scroll-mt-28">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur space-y-6">
            
            {/* Languages */}
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                Programming &amp; Scripting
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
                {["Embedded C", "C", "C++", "Python", "CAPL", "HTML/CSS", "JavaScript"].map((tech) => (
                  <span key={tech} className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-emerald-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Embedded, Automotive & AI */}
            <div className="border-t border-slate-800 pt-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Embedded Systems, Automotive &amp; AI
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
                {[
                  "STM32", "ESP32", "Arduino", "CAN Bus", "Vector CANoe", "CANdb++",
                  "Diagnostic Protocols (DTC)", "Sensor Interfacing (UART, I2C, SPI)", 
                  "YOLOv7/v8", "OpenCV", "PyTorch"
                ].map((item) => (
                  <span key={item} className="rounded-full border border-sky-500/30 bg-sky-950/40 px-3 py-1 text-sky-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Hardware & Dev Tools */}
            <div className="border-t border-slate-800 pt-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Developer &amp; Hardware Tools
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
                {[
                  "STM32CubeIDE", "E-Plan Electric P8", "MATLAB", "Git & GitHub", "Multisim", "ST-LINK / OpenOCD"
                ].map((tool) => (
                  <span key={tool} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS - ALL 5 PROJECTS RESTORED & UPDATED */}
        <section id="projects" className="space-y-4 scroll-mt-28">
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="grid gap-4 md:grid-cols-2 md:auto-rows-fr">
            
            {/* Project 1: Aspergillus Detection */}
            <article className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-slate-900/90">
              <div>
                <h3 className="text-lg font-semibold">
                  Proactive Detection of Aspergillus Growth Through Indoor Air Monitoring
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-emerald-300">
                  STM32 • UART • DHT22 • MQ135 • LCD DISPLAY
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Architected an STM32-based air-quality monitoring telemetry system using UART communication to process multi-sensor environmental data streams in real time. Features early warnings when environmental conditions are ideal for fungal growth. Research paper published in Scitepress ICITSC Conference proceedings (2025).
                </p>
              </div>
            </article>

            {/* Project 2: Engine ECU Simulation */}
            <article className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-slate-900/90">
              <div>
                <h3 className="text-lg font-semibold">
                  Engine ECU Simulation &amp; CAN Network Validation
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-emerald-300">
                  VECTOR CANOE • CAPL • CANdb++ • CAN BUS
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Simulated high-speed CAN networks in Vector CANoe using custom .dbc database files created in CANdb++ for multi-ECU validation. Programmed CAPL scripts to automate Diagnostic Trouble Code (DTC) fault injection and live signal analysis across multi-node topologies.
                </p>
              </div>
            </article>

            {/* Project 3: YOLO Object Detection */}
            <article className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-slate-900/90">
              <div>
                <h3 className="text-lg font-semibold">
                  Real-Time Object Detection using YOLOv7 &amp; YOLOv8
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-emerald-300">
                  PYTHON • PYTORCH • OPENCV • EDGE COMPUTER VISION
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Benchmarked deep learning object detection pipelines (YOLOv7 vs. YOLOv8) using PyTorch and OpenCV. Processed and annotated custom datasets, evaluating mAP, FPS, and detection accuracy to optimize edge inference speed for low-latency applications.
                </p>
              </div>
            </article>

            {/* Project 4: Smart Chair System */}
            <article className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-slate-900/90">
              <div>
                <h3 className="text-lg font-semibold">
                  Smart Chair System for Real-Time Posture Monitoring and Wellness Reminder
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-emerald-300">
                  ESP32 • FORCE RESISTOR SENSORS • ULTRASONIC SENSOR • TOUCH SENSOR
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Built an ESP32 edge-monitoring system using multi-sensor fusion (Force Resistors, Ultrasonic, Touch) to process biomechanical posture data in real time. Detects slouching, unbalanced sitting, and backrest distance to trigger timely corrective alerts.
                </p>
              </div>
            </article>

            {/* Project 5: Refrigerator Door Alarm (RESTORED) */}
            <article className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-slate-900/90">
              <div>
                <h3 className="text-lg font-semibold">
                  Refrigerator Door Alarm (Power Electronics Mini Project)
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-emerald-300">
                  LDR • TRANSISTOR • RESISTORS • CAPACITOR • BUZZER
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Built a simple yet effective timing circuit that detects when the fridge door remains open for too long. An LDR senses internal light when open, and after a ~1 minute delay, activates a buzzer alert. Strengthened power electronics and component selection basics.
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="space-y-4 scroll-mt-28">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur space-y-3">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-base font-semibold text-slate-100">
                  Microcontroller Embedded C Programming: Absolute Beginners
                </h3>
                <p className="text-xs text-emerald-300">FastBit Embedded Brain Academy (Kiran Nayak) · Udemy</p>
              </div>
              <span className="text-xs text-slate-400">August 2026</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Gained hands-on experience writing register-level firmware drivers, working with MCU memory maps, stack/heap layouts, structure padding, bitwise manipulations, compilation flows, and linker scripts on STM32 hardware using STM32CubeIDE.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="space-y-4 scroll-mt-28">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="space-y-3">
            {[
              {
                time: "2023 - 2027",
                title: "B.Tech in Electronics and Telecommunication Engineering",
                place: "Pimpri Chinchwad College of Engineering (PCCOE), Nigdi, Pune",
                detail: "MDM Minor: Generative AI"
              },
              {
                time: "2021 - 2023",
                title: "12th Science (HSC)",
                place: "S. B. Patil College of Science and Commerce, Ravet, Pune",
                detail: "Focus on Mathematics & Physics"
              },
              {
                time: "2021",
                title: "10th (CBSE)",
                place: "S. B. Patil Public School, Ravet, Pune",
                detail: "Secondary Education"
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-slate-900/90"
              >
                <p className="text-xs text-emerald-300">{item.time}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.place}</p>
                <p className="text-xs text-slate-400 mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="space-y-4 scroll-mt-28">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-slate-300">
            Feel free to reach out for opportunities, collaborations, or technical queries!
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-slate-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:bg-slate-900"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:bg-slate-900"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Your Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:bg-slate-900"
                />
              </div>

              <input type="hidden" name="_subject" value="New message from portfolio website" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 py-2 text-sm font-semibold text-slate-950 shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && <p className="text-xs text-emerald-400">Message sent successfully!</p>}
              {status === "error" && <p className="text-xs text-red-400">Something went wrong. Please try again.</p>}
            </form>

            <div className="space-y-2 text-sm text-slate-300">
              <p><span className="font-semibold text-slate-100">Email:</span> swaroopmudholkar@gmail.com</p>
              <p><span className="font-semibold text-slate-100">Phone:</span> +91-8830157488</p>
              <p><span className="font-semibold text-slate-100">Location:</span> Pune, Maharashtra, India</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p>© {new Date().getFullYear()} Swaroop Mudholkar</p>
            <div className="flex items-center gap-4 text-xs">
              <a href="mailto:swaroopmudholkar@gmail.com" className="hover:text-emerald-300 transition-colors">Email</a>
              <a href="https://github.com/swaroop6031" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/swaroop-mudholkar-entc6031a" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 flex items-center gap-1 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 px-3 py-2 text-xs font-semibold text-slate-950 shadow-lg backdrop-blur transition-transform duration-200 hover:-translate-y-0.5"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          Top
        </button>
      )}
    </main>
  );
}