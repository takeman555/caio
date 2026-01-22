"use client";

import Section from "@/components/Section";
import Button from "@/components/Button";
import { Check, Shield, Briefcase, Calendar, UserCheck, Clock, RefreshCcw, Users } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">サービス内容・料金</h1>
                    <p className="text-xl">
                        企業のフェーズやニーズに合わせた3つの紹介形態をご用意しています
                    </p>
                </div>
            </section>

            {/* Plans */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Plan 1 */}
                    <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-primary">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">顧問契約</h3>
                        </div>
                        <p className="text-gray-600 mb-6 flex-grow">
                            月1-4回のアドバイザリー業務を中心に、AI導入の戦略立案からサポートします。
                        </p>
                        <div className="text-3xl font-bold text-primary mb-2">
                            月額 20-50<span className="text-lg font-normal">万円〜</span>
                        </div>
                        <div className="mb-8 text-sm text-gray-500">※稼働時間により変動</div>
                        <Button href="/contact" variant="secondary" className="w-full text-center justify-center">
                            詳細を見る
                        </Button>
                    </div>

                    {/* Plan 2 */}
                    <div className="border-2 border-secondary rounded-2xl p-8 hover:shadow-xl transition-shadow transform md:-translate-y-4 bg-white relative flex flex-col">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                            人気
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-secondary">
                                <UserCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">社外役員</h3>
                        </div>
                        <p className="text-gray-600 mb-6 flex-grow">
                            取締役会に参加し、経営の意思決定にAIの知見を直接反映させます。
                        </p>
                        <div className="text-3xl font-bold text-primary mb-2">
                            月額 30-80<span className="text-lg font-normal">万円〜</span>
                        </div>
                        <div className="mb-8 text-sm text-gray-500">※責任範囲により変動</div>
                        <Button href="/contact" variant="primary" className="w-full text-center justify-center">
                            詳細を見る
                        </Button>
                    </div>

                    {/* Plan 3 */}
                    <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-primary">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">正社員採用</h3>
                        </div>
                        <p className="text-gray-600 mb-6 flex-grow">
                            フルタイムのメンバーとしてジョインし、実務遂行まで強力に推進します。
                        </p>
                        <div className="text-3xl font-bold text-primary mb-2">
                            年収 800<span className="text-lg font-normal">万円〜</span>
                        </div>
                        <div className="mb-8 text-sm text-gray-500">※スキル・経験により変動</div>
                        <Button href="/contact" variant="secondary" className="w-full text-center justify-center">
                            詳細を見る
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Pricing Table */}
            <Section className="bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">料金体系</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        紹介手数料は、クライアント企業様にご負担いただきます。<br />
                        CAIO候補者への手数料負担はありません。
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                    <table className="w-full">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-4 text-left">紹介形態</th>
                                <th className="p-4 text-left">紹介手数料</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="p-4 font-bold">顧問契約紹介</td>
                                <td className="p-4">初年度報酬総額の 30%</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">社外役員紹介</td>
                                <td className="p-4">初年度報酬総額の 35%</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">正社員紹介</td>
                                <td className="p-4">理論年収の 35%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-center text-sm text-gray-500">
                    <p className="mb-1">※ 成功報酬型：契約成立時のみ発生</p>
                    <p>※ 相談・面談は無料</p>
                </div>
            </Section>

            {/* Risk Reversal */}
            <Section className="bg-white">
                <div className="max-w-4xl mx-auto bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-primary mb-4">もし、合わなかったら？</h2>
                        <p className="text-gray-600">
                            「高い費用を払って失敗したくない」という不安を解消するための仕組みがあります。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                                <Clock size={24} />
                            </div>
                            <h3 className="font-bold mb-2">トライアル期間あり</h3>
                            <p className="text-sm text-gray-600">
                                最初の1ヶ月は「お試し期間」として、双方の相性を確認できます。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                                <Shield size={24} />
                            </div>
                            <h3 className="font-bold mb-2">途中解約OK</h3>
                            <p className="text-sm text-gray-600">
                                顧問契約の場合、1ヶ月前通知でいつでも契約終了が可能です。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                                <RefreshCcw size={24} />
                            </div>
                            <h3 className="font-bold mb-2">再マッチング対応</h3>
                            <p className="text-sm text-gray-600">
                                万が一合わない場合は、別のCAIO候補を追加費用なしでご紹介します。
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-primary font-bold">
                            私たちは「紹介して終わり」ではありません。<br className="md:hidden" />
                            御社のAI駆動経営が軌道に乗るまで伴走します。
                        </p>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <section className="bg-gray-900 text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">詳細なプロセスについては、<br className="md:hidden" />お問い合わせください</h2>
                    <Button href="/contact" variant="primary" className="bg-secondary hover:bg-yellow-600 border-none px-10">
                        お問い合わせ
                    </Button>
                </div>
            </section>
        </div>
    );
}
