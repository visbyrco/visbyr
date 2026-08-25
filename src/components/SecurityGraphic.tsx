export default function SecurityGraphic() {
  return (
    <div className="glass-mid rounded-xl p-6 relative overflow-hidden">
      <div className="h-64 flex items-center justify-center">
        <div className="relative w-48 h-48 border-4 border-cyber-cyan/20 dark:border-cyber-cyan/20 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-cyber-cyan/40 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-primary dark:bg-cyber-cyan rounded-full flex items-center justify-center shadow-bloom-soft">
              <span className="material-symbols-outlined text-on-primary dark:text-obsidian-black text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                lock
              </span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border border-cyber-cyan/10 animate-pulse"></div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h4 className="font-label text-[12px] font-semibold tracking-[0.02em] uppercase text-on-surface mb-1">Active Perimeter Monitoring</h4>
        <p className="font-body text-body-sm text-on-surface-variant">Current threat level: Minimal (0.003% anomaly rate)</p>
      </div>
    </div>
  );
}
