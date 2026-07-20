/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const SIGNALS = [
  "Pressure / temperature",
  "Pulse / encoder",
  "CAN / Modbus / HART",
  "GSM / MQTT",
  "WebSocket / REST",
  "Flutter / Web UI",
];

const FLOW_LAYERS = [
  { index: "01", label: "Acquire", detail: "CAN, Modbus, USB and field I/O" },
  { index: "02", label: "Normalize", detail: "Typed, validated engineering values" },
  { index: "03", label: "Publish", detail: "Immutable lock-free snapshots" },
  { index: "04", label: "Compute", detail: "AGA8, GERG-88 and NX-19" },
  { index: "05", label: "Serve", detail: "SQLite, REST, WebSocket and UI" },
];

const EVC_PATH = [
  { label: "Field input", value: "Pressure · RTD · Pulse · NAMUR / SCR" },
  { label: "Metrology core", value: "PTZ correction · K / Z · counters" },
  { label: "Evidence", value: "Archives · events · audit trail · RTC" },
  { label: "Interfaces", value: "Optical IR · RS-232 / 485 · GSM" },
];

const TIMELINE = [
  {
    period: "2019 — 2023",
    title: "Computer science foundation",
    place: "University of Okara · BS Computer Science · CGPA 3.6 / 4.0",
    note: "Built the software base while moving deeper into electronics, low-level programming and connected products.",
  },
  {
    period: "2021 — 2025",
    title: "Freelance software & embedded delivery",
    place: "Fiverr · client systems",
    note: "Delivered embedded, IoT and application work under real schedules, inherited-code constraints and varied hardware.",
  },
  {
    period: "2022 — 2025",
    title: "End-to-end IoT product engineering",
    place: "PluttoX IT Solutions · embedded system engineer",
    note: "Owned firmware and four Android / iOS applications spanning device control, Firebase, MQTT, REST and real-time UX.",
  },
  {
    period: "2025 — Present",
    title: "Industrial firmware & systems leadership",
    place: "Smart Computing Company · Embedded System Firmware Lead",
    note: "Leading Flow Computer, EVC and INVEX delivery across architecture, firmware, Linux applications, IoT services and team execution.",
  },
];

