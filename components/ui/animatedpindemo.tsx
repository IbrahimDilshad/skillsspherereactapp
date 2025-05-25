"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

// Sort books alphabetically by title (A-Z)
const books = [
	{
		title: "College Success (Comprehensive Edition)",
		description:
			"This all-in-one college guide helps you build essential academic, personal, and career skills to thrive in higher education. From study techniques to time management and goal-setting, it’s your complete success manual for college life. Perfect for new students, educators, and advisors.",
		imageSrc: "/books/college_success_web_card.svg",
		pdfLink: "https://www.dropbox.com/scl/fi/e3flyrblk92nlud8zquq9/College_Success_-_WEB_zQGCJTr.pdf?rlkey=r8qjwasghu6qxa6oqnk19zzc4&st=fu345t7y&dl=1",
	},
	{
		title: "College Success (Concise Edition)",
		description:
			"Looking for a quick yet powerful guide to excelling in college? This concise edition offers practical strategies for academic achievement, productivity, motivation, and campus life—all in a student-friendly format. Ideal for orientation programs and independent learners.",
		imageSrc: "/books/preparing_for_college_success_web_card.svg",
		pdfLink: "https://www.dropbox.com/scl/fi/5ffctlne7vi5yvmlqxuw2/College_Success_Concise.pdf?rlkey=sl28noh0adtsc2avwzthc9yps&st=2xlcd2iq&dl=1",
	},
	{
		title: "eMarketing: The Essential Guide to Marketing in a Digital World – 7th Edition",
		description:
			"Master the digital marketing landscape with this up-to-date guide packed with strategies for SEO, PPC, social media, content, and email marketing. Ideal for entrepreneurs, students, and marketers navigating post-pandemic business realities.",
		imageSrc: "/books/eMarketing.jpg",
		pdfLink: "https://www.dropbox.com/scl/fi/f32ibn7tr51o26bu5vqgx/RY_eMarketing_ed7.pdf?rlkey=ei5s7kng5xl6rz5e6g6s56xc6&st=36fyabnf&dl=1",
	},
	{
		title: "Français inclusif: An Interactive Textbook for French 202",
		description:
			"Level up your French skills with this engaging, inclusive textbook designed for Level 4 learners. Covering real-world themes—love & money, travel, the environment, and the arts—this book helps you build vocabulary, master grammar, and sharpen comprehension through interactive flashcards and exercises. A must-have for modern French learners.",
		imageSrc: "/books/francais inclusive.png",
		pdfLink: "https://www.dropbox.com/scl/fi/8874vf2cdngvrwgtyuofb/Francais-inclusif-An-Interactive-Textbook-for-French-202-1719940286.epub?rlkey=mqvixvxcb44fgq1g9d8pkg7tf&st=wmpk2rcr&dl=1",
	},
	{
		title: "Introduction to Philosophy – A Global and Multicultural Approach",
		description:
			"Discover the roots of human thought with this accessible philosophy textbook. Covering diverse global perspectives and original primary texts, it encourages critical thinking, deep reading, and meaningful reflection. Ideal for college courses and curious minds alike.",
		imageSrc: "/books/introduction_to_philosophy_webcard.svg",
		pdfLink: "https://www.dropbox.com/scl/fi/3q6mbu3ld92l8i7xwykh0/Introduction_to_Philosophy-WEB_cszrKYp.pdf?rlkey=hjioxbsm0dd5y8uercf7g5v3f&st=wyycu1qj&dl=1",
	},
	{
		title: "Let's Chat! French",
		description:
			"A collection of nearly 100 ready-to-use speaking activities for A1–B1 French learners. Covering themes like food, health, routines, and more, this resource is perfect for engaging students in meaningful conversation. Easily adaptable to suit any classroom!",
		imageSrc: "/books/frenchchat.png",
		pdfLink: "https://www.dropbox.com/scl/fi/14nd2gnl8ebv4xjcb0ty9/Let039s-Chat-French-1717707544.epub?rlkey=ra8bpyue0owdejlqnbvhswu17&st=fgq9wucr&dl=1",
	},
	{
		title: "Romeo and Juliet – William Shakespeare",
		description:
			'A timeless tragedy of love and fate, Romeo and Juliet explores the intense romance between two young lovers caught in a feud between their families. This literary classic remains a foundational read for English literature students and drama enthusiasts.',
		imageSrc: "/books/romeoandjuliet.png",
		pdfLink: "https://www.dropbox.com/scl/fi/vzwpch4aci45od8eet9yk/pg1513-images-3.epub?rlkey=002ps8jzohrag0cgyoaqpm8mw&st=lhgev2uy&dl=1",
	},
	{
		title: "Writing in College – A Guide to Academic Excellence",
		description:
			"This friendly writing guide supports students transitioning to university-level writing. With practical strategies, relatable examples, and real student advice, it demystifies college writing and helps you succeed in any academic discipline.",
		imageSrc: "/books/college_success_web_card.svg",
		pdfLink: "https://www.dropbox.com/scl/fi/6lx4pesnxd2htft6fdo9z/Writing-in-College-1680793472.epub?rlkey=tntg80lqg3gdohdovuza7lr4p&st=w8sozxer&dl=1",
	},
	{
		title: "Writing in College – A Student Guide to Academic Success",
		description:
			"Go beyond the five-paragraph essay with this guide to advanced college writing. Learn how to think critically, engage deeply with texts, and meet professors' expectations. Ideal for first-year students, composition courses, and writing-intensive majors.",
		imageSrc: "/books/Writing In College.png",
		pdfLink: "https://www.dropbox.com/scl/fi/6lx4pesnxd2htft6fdo9z/Writing-in-College-1680793472.epub?rlkey=tntg80lqg3gdohdovuza7lr4p&st=dzod5pi6&dl=1",
	},
];

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 1024);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);
	return isMobile;
}

