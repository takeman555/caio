import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold mb-4 block">
                            CAIO<span className="text-secondary">.</span>Service
                        </Link>
                        <p className="text-gray-300 text-sm mb-4">
                            キリロムデジタル株式会社
                            <br />
                            AI駆動経営を、あなたの会社に。
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold mb-4 text-base">サービス</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-white transition-colors">CAIO紹介サービスとは</Link></li>
                            <li><Link href="/caio" className="hover:text-white transition-colors">CAIOとは</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">料金・プラン</Link></li>
                            <li><Link href="/experts" className="hover:text-white transition-colors text-gray-500 pointer-events-none">エキスパート紹介 (Comming Soon)</Link></li>
                            <li><Link href="/cases" className="hover:text-white transition-colors text-gray-500 pointer-events-none">導入事例 (Comming Soon)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-base">サポート</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/faq" className="hover:text-white transition-colors">よくある質問</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
                            <li><Link href="/company" className="hover:text-white transition-colors">運営会社</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-base">お問い合わせ</h3>
                        <div className="text-sm text-gray-300">
                            <p className="mb-2">お急ぎの方はお電話でも</p>
                            <p className="text-xl font-bold text-white mb-4">03-XXXX-XXXX</p>
                            <p className="text-xs">平日 10:00-18:00</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Kirirom Digital Inc. All rights reserved.</p>
                    <p className="mt-2 text-xs">有料職業紹介事業 許可番号: ○○-ユ-○○○○○○</p>
                </div>
            </div>
        </footer>
    );
}