const STACKS = [
  { id: "FW", title: "Firmware", items: "C · C++ · STM32 HAL/LL · FreeRTOS · ESP-IDF · ISR-safe design" },
  { id: "HW", title: "Hardware", items: "PCB bring-up · ADC · 4–20 mA · RTD · pulse / encoder · power · QSPI NOR" },
  { id: "COM", title: "Industrial communication", items: "CAN · Modbus RTU/TCP · HART context · RS-485/232 · SPI · I²C · UART" },
  { id: "LIN", title: "Embedded Linux", items: "Yocto ARM64 · CMake · Qt/C++ · multithreading · SQLite · system integration" },
  { id: "IOT", title: "IoT & cloud", items: "Mosquitto MQTT · QoS / retain · TLS · GSM AT commands · REST · WebSocket · Firebase" },
  { id: "APP", title: "Applications", items: "Flutter / Dart · GetX · clean architecture · React · Node.js · .NET · Python" },
];

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      reveal.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <main>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Muhammad Mateen, home">
          <span className="brand-mark">M</span>
          <span className="brand-copy">
            <strong>Muhammad Mateen</strong>
            <small>Embedded systems · Lahore</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Systems</a>
          <a href="#journey">Journey</a>
          <a href="mailto:mateenpro23@gmail.com?subject=Resume%20Request">Résumé</a>
          <a
            className="nav-cta"
            href="https://www.linkedin.com/in/mateenpro"
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Embedded &amp; industrial metering engineer
          </p>
          <h1>
            Engineering intelligence from <span>field signal</span> to trusted decision.
          </h1>
          <p className="hero-lede">
            I architect and lead industrial systems where electronics, real-time firmware,
            metrology, embedded Linux, telemetry, cloud services and operator applications
            must behave as one reliable product.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore the systems <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-ghost"
              href="https://www.linkedin.com/in/mateenpro"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>

          <dl className="hero-stats" aria-label="Career highlights">
            <div>
              <dt>4+</dt>
              <dd>Years hands-on</dd>
            </div>
            <div>
              <dt>100+</dt>
              <dd>Projects delivered</dd>
            </div>
            <div>
              <dt>5</dt>
              <dd>Flow-computer layers</dd>
            </div>
            <div>
              <dt>01</dt>
              <dd>End-to-end owner</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual" aria-label="Portrait of Muhammad Mateen">
          <div className="portrait-halo halo-one" aria-hidden="true" />
          <div className="portrait-halo halo-two" aria-hidden="true" />
          <div className="portrait-frame">
            <img src="mateen-profile-000.jpg" alt="Muhammad Mateen" />
            <div className="portrait-shade" aria-hidden="true" />
            <div className="portrait-caption">
              <span>Currently</span>
              <strong>Leading firmware &amp; systems R&amp;D</strong>
            </div>
          </div>
          <div className="orbit-label orbit-label-top">
            <span>Architecture</span>
            Lock-free · Layered
          </div>
          <div className="orbit-label orbit-label-bottom">
            <span>System span</span>
            Sensor → Cloud → UI
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll the journey</span>
          <i />
        </div>
      </section>

      <div className="signal-strip" aria-label="System capabilities">
        <div>
          {[...SIGNALS, ...SIGNALS].map((signal, index) => (
            <span key={`${signal}-${index}`}>
              {signal} <i>◆</i>
            </span>
          ))}
        </div>
      </div>

      <section className="approach section-shell" id="approach">
        <div className="section-index reveal">
          <span>01</span>
          <p>The engineering stance</p>
        </div>
        <div className="approach-copy reveal">
          <p className="kicker">Architecture before patches</p>
          <h2>
            Reliability is not a final test. It is a property of the <em>whole design.</em>
          </h2>
          <p>
            My work starts with data ownership, task boundaries, failure modes and interfaces.
            I move between schematic signals, RTOS timing, protocol traces, C/C++ state models,
            persistence, APIs and user workflows without losing the system-level picture.
          </p>
        </div>
        <div className="principles reveal">
          <article>
            <span>01 / Ownership</span>
            <h3>Requirements to field validation</h3>
            <p>Architecture, implementation, test strategy, release control and real-hardware diagnosis.</p>
          </article>
          <article>
            <span>02 / Concurrency</span>
            <h3>Predictable real-time behavior</h3>
            <p>Explicit task contracts, ISR-safe paths, immutable snapshots, watchdogs and bounded recovery.</p>
          </article>
          <article>
            <span>03 / Evidence</span>
            <h3>Debug the signal, not the story</h3>
            <p>Oscilloscope, logic analyzer, bus captures, logs, timing, memory and reproducible fault injection.</p>
          </article>
        </div>
      </section>

      <section className="project project-flow" id="work">
        <div className="project-backdrop" aria-hidden="true">FLOW</div>
        <div className="project-header section-shell reveal">
          <div className="section-index">
            <span>02</span>
            <p>Flagship system</p>
          </div>
          <div>
            <p className="kicker">Industrial metrology · embedded Linux · C++17</p>
            <h2>Flow Computer</h2>
          </div>
          <p className="project-summary">
            A layered gas-metering platform joining custom I/O hardware and firmware with an
            ARM64 Yocto system, deterministic calculations, durable archives and live operator software.
          </p>
        </div>

        <div className="flow-stage section-shell">
          <div className="flow-story reveal">
            <p className="story-number">Architecture / 5 layers</p>
            <h3>Readers never wait. Writers publish a new truth.</h3>
            <p>
              I designed a snapshot / copy-on-write global-state architecture. Writers construct
              complete immutable state and publish it through an atomic pointer swap; concurrent
              readers consume a stable snapshot without lock contention or partially updated data.
            </p>
            <div className="code-window" aria-label="Lock-free snapshot architecture concept">
              <div className="code-title">
                <span><i /> <i /> <i /></span>
                live_state.cpp
              </div>
              <pre><code><b>auto</b> next = std::make_shared&lt;State&gt;(*current);{"\n"}
