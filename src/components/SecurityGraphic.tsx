export default function SecurityGraphic() {
  return (
    <div className="p-xl bg-surface-container-lowest border border-outline-variant rounded-xl relative overflow-hidden">
      <div className="h-64 flex items-center justify-center">
        <div className="relative w-48 h-48 border-4 border-primary/20 rounded-full flex items-center justify-center animate-[pulse_4s_infinite]">
          <div className="w-32 h-32 border-4 border-primary/40 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lock
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-md text-center">
        <h4 className="mono-label font-bold mb-xs">Active Perimeter Monitoring</h4>
        <p className="text-body-sm text-on-surface-variant">Current threat level: Minimal (0.003% anomaly rate)</p>
      </div>
    </div>
  );
}
