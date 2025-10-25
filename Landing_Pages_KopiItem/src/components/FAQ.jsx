import React from 'react'

const faqs = [
  { q: 'Apakah tersedia layanan pesan antar?', a: 'Ya, kami bekerja sama dengan layanan kurir lokal. Cek aplikasi favorit Anda.' },
  { q: 'Apakah ada opsi non-dairy?', a: 'Tersedia susu almond, oat, dan kedelai.' },
  { q: 'Jam operasional?', a: 'Setiap hari 08.00 - 22.00 WIB.' },
]

export default function FAQ() {
  const [open, setOpen] = React.useState(0)
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Pertanyaan Umum</h2>
          <div className="mt-8 divide-y divide-brand-100 border border-brand-100 rounded-xl">
            {faqs.map((f, i) => (
              <div key={f.q} className="p-5">
                <button className="w-full flex items-center justify-between text-left" onClick={()=> setOpen(open===i? -1 : i)}>
                  <span className="font-medium">{f.q}</span>
                  <span className={`transition-transform ${open===i? 'rotate-180':''}`}>⌄</span>
                </button>
                {open===i && (
                  <div className="mt-2 text-brand-700">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