next-&gt;apply(validatedInput);{"\n"}
next-&gt;calculate(metrology);{"\n"}
{"\n"}
<em>{"// one coherent publication point"}</em>{"\n"}
std::atomic_store(&amp;live, std::move(next));</code></pre>
            </div>
          </div>

          <div className="flow-map reveal" aria-label="Flow computer data journey">
            {FLOW_LAYERS.map((layer, index) => (
              <article key={layer.index}>
                <span>{layer.index}</span>
                <div>
                  <h4>{layer.label}</h4>
                  <p>{layer.detail}</p>
                </div>
                {index < FLOW_LAYERS.length - 1 && <i aria-hidden="true">↓</i>}
              </article>
            ))}
          </div>
        </div>

        <div className="project-tags section-shell reveal" aria-label="Flow computer technologies">
          {[
            "Custom I/O cards",
            "Yocto ARM64",
            "C++17 / Qt",
            "CAN / Modbus",
            "SQLite archives",
            "WebSocket / REST",
            "React operator UI",
            "AGA8 / GERG-88 / NX-19",
          ].map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </section>

      <section className="project project-evc" id="evc">
        <div className="evc-watermark" aria-hidden="true">EVC</div>
        <div className="project-header section-shell reveal">
          <div className="section-index">
            <span>03</span>
            <p>Constrained metrology</p>
          </div>
          <div>
            <p className="kicker">Battery operation · FreeRTOS · legal metrology</p>
            <h2>Electronic Volume Corrector</h2>
          </div>
          <p className="project-summary">
            Firmware architecture for a low-power gas volume corrector where measurement,
            archives, communication, user interaction and metrological protection share a tight MCU budget.
          </p>
        </div>

        <div className="evc-stage section-shell">
          <div className="evc-instrument reveal">
            <div className="instrument-topline">
              <span>EVC / LIVE METROLOGY</span>
              <i>RUN</i>
            </div>
            <div className="instrument-display">
              <small>Corrected volume</small>
              <strong>001842.637</strong>
              <span>m³</span>
            </div>
            <div className="instrument-values">
              <div><small>Pressure</small><strong>4.218 bar</strong></div>
              <div><small>Temperature</small><strong>18.74 °C</strong></div>
              <div><small>K factor</small><strong>0.98742</strong></div>
            </div>
            <div className="instrument-bus">
              <span>RTC synced</span><span>Archive clean</span><span>Seal active</span>
            </div>
          </div>

          <div className="evc-copy reveal">
            <p className="story-number">Architecture / integrity under constraint</p>
            <h3>Every wake cycle has a reason. Every stored value needs provenance.</h3>
            <p>
              The EVC work spans pressure and RTD acquisition, pulse / encoder inputs, PTZ
              correction, interval accumulation, external NOR archives, optical communication,
              modem sessions, UI, RTC scheduling and low-power state transitions.
            </p>
            <div className="evc-path">
              {EVC_PATH.map((item, index) => (
                <article key={item.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><small>{item.label}</small><strong>{item.value}</strong></div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="evc-proof section-shell reveal">
          <article><strong>10 years</strong><span>Archive / log design target</span></article>
          <article><strong>30 s — 1 h</strong><span>Configurable measurement interval</span></article>
          <article><strong>1,004 / 1,004</strong><span>Optical-serial host tests passed</span></article>
          <article><strong>WELMEC 7.2</strong><span>Compliance-driven architecture context</span></article>
        </div>
      </section>

      <section className="project project-invex" id="invex">
        <div className="invex-noise" aria-hidden="true" />
        <div className="project-header section-shell reveal">
          <div className="section-index">
            <span>04</span>
            <p>Connected control</p>
          </div>
          <div>
            <p className="kicker amber">Energy control · GSM · MQTT · applications</p>
            <h2>INVEX</h2>
          </div>
          <p className="project-summary">
            A smart inverter and generator hub designed as a complete connected product:
            event-driven firmware, field telemetry, remote control, services and multilingual operator applications.
          </p>
        </div>

        <div className="invex-stage section-shell">
          <div className="telemetry-orbit reveal" aria-label="INVEX telemetry architecture">
            <div className="orbit-core">
              <small>INVEX NODE</small>
              <strong>42.8</strong>
              <span>kW live load</span>
            </div>
            <div className="telemetry-node node-one"><small>DEVICE</small><strong>FreeRTOS</strong></div>
            <div className="telemetry-node node-two"><small>MODEM</small><strong>GSM / AT</strong></div>
            <div className="telemetry-node node-three"><small>BROKER</small><strong>Mosquitto</strong></div>
            <div className="telemetry-node node-four"><small>CLIENT</small><strong>Flutter</strong></div>
          </div>

          <div className="invex-copy reveal">
            <p className="story-number amber">Field reality / reconnect is normal</p>
            <h3>Communication designed for weak signals, restarts and partial failure.</h3>
            <p>
              I built and stabilized GSM registration, AT-command sequencing, MQTT telemetry and
              control flows, QoS / retain behavior, reconnection strategy and fault-aware FreeRTOS tasks.
              The application layer evolved toward configurable multi-vendor deployment with Arabic and English UX.
            </p>
            <div className="invex-features">
              <span>Event-driven control</span><span>MQTT command + telemetry</span>
              <span>Multi-vendor model</span><span>Arabic / English UX</span>
              <span>Real-system testing</span><span>Controlled releases</span>
            </div>
          </div>
        </div>
      </section>

      <section className="platform section-shell" id="platform">
        <div className="section-index reveal">
          <span>05</span>
          <p>Device-to-cloud systems</p>
        </div>
        <div className="platform-intro reveal">
          <p className="kicker">Fleet telemetry &amp; supervisor platforms</p>
          <h2>One contract across device, broker, service and screen.</h2>
          <p>
            My IoT architecture work treats the protocol as a product boundary: topic ownership,
            QoS, retained state, identity, reconnect semantics, command correlation, storage and operator permissions are designed together.
          </p>
        </div>
        <div className="platform-pipeline reveal" aria-label="Fleet telemetry data path">
          <article><span>01</span><strong>Industrial device</strong><small>EVC · INVEX · field node</small></article>
          <i>→</i>
          <article><span>02</span><strong>Secure transport</strong><small>GSM · MQTT · TLS</small></article>
          <i>→</i>
          <article><span>03</span><strong>Platform services</strong><small>ASP.NET Core · databases</small></article>
          <i>→</i>
          <article><span>04</span><strong>Supervisor UX</strong><small>Web · desktop · mobile</small></article>
        </div>
        <div className="platform-notes reveal">
          <article><span>Design target</span><strong>Fleet-scale EVC supervision</strong><p>Bidirectional push / request flows and centralized state without pretending unreliable links are always online.</p></article>
          <article><span>Broker strategy</span><strong>Open Mosquitto foundation</strong><p>Reusable telemetry conventions intended to support metering, power and future industrial IoT products.</p></article>
          <article><span>Data discipline</span><strong>Traceable state transitions</strong><p>Commands, acknowledgements, device state and archive history remain distinguishable throughout the pipeline.</p></article>
        </div>
      </section>

      <section className="applications" id="applications">
        <div className="section-shell">
          <div className="application-heading reveal">
            <div className="section-index"><span>06</span><p>Applications &amp; AI</p></div>
            <div><p className="kicker">The interface is part of the system</p><h2>Real-time products people can operate.</h2></div>
            <p>Flutter is not a side note in my work. It is the human layer of the connected device: state, control, alarms, offline behavior and clarity.</p>
          </div>
          <div className="application-grid">
            <article className="app-card app-card-main reveal">
              <span className="app-id">APP / 01</span>
              <div className="phone-shell" aria-hidden="true">
                <div className="phone-status"><span>09:41</span><i /></div>
                <div className="phone-greeting">System overview</div>
                <div className="phone-energy"><small>Live power</small><strong>4.28 kW</strong><span>Stable</span></div>
                <div className="phone-chart"><i/><i/><i/><i/><i/><i/><i/><i/></div>
                <div className="phone-switches"><span>Grid</span><span>Generator</span><span>Battery</span></div>
              </div>
              <div><p className="kicker">IoT operations</p><h3>Home, aquarium &amp; energy control</h3><p>GetX clean architecture, Firebase, MQTT / REST, authentication, notifications, live dashboards and remote device control.</p></div>
            </article>
            <article className="app-card reveal">
              <span className="app-id">APP / 02</span>
              <div className="app-symbol">ن</div>
              <p className="kicker">Education technology</p>
              <h3>Numou Arabic learning</h3>
              <p>Kid-focused Flutter learning flows with gamified interaction, speech and handwriting / OCR-style learning modules.</p>
              <div className="mini-tags"><span>Flutter</span><span>Speech</span><span>OCR concepts</span></div>
            </article>
            <article className="app-card reveal">
              <span className="app-id">AI / 03</span>
              <div className="ai-grid" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
              <p className="kicker">Applied AI &amp; automation</p>
              <h3>Intelligent workflows</h3>
              <p>Python-based AI/ML experiments, computer-vision workflows, automation and application integration—used where inference creates operational value.</p>
              <div className="mini-tags"><span>Python</span><span>Vision</span><span>Automation</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="debug section-shell" id="debug">
        <div className="debug-copy reveal">
          <div className="section-index"><span>07</span><p>Hardware-grounded engineering</p></div>
          <div>
            <p className="kicker">Debugging across layers</p>
            <h2>Measure first. Isolate the layer. Reproduce the failure.</h2>
            <p>From an ID read returning 0xFFFF to a long-uptime race, I work from physical evidence inward: power, clock, bus timing, ISR path, state ownership, protocol framing and persistent data.</p>
          </div>
        </div>
        <div className="debug-grid reveal">
          <article><span>01</span><strong>Electrical</strong><p>Rails, reset, clock, signal integrity, source / load behavior and component orientation.</p><small>Oscilloscope · DMM</small></article>
          <article><span>02</span><strong>Bus &amp; protocol</strong><p>Transactions, chip-select timing, framing, parity, BCC / CRC and recovery behavior.</p><small>Logic analyzer · protocol traces</small></article>
          <article><span>03</span><strong>RTOS &amp; memory</strong><p>ISR contracts, blocking paths, stack / heap, priority inversion, jitter and watchdog causes.</p><small>Trace hooks · fault logs</small></article>
          <article><span>04</span><strong>System validation</strong><p>Power loss, bad time, counter overflow, corrupt storage, link loss and long-duration recovery.</p><small>Fault injection · HIL · regression</small></article>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="section-shell">
          <div className="journey-heading reveal">
            <div className="section-index"><span>08</span><p>Career journey</p></div>
            <div><p className="kicker">From applications to accountable systems</p><h2>The scope widened. The ownership stayed.</h2></div>
          </div>
          <div className="timeline">
            {TIMELINE.map((item, index) => (
              <article className="reveal" key={item.period}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content"><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.note}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stack section-shell" id="stack">
        <div className="stack-heading reveal">
          <div className="section-index"><span>09</span><p>Engineering range</p></div>
          <div><p className="kicker">Depth connected by architecture</p><h2>A stack broad enough to own the interfaces.</h2></div>
        </div>
        <div className="stack-grid">
          {STACKS.map((stack) => (
            <article className="reveal" key={stack.id}><span>{stack.id}</span><h3>{stack.title}</h3><p>{stack.items}</p></article>
          ))}
        </div>
        <div className="standards reveal">
          <span>Standards context</span><strong>API MPMS</strong><strong>MID</strong><strong>WELMEC 7.2</strong><strong>ISO 6976</strong><strong>ATEX collaboration</strong>
        </div>
      </section>

      <section className="leadership">
        <div className="section-shell leadership-grid">
          <div className="leadership-copy reveal">
            <div className="section-index"><span>10</span><p>Technical leadership</p></div>
            <div><p className="kicker">Lead at engineering altitude</p><h2>Turn requirements into interfaces, ownership and evidence.</h2></div>
          </div>
          <div className="leadership-points reveal">
            <article><span>01</span><h3>Architecture &amp; decisions</h3><p>Freeze the data model, task boundaries, communication contracts, storage policy and acceptance criteria before parallel implementation.</p></article>
            <article><span>02</span><h3>Team execution</h3><p>Break systems into reviewable work, coordinate firmware and application engineers, mentor interns and maintain traceability in Jira and Git.</p></article>
            <article><span>03</span><h3>Technical liaison</h3><p>Translate between clients, management, hardware, firmware, server and application teams without hiding risk or diluting the technical truth.</p></article>
            <article><span>04</span><h3>Release discipline</h3><p>Controlled branches, peer review, test evidence, defect ownership and clear readiness criteria for systems expected to run unattended.</p></article>
          </div>
        </div>
      </section>

      <section className="contact section-shell reveal" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <p className="kicker">Available for serious engineering conversations</p>
        <h2>Bring the system boundary, the failure mode and the field constraint.</h2>
        <p>Industrial embedded systems · firmware architecture · metering · IoT platforms · technical leadership</p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:mateenpro23@gmail.com">Email Muhammad <span aria-hidden="true">↗</span></a>
          <a className="button button-ghost" href="https://www.linkedin.com/in/mateenpro" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a className="button button-ghost" href="mailto:mateenpro23@gmail.com?subject=CV%20Request">Request CV <span aria-hidden="true">↓</span></a>
        </div>
        <div className="contact-meta"><span>Lahore, Pakistan</span><span>mateenpro23@gmail.com</span><span>English · Urdu</span></div>
      </section>

      <footer>
        <span>© 2026 Muhammad Mateen</span>
        <a href="#top">Return to signal zero ↑</a>
        <span>Built around real systems, not buzzwords.</span>
      </footer>
    </main>
  );
}
