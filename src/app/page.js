import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";
import ContactButton from "./components/ContactButton";

export default function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">Frontend Developer • Shopify • SEO</p>

        <h1>
          Hi, I&apos;m Aarthi.
          <br />
          I build and optimize modern web experiences.
        </h1>

        <p className="hero-text">
          I work with JavaScript, React, Next.js, Shopify, and SEO to build responsive,
          user-friendly websites and improve their performance and visibility.
        </p>
        <div className="hero-actions">
          <Link href="/projects" className="primary-btn">
            View Projects
          </Link>

          <Link href="/about" className="secondary-btn">
            About Me
          </Link>
          <ContactButton />
        </div>
      </div>
    </main>
  );
}