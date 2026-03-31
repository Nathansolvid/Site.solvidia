const clients = [
  { name: 'Alan', logo: '/images/logos/alan.svg', cls: 'h-16 w-auto' },
  { name: 'Mistral AI', logo: '/images/logos/mistral.svg', cls: 'h-8 w-auto' },
  { name: 'Bpifrance', logo: '/images/logos/bpifrance.svg', cls: 'h-8 w-auto' },
  { name: 'Doctolib', logo: '/images/logos/doctolib.svg', cls: 'h-8 w-auto' },
  { name: 'Qonto', logo: '/images/logos/qonto.svg', cls: 'h-8 w-auto' },
  { name: 'Schneider Electric', logo: '/images/logos/schneider.svg', cls: 'h-8 w-auto' },
  { name: 'Danone', logo: '/images/logos/danone.svg', cls: 'h-8 w-auto' },
  { name: 'LVMH', logo: '/images/logos/lvmh.svg', cls: 'h-8 w-auto' },
  { name: 'Veolia', logo: '/images/logos/veolia.svg', cls: 'h-8 w-auto' },
  { name: 'Saint-Gobain', logo: '/images/logos/saintgobain.svg', cls: 'h-8 w-auto' },
  { name: 'Capgemini', logo: '/images/logos/capgemini.svg', cls: 'h-8 w-auto' },
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
            <img
              key={i}
              src={client.logo}
              alt={client.name}
              className={`${client.cls} mx-12 opacity-60 shrink-0`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
