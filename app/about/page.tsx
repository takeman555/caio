export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-8 text-primary">CAIO紹介サービスとは</h1>
            <p className="mb-4">
                AI技術の進化により、経営の在り方が根本から変わろうとしています。
                しかし、AIと経営の両方を理解し、実践できる人材は極めて稀少です。
            </p>
            <p className="mb-4">
                CAIO紹介サービスは、AI駆動経営を志向するすべての企業に対し、
                最適なパートナー（CAIO: Chief AI Officer）をご紹介することで、
                企業の変革と成長を強力に支援します。
            </p>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-bold mb-4">私たちのミッション</h2>
                <p className="text-lg font-bold text-secondary mb-2">AI駆動経営を、すべての企業へ。</p>
                <p className="text-gray-600">
                    規模や業種に関わらず、すべての企業がテクノロジーの恩恵を受け、競争力を高められる社会を目指します。
                </p>
            </div>
        </div>
    );
}
