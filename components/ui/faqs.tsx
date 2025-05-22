import React from "react";

const faqData = [
  {
    section: "General",
    items: [
      {
        q: "What is SkillSphere?",
        a: "SkillSphere is an all-in-one educational platform offering skill-based courses, digital books, home tuition registration, and curated tech products — all designed to empower learners of today for tomorrow’s challenges.",
      },
      {
        q: "Is registration required to use the platform?",
        a: "No, we do not currently require any login or user registration. You can access courses, download books, or explore products freely.",
      },
    ],
  },
  {
    section: "Courses",
    items: [
      {
        q: "What types of courses does SkillSphere offer?",
        a: "We offer short, expert-led courses in digital skills, personal development, and professional training. New course categories are launching soon.",
      },
      {
        q: "Are the courses paid or free?",
        a: "SkillSphere plans to offer a mix of both free and premium courses. Pricing and enrollment details will be available at the time of launch.",
      },
      {
        q: "How can I enroll in a course?",
        a: "Enrollment will be available soon. You’ll be able to browse courses and join with a single click — no login required.",
      },
    ],
  },
  {
    section: "Books",
    items: [
      {
        q: "What kind of books are available on SkillSphere?",
        a: "We provide digital books (PDFs, guides, manuals) across academic, technical, and self-help genres. These are sourced from educators, experts, and verified contributors.",
      },
      {
        q: "Are the books free to download?",
        a: "Many of our books are freely available for download. Some specialized content may be paid in the future.",
      },
    ],
  },
  {
    section: "Home Tuitions",
    items: [
      {
        q: "How does home tuition registration work?",
        a: "Our home tuition service will allow tutors and students to connect. Registration for tutors will open at launch, with a simple form to list your subjects and availability.",
      },
      {
        q: "Can parents/students request a tutor directly?",
        a: "Yes, once the system is live, parents and students can view available tutors and reach out directly.",
      },
    ],
  },
  {
    section: "Products",
    items: [
      {
        q: "What kind of products are listed on SkillSphere?",
        a: "We showcase tech and educational products — such as laptops, accessories, and learning tools — handpicked for students, freelancers, and professionals.",
      },
      {
        q: "Are these products sold directly by SkillSphere?",
        a: "We act as a curated showcase. Product links may redirect to trusted sellers, or we may contact you directly depending on the product.",
      },
    ],
  },
  {
    section: "Other",
    items: [
      {
        q: "How can I contact the SkillSphere team?",
        a: "You can reach us via our contact page, email (skillzsphere@gmail.com), or phone (+92 370 6777 957). We’re always happy to help.",
      },
      {
        q: "Can I contribute content or partner with SkillSphere?",
        a: "Absolutely. If you’re an instructor, author, or service provider, reach out through our contact form to explore collaboration opportunities.",
      },
    ],
  },
];

export function FAQs() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions (FAQs)</h2>
      <div className="space-y-10">
        {faqData.map((section) => (
          <div key={section.section}>
            <h3 className="text-xl font-semibold text-neutral-200 mb-4">{section.section}</h3>
            <ul className="space-y-6">
              {section.items.map((item, idx) => (
                <li key={item.q} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                  <p className="font-medium text-white mb-2">{item.q}</p>
                  <p className="text-neutral-300">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs;