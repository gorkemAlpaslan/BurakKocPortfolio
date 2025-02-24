"use client";

import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Turkiz Hotel Web Design",
    description:
      "Kullanıcı deneyimini ve dönüşüm oranlarını artırmaya odaklanan bir e-ticaret platformunun yeniden tasarımı.",
    imageUrl: "/image/turkiz.jpg",
    category: "UI/UX Design",
  },
  {
    id: 2,
    title: "Dgtlface Dijital Ajans Web Design",
    description:
      "Önde gelen bir finans kurumu için sezgisel ve güvenli bir mobil bankacılık uygulaması tasarımı.",
    imageUrl: "/image/dgtl-web.jpg",
    category: "Mobile App",
  },
  {
    id: 3,
    title: "Renex Hotel Web Design",
    description:
      "Rezervasyon deneyimini geliştiren, kullanıcı dostu bir seyahat rezervasyon web sitesi arayüzü tasarımı.",
    imageUrl: "/image/renex-web.jpg",
    category: "Web Design",
  },
  {
    id: 4,
    title: "Renex Hotel Web Design",
    description:
      "Rezervasyon deneyimini geliştiren, kullanıcı dostu bir seyahat rezervasyon web sitesi arayüzü tasarımı.",
    imageUrl: "/image/renex-web.jpg",
    category: "Web Design",
  },
  {
    id: 5,
    title: "Renex Hotel Web Design",
    description:
      "Rezervasyon deneyimini geliştiren, kullanıcı dostu bir seyahat rezervasyon web sitesi arayüzü tasarımı.",
    imageUrl: "/image/renex-web.jpg",
    category: "Web Design",
  },
  {
    id: 6,
    title: "Renex Hotel Web Design",
    description:
      "Rezervasyon deneyimini geliştiren, kullanıcı dostu bir seyahat rezervasyon web sitesi arayüzü tasarımı.",
    imageUrl: "/image/renex-web.jpg",
    category: "Web Design",
  },
  {
    id: 7,
    title: "Renex Hotel Web Design",
    description:
      "Rezervasyon deneyimini geliştiren, kullanıcı dostu bir seyahat rezervasyon web sitesi arayüzü tasarımı.",
    imageUrl: "/image/renex-web.jpg",
    category: "Web Design",
  },
  {
    id: 8,
    title: "Renex Hotel Web Design",
    description:
      "Rezervasyon deneyimini geliştiren, kullanıcı dostu bir seyahat rezervasyon web sitesi arayüzü tasarımı.",
    imageUrl: "/image/renex-web.jpg",
    category: "Web Design",
  },
  {
    id: 9,
    title: "Renex Hotel Web Design",
    description:
      "Rezervasyon deneyimini geliştiren, kullanıcı dostu bir seyahat rezervasyon web sitesi arayüzü tasarımı.",
    imageUrl: "/image/renex-web.jpg",
    category: "Web Design",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.8,
      ease: [0.23, 0.86, 0.39, 0.96],
    },
  }),
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white">
      <Header />

      <main className="container max-w-6xl mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Portfolyo
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Yaratıcı çözümler ve kullanıcı odaklı tasarımlarla dijital
            deneyimleri dönüştürüyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-white/40">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={`/portfolyo/${project.id}`}
                    className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Detayları Gör
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-6">
        <div className="flex items-center justify-center space-x-6 px-4">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href="https://behance.net"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Behance"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 7h-7V2H9v5H2v15h20V7zM9 13.5c0 .8-.7 1.5-1.5 1.5H5v3H3V9h4.5C8.3 9 9 9.7 9 10.5v3zM16 15c0 .8-.7 1.5-1.5 1.5h-3v3H9V9h5.5c.8 0 1.5.7 1.5 1.5V15zm-2-4h-2v2h2v-2z" />
            </svg>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  );
}
