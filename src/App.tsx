import './App.css'

const impactStats = [
  { value: '89.7M', label: 'dogs living in U.S. homes', source: 'APPA 2024' },
  { value: '$152B+', label: 'annual U.S. pet spending', source: 'APPA 2024' },
  { value: '5.8M', label: 'dogs and cats entering shelters yearly', source: 'ASPCA 2024' },
]

const programs = [
  {
    title: 'Positive training',
    description:
      'Skill-building classes for puppies, rescues, and reactive dogs led by force-free trainers.',
  },
  {
    title: 'Rescue and foster support',
    description:
      'Hands-on help for adopters, fosters, and shelters with supplies, transport, and match-making events.',
  },
  {
    title: 'Neighborhood community',
    description:
      'Weekly pack walks, breed meetups, and volunteer days that make it easier to find your people.',
  },
]

const opportunitySignals = [
  {
    title: 'A large, emotionally committed audience',
    description:
      'Roughly 44–45.5% of U.S. households own a dog, and pet parents increasingly treat dogs as family members.',
  },
  {
    title: 'Service spending keeps climbing',
    description:
      'Training, wellness, and recurring care remain strong even when household budgets tighten, making membership and events viable.',
  },
  {
    title: 'Shelters need community infrastructure',
    description:
      'Crowded shelters, long stays for large dogs, and foster shortages create demand for volunteer coordination and partner-led programming.',
  },
]

const upcomingEvents = [
  {
    title: 'Sunrise Pack Walk',
    details: 'Saturday · Riverside Trail · 8:00 AM',
  },
  {
    title: 'Rescue Readiness Workshop',
    details: 'Wednesday · Community Loft · 6:30 PM',
  },
  {
    title: 'Adoption Day Social',
    details: 'Next month · K9 Community Hub · 11:00 AM',
  },
]

const testimonials = [
  {
    quote:
      'We adopted our dog through a K9 Community event and found training support the very same week.',
    author: 'Alyssa & Moose',
  },
  {
    quote:
      'The volunteer network helped us coordinate transport and foster coverage in less than a day.',
    author: 'Jordan, rescue coordinator',
  },
]

const launchTracks = [
  {
    title: 'Community membership',
    items: [
      'Recurring memberships that fund rescue support, events, and neighborhood programming',
      'Private member updates, early registration, and local partner discounts',
    ],
  },
  {
    title: 'Training and event revenue',
    items: [
      'Workshops, socialization series, and pop-up classes led by vetted trainers',
      'Sponsored adoption days, wellness weekends, and dog-friendly city activations',
    ],
  },
  {
    title: 'Partnership network',
    items: [
      'Shelter, rescue, veterinary, trainer, and dog-friendly business collaborations',
      'Lead generation and referral visibility for trusted local partners',
    ],
  },
]

const membershipTiers = [
  {
    name: 'Supporter',
    price: '$12/mo',
    details: [
      'Unlimited RSVP access to community walks and social meetups',
      'Monthly rescue impact update and partner perks',
      'Priority volunteer matching notices',
    ],
  },
  {
    name: 'Organizer',
    price: '$29/mo',
    details: [
      'Everything in Supporter',
      'Early registration for training intensives and workshops',
      'Co-hosting access for local neighborhood meetups',
    ],
  },
  {
    name: 'Partner',
    price: '$99/mo',
    details: [
      'Local business or rescue directory placement',
      'Featured event sponsorship slots',
      'Quarterly campaign planning with the K9 Community team',
    ],
  },
]

const partnerGroups = [
  'Animal shelters and rescue organizations',
  'Force-free trainers and behavior specialists',
  'Veterinary clinics, groomers, and wellness brands',
  'Dog-friendly cafés, breweries, parks, and community venues',
]

