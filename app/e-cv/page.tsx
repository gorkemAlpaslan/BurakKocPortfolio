"use client";

import Header from "@/components/Header";
import SkillBar from "@/components/skill-bar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useState } from "react";

// 3D Cube bileşeni
function TechCube() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startPos.x;
    const deltaY = startPos.y - e.clientY;

    setRotateX((prev) => prev + deltaY * 0.5);
    setRotateY((prev) => prev + deltaX * 0.5);

    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative w-48 h-48 [perspective:800px]"
      ref={cubeRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        style={{
          rotateX: `${rotateX}deg`,
          rotateY: `${rotateY}deg`,
        }}
      >
        {/* Ön yüz */}
        <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white pointer-events-none ">
          Figma
        </div>
        {/* Arka yüz */}
        <div className="absolute inset-0 bg-purple-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white [transform:rotateY(180deg)_translateZ(96px)] pointer-events-none">
          XD
        </div>
        {/* Üst yüz */}
        <div className="absolute inset-0 bg-green-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white [transform:rotateX(90deg)_translateZ(96px)] pointer-events-none">
          UI
        </div>
        {/* Alt yüz */}
        <div className="absolute inset-0 bg-yellow-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white [transform:rotateX(-90deg)_translateZ(96px)] pointer-events-none">
          UX
        </div>
        {/* Sol yüz */}
        <div className="absolute inset-0 bg-red-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white [transform:rotateY(-90deg)_translateZ(96px)] pointer-events-none">
          PS
        </div>
        {/* Sağ yüz */}
        <div className="absolute inset-0 bg-indigo-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white [transform:rotateY(90deg)_translateZ(96px)] pointer-events-none">
          AI
        </div>
      </motion.div>
    </div>
  );
}

export default function ECV() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-[#030303] text-white"
    >
      <Header />

      {/* Hero Section */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 pointer-events-none">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 pointer-events-none select-none"
            >
              Dijital Deneyim Tasarımcısı
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 text-lg mb-6 pointer-events-none select-none"
            >
              10+ yıllık deneyim ile kullanıcı odaklı dijital çözümler
            </motion.p>
          </div>

          <div className="md:w-1/4 flex justify-center  select-none">
            <TechCube />
          </div>
        </div>
      </motion.div>

      {/* Ana İçerik */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Sol Kolon - Profil */}
          <div>
            <div className="relative w-full aspect-square mb-8 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                fill
                className="object-cover"
              />
              {/* Hover efekti */}
              <motion.div
                initial={false}
                whileHover={{
                  backgroundColor: "rgba(0,0,0,0.2)",
                  backdropFilter: "blur(10px)",
                }}
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
              >
                <p className="text-white text-xl font-medium">UI/UX Designer</p>
              </motion.div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Kişisel Bilgiler</h3>
                <div className="space-y-2 text-white/60">
                  <p>Email: burak@ornek.com</p>
                  <p>Konum: İstanbul, Türkiye</p>
                  <p>Diller: Türkçe, İngilizce</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Eğitim</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Örnek Üniversitesi</h4>
                    <p className="text-white/60">Grafik Tasarım, 2015-2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon - Yetenekler ve Deneyim */}
          <div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Yetenekler</h3>
              <SkillBar
                skill="UI/UX Tasarımı"
                percentage={95}
                color="#0071e3"
              />
              <SkillBar skill="Figma" percentage={90} color="#FF5CAA" />
              <SkillBar skill="Adobe XD" percentage={85} color="#FF61F6" />
              <SkillBar
                skill="Adobe Photoshop"
                percentage={88}
                color="#31A8FF"
              />
              <SkillBar
                skill="Adobe Illustrator"
                percentage={92}
                color="#FF9A00"
              />
              <SkillBar skill="HTML/CSS" percentage={85} color="#E34F26" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Deneyim</h3>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-white/20"
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <h4 className="font-medium text-lg">Senior UI/UX Designer</h4>
                  <p className="text-white/60 mb-2">
                    XYZ Agency • 2021 - Present
                  </p>
                  <p className="text-white/80">
                    Büyük ölçekli projelerde kullanıcı deneyimi tasarımı ve
                    yönetimi
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative pl-8 border-l border-white/20"
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500" />
                  <h4 className="font-medium text-lg">UI/UX Designer</h4>
                  <p className="text-white/60 mb-2">
                    ABC Digital • 2019 - 2021
                  </p>
                  <p className="text-white/80">
                    E-ticaret ve mobil uygulama arayüzleri tasarımı
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
