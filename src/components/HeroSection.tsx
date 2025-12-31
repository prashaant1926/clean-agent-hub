export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Geometric illustrations - positioned absolutely */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2">
          {/* Blue/cyan cubes - top center-right */}
          <svg
            className="absolute right-32 top-8 h-40 w-40"
            viewBox="0 0 100 100"
            fill="none"
          >
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1" />
            <polygon points="50,10 90,30 50,50 10,30" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="1" />
            <line x1="50" y1="50" x2="50" y2="90" stroke="#0ea5e9" strokeWidth="1" />
          </svg>
          
          {/* Orange hexagon pattern - far right */}
          <svg
            className="absolute -right-8 top-4 h-48 w-48"
            viewBox="0 0 100 100"
            fill="none"
          >
            <polygon points="50,5 90,25 90,65 50,85 10,65 10,25" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
            <circle cx="50" cy="45" r="20" fill="#fbbf24" />
          </svg>

          {/* Grid lines */}
          <svg
            className="absolute right-0 top-0 h-full w-full opacity-20"
            viewBox="0 0 400 200"
            fill="none"
          >
            {[...Array(8)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 25 + 10}
                x2="400"
                y2={i * 25 + 10}
                stroke="#666"
                strokeWidth="0.5"
              />
            ))}
            {[...Array(16)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 25 + 10}
                y1="0"
                x2={i * 25 + 10}
                y2="200"
                stroke="#666"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
