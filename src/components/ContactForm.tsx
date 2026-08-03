import { useState } from 'react';

export default function ContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <form className="space-y-xl" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="flex flex-col gap-sm">
          <label
            className={`mono-label transition-colors ${
              focusedField === 'identity' ? 'text-primary' : 'text-on-surface-variant'
            }`}
          >
            Full Identity
          </label>
          <input
            className="border-fine rounded-none p-md bg-surface input-focus-ring font-sans"
            placeholder="Erik Andersson"
            type="text"
            onFocus={() => setFocusedField('identity')}
            onBlur={() => setFocusedField(null)}
          />
        </div>
        <div className="flex flex-col gap-sm">
          <label
            className={`mono-label transition-colors ${
              focusedField === 'email' ? 'text-primary' : 'text-on-surface-variant'
            }`}
          >
            Corporate Email
          </label>
          <input
            className="border-fine rounded-none p-md bg-surface input-focus-ring font-sans"
            placeholder="erik@enterprise.se"
            type="email"
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-sm">
        <label
          className={`mono-label transition-colors ${
            focusedField === 'subject' ? 'text-primary' : 'text-on-surface-variant'
          }`}
        >
          Subject of Inquiry
        </label>
        <select
          className="border-fine rounded-none p-md bg-surface input-focus-ring font-sans"
          onFocus={() => setFocusedField('subject')}
          onBlur={() => setFocusedField(null)}
        >
          <option>System Implementation</option>
          <option>Strategic Partnership</option>
          <option>Insight Access</option>
          <option>Technical Support</option>
        </select>
      </div>
      <div className="flex flex-col gap-sm">
        <label
          className={`mono-label transition-colors ${
            focusedField === 'brief' ? 'text-primary' : 'text-on-surface-variant'
          }`}
        >
          Detailed Brief
        </label>
        <textarea
          className="border-fine rounded-none p-md bg-surface input-focus-ring font-sans"
          placeholder="Describe your operational requirements..."
          rows={6}
          onFocus={() => setFocusedField('brief')}
          onBlur={() => setFocusedField(null)}
        />
      </div>
      <button className="bg-primary text-white px-xxl py-4 mono-label font-bold hover:brightness-110 transition-all w-full md:w-auto">
        Transmit Inquiry
      </button>
    </form>
  );
}
