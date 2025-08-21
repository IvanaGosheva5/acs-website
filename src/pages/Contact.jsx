import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [errors, setErrors] = useState({});

  // TODO: сложи твоите EmailJS идентификатори
  const EMAILJS_SERVICE_ID = "your_service_id";
  const EMAILJS_TEMPLATE_ID = "your_template_id";
  const EMAILJS_PUBLIC_KEY = "your_public_key";

  const validate = (formData) => {
    const e = {};
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const message = formData.get("message")?.trim();
    const consent = formData.get("consent") === "on";

    if (!name) e.name = "Моля, въведете име.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) e.email = "Въведете валиден имейл.";
    if (phone && !/^[0-9+\s()-]{6,}$/.test(phone)) e.phone = "Въведете валиден телефон.";
    if (!message || message.length < 10) e.message = "Съобщението трябва да е поне 10 символа.";
    if (!consent) e.consent = "Необходимо е съгласие за обработка.";

    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const formData = new FormData(formRef.current);
    const v = validate(formData);
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setSending(true);
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="pb-16">
      {/* HERO банер */}
      <div
        className="h-[220px] md:h-[280px] bg-cover bg-center flex items-end"
        style={{
          backgroundImage:
            "url('/images/ImagesACS/Aluminieva%20pergola%20s%20osvetlenie/aluminieva-pergola-s-osvetlenie-3.jpg')",
        }}
      >
        <div className="w-full bg-black/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              Контакти
            </h1>
            <p className="text-white/85">Работим в цяла България – изпратете запитване.</p>
          </div>
        </div>
      </div>

      {/* Карта + бързи контакти */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Карта */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow border border-green-900/10" data-aos="fade-right">
            {/* Ако имате точен адрес, заменете q=Blagoevgrad с адреса */}
            <iframe
              title="Карта – ACS ЕООД"
              src="https://www.google.com/maps?q=Blagoevgrad%20Bulgaria&output=embed"
              className="w-full h-[360px] md:h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Бързи контакти */}
          <div className="space-y-4" data-aos="fade-left">
            <div className="bg-white rounded-2xl p-5 shadow border border-green-900/10">
              <h3 className="text-lg font-bold text-green-900 mb-2">Връзка с нас</h3>
              <ul className="text-green-900/90 space-y-1">
                <li>Тел.: <a className="underline hover:text-yellow-600" href="tel:+35973881228">073 88 12 28</a></li>
                <li>GSM: <a className="underline hover:text-yellow-600" href="tel:+359898650041">0898 650 041</a>, <a className="underline hover:text-yellow-600" href="tel:+359899950041">0899 950 041</a></li>
                <li>Имейл: <a className="underline hover:text-yellow-600" href="mailto:a_c_s@abv.bg">a_c_s@abv.bg</a></li>
                <li>Instagram: <a className="underline hover:text-yellow-600" href="https://www.instagram.com/acspltd" target="_blank" rel="noreferrer">@acspltd</a></li>
                <li>Работно време: Пн–Пт 09:00–18:00</li>
              </ul>
            </div>

            <div className="bg-green-900 text-white rounded-2xl p-5 shadow">
              <p className="text-sm uppercase tracking-widest text-yellow-300/90">Обслужваме</p>
              <h4 className="text-xl font-extrabold">Цяла България</h4>
              <p className="text-white/85 mt-2">
                Монтажни екипи, гаранция и сервиз. Индивидуални проекти по заявка.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="tel:+359898650041" className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300">Обади се</a>
                <a href="/partners" className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg hover:bg-white/20">Партньори</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Формуляр за запитване */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow border border-green-900/10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-green-900 mb-2" data-aos="fade-up">
            Изпратете запитване
          </h2>
          <p className="text-green-800/90 mb-6" data-aos="fade-up" data-aos-delay="100">
            Опишете накратко вашия обект (например: пергола с LED, остъкляване на тераса, облицовка HPL/Бонд).
            Ще се свържем за подробности, замерване и оферта.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-green-900 mb-1">Име и фамилия *</label>
              <input name="name" type="text" className="w-full rounded-lg border border-green-900/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                     placeholder="Вашето име" />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-green-900 mb-1">Имейл *</label>
              <input name="email" type="email" className="w-full rounded-lg border border-green-900/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                     placeholder="name@example.com" />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-green-900 mb-1">Телефон</label>
              <input name="phone" type="tel" className="w-full rounded-lg border border-green-900/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                     placeholder="+359 ..." />
              {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-green-900 mb-1">Град/Локация</label>
              <input name="city" type="text" className="w-full rounded-lg border border-green-900/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                     placeholder="напр. Благоевград" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-green-900 mb-1">Съобщение *</label>
              <textarea name="message" rows="5" className="w-full rounded-lg border border-green-900/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Опишете проекта и размери, ако са налични..."></textarea>
              {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
            </div>

            <div className="md:col-span-2 flex items-start gap-2">
              <input id="consent" name="consent" type="checkbox" className="mt-1" />
              <label htmlFor="consent" className="text-sm text-green-900/90">
                Съгласен/на съм данните ми да бъдат обработвани за целите на обратна връзка и оферта.*
              </label>
            </div>
            {errors.consent && <p className="md:col-span-2 text-sm text-red-600 -mt-3">{errors.consent}</p>}

            <div className="md:col-span-2 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={sending}
                className={`bg-yellow-400 text-green-900 px-6 py-2.5 rounded-lg font-semibold shadow hover:bg-yellow-300 disabled:opacity-60`}
              >
                {sending ? "Изпращане..." : "Изпрати запитване"}
              </button>
              <a href="tel:+359898650041" className="bg-white text-green-900 px-6 py-2.5 rounded-lg border border-green-900/20 hover:bg-green-50">
                Обади се сега
              </a>
              <a href="https://wa.me/359898650041" target="_blank" rel="noreferrer"
                 className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700">
                WhatsApp
              </a>
            </div>

            {status === "success" && (
              <div className="md:col-span-2 mt-2 text-green-800 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                Благодарим! Съобщението е изпратено успешно. Ще се свържем с вас.
              </div>
            )}
            {status === "error" && (
              <div className="md:col-span-2 mt-2 text-red-800 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                Възникна грешка при изпращане. Моля, опитайте отново или пишете на <a className="underline" href="mailto:a_c_s@abv.bg">a_c_s@abv.bg</a>.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
