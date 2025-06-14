
export default function ScrollCue() {
  return (
    <div className="absolute left-1/2 bottom-6 md:bottom-8 flex flex-col items-center animate-bounce"
      style={{ transform: 'translateX(-50%)' }}
    >
      <span className="w-8 h-8 rounded-full bg-graybg flex items-center justify-center shadow-inner">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
          <path d="M12 5v14M12 19l-7-7m7 7l7-7" stroke="#14213D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="text-xs text-muted mt-1">Scroll</span>
    </div>
  )
}
