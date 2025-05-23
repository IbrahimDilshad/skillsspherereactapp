import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

// About page content
export function TimelineDemo() {
  const data = [
    {
      title: "About Us | SkillSphere",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Empowering Learners. Enabling Futures. Elevating Digital Education.
          </h2>
          <p className="mb-6 text-neutral-300">
            Welcome to{" "}
            <span className="font-semibold text-white">SkillSphere</span> – a
            groundbreaking platform designed to transform how people learn, grow,
            and connect with technology. We are more than just an educational
            website or a digital store — we are a vision-driven ecosystem that
            combines online learning, expert mentorship, e-books, and tech
            products to deliver a seamless and powerful experience to learners
            and professionals worldwide.
          </p>
        </div>
      ),
    },
    {
      title: "Our Story",
      content: (
        <div>
          <p className="mb-4 text-neutral-300">
            SkillSphere was founded on a simple belief: Education should be
            accessible, skill-based, and future-ready. In a world where
            traditional degrees are no longer enough, and digital transformation
            is reshaping industries, we saw the need for a platform that could
            equip learners with real-world skills and practical tools to succeed.
            <br />
            <br />
            Launched in [Year], SkillSphere began as a small project by a group
            of passionate developers, educators, and entrepreneurs who wanted to
            create a space where education meets opportunity. Over time, it has
            grown into a thriving learning and e-commerce platform, serving
            thousands of users across diverse backgrounds.
          </p>
        </div>
      ),
    },
    {
      title: "What We Do",
      content: (
        <div>
          <ul className="list-disc ml-6 text-neutral-300 mb-4">
            <li className="mb-2">
              <span className="font-semibold text-white">
                Skill-Based Online Courses:
              </span>{" "}
              We offer a wide range of certified, industry-relevant courses that
              focus on real-world skills, not just theory. Whether you're
              interested in web development, digital marketing, graphic design,
              data analysis, or business strategy, SkillSphere helps you learn
              at your own pace with access to video lessons, quizzes, and
              hands-on projects.
              <ul className="list-disc ml-6 mt-1 text-neutral-400 text-sm">
                <li>Programming & Web Development</li>
                <li>Business & Entrepreneurship</li>
                <li>Graphic Design & UX/UI</li>
                <li>Data Science & AI</li>
                <li>Personal Development</li>
              </ul>
            </li>
            <li className="mb-2">
              <span className="font-semibold text-white">
                E-Books and Study Resources:
              </span>{" "}
              Enhance your learning with access to curated digital libraries,
              including textbooks, guides, and resource materials. Our e-books
              are carefully selected to support learners at all levels — from
              beginners to advanced professionals.
            </li>
            <li className="mb-2">
              <span className="font-semibold text-white">
                Expert Training & Mentorship:
              </span>{" "}
              Through SkillSphere’s Expert Hub, learners can book 1-on-1 sessions
              or join live workshops hosted by seasoned professionals and industry
              leaders. Our goal is to connect learners with mentors who understand
              the challenges of the modern workforce and offer actionable advice
              and career support.
            </li>
            <li>
              <span className="font-semibold text-white">
                Marketplace for Tech & Learning Tools:
              </span>{" "}
              SkillSphere’s marketplace features handpicked laptops, gadgets, and
              productivity tools that help learners and professionals get the most
              out of their digital education experience. From budget-friendly
              laptops for students to high-performance setups for creatives, we
              help you find what you need.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <div>
          <p className="mb-4 text-neutral-300">
            Our mission is to democratize access to practical education and
            professional tools, so anyone — regardless of their background or
            location — can acquire the skills and resources needed to succeed in
            the modern world.
          </p>
          <ul className="list-disc ml-6 text-neutral-300 mb-4">
            <li>Affordable, high-quality learning</li>
            <li>Practical, skill-driven content</li>
            <li>Accessible tools for all</li>
            <li>Continuous personal and professional development</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Why SkillSphere?",
      content: (
        <div>
          <ul className="list-disc ml-6 text-neutral-300 mb-4">
            <li>
              <span className="font-semibold text-white">
                All-in-One Platform:
              </span>{" "}
              Learn, train, and shop in one place.
            </li>
            <li>
              <span className="font-semibold text-white">
                Future-Ready Curriculum:
              </span>{" "}
              Courses aligned with industry demand.
            </li>
            <li>
              <span className="font-semibold text-white">Real Experts:</span>{" "}
              Learn directly from professionals who walk the talk.
            </li>
            <li>
              <span className="font-semibold text-white">
                Affordable & Transparent:
              </span>{" "}
              No hidden costs, no unnecessary upsells.
            </li>
            <li>
              <span className="font-semibold text-white">
                Community-Driven:
              </span>{" "}
              Join a growing community of learners, creators, and professionals.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Meet the Team Behind SkillSphere",
      content: (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/ibrahim.jpg"
                alt="Ibrahim (CEO & Founder)"
                width={100}
                height={100}
                className="rounded-full mb-2 object-cover"
              />
              <span className="text-white font-semibold">Ibrahim</span>
              <span className="text-neutral-400 text-xs text-center">
                CEO & Founder: Visionary leader and strategist focused on scalable
                impact and innovation.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/amir.jpg"
                alt="Amir Abbas (Head of Marketing)"
                width={100}
                height={100}
                className="rounded-full mb-2 object-cover"
              />
              <span className="text-white font-semibold">Amir Abbas</span>
              <span className="text-neutral-400 text-xs text-center">
                Head of Marketing: Drives growth and visibility through
                data-driven campaigns.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/saad.jpg"
                alt="Saad Rafique (Tech Lead)"
                width={100}
                height={100}
                className="rounded-full mb-2 object-cover"
              />
              <span className="text-white font-semibold">Saad Rafique</span>
              <span className="text-neutral-400 text-xs text-center">
                Tech Lead: Oversees the technical infrastructure and user
                experience.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col items-center">
              <Image
                src="/images/ayesha.jpg"
                alt="Ayesha Khan (Content Coordinator)"
                width={100}
                height={100}
                className="rounded-full mb-2 object-cover"
              />
              <span className="text-white font-semibold">Ayesha Khan</span>
              <span className="text-neutral-400 text-xs text-center">
                Content Coordinator: Ensures course and e-book content meets
                academic and industry standards.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/hamza.jpg"
                alt="Hamza Sheikh (Product Manager)"
                width={100}
                height={100}
                className="rounded-full mb-2 object-cover"
              />
              <span className="text-white font-semibold">Hamza Sheikh</span>
              <span className="text-neutral-400 text-xs text-center">
                Product Manager: Curates and sources quality tech products for our
                marketplace.
              </span>
            </div>
          </div>
          <p className="mb-4 text-neutral-300">
            Together, we work tirelessly to ensure that SkillSphere remains
            cutting-edge, learner-focused, and value-driven.
          </p>
        </div>
      ),
    },
    {
      title: "Our Vision",
      content: (
        <div>
          <p className="mb-4 text-neutral-300">
            To become the leading global platform where individuals can learn
            future-proof skills, access reliable educational resources, and equip
            themselves with the best tools for a successful career and life.
          </p>
          <ul className="list-disc ml-6 text-neutral-300 mb-4">
            <li>
              Skill-based education is valued over degrees alone.
            </li>
            <li>
              Learners have direct access to mentors and industry tools.
            </li>
            <li>
              Technology is a bridge — not a barrier — to growth.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Join the SkillSphere Movement",
      content: (
        <div>
          <p className="mb-2 text-neutral-300">
            If you’re a student, a professional, an educator, or a tech
            enthusiast, there’s a place for you at SkillSphere. We’re not just a
            platform — we’re a community built on shared growth, digital
            empowerment, and lifelong learning.
          </p>
          <p className="font-semibold text-blue-400">
            Explore. Learn. Grow. Achieve — with SkillSphere.
          </p>
          <p className="mt-4 text-neutral-400 text-center">
            Follow us on [social links] and become part of the digital learning
            revolution.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip bg-transparent">
      <Timeline data={data} />
    </div>
  );
}
//about page content end