const faqs = [
  {
    question: 'Who is K9 Community for?',
    answer:
      'Dog guardians, adopters, rescue teams, foster families, trainers, and neighbors who want to help dogs thrive together.',
  },
  {
    question: 'Do I need a membership to attend?',
    answer:
      'No. Public events and adoption days stay open to everyone, while memberships unlock discounts, early registration, and extra community perks.',
  },
  {
    question: 'How do I volunteer?',
    answer:
      'Use the volunteer email below and we will match you with transport, event, foster, or neighborhood outreach opportunities.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">K9</span>
          <span>
            <strong>K9 Community</strong>
            <small>training, rescue, and neighborhood connection</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#market">Why now</a>
          <a href="#programs">Programs</a>
          <a href="#launch">Launch model</a>
          <a href="#membership">Membership</a>
          <a href="#partners">Partners</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="button button-secondary" href="#membership">
          Join the pack
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Built for dog lovers, rescues, and local partners</p>
            <h1>K9 Community helps every dog feel at home.</h1>
            <p className="hero-text">
              Bring training, rescue support, enrichment, and local connection into one
              welcoming hub for your neighborhood.
            </p>
            <div className="hero-actions">
              <a className="button" href="#events">
                Explore upcoming events
              </a>
              <a className="button button-secondary" href="mailto:hello@k9community.org">
                Contact the community team
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Community impact">
            <p className="panel-label">Community impact</p>
            <ul className="stat-list">
              {impactStats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <small>{stat.source}</small>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="section" id="market">
          <div className="section-heading">
            <p className="eyebrow">Research-backed opportunity</p>
            <h2>The market is ready for a launch-quality dog community platform.</h2>
            <p className="section-copy">
              Dog ownership, service spending, and shelter demand all point toward a stronger
              need for local coordination, trusted programming, and recurring community access.
            </p>
          </div>
          <div className="card-grid">
            {opportunitySignals.map((signal) => (
              <article className="card" key={signal.title}>
                <h3>{signal.title}</h3>
                <p>{signal.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="programs">
          <div className="section-heading">
            <p className="eyebrow">How the community helps</p>
            <h2>Everything needed to support dogs and the people who love them.</h2>
          </div>
          <div className="card-grid">
            {programs.map((program) => (
              <article className="card" key={program.title}>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="events">
          <div>
            <p className="eyebrow">Upcoming events</p>
            <h2>Show up for your dog, your shelter, and your neighbors.</h2>
            <p className="section-copy">
              From early-morning walks to adoption socials, every event is designed to
              strengthen local support around dogs and the humans who care for them.
            </p>
          </div>

          <div className="event-list">
            {upcomingEvents.map((event) => (
              <article className="event-card" key={event.title}>
                <h3>{event.title}</h3>
                <p>{event.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="launch">
          <div className="section-heading">
            <p className="eyebrow">Ship-to-market launch model</p>
            <h2>Launch-ready revenue, operations, and partnerships live in one surface.</h2>
            <p className="section-copy">
              K9 Community is positioned as a local membership brand, event engine, and rescue
              support network rather than a thin brochure site or MVP placeholder.
            </p>
          </div>
          <div className="card-grid">
            {launchTracks.map((track) => (
              <article className="card" key={track.title}>
                <h3>{track.title}</h3>
                <ul className="detail-list">
                  {track.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="membership">
          <div>
            <p className="eyebrow">Membership</p>
            <h2>Membership is designed to fund the mission and grow recurring revenue.</h2>
            <p className="section-copy">
              Each tier turns participation into dependable support for events, rescue response,
              and neighborhood activation while keeping the offer easy to understand.
            </p>
            <a className="button" href="mailto:hello@k9community.org?subject=Join%20K9%20Community">
              Become a member
            </a>
          </div>

          <div className="tier-grid">
            {membershipTiers.map((tier) => (
              <article className="tier-card" key={tier.name}>
                <p className="panel-label">{tier.name}</p>
                <h3>
                  {tier.price}
                </h3>
                <ul className="detail-list">
                  {tier.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="stories-heading">
          <div className="section-heading">
            <p className="eyebrow">Stories from the community</p>
            <h2 id="stories-heading">People keep coming back because the support is real.</h2>
          </div>
          <div className="card-grid">
            {testimonials.map((testimonial) => (
              <blockquote className="card quote-card" key={testimonial.author}>
                <p>“{testimonial.quote}”</p>
                <footer>{testimonial.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section split-section" id="partners">
          <div>
            <p className="eyebrow">Partner ecosystem</p>
            <h2>Built to be useful for shelters, trainers, and dog-friendly businesses.</h2>
            <p className="section-copy">
              The strongest launch path combines recurring memberships with local partnerships
              that want trusted, community-driven visibility and real-world activation.
            </p>
            <a className="button button-secondary" href="mailto:partners@k9community.org">
              Talk about partnerships
            </a>
          </div>

          <div className="partner-panel">
            <ul className="detail-list">
              {partnerGroups.map((group) => (
                <li key={group}>{group}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-heading">
            <p className="eyebrow">Frequently asked questions</p>
            <h2>Answers for members, volunteers, and first-time visitors.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="cta-band">
            <div>
              <p className="eyebrow">Launch next steps</p>
              <h2>Move from interest to membership, volunteering, or partnership today.</h2>
            </div>
            <div className="hero-actions">
              <a className="button" href="mailto:hello@k9community.org?subject=Launch%20K9%20Community">
                Start the launch conversation
              </a>
              <a className="button button-secondary" href="mailto:volunteer@k9community.org">
                Volunteer with the team
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>K9 Community</strong>
          <p>hello@k9community.org · volunteer@k9community.org</p>
        </div>
        <p>Helping dogs and neighbors belong together.</p>
      </footer>
    </div>
  )
}

export default App
