"use client";

import Button from "@/components/Button";
import Section from "@/components/Section";
import { ArrowRight, CheckCircle, HelpCircle, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-[#0F172A] to-[#0F172A] opacity-80" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              AI駆動経営を、<br />
              <span className="text-gold-gradient">あなたの会社に。</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed font-light">
              経営×AI のプロフェッショナルを<br />
              御社の「中の人」として紹介します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="gold" className="text-lg px-8 border-none font-bold">
                無料相談を予約する
              </Button>
              <Button href="/services" variant="secondary" className="text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white backdrop-blur-sm">
                サービス詳細を見る
              </Button>
            </div>
            <p className="mt-8 text-sm text-gray-400 font-sans opacity-70">
              有料職業紹介事業 許可番号: ○○-ユ-○○○○○○<br />
              キリロムデジタル株式会社
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Abstract AI/Business Graphic Placeholder */}
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-500/20 to-secondary/30 rounded-full blur-[100px] absolute" />
            <div className="relative z-10 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CFB87C] to-[#A68B45] rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="text-white drop-shadow-sm" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest text-[10px]">Target</div>
                  <div className="font-bold text-xl text-white">売上/生産性向上</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#CFB87C] to-[#A68B45]"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Traditional</span>
                  <span className="text-secondary font-bold">AI Driven</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-primary mb-3">運営会社について</h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto opacity-70"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            {/* Decorative watermark idea */}
            <div className="text-9xl font-serif text-primary">K</div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-10 relative z-10">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden border-4 border-white shadow-md">
              {/* Placeholder for CEO Image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">代表写真</div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-1 tracking-wide">キリロムデジタル株式会社</h3>
              <p className="text-lg font-bold text-primary mb-4 font-serif">代表取締役 猪塚 武</p>
              <ul className="text-sm text-gray-600 space-y-2 font-medium">
                <li>・vKirirom Japan株式会社 代表取締役</li>
                <li>・讃岐グローバルフォーラム 主催</li>
                <li>・生成AIフェス 2025/2026 主催</li>
                <li>・EO（起業家機構）メンバー</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { label: "生成AIフェス", sub: "参加者数", val: "200", unit: "名+" },
              { label: "讃岐グローバル", sub: "フォーラム", val: "4", unit: "日間開催" },
              { label: "登録CAIO", sub: "候補者数", val: "10", unit: "名+" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm border border-slate-100">
                <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400 mb-2">{stat.sub}</div>
                <div className="text-3xl font-bold text-primary font-serif">{stat.val}<span className="text-lg font-sans ml-1">{stat.unit}</span></div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8 font-serif italic">※サービス実績ではなく「人と組織の信用」で担保</p>
        </div>
      </Section>

      {/* Problem Section */}
      <Section className="bg-[#F8F9FA]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">こんな課題、ありませんか？</h2>
          <p className="text-gray-600 font-light">AI活用に踏み出せない多くの経営者が抱える悩み</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <HelpCircle className="w-10 h-10 text-secondary mb-4" />,
              title: "AIを導入したいが、何から始めればいいかわからない"
            },
            {
              icon: <Users className="w-10 h-10 text-secondary mb-4" />,
              title: "社内にAIがわかる人材がいない"
            },
            {
              icon: <TrendingUp className="w-10 h-10 text-secondary mb-4" />,
              title: "コンサルは高いし、成果が見えない"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-secondary duration-300"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <p className="font-bold text-lg leading-relaxed text-slate-700">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Solution Section */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              CAIOが、御社の<br />
              <span className="text-gold-gradient relative inline-block">
                「中の人」
                <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary/20 -z-10 transform -rotate-1"></span>
              </span>
              になります。
            </h2>
            <div className="bg-[#0F172A] text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4 relative z-10 font-serif tracking-widest">CAIO = Chief AI Officer</h3>
              <p className="mb-8 leading-relaxed text-gray-300 relative z-10">
                経営視点でAI活用を推進できるハイレベル人材を、御社に紹介します。
              </p>
              <ul className="space-y-4 relative z-10">
                {[
                  "外部コンサルではなく「中の人」",
                  "経営会議に参加し、意思決定に関与",
                  "成果にコミットする伴走型"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-1 rounded-full text-secondary">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {/* Placeholder graphics for solution */}
            <div className="bg-slate-50 h-40 rounded-xl flex items-center justify-center text-slate-300 border border-slate-100">Strategy</div>
            <div className="bg-slate-50 h-40 rounded-xl flex items-center justify-center text-slate-300 border border-slate-100">Tech</div>
            <div className="bg-slate-50 h-40 rounded-xl flex items-center justify-center text-slate-300 border border-slate-100">Team</div>
            <div className="bg-gradient-to-br from-[#CFB87C] to-[#A68B45] h-40 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform -translate-y-2">Growth</div>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-[#F8F9FA]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">ご利用の流れ</h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto opacity-70"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-slate-200 -z-10"></div>

          {[
            { step: "01", title: "相談", desc: "無料相談で課題をヒアリング" },
            { step: "02", title: "紹介", desc: "最適なCAIO候補を紹介" },
            { step: "03", title: "契約", desc: "御社と直接契約を締結" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white md:bg-transparent p-8 rounded-xl md:p-0 shadow-sm md:shadow-none">
              <div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-md relative z-10">
                <span className="font-serif italic text-secondary">{item.title}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 tracking-wide">Step {item.step}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-primary relative overflow-hidden py-24 text-center">
        {/* Background Decorative Elemens */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            まずは、<span className="text-gold-gradient">無料相談</span>から。
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            AI活用に関するお悩みや、どんなCAIOが必要か、<br />
            まずはお気軽にご相談ください。
          </p>
          <Button href="/contact" variant="gold" className="text-lg px-12 py-5 shadow-2xl hover:shadow-secondary/50">
            無料相談を予約する
          </Button>
          <div className="mt-10 text-xs text-gray-500">
            <p>※無理な勧誘は一切いたしません。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
