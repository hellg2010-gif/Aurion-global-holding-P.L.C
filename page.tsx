import Link from "next/link";
import { businesses, valueChain } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b14] via-[#0c1220] to-[#070b14]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.12)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070b14] to-transparent" />
        </div>

        <div className="relative container-wide py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 text-[#e8d48b] text-xs tracking-wider uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] animate-pulse" />
              AURION Global Holdings PLC
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] mb-6">
              Building Integrated
              <br />
              <span className="text-gold-gradient">Value Chains</span>
              <br />
              from Africa to the World
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              One holding company. Seven strategic divisions. A single ecosystem that
              transforms African resources into globally competitive products, moves them
              efficiently, and connects them to international markets.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/ecosystem" className="btn-gold px-8 py-3.5 rounded-full text-sm md:text-base">
                Explore the Ecosystem
              </Link>
              <Link
                href="/businesses"
                className="btn-outline-gold px-8 py-3.5 rounded-full text-sm md:text-base"
              >
                Our Businesses
              </Link>
              <Link
                href="/investors"
                className="px-8 py-3.5 rounded-full text-sm md:text-base text-white/70 hover:text-white transition-colors"
              >
                For Investors →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── VALUE CHAIN STRIP ───── */}
      <section className="border-y border-white/5 bg-[#0a0f1a]">
        <div className="container-wide py-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-4">
            {valueChain.map((stage, i) => (
              <div key={stage.stage} className="flex items-center gap-4 flex-1">
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.2em] text-[#c9a227] uppercase mb-1">
                    0{i + 1}
                  </div>
                  <div className="text-sm font-medium text-white mb-1">{stage.stage}</div>
                  <div className="text-xs text-white/40 leading-snug">{stage.description}</div>
                </div>
                {i < valueChain.length - 1 && (
                  <div className="hidden lg:block text-[#c9a227]/40 text-xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── BUSINESSES GRID ───── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs tracking-[0.2em] text-[#c9a227] uppercase mb-3">
                Our Divisions
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Seven businesses.
                <br />
                <span className="text-white/50">One integrated platform.</span>
              </h2>
            </div>
            <Link
              href="/businesses"
              className="text-sm text-[#c9a227] hover:text-[#e8d48b] transition-colors flex items-center gap-1"
            >
              View all divisions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {businesses.map((b) => (
              <Link
                key={b.id}
                href={b.href}
                className="group relative rounded-2xl border border-white/8 bg-[#111827]/60 overflow-hidden card-hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative p-6 md:p-7">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#c9a227]">
                    <BusinessIcon name={b.icon} />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#e8d48b] transition-colors">
                    {b.short}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-5 line-clamp-2">
                    {b.description}
                  </p>
                  <div className="text-xs text-[#c9a227] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore division
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ECOSYSTEM TEASER ───── */}
      <section className="section-padding bg-[#0a0f1a] border-y border-white/5">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-xs tracking-[0.2em] text-[#c9a227] uppercase mb-3">
                The AURION Ecosystem
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                Resources become products.
                <br />
                Products become markets.
                <br />
                <span className="text-white/50">Markets fuel growth.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-8 max-w-lg">
                Mining and agriculture supply materials. Green energy powers production.
                Jewelry and processing create value. Logistics move goods. E-commerce
                reaches buyers worldwide. Revenue returns to expand the entire system.
              </p>
              <Link href="/ecosystem" className="btn-gold inline-flex px-7 py-3 rounded-full text-sm">
                See the full ecosystem
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 md:p-8 space-y-4">
                {[
                  { from: "Mining & Agriculture", to: "Jewelry & Processing", label: "Materials → Value" },
                  { from: "Green Energy", to: "All Operations", label: "Power → Production" },
                  { from: "Manufacturing", to: "Logistics", label: "Products → Movement" },
                  { from: "Logistics", to: "Global Markets", label: "Delivery → Demand" },
                  { from: "Markets & Revenue", to: "Reinvestment", label: "Growth → Expansion" },
                ].map((flow, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="flex-1 px-3 py-2.5 rounded-lg bg-white/5 border border-white/8 text-white/80">
                      {flow.from}
                    </div>
                    <div className="text-[#c9a227] text-xs whitespace-nowrap hidden sm:block">
                      {flow.label}
                    </div>
                    <div className="text-[#c9a227]">→</div>
                    <div className="flex-1 px-3 py-2.5 rounded-lg bg-white/5 border border-white/8 text-white/80">
                      {flow.to}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── GLOBAL MARKETPLACE CTA ───── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-3xl overflow-hidden border border-[#c9a227]/20 bg-gradient-to-br from-[#111827] to-[#0c1220]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.15),transparent_50%)]" />
            <div className="relative px-8 py-14 md:px-16 md:py-20 text-center">
              <div className="text-xs tracking-[0.2em] text-[#c9a227] uppercase mb-4">
                AURION Global E-Commerce
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5 max-w-3xl mx-auto">
                One digital marketplace.
                <br />
                Global reach.
              </h2>
              <p className="text-white/55 max-w-xl mx-auto mb-10 leading-relaxed">
                Shop authentic Ethiopian and African products, source wholesale quantities,
                or partner as a verified supplier. B2C, B2B and B2B2C under one platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/businesses/global-commerce"
                  className="btn-gold px-8 py-3.5 rounded-full text-sm"
                >
                  Enter Marketplace
                </Link>
                <Link
                  href="/businesses/ecommerce-export"
                  className="btn-outline-gold px-8 py-3.5 rounded-full text-sm"
                >
                  Export With AURION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── INVESTORS / PARTNERS STRIP ───── */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-5">
            <Link
              href="/investors"
              className="group rounded-2xl border border-white/8 bg-[#111827]/50 p-7 card-hover"
            >
              <div className="text-xs tracking-wider text-[#c9a227] uppercase mb-3">Investors</div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-[#e8d48b] transition-colors">
                Investment Opportunities
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Explore projects, financial information, ESG performance and governance.
              </p>
            </Link>
            <Link
              href="/sustainability"
              className="group rounded-2xl border border-white/8 bg-[#111827]/50 p-7 card-hover"
            >
              <div className="text-xs tracking-wider text-[#c9a227] uppercase mb-3">ESG</div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-[#e8d48b] transition-colors">
                Sustainability
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Environmental stewardship, social impact and responsible governance across all divisions.
              </p>
            </Link>
            <Link
              href="/contact"
              className="group rounded-2xl border border-white/8 bg-[#111827]/50 p-7 card-hover"
            >
              <div className="text-xs tracking-wider text-[#c9a227] uppercase mb-3">Partners</div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-[#e8d48b] transition-colors">
                Global Trade Center
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Buyers, suppliers, investors, distributors and institutions — route your inquiry.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function BusinessIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    globe: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    gem: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    leaf: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    mountain: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12l5-7 4 5 2-3 5 7H5z" />
      </svg>
    ),
    sun: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    plane: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    store: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  };
  return icons[name] || icons.globe;
}