export function AnimatedPinDemo() {
	const [searchTerm, setSearchTerm] = useState("");
	const [expanded, setExpanded] = useState<number | null>(null);
	const isMobile = useIsMobile();

	const filteredBooks = books.filter(
		(book) =>
			book.title.toLowerCase().includes(searchTerm) ||
			book.description.toLowerCase().includes(searchTerm)
	);

	// Collapse card on tap outside (for mobile)
	const gridRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!isMobile) return;
		function handleClickOutside(event: MouseEvent) {
			if (gridRef.current && !gridRef.current.contains(event.target as Node)) {
				setExpanded(null);
			}
		}
		if (expanded !== null) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [expanded, isMobile]);

	return (
		<div className="px-4 py-16 md:py-24 bg-transparent">
			<div className="flex justify-center items-center mb-10">
				<input
					type="text"
					placeholder="Search for books..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
					className="p-3 rounded-full border border-neutral-700 bg-neutral-800 text-neutral-200 placeholder-neutral-400 w-full max-w-md shadow"
				/>
			</div>
			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
				ref={gridRef}
			>
				{filteredBooks.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-20 col-span-full">
						<span className="text-2xl font-semibold text-neutral-400 mb-2">
							No books found
						</span>
						<span className="text-sm text-neutral-500">
							Try a different search term.
						</span>
					</div>
				) : (
					filteredBooks.map((book, idx) => {
						const isExpanded = isMobile
							? expanded === idx
							: expanded === idx;
						return (
							<div
								key={idx}
								className={`group relative bg-neutral-900 rounded-2xl shadow-xl flex flex-col items-center border border-neutral-800 cursor-pointer transition-all duration-300
                  ${isExpanded ? "z-20 scale-105 ring-2 ring-white/80" : "hover:scale-[1.04] hover:shadow-[0_0_32px_0_rgba(255,255,255,0.15)]"}
                `}
								style={{
									minHeight: isExpanded ? 420 : 370,
									maxWidth: 330,
									boxShadow: isExpanded
										? "0 8px 32px 0 rgba(255,255,255,0.15)"
										: undefined,
									transform: isExpanded ? "scale(1.05)" : undefined,
								}}
								onMouseEnter={() => !isMobile && setExpanded(idx)}
								onMouseLeave={() => !isMobile && setExpanded(null)}
								onClick={() =>
									isMobile &&
									setExpanded(expanded === idx ? null : idx)
								}
							>
								<div className="w-full h-44 rounded-t-2xl overflow-hidden flex items-center justify-center bg-black border-b border-neutral-800">
									<Image
										width={220}
										height={220}
										src={book.imageSrc}
										alt={book.title}
										className="object-contain w-[180px] h-[180px] md:w-[200px] md:h-[200px] max-w-full max-h-full drop-shadow-lg"
										priority
										quality={100}
									/>
								</div>
								<div className="flex flex-col flex-1 w-full px-5 py-4">
									<h3 className="font-extrabold text-xl text-white mb-1 text-center tracking-tight drop-shadow">
										{book.title}
									</h3>
									<p
										className={`text-sm text-center transition-all duration-300 ${
											isExpanded
												? "text-neutral-100 mb-4 max-h-32 overflow-auto font-semibold"
												: "text-neutral-400 line-clamp-3"
										}`}
									>
										{book.description}
									</p>
									{isExpanded && (
										<div className="flex justify-center mt-4">
											<HoverBorderGradient
												as="a"
												href={book.pdfLink}
												download
												className="w-auto min-w-[140px] px-6 py-2 rounded-full flex items-center justify-center font-bold text-white text-base"
											>
												<span className="flex items-center gap-2">
													{/* ...icon... */}
													Download
												</span>
											</HoverBorderGradient>
										</div>
									)}
								</div>
								{isExpanded && (
									<div className="absolute inset-0 rounded-2xl bg-white/5 pointer-events-none z-10" />
								)}
								{isExpanded && (
									<div className="absolute -inset-1 rounded-2xl border-2 border-white/30 animate-pulse pointer-events-none z-0" />
								)}
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}