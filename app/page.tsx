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
      <section className="relative bg-[#1E3A5F] text-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI駆動経営を、<br />
              あなたの会社に。
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              経営×AI のプロフェッショナルを<br />
              御社の「中の人」として紹介します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" className="bg-secondary text-white hover:bg-yellow-600 border-none">
                無料相談を予約する
              </Button>
              <Button href="/services" variant="secondary" className="text-white border-white hover:bg-white hover:text-primary">
                サービス詳細を見る
              </Button>
            </div>
            <p className="mt-8 text-sm text-gray-400">
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
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-400/20 to-secondary/20 rounded-full blur-3xl absolute" />
            <div className="relative z-10 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-300">Target</div>
                  <div className="font-bold text-lg">売上/生産性向上</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-white/20 rounded-full w-full overflow-hidden">
                  <motion.div
                    className="h-full bg-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
                <div className="flex justify-between text-sm">
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
          <h2 className="text-2xl font-bold text-primary mb-2">運営会社について</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
              {/* Placeholder for CEO Image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">代表写真</div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-1">キリロムデジタル株式会社</h3>
              <p className="text-lg font-bold text-primary mb-4">代表取締役 猪塚 武</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・vKirirom Japan株式会社 代表取締役</li>
                <li>・讃岐グローバルフォーラム 主催</li>
                <li>・生成AIフェス 2025/2026 主催</li>
                <li>・EO（起業家機構）メンバー</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-sm text-gray-500 mb-1">生成AIフェス</div>
              <div className="text-xs text-gray-400 mb-2">参加者数</div>
              <div className="text-3xl font-bold text-primary">200<span className="text-lg">名+</span></div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-sm text-gray-500 mb-1">讃岐グローバル</div>
              <div className="text-xs text-gray-400 mb-2">フォーラム</div>
              <div className="text-3xl font-bold text-primary">4<span className="text-lg">日間開催</span></div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-sm text-gray-500 mb-1">登録CAIO</div>
              <div className="text-xs text-gray-400 mb-2">候補者数</div>
              <div className="text-3xl font-bold text-primary">10<span className="text-lg">名+</span></div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">※サービス実績ではなく「人と組織の信用」で担保</p>
        </div>
      </Section>

      {/* Problem Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">こんな課題、ありませんか？</h2>
          <p className="text-gray-600">AI活用に踏み出せない多くの経営者が抱える悩み</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <HelpCircle className="w-12 h-12 text-secondary mb-4" />,
              title: "AIを導入したいが、何から始めればいいかわからない"
            },
            {
              icon: <Users className="w-12 h-12 text-secondary mb-4" />,
              title: "社内にAIがわかる人材がいない"
            },
            {
              icon: <TrendingUp className="w-12 h-12 text-secondary mb-4" />,
              title: "コンサルは高いし、成果が見えない"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <p className="font-bold text-lg leading-relaxed">{item.title}</p>
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
              <span className="text-secondary">「中の人」</span>になります。
            </h2>
            <div className="bg-[#1E3A5F] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-4">CAIO = Chief AI Officer</h3>
              <p className="mb-6 leading-relaxed">
                経営視点でAI活用を推進できるハイレベル人材を、御社に紹介します。
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" />
                  <span>外部コンサルではなく「中の人」</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" />
                  <span>経営会議に参加し、意思決定に関与</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" />
                  <span>成果にコミットする伴走型</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {/* Placeholder graphics for solution */}
            <div className="bg-gray-100 h-40 rounded-xl flex items-center justify-center text-gray-400">Strategy</div>
            <div className="bg-gray-100 h-40 rounded-xl flex items-center justify-center text-gray-400">Tech</div>
            <div className="bg-gray-100 h-40 rounded-xl flex items-center justify-center text-gray-400">Team</div>
            <div className="bg-secondary/20 h-40 rounded-xl flex items-center justify-center text-primary font-bold">Growth</div>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">ご利用の流れ</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-300 -z-10"></div>

          {[
            { step: "01", title: "相談", desc: "無料相談で課題をヒアリング" },
            { step: "02", title: "紹介", desc: "最適なCAIO候補を紹介" },
            { step: "03", title: "契約", desc: "御社と直接契約を締結" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white md:bg-transparent p-6 rounded-xl md:p-0">
              <div className="w-24 h-24 bg-white border-4 border-secondary rounded-full flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-sm">
                {item.title}
              </div>
              <h3 className="text-xl font-bold mb-2">Step {item.step}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            まずは、無料相談から。
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            AI活用に関するお悩みや、どんなCAIOが必要か、<br />
            まずはお気軽にご相談ください。
          </p>
          <Button href="/contact" variant="primary" className="bg-secondary text-white hover:bg-yellow-600 border-none text-lg px-10 py-5">
            無料相談を予約する
          </Button>
          <div className="mt-8 text-sm text-gray-400">
            <p>※無理な勧誘は一切いたしません。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
