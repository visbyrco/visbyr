import { useState } from 'react';

export default function ContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const labelCls = (key: string) =>
    `font-label text-[12px] font-semibold tracking-[0.02em] uppercase transition-colors ease-spring ${focusedField === key ? 'text-primary' : 'text-on-surface-variant'}`;

  const inputBase =
    'w-full rounded-lg border bg-surface-container-lowest px-4 py-3 font-body text-body-base text-on-surface placeholder:text-on-surface-variant/60 input-focus-ring transition-all ease-spring dark:bg-white/[0.06] dark:border-white/[0.08] dark:text-mist-text';

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className={labelCls('identity')}>Full Identity</label>
          <input className={inputBase} placeholder="Erik Andersson" type="text" onFocus={() => setFocusedField('identity')} onBlur={() => setFocusedField(null)} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls('email')}>Corporate Email</label>
          <input className={inputBase} placeholder="erik@enterprise.se" type="email" onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelCls('subject')}>Subject of Inquiry</label>
        <select className={inputBase} onFocus={() => setFocusedField('subject')} onBlur={() => setFocusedField(null)}>
          <option>System Implementation</option>
          <option>Strategic Partnership</option>
          <option>Insight Access</option>
          <option>Technical Support</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelCls('brief')}>Detailed Brief</label>
        <textarea className={inputBase} placeholder="Describe your operational requirements..." rows={6} onFocus={() => setFocusedField('brief')} onBlur={() => setFocusedField(null)} />
      </div>
      <button className="w-full md:w-auto rounded-lg bg-primary px-8 py-4 font-label text-[12px] font-semibold tracking-[0.02em] uppercase text-on-primary transition-all ease-spring hover:shadow-bloom dark:bg-cyber-cyan dark:text-obsidian-black">
        Transmit Inquiry
      </button>
    </form>
  );
}
