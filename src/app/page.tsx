"use client";

import Image from "next/image";
import { useState } from "react";

/* ---------------------------------- Icons ---------------------------------- */

function IconLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 20c0-8 5-14 16-15-1 11-7 16-15 16-.5 0-1-.4-1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconMenu({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconClose({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function IconArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function IconBed({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18v2M21 18v2M3 12V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function IconBath({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 12h16M4 12v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3M6 12V6a2 2 0 0 1 2-2M9 12V7" />
    </svg>
  );
}

function IconArea({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4h6v6H4zM14 14h6v6h-6z" />
      <path d="M10 7h4M17 10v4M14 17H7" />
    </svg>
  );
}

function IconChart({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  );
}

function IconCompass({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5 13 13l-3.5 1.5L11 11z" />
    </svg>
  );
}

function IconShield({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconHeadset({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19a4 4 0 0 1-4 3h-2" />
    </svg>
  );
}

function IconHandshake({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12l5-4 4 3 3-3 5 4" />
      <path d="M7 11l4 4 3-3M17 12l-4 5-3-2" />
    </svg>
  );
}

function IconMegaphone({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 11v2a2 2 0 0 0 2 2h1l2 5h2l-1.5-5H10l9 3V6l-9 3H3z" />
    </svg>
  );
}

function IconPlus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function IconSocial({ name }: { name: "x" | "facebook" | "instagram" | "linkedin" }) {
  const paths: Record<string, string> = {
    x: "M4 4l16 16M20 4L4 20",
    facebook: "M14 20v-7h2.5l.5-3H14V8.5c0-.9.3-1.5 1.6-1.5H17V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.6v7z",
    instagram: "",
    linkedin: "",
  };
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7.5 10v6M7.5 7.5v.01M11.5 16v-3.5c0-1.1.9-2 2-2s2 .9 2 2V16" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-4 w-4">
      <path d={paths[name]} />
    </svg>
  );
}

/* ---------------------------------- Data ---------------------------------- */

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#about" },
  { label: "Property", href: "#property" },
  { label: "Contact", href: "#contact" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    alt: "Modern minimalist house exterior",
    h: "h-64 md:h-72",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "White modern house with clean lines",
    h: "h-56 md:h-60",
  },
  {
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    alt: "Luxury house with pool",
    h: "h-64 md:h-72",
  },
  {
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80",
    alt: "Modern house with swimming pool at dusk",
    h: "h-56 md:h-60",
  },
];

const filterTags = ["Featured", "Apartments", "Commercial", "Condeminel", "Office space"];

const listings = [
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
    badge: "For Rent",
    name: "Serenity by the Lake",
    beds: 4,
    baths: 2,
    area: "2569 sqft",
    price: "$250.00",
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=700&q=80",
    name: "Urban Nest Realty",
    beds: 4,
    baths: 2,
    area: "2569 sqft",
    price: "$250.00",
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
    name: "Prime Property Group",
    beds: 4,
    baths: 2,
    area: "2569 sqft",
    price: "$250.00",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80",
    name: "KeyStone Estates",
    beds: 4,
    baths: 2,
    area: "2569 sqft",
    price: "$250.00",
  },
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80",
    name: "Blue Horizon Realty",
    beds: 4,
    baths: 2,
    area: "2569 sqft",
    price: "$250.00",
  },
  {
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=700&q=80",
    name: "NextDoor Real Estate",
    beds: 4,
    baths: 2,
    area: "2569 sqft",
    price: "$250.00",
  },
];

const services = [
  {
    icon: IconChart,
    title: "Market Analysis",
    desc: "Our in-depth market analysis provides you with data-driven insights on property values, trends, and opportunities.",
  },
  {
    icon: IconCompass,
    title: "Property Valuation",
    desc: "Our precise property valuation service helps you price confidently and maximize your investment potential.",
  },
  {
    icon: IconShield,
    title: "Legal Assistance",
    desc: "Our team of experienced legal professionals ensures every aspect of your property transaction is handled with precision and care.",
  },
  {
    icon: IconHeadset,
    title: "Post-Sale Support",
    desc: "From final paperwork to home maintenance tips, our post-sale support ensures a seamless transition after closing.",
  },
  {
    icon: IconHandshake,
    title: "Negotiation Skills",
    desc: "Our seasoned negotiators advocate for you, ensuring you get the most favorable deal with confidence and ease.",
  },
  {
    icon: IconMegaphone,
    title: "Tailored Marketing Plans",
    desc: "Leverage online and offline channels, including social media, real estate platforms, and more, to maximize visibility.",
  },
];

const stats = [
  {
    value: "200k+",
    label: "Property Constructed",
    desc: "We've helped over 4,000 amazing global companies.",
  },
  {
    value: "100+",
    label: "Award Winning",
    desc: "Our customers have reported an average of +600% ROI.",
  },
  {
    value: "50K+",
    label: "Satisfied Clients",
    desc: "Our app has been downloaded over 10k times.",
  },
  {
    value: "5+",
    label: "Years of Experience",
    desc: "We're proud of our 5-star rating with over 200 reviews.",
  },
];

const faqs = [
  {
    q: "How long does the buying process take?",
    a: "You can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    q: "What upfront costs should I expect when buying a home?",
    a: "Typical upfront costs include a down payment, closing costs, inspection fees, and appraisal fees. Our team walks you through every line item before you commit.",
  },
  {
    q: "How do I determine my home's market value?",
    a: "We combine recent comparable sales, neighborhood trends, and a detailed property assessment to give you an accurate, data-backed valuation.",
  },
  {
    q: "What are closing costs, and who pays them?",
    a: "Closing costs cover fees like title insurance, taxes, and lender charges. Depending on the agreement, they can be split or negotiated between buyer and seller.",
  },
  {
    q: "What should I look for in a property location?",
    a: "Consider proximity to schools, transit, amenities, future development plans, and resale potential when evaluating a location.",
  },
  {
    q: "What we doing work?",
    a: "We manage the entire process end-to-end — from search and valuation to legal paperwork and post-sale support.",
  },
];

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80",
    title: "The Property Perspective",
    desc: "Insightful articles and tips on home trends, investment strategies, and property insights.",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=80",
    title: "Home & Haven Insights",
    desc: "Tips on home buying, selling, interior design, and making the most of your living space.",
  },
  {
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=700&q=80",
    title: "The Real Estate Rundown",
    desc: "Weekly updates on market news, property values, and expert advice for buyers and sellers.",
  },
];

const footerColumns = [
  {
    title: "Home",
    links: ["Buy", "Rent", "Short Terms", "New Projects", "List your Property"],
  },
  {
    title: "Services",
    links: ["Property Management", "Get referrals", "Careers", "Real Estate News"],
  },
];

/* ---------------------------------- Page ---------------------------------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTag, setActiveTag] = useState("Featured");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1a1a1a]">
      {/* ---------------- Header ---------------- */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-lg font-bold">
            <IconLeaf className="h-6 w-6 text-accent" />
            Estate
          </a>

          <nav className="hidden items-center gap-1 rounded-full bg-gray-50 p-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${link.label === "Home"
                  ? "bg-white text-[#1a1a1a] shadow-sm"
                  : "text-muted hover:text-[#1a1a1a]"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-[#111111] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a] md:inline-block"
            >
              Let&apos;s talk
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="rounded-full border border-gray-200 p-2 md:hidden"
            >
              {menuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#1a1a1a] hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-[#111111] px-5 py-2.5 text-center text-sm font-medium text-white"
              >
                Let&apos;s talk
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* ---------------- Hero ---------------- */}
        <section className="mx-auto max-w-7xl px-6 pt-4">
          <div className="relative">
            <div className="relative h-[520px] overflow-hidden rounded-3xl sm:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
                alt="Luxury modern house with pool at dusk"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/30 to-pink-500/20" />

              <div className="relative z-10 flex h-full flex-col justify-center px-6 pb-24 sm:px-12">
                <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Find Your Super Perfect Home or Sell with Confidence
                </h1>
                <p className="mt-5 max-w-lg text-sm text-white/85 sm:text-base">
                  Explore a seamless way to buy, sell, and connect with trusted real estate professionals.
                </p>
              </div>
            </div>

            {/* Search bar */}
            <div className="absolute inset-x-4 bottom-0 z-10 translate-y-1/2 sm:inset-x-8">
              <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-xl sm:flex-row sm:items-center sm:gap-2 sm:p-3">
                <div className="flex-1 border-b border-gray-100 px-2 py-1 sm:border-b-0 sm:border-r">
                  <label className="block text-xs font-medium text-muted">Location</label>
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full bg-transparent py-1 text-sm outline-none placeholder:text-gray-400"
                  />
                </div>
                <div className="flex-1 border-b border-gray-100 px-2 py-1 sm:border-b-0 sm:border-r">
                  <label className="block text-xs font-medium text-muted">Property type</label>
                  <select className="w-full appearance-none bg-transparent py-1 text-sm outline-none">
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Condo</option>
                    <option>Office</option>
                  </select>
                </div>
                <div className="flex-1 px-2 py-1">
                  <label className="block text-xs font-medium text-muted">Max price</label>
                  <select className="w-full appearance-none bg-transparent py-1 text-sm outline-none">
                    <option>$3,000</option>
                    <option>$5,000</option>
                    <option>$10,000</option>
                    <option>$25,000</option>
                  </select>
                </div>
                <button className="rounded-xl bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a] sm:rounded-full">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Gallery ---------------- */}
        <section className="mx-auto max-w-7xl px-6 pt-32 sm:pt-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Discover Stylish Spaces and Inspiring Details</h2>
            <p className="mt-3 text-sm text-muted">
              See every detail of your future home from the comfort of your own space.
            </p>
          </div>

          <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 sm:overflow-visible">
            {galleryImages.slice(0, 2).map((img) => (
              <div
                key={img.src}
                className={`relative w-56 flex-shrink-0 snap-start overflow-hidden rounded-2xl sm:w-1/5 sm:flex-shrink ${img.h}`}
              >
                <Image src={img.src} alt={img.alt} fill sizes="300px" className="object-cover" />
              </div>
            ))}

            <div className="flex w-72 flex-shrink-0 flex-col justify-center gap-4 rounded-2xl bg-surface p-6 sm:w-1/5 sm:flex-shrink">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <IconArrowUpRight className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold">Seaside Resort</h3>
              <p className="text-xs text-muted">
                These names add character to a property and can make it feel exciting and memorable to
                prospective buyers.
              </p>
            </div>

            {galleryImages.slice(2, 4).map((img) => (
              <div
                key={img.src}
                className={`relative w-56 flex-shrink-0 snap-start overflow-hidden rounded-2xl sm:w-1/5 sm:flex-shrink ${img.h}`}
              >
                <Image src={img.src} alt={img.alt} fill sizes="300px" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a]">
              View More
            </button>
          </div>
        </section>

        {/* ---------------- Logo strip ---------------- */}
        <section className="mt-24 bg-surface py-10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-8 px-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2 text-muted">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300">
                  <IconCompass className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium">Logoipsum</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Listings ---------------- */}
        <section id="property" className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Explore Spaces to Call Home</h2>
              <p className="mt-3 text-sm text-muted">
                See every detail of your future home from the comfort of your own space.
              </p>
            </div>
            <button className="hidden shrink-0 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a] sm:inline-block">
              View More
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeTag === tag
                  ? "bg-[#111111] text-white"
                  : "border border-gray-200 text-muted hover:border-gray-300"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((item) => (
              <div key={item.name} className="group">
                <div className="relative h-56 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-bold">{item.name}</h3>
                  <span className="font-bold text-accent">{item.price}</span>
                </div>
                <div className="mt-2 flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <IconBed className="h-4 w-4" /> {item.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconBath className="h-4 w-4" /> {item.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconArea className="h-4 w-4" /> {item.area}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Services ---------------- */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Explore Spaces to Call Home</h2>
              <p className="mt-3 text-sm text-muted">
                See every detail of your future home from the comfort of your own space.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Stats + image ---------------- */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Explore Spaces, Elevate Your Lifestyle</h2>
              <p className="mt-3 max-w-md text-sm text-muted">
                We listen to your needs and guide you through every step, from initial search to final
                paperwork.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
                    <p className="mt-1 text-sm font-semibold">{stat.label}</p>
                    <p className="mt-1 text-xs text-muted">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-3xl sm:h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80"
                alt="Modern apartment building facade"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
              <p className="mt-3 max-w-sm text-sm text-muted">
                Everything you need to know about the product and billing.
              </p>
              <div
                aria-hidden
                className="mt-10 hidden select-none text-[220px] font-extrabold leading-none text-accent/20 sm:block"
              >
                ?
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={faq.q} className="overflow-hidden rounded-2xl bg-surface">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-medium">{faq.q}</span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-accent">
                        {isOpen ? <IconPlus className="h-3.5 w-3.5 rotate-45" /> : <IconPlus className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-4 text-sm text-muted">{faq.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------- Blog ---------------- */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Our Latest Blog &amp; Article</h2>
              <p className="mt-3 text-sm text-muted">
                We listen to your needs and guide you through every step, from initial search to final
                paperwork.
              </p>
            </div>
            <button className="hidden shrink-0 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a] sm:inline-block">
              View More
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {blogPosts.map((post) => (
              <div key={post.title}>
                <div className="relative h-56 overflow-hidden rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1a1a1a]">
                    <IconArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-4 font-bold">{post.title}</h3>
                <p className="mt-2 text-sm text-muted">{post.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Newsletter ---------------- */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-3xl bg-surface px-6 py-16 text-center sm:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">Join Our Newsletter</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted">
              Join our newsletter for expert insights, market updates, and property opportunities you
              won&apos;t want to miss.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="w-full rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition-colors hover:border-gray-400 sm:w-auto">
                Learn more
              </button>
              <button className="w-full rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a] sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer id="contact" className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#" className="flex items-center gap-2 text-lg font-bold text-white">
                <IconLeaf className="h-6 w-6 text-accent" />
                Estate
              </a>
              <p className="mt-4 max-w-xs text-sm text-white/60">
                Discover prestigious homes of luxury, comfort, and exclusivity in every detail.
              </p>
            </div>

            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold">{col.title}</h4>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-white/60">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="transition-colors hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-semibold">Are You Finding home?</h4>
              <form className="mt-4 flex overflow-hidden rounded-full bg-white/10">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-white/50"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex items-center justify-center bg-white/20 px-4 text-white"
                >
                  <IconArrowUpRight className="h-4 w-4" />
                </button>
              </form>
              <div className="mt-5 flex gap-3">
                {(["x", "facebook", "instagram", "linkedin"] as const).map((name) => (
                  <a
                    key={name}
                    href="#"
                    aria-label={name}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                  >
                    <IconSocial name={name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2024 Estate</p>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <span>·</span>
              <a href="#" className="hover:text-white">
                County Stamp
              </a>
              <span>·</span>
              <a href="#" className="hover:text-white">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
