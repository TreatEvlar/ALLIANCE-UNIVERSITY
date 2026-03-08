import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can final-year students apply?",
      a: "Yes. You can apply in your final year but must submit your graduation certificate upon joining.",
    },
    {
      q: "Can students from non-business backgrounds apply for the Online MBA?",
      a: "Yes, students from any academic background are welcome to apply. The program is designed to accommodate diverse educational histories.",
    },
    {
      q: "Is the program supported by recognized accreditation and rankings?",
      a: "Yes, the program holds accreditations from leading bodies and is consistently ranked among top online MBA programs.",
    },
    {
      q: "Do I need to take an entrance exam (like CAT/GMAT)?",
      a: "No, entrance exams are not required. Admissions are based on your academic record and professional experience.",
    },
    {
      q: "Is there a query or help system?",
      a: "Absolutely. We have a dedicated support team and a comprehensive help center to assist you throughout your journey.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12">
          <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0A192F] flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            <span className="text-orange-800 whitespace-nowrap">FAQ</span>
          </h2>
          <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
        </div>

        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-gray-50 shadow-sm overflow-hidden"
            >
              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-8 py-5 text-left focus:outline-none group"
              >
                <span className="text-base md:text-lg text-gray-800 font-medium">
                  {index + 1}. {faq.q}
                </span>
                <span className="shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </span>
              </button>

              
              {openIndex === index && (
                <div className="px-8 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-700 text-base">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}