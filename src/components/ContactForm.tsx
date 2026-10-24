import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const labelCls = (key: string) =>
    `font-mono text-[11px] tracking-[0.08em] uppercase transition-colors ${focused === key ? 'text-accent' : 'text-faint'}`;

  const inputBase =
    'w-full rounded-[3px] border border-hairline bg-card px-3.5 py-3 text-[15px] text-ink placeholder:text-faint/70 input-quiet transition-colors dark:bg-wash';

  if (sent) {
    return (
      <div className="border border-hairline bg-card p-8">
        <p className="text-[17px] font-medium mb-2">Message sent.</p>
        <p className="text-[15px] text-muted leading-relaxed">One of us reads everything and replies. Usually fast.</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className={labelCls('name')} htmlFor="cf-name">Name</label>
          <input id="cf-name" className={inputBase} placeholder="Your name" type="text" onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls('email')} htmlFor="cf-email">Email</label>
          <input id="cf-email" className={inputBase} placeholder="you@example.com" type="email" required onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelCls('subject')} htmlFor="cf-subject">What is it about?</label>
        <select id="cf-subject" className={inputBase} onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}>
          <option>Visbyr Chat</option>
          <option>A product idea</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelCls('message')} htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          className={inputBase}
          placeholder="What is on your mind?"
          rows={6}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
        />
      </div>
      <button className="inline-flex items-center bg-accent text-on-accent px-6 py-3 text-[13px] font-medium tracking-[0.01em] rounded-[3px] hover:bg-accent-strong transition-colors">
        Send message
      </button>
    </form>
  );
}
