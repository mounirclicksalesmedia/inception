"use client";

import Reveal from "@/components/Reveal";
import { useState, FormEvent } from "react";

const CHIPS = [
  "Brand Strategy",
  "Identity",
  "Campaign",
  "Website",
  "Film",
  "PR",
  "Other",
];

export default function ContactPage() {
  const [active, setActive] = useState<string[]>([]);
  const toggle = (chip: string) =>
    setActive((curr) =>
      curr.includes(chip) ? curr.filter((c) => c !== chip) : [...curr, chip]
    );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thanks. We'll be in touch.");
    (e.currentTarget as HTMLFormElement).reset();
    setActive([]);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Start a project · 004</span>
          <h1 className="h-display h1" style={{ marginTop: 24, maxWidth: "14ch" }}>
            Tell us<br />
            <em className="serif-touch gold">what&apos;s next</em>.
          </h1>
          <p className="body-lg" style={{ maxWidth: "56ch", marginTop: 36 }}>
            We respond to every inquiry within one working day. Briefer
            messages get briefer replies — please share enough to start a real
            conversation.
          </p>
        </div>
        <div className="najdi-pattern"></div>
      </section>

      <section className="section contact-section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <Reveal>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <label className="form-label">
                  <span className="mono lbl">01 / Your name</span>
                  <input type="text" required placeholder="Full name" />
                </label>
                <label className="form-label">
                  <span className="mono lbl">02 / Company</span>
                  <input type="text" placeholder="Organization" />
                </label>
              </div>
              <div className="form-row">
                <label className="form-label">
                  <span className="mono lbl">03 / Email</span>
                  <input type="email" required placeholder="you@brand.com" />
                </label>
                <label className="form-label">
                  <span className="mono lbl">04 / Phone</span>
                  <input type="tel" placeholder="+966" />
                </label>
              </div>
              <label className="form-label">
                <span className="mono lbl">05 / What do you need?</span>
                <div className="form-chips">
                  {CHIPS.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      className={`chip ${active.includes(chip) ? "active" : ""}`}
                      onClick={() => toggle(chip)}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </label>
              <label className="form-label">
                <span className="mono lbl">06 / Tell us about it</span>
                <textarea
                  rows={5}
                  placeholder="A few sentences on the brief, timing, and budget range."
                />
              </label>
              <button
                type="submit"
                className="btn btn-solid"
                style={{ marginTop: 24 }}
              >
                Send Inquiry <span className="arrow">→</span>
              </button>
            </form>
          </Reveal>

          <Reveal as="aside" className="contact-aside">
            <div className="aside-block">
              <span className="eyebrow">Studios</span>
              <div className="aside-loc">
                <h4 className="h-display h4">Riyadh</h4>
                <p className="text-mute">
                  King Fahd Rd, Olaya<br />Riyadh 12333, KSA
                </p>
              </div>
              <div className="aside-loc">
                <h4 className="h-display h4">Jeddah</h4>
                <p className="text-mute">
                  Tahlia St, Al Zahra<br />Jeddah 23425, KSA
                </p>
              </div>
            </div>
            <div className="aside-block">
              <span className="eyebrow">Direct</span>
              <ul className="aside-list">
                <li>
                  <span className="mono">New business</span>
                  <a href="mailto:hello@inception.sa">hello@inception.sa</a>
                </li>
                <li>
                  <span className="mono">Press</span>
                  <a href="mailto:press@inception.sa">press@inception.sa</a>
                </li>
                <li>
                  <span className="mono">Careers</span>
                  <a href="mailto:join@inception.sa">join@inception.sa</a>
                </li>
                <li>
                  <span className="mono">Phone</span>
                  <a href="tel:+966112345678">+966 11 234 5678</a>
                </li>
              </ul>
            </div>
            <div className="aside-block">
              <span className="eyebrow">Hours</span>
              <p className="text-mute" style={{ marginTop: 12 }}>
                Sun–Thu · 9am–6pm AST<br />By appointment Saturdays
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
