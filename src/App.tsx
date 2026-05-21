import './App.css'

const impactStats = [
  { value: '1,200+', label: 'local dogs supported every year' },
  { value: '48', label: 'neighborhood volunteers on call' },
  { value: '12', label: 'monthly meetups, classes, and adoption events' },
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

const membershipPerks = [
  'Unlimited RSVP access to community walks and social meetups',
  'Early registration for training intensives and behavior workshops',
  'Volunteer matching for fostering, transport, and shelter support',
  'Member discounts from trusted groomers, trainers, and pet retailers',
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
          <a href="#programs">Programs</a>
          <a href="#events">Events</a>
          <a href="#membership">Membership</a>
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
                </li>
              ))}
            </ul>
          </aside>
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

        <section className="section split-section" id="membership">
          <div>
            <p className="eyebrow">Membership</p>
            <h2>Stay close to the work and connected to the pack.</h2>
            <p className="section-copy">
              Membership keeps the calendar full, supports rescue response, and unlocks
              extra perks for active community members.
            </p>
            <a className="button" href="mailto:hello@k9community.org?subject=Join%20K9%20Community">
              Become a member
            </a>
          </div>

          <ul className="perk-list">
            {membershipPerks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
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
