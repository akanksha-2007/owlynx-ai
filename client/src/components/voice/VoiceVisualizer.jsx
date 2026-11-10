const BARS = Array.from({ length: 32 }, (_, i) => i)

// Decorative animation: it shows that recording is active.
// It does not display the real audio level.
export default function VoiceVisualizer({ active }) {
  return (
    <div aria-hidden="true" className="flex h-20 items-center justify-center gap-1">
      {BARS.map((i) => (
        <span
          key={i}
          className={`h-full w-1 rounded-full bg-linear-to-t from-indigo-500 to-violet-400 ${
            active ? 'voice-bar' : 'opacity-30'
          }`}
          style={
            active
              ? {
                  animationDelay: `${-((i * 137) % 1000)}ms`,
                  animationDuration: `${900 + ((i * 53) % 600)}ms`,
                }
              : { transform: 'scaleY(0.15)' }
          }
        />
      ))}
    </div>
  )
}