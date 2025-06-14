import React, { useState } from "react";
import styles from "@/styles/ChatBot.module.css";
import { FaComments, FaTimes } from "react-icons/fa";

const welcomeMessages = [
  "مرحباً! كيف يمكنني مساعدتك في البحث عن وحدتك العقارية المثالية؟",
  "اكتب أو تحدث عن متطلباتك وسأقترح عليك أفضل الخيارات!"
];

const suggestions = [
  "أبحث عن فيلا في القاهرة الجديدة",
  "شقة للإيجار في الشيخ زايد",
  "قصر للبيع في الساحل الشمالي"
];

const smartReplies = [
  (q: string) =>
    q.match(/(فيلا|شقة|قصر|دوبلكس|ستوديو)/i)
      ? `🤖: رائع! هل لديك منطقة أو كمباوند مفضل؟`
      : null,
  (q: string) =>
    q.match(/(القاهرة|زايد|الساحل|مدينتي|الرحاب|أكتوبر|التجمع|المعادي)/i)
      ? `🤖: هل تفضل مطورًا معينًا أو نطاق سعري محدد؟`
      : null,
  (q: string) =>
    q.match(/(سعر|ميزانية|أقل من|أكثر من|حدود)/i)
      ? `🤖: تم ضبط الفلترة حسب السعر المطلوب. هل ترغب في غرف أو طوابق معينة؟`
      : null,
  (q: string) =>
    q.match(/(غرف|طوابق|حمام|حديقة|مسبح)/i)
      ? `🤖: خيارات رائعة! سأعرض لك الوحدات المطابقة الآن.`
      : null,
  (q: string) =>
    q.match(/(شكرا|شكرًا|ممتاز|تمام|يسلمو)/i)
      ? `🤖: على الرحب والسعة! إذا احتجت أي مساعدة أخرى أنا هنا دائمًا.`
      : null,
  (q: string) =>
    `🤖: شكراً! سأبحث لك عن: "${q}" وأعرض أفضل النتائج قريباً.`
];

const getSmartReply = (q: string) => {
  for (const fn of smartReplies) {
    const res = fn(q);
    if (res) return res;
  }
  return smartReplies[smartReplies.length - 1](q);
};

const getUnitsByQuery = (query: string) => {
  // بحث بسيط في العنوان والوصف
  const allUnits = [...require('@/types/mockUnits').mockUnits, ...require('@/types/mockUnits').mockStandaloneUnits];
  return allUnits.filter(u =>
    u.title.includes(query) ||
    (u.description && u.description.includes(query))
  ).slice(0, 3);
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([...welcomeMessages]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [botShake, setBotShake] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, `👤: ${input}`]);
    setLoading(true);
    setInput("");
    // حفظ آخر استفسار في localStorage لاقتراح الوحدات
    if (typeof window !== "undefined") {
      localStorage.setItem("lastChatQuery", input);
    }
    setTimeout(() => {
      // إذا كان الاستفسار عن وحدة أو منطقة، أظهر نتائج حقيقية
      const results = getUnitsByQuery(input);
      if (results.length > 0) {
        setMessages((msgs) => [
          ...msgs,
          `🤖: هذه بعض الوحدات المقترحة:`,
          ...results.map(u => `🏠 ${u.title} - ${u.price.toLocaleString()} جنيه`)
        ]);
      } else {
        const reply = getSmartReply(input);
        setMessages((msgs) => [
          ...msgs,
          reply
        ]);
      }
      setLoading(false);
      setBotShake(true);
      setTimeout(() => setBotShake(false), 600);
    }, 1200);
  };

  // زر عائم
  if (!open) {
    return (
      <button className={styles.fab} onClick={() => setOpen(true)} title="مساعد الذكاء الاصطناعي">
        <FaComments size={28} />
      </button>
    );
  }

  return (
    <div className={styles.chatBotBox + (botShake ? ' ' + styles.shake : '')}>
      <div className={styles.chatHeader}>
        مساعد الذكاء الاصطناعي
        <FaTimes className={styles.closeBtn} onClick={() => setOpen(false)} title="إغلاق" />
      </div>
      <div className={styles.chatBody}>
        {messages.map((msg, i) => (
          <div key={i} className={msg.startsWith("👤") ? styles.userMsg : styles.botMsg}>{msg}</div>
        ))}
        {loading && <div className={styles.botMsg}>🤖: جاري التفكير...</div>}
      </div>
      <div className={styles.chatFooter}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="اكتب استفسارك..."
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className={styles.sendBtn}>إرسال</button>
      </div>
      <div className={styles.suggestions}>
        {suggestions.map((s, i) => (
          <span key={i} onClick={() => setInput(s)}>{s}</span>
        ))}
      </div>
    </div>
  );
};

export default ChatBot;
