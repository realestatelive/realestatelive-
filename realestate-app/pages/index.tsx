import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import FilterBar from "@/components/FilterBar";
import { mockUnits } from "@/types/mockUnits";
import AdsBar from "@/components/AdsBar";
import VoiceSearch from "@/components/VoiceSearch";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ChatBot from "@/components/ChatBot";
import { useEffect, useState, useRef } from "react";
import UnitCard from "@/components/UnitCard";
import RealestateLiveLogo from "@/components/RealestateLiveLogo";
import UnitSlider from "@/components/UnitSlider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

function getSuggestedUnits(userHistory: string[]): typeof mockUnits {
  // ذكاء اصطناعي وهمي: يقترح وحدات بناءً على آخر بحث أو تفضيل
  if (!userHistory.length) return [...mockUnits].slice(0, 5);
  const last = userHistory[userHistory.length - 1];
  // مثال: لو بحث عن "فيلا" أو "ساحل"...
  return mockUnits.filter(u =>
    last.includes(u.type) || last.includes(u.city) || last.includes(u.title)
  ).slice(0, 5);
}

// وحدات الأكثر مشاهدة (مثال: الأعلى سعراً)
const mostViewed = [...mockUnits].sort((a, b) => b.price - a.price).slice(0, 5);

export default function Home() {
  const [filteredUnits, setFilteredUnits] = useState(mockUnits);
  const [userHistory, setUserHistory] = useState<string[]>([]);
  const [suggested, setSuggested] = useState<typeof mockUnits>([]);
  const voiceInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // مثال: استرجاع آخر استفسار من الدردشة الذكية (لو متوفر)
    const lastQuery = localStorage.getItem("lastChatQuery");
    if (lastQuery) setUserHistory([lastQuery]);
    setSuggested(getSuggestedUnits([lastQuery || ""]));
  }, []);

  // فلترة الوحدات بناءً على القيم المدخلة
  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let units = mockUnits;
    if (data.get("country")) units = units.filter(u => u.country === data.get("country"));
    if (data.get("type")) units = units.filter(u => u.type === data.get("type"));
    if (data.get("for")) units = units.filter(u => u.for === data.get("for"));
    if (data.get("developer")) units = units.filter(u => u.developerId === data.get("developer"));
    if (data.get("compound")) units = units.filter(u => u.compoundId === data.get("compound"));
    if (data.get("minPrice")) units = units.filter(u => u.price >= Number(data.get("minPrice")));
    if (data.get("maxPrice")) units = units.filter(u => u.price <= Number(data.get("maxPrice")));
    if (data.get("bedrooms")) units = units.filter(u => u.bedrooms === Number(data.get("bedrooms")));
    if (data.get("bathrooms")) units = units.filter(u => u.bathrooms === Number(data.get("bathrooms")));
    if (data.get("area")) units = units.filter(u => u.area >= Number(data.get("area")));
    if (data.get("floors")) units = units.filter(u => u.floors === Number(data.get("floors")));
    if (data.get("pool") === "yes") units = units.filter(u => u.pool);
    if (data.get("pool") === "no") units = units.filter(u => !u.pool);
    if (data.get("garden") === "yes") units = units.filter(u => u.garden);
    if (data.get("garden") === "no") units = units.filter(u => !u.garden);
    setFilteredUnits(units);
  };

  return (
    <>
      <Head>
        <title>بيتي AR | منصة العقارات الذكية</title>
        <meta name="description" content="منصة بيتي AR لعرض وبيع وشراء الوحدات العقارية بخريطة تفاعلية ونماذج 3D/AR وصور بانوراما" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="animatedBg" />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <div className={styles.headerRow}>
            <RealestateLiveLogo />
          </div>
          <AdsBar />
          <FilterBar onSubmit={handleFilter} inputRef={voiceInputRef} />
          <VoiceSearch onResult={(text) => {
            // عند استقبال نتيجة صوتية: ضعها في أول خانة نصية (مثلاً البحث عن نوع الوحدة)
            if (voiceInputRef.current) {
              voiceInputRef.current.value = text;
              // يمكن تفعيل البحث تلقائياً أو فلترة مباشرة
            }
          }} />
          <UnitSlider title="وحدات مقترحة لك" units={suggested} />
          <div style={{ width: "100%", maxWidth: 900, margin: "32px auto" }}>
            <MapComponent units={filteredUnits} />
          </div>

          {/* عرض نتائج الوحدات */}
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',margin:'32px auto',maxWidth:1200}}>
          {filteredUnits.length === 0 ? (
            <div style={{color:'#b00',fontWeight:'bold',fontSize:'1.2rem',margin:'32px'}}>لا توجد وحدات مطابقة للبحث</div>
          ) : (
            filteredUnits.map(unit => <UnitCard key={unit.id} unit={unit} />)
          )}
        </div>

        {/* سلايدر للوحدات الأكثر مشاهدة */}
        <UnitSlider title="الوحدات الأكثر مشاهدة" units={mostViewed} />

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className={styles.footer}>
          جميع الحقوق محفوظة © شركة بيتي AR 2025
        </footer>
        <ChatBot />
      </div>
    </>
  );
}
