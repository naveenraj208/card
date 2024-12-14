
"use client";

import React from "react";

const BirthdayPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.dateBadge}>14 Dec 2024</div>

      <div style={styles.card}>
        <div style={styles.gradientHeader}></div>

        <div style={styles.content}>
          <p style={styles.greeting}>Dear Daddy,</p>

          <p>
            Happy 50th Birthday! Today is such a special day, and I couldn’t let it pass without telling you how much you mean to me. You are not just my father—you are my first teacher, my biggest supporter, and my role model in every sense.
          </p>
          <p style={styles.paragraphSpacing}>
            Daddy, I’ve always admired the way you’ve handled everything in life. Your hard work, sacrifices, and the love you’ve given to our family are nothing short of inspiring. I’ve seen you put everyone else’s needs above your own, whether it was working tirelessly to provide us with the best or making sure we were happy, no matter what challenges you faced. I often wonder how you do it all so effortlessly, and it fills me with so much pride to call you my dad.
          </p>
          <p style={styles.paragraphSpacing}>
            The values you’ve taught me are the ones I will carry forever. You’ve shown me what it means to live with integrity, to respect others, and to never give up. The way you’ve always told me to do everything with heart, and success will follow, is something I live by. Your words have been my motivation, and your belief in me has given me the confidence to dream big.
          </p>
          <p style={styles.paragraphSpacing}>
            I know I don’t say this enough, but thank you for everything, daddy. Thank you for the countless sleepless nights you spent worrying about our future, for every lesson you taught me, and for always standing by me, no matter what. You’ve been my guide, my protector, and my biggest cheerleader. The person I am today is all because of you.
          </p>
          <p style={styles.paragraphSpacing}>
            As you celebrate this incredible milestone, I want you to know how much you are loved and cherished. I hope this birthday reminds you of all the lives you’ve touched and the respect you’ve earned, not just as a father but as a wonderful human being.
          </p>
          <p style={styles.paragraphSpacing}>
            Daddy, I promise to make you proud and carry forward the lessons you’ve taught me. I hope I can give back even a fraction of the love and care you’ve showered on me.
          </p>
          <p style={styles.paragraphSpacing}>
            Here’s to many more years of happiness, health, and success. I pray that you always remain as cheerful and strong as you are today. Happy Birthday, Daddy! You are and will always be my hero.
          </p>
          <p style={styles.signature}>
            With love, <br /> Naveen <span style={styles.heart}>❤</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative" as const,
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #fbbf24, #f472b6)",
    fontFamily: "monospace",
    overflow: "hidden",
  },
  dateBadge: {
    position: "absolute" as const,
    top: "8px",
    right: "20px",
    fontSize: "0.875rem",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "bold" as const,
  },
  card: {
    width: "80%",
    maxWidth: "600px",
    height: "80%",
    maxHeight: "700px",
    backgroundColor: "white",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflowY: "auto" as const,
    animation: "fadeIn 1s",
  },
  gradientHeader: {
    height: "40px",
    background: "linear-gradient(to right, #fbbf24, #f472b6)",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  content: {
    padding: "20px",
    color: "#374151",
    lineHeight: "1.75",
  },
  greeting: {
    fontSize: "1.25rem",
    fontWeight: "bold" as const,
    marginBottom: "16px",
  },
  paragraphSpacing: {
    marginTop: "16px",
  },
  signature: {
    marginTop: "24px",
    textAlign: "right" as const,
    color: "#ec4899",
    fontWeight: "bold" as const,
    fontSize: "1.25rem",
  },
  heart: {
    animation: "bounce 1.5s infinite",
    display: "inline-block",
  },
};

export default BirthdayPage;

