import { useState } from 'react';

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Visbyr Chat');
  const [message, setMessage] = useState('');

  const labelCls = (key: string) =>
    `font-mono text-[11px] tracking-[0.08em] uppercase transition-colors ${focused === key ? 'text-accent' : 'text-faint'}`;

  const inputBase =
    'w-full rounded-[3px] border border-hairline bg-card px-3.5 py-3 text-[15px] text-ink placeholder:text-faint/70 input-quiet transition-colors dark:bg-wash';

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        const mailSubject = encodeURIComponent(`Visbyr contact: ${subject}`);
        const mailBody = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:hello@visbyr.com?subject=${mailSubject}&body=${mailBody}`;
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className={labelCls('name')} htmlFor="cf-name">Name</label>
          <input id="cf-name" className={inputBase} placeholder="Your name" type="text" value={name} onChange={(e) => setName(e.target.value)} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls('email')} htmlFor="cf-email">Email</label>
          <input id="cf-email" className={inputBase} placeholder="you@example.com" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelCls('subject')} htmlFor="cf-subject">What is it about?</label>
        <select id="cf-subject" className={inputBase} value={subject} onChange={(e) => setSubject(e.target.value)} onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}>
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
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
        />
      </div>
      <div>
        <button className="inline-flex items-center bg-accent text-on-accent px-6 py-3 text-[13px] font-medium tracking-[0.01em] rounded-[3px] hover:bg-accent-strong transition-colors">
          Open email app
        </button>
        <p className="mt-3 font-mono text-[11px] tracking-[0.02em] text-faint">Opens your email addressed to hello@visbyr.com. Nothing is sent from this page itself.</p>
      </div>
    </form>
  );
}
