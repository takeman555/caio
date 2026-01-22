export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-8 text-primary">プライバシーポリシー</h1>
            <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                    キリロムデジタル株式会社（以下「当社」）は、当社の提供するサービス（以下「本サービス」）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
                </p>
                <h2 className="text-xl font-bold mt-8 mb-4">1. 個人情報の収集方法</h2>
                <p className="mb-4">
                    当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの個人情報をお尋ねすることがあります。
                </p>
                <h2 className="text-xl font-bold mt-8 mb-4">2. 個人情報の利用目的</h2>
                <p className="mb-4">
                    当社が個人情報を収集・利用する目的は、以下のとおりです。
                    <ul className="list-disc pl-6 mt-2">
                        <li>当社サービスの提供・運営のため</li>
                        <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                        <li>重要なお知らせなど必要に応じたご連絡のため</li>
                    </ul>
                </p>
                {/* ... more generic policy text ... */}
                <p className="mt-8 text-sm text-gray-400">
                    ※これはプレースホルダーテキストです。正式なプライバシーポリシーに差し替えてください。
                </p>
            </div>
        </div>
    );
}
