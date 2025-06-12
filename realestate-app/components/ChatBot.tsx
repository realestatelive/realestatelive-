import React, { useState } from "react";
import styles from "@/styles/ChatBot.module.css";

const welcomeMessages = [
  "مرحباً! كيف يمكنني مساعدتك في البحث عن وحدتك العقارية المثالية؟",
  "اكتب أو تحدث عن متطلباتك وسأقترح عليك أفضل الخيارات!"
];

const suggestions = [
  "أبحث عن فيلا في القاهرة الجديدة",
  "شقة للإيجار في الشيخ زايد",
  "قصر للبيع في الساحل الشمالي"
];

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([...welcomeMessages]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, `👤: ${input}`]);
    setLoading(true);
    setInput("");
    // رد افتراضي ذكي
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        `🤖: شكراً! سأبحث لك عن: "${input}" وأعرض أفضل النتائج قريباً.`
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className={styles.chatBotBox}>
      <div className={styles.chatHeader}>مساعد الذكاء الاصطناعي</div>
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
        <button onClick={handleSend}>إرسال</button>
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
