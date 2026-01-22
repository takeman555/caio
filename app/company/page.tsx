export default function CompanyPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-8 text-primary">運営会社</h1>
            <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <th className="py-4 px-6 bg-gray-50 text-left w-1/3">会社名</th>
                            <td className="py-4 px-6">キリロムデジタル株式会社</td>
                        </tr>
                        <tr>
                            <th className="py-4 px-6 bg-gray-50 text-left">代表取締役</th>
                            <td className="py-4 px-6">猪塚 武</td>
                        </tr>
                        <tr>
                            <th className="py-4 px-6 bg-gray-50 text-left">事業内容</th>
                            <td className="py-4 px-6">
                                ・AI開発・導入支援<br />
                                ・高度IT人材紹介（CAIO紹介サービス）<br />
                                ・デジタルトランスフォーメーション支援
                            </td>
                        </tr>
                        <tr>
                            <th className="py-4 px-6 bg-gray-50 text-left">許可番号</th>
                            <td className="py-4 px-6">（有料職業紹介事業）○○-ユ-○○○○○○</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
