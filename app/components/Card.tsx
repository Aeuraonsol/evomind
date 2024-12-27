interface CardProps {
  title: string;
  description: string;
  href?: string;
}

export default function Card({ title, description, href }: CardProps) {
  const CardWrapper = href ? 'a' : 'div'
  
  return (
    <CardWrapper 
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="group backdrop-blur-sm bg-white/10 p-6 text-left rounded-xl 
                 transition-all duration-300 hover:bg-white/20 
                 border border-white/10 hover:border-white/30 
                 hover:shadow-[0_0_30px_-5px_rgba(66,153,225,0.3)]
                 hover:scale-105 hover:-translate-y-1
                 w-[350px] h-[180px] cursor-pointer
                 relative overflow-hidden
                 animate-fade-in"
    >
      {/* 悬浮光效 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300">
        <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent 
                      via-white/10 to-transparent rotate-45 translate-x-[-100%] 
                      group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>

      {/* 背景动态渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* 内容区域 */}
      <div className="relative z-10">
        <h2 className="mb-4 text-xl font-semibold text-blue-100 group-hover:text-blue-200 
                     min-h-[32px] flex items-center">
          {title} 
          <span className="inline-block transition-transform group-hover:translate-x-1 
                         opacity-70 group-hover:opacity-100 ml-2">&rarr;</span>
        </h2>
        <p className="text-blue-100/70 group-hover:text-blue-100 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* 底部渐变条 */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r 
                    from-blue-400 via-purple-400 to-blue-400 
                    transition-all duration-300 group-hover:w-full"></div>

      {/* 边角装饰 */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 
                    border-blue-400/0 group-hover:border-blue-400/50 
                    transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 
                    border-blue-400/0 group-hover:border-blue-400/50 
                    transition-all duration-300"></div>
    </CardWrapper>
  )
} 