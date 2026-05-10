export default function TravelEaseLandingPage() {
  const features = [
    {
      title: "Personalized itineraries",
      desc: "Generate day-by-day travel plans based on your destination, travel style, budget, and trip duration.",
      icon: "🗺️",
    },
    {
      title: "Budget-aware planning",
      desc: "Estimate costs and get smarter travel suggestions that fit your spending range from the start.",
      icon: "💸",
    },
    {
      title: "Smart recommendations",
      desc: "Discover destinations, routes, and activity ideas without spending hours researching across tabs.",
      icon: "✨",
    },
  ];

  const steps = [
    {
      title: "Tell us your trip details",
      desc: "Enter your destination, travel dates, budget, and preferences.",
    },
    {
      title: "Let AI build your plan",
      desc: "TravelEase AI creates a practical itinerary with tailored recommendations.",
    },
    {
      title: "Refine and travel smarter",
      desc: "Adjust your trip plan, compare ideas, and move forward with confidence.",
    },
  ];

  const faqs = [
    {
      q: "What is TravelEase AI?",
      a: "TravelEase AI is an AI-powered travel planning platform that helps users discover destinations, create personalized itineraries, and estimate travel budgets faster and more intelligently.",
    },
    {
      q: "Who is it for?",
      a: "It is ideal for students, young professionals, budget-conscious travelers, couples, and families who want a simpler way to plan trips.",
    },
    {
      q: "Does it book hotels or flights?",
      a: "This product is positioned as a smart travel planning assistant focused on itinerary generation, recommendations, and budget guidance.",
    },
    {
      q: "Why use AI for trip planning?",
      a: "AI reduces research overload, saves time, and helps users get more relevant suggestions based on their needs instead of manually comparing endless options.",
    },
  ];

  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival + city discovery",
      detail: "Check in, explore the main market, and enjoy an evening local food tour.",
    },
    {
      day: "Day 2",
      title: "Scenic highlights",
      detail: "Visit the top viewpoint, take a guided sightseeing route, and plan a flexible dinner stop.",
    },
    {
      day: "Day 3",
      title: "Culture + relaxation",
      detail: "Mix cultural attractions with lighter activities to stay within budget and pace.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/full-logo.png"
              alt="TravelEase AI full logo"
              className="h-20 w-auto md:h-24 lg:h-28"
            />
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-900">Features</a>
            <a href="#how-it-works" className="transition hover:text-slate-900">How it works</a>
            <a href="#demo" className="transition hover:text-slate-900">Demo</a>
            <a href="#faq" className="transition hover:text-slate-900">FAQ</a>
          </nav>

          <a
            href="#cta"
            className="rounded-2xl bg-[#F28C28] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
          >
            Try TravelEase AI
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/8 via-white to-[#F28C28]/10" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center gap-3 rounded-full border border-[#0F4C81]/15 bg-[#0F4C81]/5 px-4 py-2 text-sm font-medium text-[#0F4C81]">
                <img
                  src="/logo.png"
                  alt="TravelEase AI icon logo"
                  className="h-7 w-7"
                />
                <span>AI-powered travel planning platform</span>
              </div>
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                AI travel planning that feels easy, smart, and stress-free.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Build personalized itineraries, discover destinations, and plan within budget in seconds with TravelEase AI.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#cta"
                  className="rounded-2xl bg-[#0F4C81] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
                >
                  Start planning
                </a>
                <a
                  href="#demo"
                  className="rounded-2xl border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                <div>✓ Personalized itinerary generation</div>
                <div>✓ Budget-aware recommendations</div>
                <div>✓ Cleaner travel decisions</div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60">
                <div className="rounded-[1.5rem] bg-slate-50 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Trip Planner</div>
                      <div className="text-xs text-slate-500">Smart plan generated in seconds</div>
                    </div>
                    <div className="rounded-full bg-[#F28C28]/15 px-3 py-1 text-xs font-semibold text-[#C86B12]">
                      AI Ready
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="text-xs text-slate-500">Destination</div>
                      <div className="mt-1 font-semibold">Hunza Valley</div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="text-xs text-slate-500">Budget</div>
                      <div className="mt-1 font-semibold">PKR 75,000</div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="text-xs text-slate-500">Duration</div>
                      <div className="mt-1 font-semibold">3 Days</div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="text-xs text-slate-500">Travel Style</div>
                      <div className="mt-1 font-semibold">Nature + Budget</div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-3xl bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="font-semibold text-slate-900">Generated itinerary</div>
                      <div className="text-xs text-[#0F4C81]">Optimized route</div>
                    </div>
                    <div className="space-y-3">
                      {itinerary.map((item) => (
                        <div key={item.day} className="rounded-2xl border border-slate-100 p-3">
                          <div className="text-xs font-semibold uppercase tracking-wide text-[#F28C28]">{item.day}</div>
                          <div className="mt-1 font-semibold text-slate-900">{item.title}</div>
                          <div className="mt-1 text-sm text-slate-600">{item.detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F28C28]">Core features</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Designed to remove planning stress without removing the excitement of travel.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="bg-slate-50 py-18">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F4C81]">How it works</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                A simple three-step flow built for convenience and clarity.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step, idx) => (
                <div key={step.title} className="rounded-[2rem] bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F4C81] text-lg font-bold text-white">
                    {idx + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F28C28]">Product demo</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                A realistic landing experience that shows the product value clearly.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                TravelEase AI helps users move from confusion to clarity by turning a few trip preferences into a structured travel plan with better recommendations and less manual research.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-900">For students and young professionals</div>
                  <div className="mt-1 text-sm text-slate-600">Fast, affordable, and convenient planning for short getaways and vacations.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-900">For couples and families</div>
                  <div className="mt-1 text-sm text-slate-600">More structured itinerary support and easier budget planning before travel decisions are made.</div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">TravelEase AI dashboard preview</div>
                  <div className="text-xs text-slate-500">Keyword-aligned, conversion-focused landing section</div>
                </div>
                <div className="rounded-full bg-[#0F4C81]/10 px-3 py-1 text-xs font-semibold text-[#0F4C81]">
                  SEO-ready
                </div>
              </div>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs text-slate-500">Suggested destination</div>
                  <div className="mt-1 text-lg font-semibold">Skardu Explorer</div>
                  <div className="mt-2 text-sm text-slate-600">Nature-focused trip plan with optimized daily structure and budget tips.</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-500">Estimated spend</div>
                    <div className="mt-1 font-semibold">Balanced budget range</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-500">Trip fit</div>
                    <div className="mt-1 font-semibold">Adventure + ease</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-[#F28C28]/10 p-4 text-sm leading-7 text-slate-700">
                  TravelEase AI is positioned as a planning assistant, not a booking engine. This keeps the product promise precise, credible, and consistent across branding, SEO, and paid ads.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-18 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <div className="text-3xl font-bold">Fast</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">Reduce planning time with AI-generated recommendations and structured itineraries.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <div className="text-3xl font-bold">Clear</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">Move from scattered travel ideas to a practical plan with fewer decisions and less friction.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <div className="text-3xl font-bold">Trustworthy</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">A calm, modern interface aligned with the brand promise of reliable smart travel guidance.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-18 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F4C81]">FAQ</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Frequently asked Questions.
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{item.q}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-to-r from-[#0F4C81] to-[#1D679D] px-8 py-12 text-white shadow-2xl shadow-slate-300/40 md:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Ready to plan smarter?</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  TravelEase AI turns travel planning into a faster, simpler digital experience.
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-100/90">
                  Built around clarity, trust, convenience, and smarter decisions — all while staying visually aligned with the TravelEase AI brand identity.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white p-5 text-slate-900 shadow-lg">
                <div className="text-lg font-semibold">Get early access</div>
                <div className="mt-1 text-sm text-slate-500">Mock lead capture form for campaign flow demonstration</div>
                <div className="mt-5 space-y-3">
                  <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Full name" />
                  <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Email address" />
                  <button className="w-full rounded-2xl bg-[#F28C28] px-4 py-3 font-semibold text-white transition hover:scale-[1.01]">
                    Join waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="TravelEase AI icon"
              className="h-10 w-10"
            />
            <div>
              <span className="font-semibold text-slate-800">TravelEase AI</span> · AI-powered travel planning platform
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#features" className="hover:text-slate-800">Features</a>
            <a href="#how-it-works" className="hover:text-slate-800">How it works</a>
            <a href="#faq" className="hover:text-slate-800">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
