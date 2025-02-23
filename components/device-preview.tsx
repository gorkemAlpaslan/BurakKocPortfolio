"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  device: "iphone" | "macbook";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Renex App",
    subtitle: "UI/UX Design & Development",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-218CFi0zeADFIzCT3PJ1PqTyePWL3I.png",
    device: "iphone",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    subtitle: "Web Design & Development",
    image: "/placeholder.svg?height=800&width=1200",
    device: "macbook",
  },
  {
    id: 3,
    title: "Banking App",
    subtitle: "Mobile Application Design",
    image: "/placeholder.svg?height=800&width=400",
    device: "iphone",
  },
  {
    id: 4,
    title: "Dashboard Design",
    subtitle: "Admin Panel Interface",
    image: "/placeholder.svg?height=800&width=1200",
    device: "macbook",
  },
];

interface DevicePreviewProps {
  currentProjectIndex: number;
  offsetY?: number; // Dikey pozisyon için offset
}

export default function DevicePreview({
  currentProjectIndex,
  offsetY = 0,
}: DevicePreviewProps) {
  const currentProject = projects[currentProjectIndex];

  const deviceVariants = {
    initial: {
      opacity: 0,
      y: 400, // giriş
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: offsetY, // görünüş
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: 400, // çıkış
      scale: 0.95,
    },
  };

  // if (currentProject.device === "iphone") {
  //   return (
  //     <AnimatePresence mode="wait">
  //       <motion.div
  //         variants={deviceVariants}
  //         initial="initial"
  //         animate="animate"
  //         exit="exit"
  //         transition={{ duration: 1, ease: [0.23, 0.86, 0.39, 0.96] }}
  //         className="flex justify-center items-center w-full h-full"
  //       >
  //         {/* iPhone 15 Pro çerçevesi */}
  //         <div className="relative w-[220px] h-[440px]  rounded-[32px] shadow-3xl border-[8px] border-[#52525e] dark:border-red-600 ">
  //           {/* Dynamic Island (Test için kırmızı renk) */}
  //           <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black rounded-full flex items-center justify-center z-50">
  //             <div className="w-[60px] h-[16px] bg-black rounded-full opacity-100" />
  //           </div>

  //           {/* Ekran içeriği */}
  //           <div className="absolute inset-0 overflow-hidden rounded-[24px]">
  //             <Image
  //               src={currentProject.image || "/placeholder.svg"}
  //               alt={currentProject.title}
  //               fill
  //               className="object-cover"
  //             />
  //           </div>

  //           {/* iPhone detayları */}
  //           <div className="absolute right-[-10px] top-[90px] w-[2px] h-[30px]  bg-[#52525e] dark:bg-red-600 rounded-l-lg" />
  //           <div className="absolute right-[-10px] top-[130px] w-[2px] h-[30px] bg-[#52525e] dark:bg-red-600 rounded-l-lg" />
  //           <div className="absolute w-[calc(100%+16px)] inset-x-0 bottom-[-12%] h-[300px] translate-x-[-8px] bg-gradient-to-t dark:from-black  dark:to-black/0 from-white to-white/0 " />
  //         </div>
  //       </motion.div>
  //     </AnimatePresence>
  //   );
  // }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentProject.id}
        variants={deviceVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, ease: [0.23, 0.86, 0.39, 0.96] }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        {/* MacBook çerçevesi */}
        <div className="relative w-[500px] ">
          {/* Çerçeve ışık efekti kaldırıldı */}
          {/* Ekran */}
          <div className="relative border-[8px] border-[#52525e] dark:border-red-600  rounded-[12px]  aspect-[16/10] ">
            {/* Ekran içeriği */}
            <div className="relative w-full h-full rounded-[4px] overflow-hidden">
              <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute w-[calc(100%+16px)] inset-x-0 bottom-[-12%] h-[300px] translate-x-[-8px] bg-gradient-to-t dark:from-black  dark:to-black/0 from-white to-white/0 " />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
