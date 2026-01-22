"use client";

import Section from "@/components/Section";
import Button from "@/components/Button";
import { Mail, Phone, Calendar as CalendarIcon } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
                    <p className="text-xl">
                        AI活用や人材紹介に関するご相談をお待ちしております
                    </p>
                </div>
            </section>

            <Section className="bg-white">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">

                    {/* Form */}
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold text-primary mb-6">お問い合わせフォーム</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">会社名 <span className="text-red-500">*</span></label>
                                    <input type="text" id="company" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="例: 株式会社◯◯" />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">お名前 <span className="text-red-500">*</span></label>
                                    <input type="text" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="例: 山田 太郎" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="position" className="block text-sm font-bold text-gray-700 mb-2">役職 <span className="text-red-500">*</span></label>
                                    <input type="text" id="position" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="例: 代表取締役" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                                    <input type="email" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="example@company.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">電話番号</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="03-1234-5678" />
                                </div>
                                <div>
                                    <label htmlFor="employees" className="block text-sm font-bold text-gray-700 mb-2">従業員数 <span className="text-red-500">*</span></label>
                                    <select id="employees" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white">
                                        <option value="">選択してください</option>
                                        <option value="1-10">1-10名</option>
                                        <option value="11-50">11-50名</option>
                                        <option value="51-100">51-100名</option>
                                        <option value="101-300">101-300名</option>
                                        <option value="301+">301名以上</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="topic" className="block text-sm font-bold text-gray-700 mb-2">ご相談内容 <span className="text-red-500">*</span></label>
                                <select id="topic" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white">
                                    <option value="">選択してください</option>
                                    <option value="ai-start">AI活用を始めたい</option>
                                    <option value="recruit">AI人材を探している</option>
                                    <option value="info">まずは話を聞きたい</option>
                                    <option value="other">その他</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">詳細・ご質問</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="ご自由にご記入ください"></textarea>
                            </div>

                            <div className="pt-4">
                                <Button type="submit" variant="primary" className="w-full bg-secondary hover:bg-yellow-600 border-none font-bold text-lg">
                                    送信する
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Alternatives */}
                    <div className="md:w-1/3 space-y-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <Phone size={20} className="text-primary" />
                                お急ぎの方はお電話でも
                            </h3>
                            <p className="text-2xl font-bold text-primary mb-1">03-XXXX-XXXX</p>
                            <p className="text-sm text-gray-500">平日 10:00-18:00</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-primary">
                                <CalendarIcon size={20} />
                                オンライン相談を予約
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                ご都合の良い時間を選んで、30分の無料相談（Zoom）を予約できます。
                            </p>
                            <Button href="#" variant="secondary" className="w-full bg-white justify-center text-sm">
                                Calendlyで予約する
                            </Button>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}
