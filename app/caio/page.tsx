"use client";

import Section from "@/components/Section";
import Button from "@/components/Button";
import { Check, X as XIcon, Minimize, TrendingUp, Cpu, Users, Calendar } from "lucide-react";

export default function CaioPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        CAIO (Chief AI Officer) とは
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                        AI駆動経営の司令塔。技術と経営の橋渡しを行い、<br />
                        企業の変革をリードする最高AI責任者です。
                    </p>
                </div>
            </section>

            {/* Role */}
            <Section className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">CAIOの3つの役割</h2>
                    <p className="text-gray-600">経営視点と技術視点を併せ持ち、組織全体を変革します</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <TrendingUp size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-primary">AI戦略の策定</h3>
                        <p className="text-sm text-gray-600">
                            経営課題をAIでどう解決するか、投資対効果の高いロードマップを描きます。
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <Cpu size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-primary">技術実装の監督</h3>
                        <p className="text-sm text-gray-600">
                            適切な技術選定、PoCの実施、本番運用の品質管理を統括します。
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-primary">組織変革の推進</h3>
                        <p className="text-sm text-gray-600">
                            社員のAIリテラシー向上、業務プロセスの再構築をリードします。
                        </p>
                    </div>
                </div>
            </Section>

            {/* Comparison */}
            <Section className="bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">従来の選択肢との違い</h2>
                </div>

                <div className="max-w-4xl mx-auto overflow-x-auto">
                    <table className="w-full bg-white rounded-xl shadow-sm border-collapse">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 md:p-6 text-left border-b border-primary-light"></th>
                                <th className="p-4 md:p-6 text-center border-b border-primary-light w-1/4">外部コンサル</th>
                                <th className="p-4 md:p-6 text-center border-b border-primary-light w-1/4">正社員CIO</th>
                                <th className="p-4 md:p-6 text-center border-b border-secondary/50 bg-secondary text-white w-1/4">CAIO</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-700">コミットメント</td>
                                <td className="p-4 md:p-6 text-center text-gray-500">△ 外部</td>
                                <td className="p-4 md:p-6 text-center text-gray-500">◎ 内部</td>
                                <td className="p-4 md:p-6 text-center bg-yellow-50 font-bold text-primary">○ 中の人</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-700">コスト</td>
                                <td className="p-4 md:p-6 text-center text-gray-500">× 高額</td>
                                <td className="p-4 md:p-6 text-center text-gray-500">× 高額</td>
                                <td className="p-4 md:p-6 text-center bg-yellow-50 font-bold text-primary">○ 柔軟</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-700">即戦力</td>
                                <td className="p-4 md:p-6 text-center text-gray-500">○ ある</td>
                                <td className="p-4 md:p-6 text-center text-gray-500">△ 採用難</td>
                                <td className="p-4 md:p-6 text-center bg-yellow-50 font-bold text-primary">◎ 高い</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 font-bold text-gray-700">柔軟性</td>
                                <td className="p-4 md:p-6 text-center text-gray-500">△ 普通</td>
                                <td className="p-4 md:p-6 text-center text-gray-500">× 固定</td>
                                <td className="p-4 md:p-6 text-center bg-yellow-50 font-bold text-primary">◎ 高い</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* First 90 Days */}
            <Section className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">CAIOが最初の90日でやること</h2>
                    <p className="text-gray-600">着任直後から具体的アクションを開始します</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Phase 1 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                        <div className="md:w-1/4 flex-shrink-0">
                            <div className="bg-primary text-white py-2 px-4 rounded-lg inline-block font-bold">Day 1-30</div>
                            <h3 className="text-xl font-bold mt-2">現状把握</h3>
                        </div>
                        <div className="md:w-3/4 bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-secondary" />
                                    経営課題の深掘りヒアリング
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-secondary" />
                                    業務フロー・情報システムの棚卸
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-secondary" />
                                    AI適用可能領域の洗い出し
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Connectors (Visual only) */}
                    <div className="hidden md:block absolute left-[8.5rem] h-8 border-l-2 border-dashed border-gray-300 -mt-6"></div>

                    {/* Phase 2 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                        <div className="md:w-1/4 flex-shrink-0">
                            <div className="bg-primary text-white py-2 px-4 rounded-lg inline-block font-bold">Day 31-60</div>
                            <h3 className="text-xl font-bold mt-2">戦略策定</h3>
                        </div>
                        <div className="md:w-3/4 bg-gray-50 p-6 rounded-xl border-l-4 border-secondary">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-primary" />
                                    優先度の高いAI活用施策を3つに絞り込み
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-primary" />
                                    PoC（実証実験）の設計・実施
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-primary" />
                                    投資対効果の試算
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4 flex-shrink-0">
                            <div className="bg-primary text-white py-2 px-4 rounded-lg inline-block font-bold">Day 61-90</div>
                            <h3 className="text-xl font-bold mt-2">実装着手</h3>
                        </div>
                        <div className="md:w-3/4 bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-secondary" />
                                    本格導入の実装開始
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-secondary" />
                                    KPI設定と効果測定の仕組み構築
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-secondary" />
                                    社内展開のロードマップ策定
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <div className="inline-block bg-primary/5 text-primary p-6 rounded-2xl font-bold text-lg border border-primary/10">
                            90日後、あなたの会社には<br />
                            「AI活用の道筋」と「実行できる体制」が整います。
                        </div>
                    </div>

                </div>
            </Section>

            {/* CTA */}
            <section className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">
                        うちの会社にもCAIOは必要？
                    </h2>
                    <Button href="/contact" variant="primary" className="bg-secondary text-white hover:bg-yellow-600 border-none px-10">
                        無料相談する
                    </Button>
                </div>
            </section>
        </div>
    );
}
