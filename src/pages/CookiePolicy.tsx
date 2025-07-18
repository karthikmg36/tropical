export const CookiePolicy = () => {
    return (
        <div className="pt-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Cookie Policy (Cookie-Richtlinie)</h1>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Last updated: {new Date().toLocaleDateString('de-DE')}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Was sind Cookies?</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen.
                            Sie helfen uns dabei, die Website zu verbessern und Ihnen eine bessere Nutzererfahrung zu bieten.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Welche Cookies verwenden wir?</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-6">
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700">
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Kategorie</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Zweck</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Rechtsgrundlage</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Speicherdauer</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        <strong>Notwendige Cookies</strong>
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        Grundlegende Funktionalität der Website
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        Art. 6(1)(f) DSGVO (berechtigtes Interesse)
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        Session/1 Jahr
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 dark:bg-gray-700/50">
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        <strong>Analyse-Cookies</strong>
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        Verbesserung der Website-Performance
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        Art. 6(1)(a) DSGVO (Einwilligung)
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        2 Jahre
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        <strong>Marketing-Cookies</strong>
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        Personalisierte Werbung (derzeit deaktiviert)
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        Art. 6(1)(a) DSGVO (Einwilligung)
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                                        1 Jahr
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Detaillierte Cookie-Informationen</h2>

                        <div className="space-y-6">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Notwendige Cookies</h3>
                                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                                    <li><strong>cookieConsent:</strong> Speichert Ihre Cookie-Einstellungen</li>
                                    <li><strong>sessionId:</strong> Ermöglicht die Funktion des Warenkorbs</li>
                                    <li><strong>csrfToken:</strong> Schutz vor Cross-Site-Request-Forgery-Angriffen</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analyse-Cookies (nur mit Ihrer Einwilligung)</h3>
                                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                                    <li><strong>Google Analytics:</strong> Anonymisierte Besucherstatistiken</li>
                                    <li><strong>_ga:</strong> Unterscheidet Benutzer (2 Jahre)</li>
                                    <li><strong>_gat:</strong> Begrenzt die Anfragerate (1 Minute)</li>
                                </ul>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                    <strong>Datenübertragung:</strong> Daten können in die USA übertragen werden (kein Angemessenheitsbeschluss).
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ihre Rechte</h2>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                            <li>Sie können Ihre Cookie-Einstellungen jederzeit ändern</li>
                            <li>Sie können Cookies in Ihrem Browser löschen</li>
                            <li>Sie können Ihre Einwilligung jederzeit widerrufen</li>
                            <li>Sie können Browser-Einstellungen so konfigurieren, dass Cookies blockiert werden</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Browser-Einstellungen</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            Sie können Cookies in Ihrem Browser verwalten:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                            <li><strong>Chrome:</strong> Einstellungen → Erweitert → Datenschutz und Sicherheit → Cookies</li>
                            <li><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
                            <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies verwalten</li>
                            <li><strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Kontakt</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Wenn Sie Fragen zu unserer Cookie-Nutzung haben, kontaktieren Sie uns unter:
                        </p>
                        <div className="mt-4 text-gray-700 dark:text-gray-300">
                            <p><strong>Email:</strong> tropicalfoods830@yahoo.com</p>
                            <p><strong>Telefon:</strong> 0201-8009-5818</p>
                            <p><strong>Adresse:</strong> 266, Altendorfer Str., 45143 Essen, Germany</p>
                        </div>
                    </section>

                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <p className="text-green-800 dark:text-green-200 font-medium">
                            💡 Tipp: Sie können Ihre Cookie-Einstellungen jederzeit über unser Cookie-Banner oder durch Löschen der Browser-Cookies ändern.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};