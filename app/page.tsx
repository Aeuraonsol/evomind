import ClientWrapper from './components/ClientWrapper'

export default function Home() {
  const cards = [
    { 
      title: 'X', 
      description: 'Follow our latest updates and join the conversation about AI personality evolution',
      href: 'https://twitter.com/your-twitter-handle'
    },
    { 
      title: 'EvoMind Token', 
      description: 'Discover the future of AI evolution through our innovative token ecosystem',
      href: 'https://pump.fun'
    },
    { 
      title: 'Document', 
      description: 'Learn about the EvoMind ecosystem and how AI personalities evolve and interact',
      href: 'https://doc.evomind.fun'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-blue-500/30 rounded-full blur-[100px]"></div>
        
        <div className="relative space-y-2 text-center mb-24">
          <p className="text-blue-300/80 text-sm font-mono tracking-wider animate-fade-in">
            WELCOME TO THE FUTURE OF AI
          </p>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-purple-200 to-blue-100 animate-gradient-x py-4">
            AI Personality Evolution
          </h1>
          <p className="text-blue-100/80 text-xl max-w-2xl mx-auto">
            Shaping the Future of Artificial Consciousness
          </p>
        </div>

        <div className="relative flex items-center justify-center flex-wrap max-w-[1200px] gap-6 mb-20">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group backdrop-blur-sm bg-white/10 p-6 text-left rounded-xl 
                       transition-all duration-300 hover:bg-white/20 
                       border border-white/10 hover:border-white/30 
                       hover:shadow-[0_0_30px_-5px_rgba(66,153,225,0.3)]
                       hover:scale-105 hover:-translate-y-1
                       w-[350px] h-[180px] cursor-pointer
                       relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent 
                           via-white/10 to-transparent translate-x-[-100%] 
                           group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <h2 className="mb-4 text-xl font-semibold text-blue-100 group-hover:text-blue-200 
                         min-h-[32px] flex items-center">
                {card.title}
                <span className="inline-block transition-transform group-hover:translate-x-1 
                             opacity-70 group-hover:opacity-100 ml-2">&rarr;</span>
              </h2>
              
              <p className="text-blue-100/70 group-hover:text-blue-100 leading-relaxed line-clamp-3 relative">
                {card.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r 
                           from-blue-400 via-purple-400 to-blue-400 
                           transition-all duration-300 group-hover:w-full"></div>
            </a>
          ))}
        </div>

        <ClientWrapper />
      </main>
    </div>
  )
}
