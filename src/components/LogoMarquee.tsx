const clients = [
  { name: 'Alan', logo: '/images/logos/alan.svg' },
  { name: 'Mistral AI', logo: '/images/logos/mistral.svg' },
  { name: 'Bpifrance', logo: '/images/logos/bpifrance.svg' },
  { name: 'Doctolib', logo: '/images/logos/doctolib.svg' },
  { name: 'Qonto', logo: '/images/logos/qonto.svg' },
  { name: 'Schneider Electric', logo: '/images/logos/schneider.svg' },
  { name: 'Danone', logo: '/images/logos/danone.svg' },
  { name: 'LVMH', logo: '/images/logos/lvmh.svg' },
  { name: 'Veolia', logo: '/images/logos/veolia.svg' },
  { name: 'Saint-Gobain', logo: '/images/logos/saintgobain.svg' },
  { name: 'Capgemini', logo: '/images/logos/capgemini.svg' },
]

export default function LogoMarquee() {
  return (
    <section className="py-10 bg-dark-green overflow-hidden">
      <p className="text-center text-white/40 text-xs font-medium uppercase tracking-widest mb-8">
        Ils nous font confiance
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-green to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-green to-transparent z-10" />

        <div className="animate-marquee items-center">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="mx-10 shrink-0 flex items-center justify-center" style={{ height: 40, width: 140 }}>
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full opacity-60 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
