"use client";

import Section from "@/components/Section";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
    category: string;
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        category: "サービス",
        question: "CAIOとCIOの違いは何ですか？",
        answer: "CIO（最高情報責任者）は既存のITシステムの管理・運用が主たる役割ですが、CAIO（最高AI責任者）はAI技術を活用した新しいビジネス価値の創出や組織全体の変革（DX）をミッションとします。守りではなく「攻め」のITトップ人材と考えてください。"
    },
    {
        category: "サービス",
        question: "どのような人材が登録していますか？",
        answer: "AIベンチャーのCTO経験者、大手企業のDX推進責任者、アカデミアでAI研究実績のある技術顧問など、技術とビジネスの両方に精通した希少な人材が登録しています。"
    },
    {
        category: "サービス",
        question: "紹介までどのくらいかかりますか？",
        answer: "通常、ヒアリングから最初の候補者ご提案まで1〜2週間程度いただいています。"
    },
    {
        category: "料金",
        question: "相談は無料ですか？",
        answer: "はい、初回のご相談および候補者とのご面談は完全に無料です。契約が成立するまで費用は一切かかりません。"
    },
    {
        category: "料金",
        question: "紹介手数料以外に費用はかかりますか？",
        answer: "いいえ、原則として紹介手数料以外の費用は発生しません。旅費交通費など実費が発生する場合は、別途ご相談となります。"
    },
    {
        category: "料金",
        question: "契約が成立しなかった場合は？",
        answer: "完全成功報酬型ですので、契約に至らなかった場合、費用はいただきません。"
    },
    {
        category: "契約",
        question: "契約期間に縛りはありますか？",
        answer: "顧問契約の場合、通常は3ヶ月〜6ヶ月単位での更新とさせていただくことが多いですが、柔軟に調整可能です。"
    },
    {
        category: "契約",
        question: "合わなかった場合はどうなりますか？",
        answer: "トライアル期間（最初の1ヶ月）を設けることが可能です。また、万が一相性が合わなかった場合は、追加費用なしで別の候補者をご紹介する再マッチング制度もございます。"
    },
    {
        category: "契約",
        question: "途中で契約を終了することはできますか？",
        answer: "顧問契約・業務委託契約の場合は、1ヶ月前の予告をもって中途解約が可能な条項を盛り込むことが一般的です。"
    },
    {
        category: "対象",
        question: "どのような企業が利用していますか？",
        answer: "従業員数十名の中小企業から、上場企業、スタートアップまで幅広くご利用いただいています。特に「AIを活用したいが、社内にリーダーがいない」という課題を持つ企業様に最適です。"
    },
    {
        category: "対象",
        question: "地方の企業でも利用できますか？",
        answer: "はい、可能です。多くのCAIO候補者はリモートワークと定期的な出社を組み合わせて対応可能です。完全リモートでの顧問契約事例も多数ございます。"
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <section className="bg-primary text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">よくある質問</h1>
                    <p className="text-xl">
                        お客様から寄せられる質問をまとめました
                    </p>
                </div>
            </section>

            <Section>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => toggle(index)}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-bold text-secondary bg-yellow-50 px-2 py-1 rounded">
                                        {faq.category}
                                    </span>
                                    <span className="font-bold text-lg text-primary">{faq.question}</span>
                                </div>
                                {openIndex === index ? (
                                    <ChevronUp className="text-gray-400 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6 pt-0 text-gray-600 border-t border-gray-50 mt-2">
                                    <div className="pt-4 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
