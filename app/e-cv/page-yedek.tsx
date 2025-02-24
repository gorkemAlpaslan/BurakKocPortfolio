"use client";

import Header from "@/components/Header"; // ✅ Header sadece bir kez import edilecek
import HobbyCard from "@/components/HobbyCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Gamepad2, Bike } from "lucide-react";
import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  Download,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

// Modern Skill Bar komponenti
function ModernSkillBar({
  skill,
  percentage,
  color = "#0071e3",
}: {
  skill: string;
  percentage: number;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="dark:text-white/80 text-black/80 font-medium">
          {skill}
        </span>
        <span className="dark:text-white/60 text-black/60">{percentage}%</span>
      </div>
      <div className="h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 20px ${color}33`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

// Timeline Item komponenti aynı
function TimelineItem({
  year,
  title,
  company,
  description,
}: {
  year: string;
  title: string;
  company: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l border-black/20 dark:border-white/20 last:pb-0"
    >
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
      <div className="flex items-center gap-2 dark:text-white/60 text-black/60 text-sm mb-1">
        <Calendar className="w-4 h-4" />
        <span>{year}</span>
      </div>
      <h3 className="text-xl font-semibold dark:text-white text-black mb-1">
        {title}
      </h3>
      <p className="dark:text-white/80 text-black/80 font-medium mb-2">
        {company}
      </p>
      <p className="dark:text-white/80 text-black/80">{description}</p>
    </motion.div>
  );
}

export default function ECV() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white">
      <Header currentPage="e-cv" />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-black/10 dark:border-white/10 w-full"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Burak KOÇ
                </h1>
                <p className="text-black/60 dark:text-white/60 text-lg mb-8">
                  10+ yıllık deneyim ile kullanıcı odaklı dijital çözümler
                  üretiyorum.
                </p>
                <div className="flex flex-wrap gap-6 text-black/60 dark:text-white/60">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>burak@ornek.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>+90 555 123 4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>İstanbul, Türkiye</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/10"
                >
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Burak KOÇ"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Yetenekler Bölümü */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Yetenekler</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-black/10 dark:border-white/10 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sol Kolon */}
              <div className="space-y-6">
                <ModernSkillBar
                  skill="UI/UX Tasarımı"
                  percentage={95}
                  color="#0071e3"
                />
                <ModernSkillBar skill="Figma" percentage={90} color="#FF5CAA" />
                <ModernSkillBar
                  skill="Adobe XD"
                  percentage={85}
                  color="#FF61F6"
                />
              </div>
              {/* Sağ Kolon */}
              <div className="space-y-6">
                <ModernSkillBar
                  skill="Adobe Photoshop"
                  percentage={88}
                  color="#31A8FF"
                />
                <ModernSkillBar
                  skill="Adobe Illustrator"
                  percentage={92}
                  color="#FF9A00"
                />
                <ModernSkillBar
                  skill="HTML/CSS"
                  percentage={85}
                  color="#E34F26"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section - Aynı */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Deneyim</h2>
          <div className="max-w-3xl mx-auto">
            <TimelineItem
              year="2021 - Günümüz"
              title="Senior UI/UX Designer"
              company="XYZ Agency"
              description="Büyük ölçekli projelerde kullanıcı deneyimi tasarımı ve yönetimi. Design system oluşturma ve ekip liderliği."
            />
            <TimelineItem
              year="2019 - 2021"
              title="UI/UX Designer"
              company="ABC Digital"
              description="E-ticaret ve mobil uygulama arayüzleri tasarımı. Kullanıcı araştırmaları ve A/B testleri."
            />
            <TimelineItem
              year="2017 - 2019"
              title="UI Designer"
              company="Design Studio"
              description="Web siteleri ve mobil uygulamalar için kullanıcı arayüzü tasarımı."
            />
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-0">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Hobiler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <HobbyCard
              icon={Camera}
              title="Fotoğrafçılık"
              description="Doğa ve sokak fotoğrafçılığı ile uğraşıyorum. Anı yakalamayı ve hikayeler anlatmayı seviyorum."
            />
            <HobbyCard
              icon={Gamepad2}
              title="Oyun Tasarımı"
              description="Boş zamanlarımda indie oyun projeleri geliştiriyor ve UI/UX tasarımları yapıyorum."
            />
            <HobbyCard
              icon={Bike}
              title="Bisiklet"
              description="Hafta sonları şehir turu yapıyor ve doğa yollarında pedal çevirmeyi seviyorum."
            />
            <HobbyCard
              icon={ExternalLink}
              title="Kitap Okuma"
              description="Bilim kurgu ve teknoloji üzerine kitaplar okumayı seviyorum."
            />
          </div>
        </div>
      </section>

      {/* Download CV Section - Genişlik Düzenlendi */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-black/10 dark:border-white/10 w-full"
          >
            <h2 className="text-2xl font-bold mb-4">
              CV'mi İndirmek İster Misiniz?
            </h2>
            <p className="text-black/60 dark:text-white/60 mb-6">
              Detaylı deneyimlerim ve yeteneklerimi içeren CV'mi PDF formatında
              indirebilirsiniz.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-black text-black dark:text-white rounded-full hover:bg-white/90 transition-colors">
              <span>CV'mi İndir</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
