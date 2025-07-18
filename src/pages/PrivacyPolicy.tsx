export const PrivacyPolicy = () => {
    return (
        <div className="pt-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy (Datenschutzerklärung)</h1>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Last updated: {new Date().toLocaleDateString('de-DE')}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">1. Data Controller (Verantwortlicher)</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-2">
                            <p><strong>Tropical Food Store</strong></p>
                            <p>266, Altendorfer Str.</p>
                            <p>45143 Essen, Germany</p>
                            <p><strong>Email:</strong> <a href="mailto:tropicalfoods830@yahoo.com" className="text-green-600 dark:text-green-400 hover:underline">tropicalfoods830@yahoo.com</a></p>
                            <p><strong>Phone:</strong> 0201-8009-5818</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">2. What Data We Collect</h2>

                        <div className="space-y-6">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Personal Data You Provide</h3>
                                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                                    <li>Name and contact information (email, phone, address)</li>
                                    <li>Order information and purchase history</li>
                                    <li>Payment information (processed by secure payment providers)</li>
                                    <li>Communication with our customer service</li>
                                </ul>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                    <strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract performance), Art. 6(1)(f) GDPR (legitimate interests)
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Automatically Collected Data</h3>
                                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                                    <li>IP address (anonymized after 7 days)</li>
                                    <li>Browser type and version</li>
                                    <li>Operating system</li>
                                    <li>Date and time of access</li>
                                    <li>Pages visited on our website</li>
                                </ul>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                    <strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interests for security and website optimization)
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">3. Cookies & Tracking</h2>

                        <div className="overflow-x-auto mb-4">
                            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                                <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700">
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Category</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Purpose</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Legal Basis</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Duration</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Necessary</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Website functionality, shopping cart</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Art. 6(1)(f) GDPR</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Session/1 year</td>
                                </tr>
                                <tr className="bg-gray-50 dark:bg-gray-700/50">
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Analytics</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Website improvement (anonymized)</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Art. 6(1)(a) GDPR (consent)</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">2 years</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Marketing</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Personalized ads (currently disabled)</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Art. 6(1)(a) GDPR (consent)</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">1 year</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                                <strong>International Data Transfer:</strong> Analytics data may be transferred to the USA (Google Analytics).
                                There is no adequacy decision from the EU Commission for the USA.
                                Transfer is based on Standard Contractual Clauses and additional safeguards.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">4. How We Use Your Data</h2>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                            <li>Processing and fulfilling your orders</li>
                            <li>Customer service and support</li>
                            <li>Sending order confirmations and shipping notifications</li>
                            <li>Fraud prevention and security</li>
                            <li>Website analytics and improvement (only with consent)</li>
                            <li>Legal compliance and obligations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">5. Data Sharing</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-4">
                            <p>We only share your data with:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Shipping partners:</strong> DHL, UPS (only delivery address and contact)</li>
                                <li><strong>Payment processors:</strong> PayPal, Stripe (payment data only)</li>
                                <li><strong>Email service:</strong> For order confirmations and customer service</li>
                                <li><strong>Analytics providers:</strong> Google Analytics (only with consent, anonymized)</li>
                                <li><strong>Legal authorities:</strong> When required by law</li>
                            </ul>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                All processors have signed data processing agreements (DPA) according to Art. 28 GDPR.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">6. Data Retention</h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customer Data</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">3 years after last order (tax law requirements)</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Order Data</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">10 years (commercial law requirements)</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Log Files</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">7 days (IP anonymized after)</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics Data</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">26 months (Google Analytics)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">7. Your Rights (Ihre Rechte)</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-4">
                            <p>Under GDPR, you have the following rights:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-2">
                                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                        <div>
                                            <strong>Access (Art. 15)</strong>
                                            <p className="text-sm">Request a copy of your personal data</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                        <div>
                                            <strong>Rectification (Art. 16)</strong>
                                            <p className="text-sm">Correct inaccurate personal data</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                        <div>
                                            <strong>Erasure (Art. 17)</strong>
                                            <p className="text-sm">Request deletion of your data</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                        <div>
                                            <strong>Portability (Art. 20)</strong>
                                            <p className="text-sm">Receive your data in structured format</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-2">
                                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                        <div>
                                            <strong>Restriction (Art. 18)</strong>
                                            <p className="text-sm">Limit processing of your data</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                        <div>
                                            <strong>Objection (Art. 21)</strong>
                                            <p className="text-sm">Object to data processing</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                        <div>
                                            <strong>Withdraw Consent (Art. 7)</strong>
                                            <p className="text-sm">Withdraw consent at any time</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                        <div>
                                            <strong>Complaint (Art. 77)</strong>
                                            <p className="text-sm">Lodge complaint with supervisory authority</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">8. Data Security</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3">
                            <p>We implement appropriate technical and organizational measures:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>SSL/TLS encryption for all data transmission</li>
                                <li>Regular security updates and monitoring</li>
                                <li>Access controls and staff training</li>
                                <li>Regular data backups and disaster recovery</li>
                                <li>Pseudonymization and anonymization where possible</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">9. Contact & Data Protection Officer</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-4">
                            <p>To exercise your rights or for privacy-related questions, contact us:</p>
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <p><strong>Email:</strong> <a href="mailto:tropicalfoods830@yahoo.com" className="text-green-600 dark:text-green-400 hover:underline">tropicalfoods830@yahoo.com</a></p>
                                <p><strong>Phone:</strong> 0201-8009-5818</p>
                                <p><strong>Mail:</strong> Tropical Food Store, 266, Altendorfer Str., 45143 Essen, Germany</p>
                            </div>
                            <p className="text-sm">
                                <strong>Supervisory Authority:</strong> Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br />
                                Website: <a href="https://www.ldi.nrw.de/" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline">www.ldi.nrw.de</a>
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">10. Changes to this Policy</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            We may update this privacy policy from time to time. The current version is always available on our website.
                            Significant changes will be communicated via email or website notification.
                        </p>
                    </section>

                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <p className="text-green-800 dark:text-green-200 font-medium">
                            💡 Questions about your data? Contact us anytime at tropicalfoods830@yahoo.com.
                            We respond to all privacy requests within 30 days as required by GDPR.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};