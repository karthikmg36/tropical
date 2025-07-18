export const Terms = () => {
    return (
        <div className="pt-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Terms & Conditions (AGB)</h1>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Last updated: {new Date().toLocaleDateString('de-DE')}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§1 Scope and Application</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                These General Terms and Conditions (AGB) apply to all contracts between Tropical Food Store
                                and customers for the delivery of goods via our online shop.
                            </p>
                            <p>
                                We do not acknowledge any customer terms and conditions that conflict with or deviate from these AGB,
                                unless we expressly agree to their validity in writing.
                            </p>
                            <p>
                                These AGB apply exclusively to entrepreneurs, legal entities under public law, or special funds under public law.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§2 Conclusion of Contract</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                The presentation of products in our online shop does not constitute a binding offer,
                                but an invitation to place an order.
                            </p>
                            <p>
                                By clicking the "Order Now" button, you place a binding order for the goods in your shopping cart.
                                The contract is concluded when we confirm your order via email.
                            </p>
                            <p>
                                We reserve the right to refuse orders, particularly in cases of obvious input errors or unavailability of goods.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§3 Prices and Payment</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                All prices shown include statutory VAT (19%) and are stated in Euros (€).
                            </p>
                            <p>
                                <strong>Payment methods accepted:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Cash on delivery (COD) - €2.50 additional fee</li>
                                <li>Bank transfer (Überweisung) - 2% discount for prepayment</li>
                                <li>PayPal</li>
                                <li>Credit card (Visa, Mastercard)</li>
                            </ul>
                            <p>
                                For prepayment orders, goods will be shipped after payment receipt.
                                Orders not paid within 7 days will be automatically cancelled.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§4 Delivery and Shipping</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                <strong>Delivery area:</strong> Germany-wide shipping. Local delivery available in Essen and surrounding areas.
                            </p>
                            <p>
                                <strong>Delivery times:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Standard delivery: 2-3 business days</li>
                                <li>Express delivery: 1-2 business days (additional €4.99)</li>
                                <li>Local delivery (Essen): Same day delivery possible (order before 2 PM)</li>
                            </ul>
                            <p>
                                <strong>Shipping costs:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Standard shipping: €3.99</li>
                                <li>Free shipping for orders over €50</li>
                                <li>Express shipping: €8.98</li>
                                <li>Local delivery (Essen): €2.50</li>
                            </ul>
                            <p>
                                Delivery is made to the address provided by the customer.
                                If delivery is not possible, the parcel will be deposited at a nearby collection point.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§5 Right of Withdrawal (Widerrufsrecht)</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Withdrawal Instruction</h3>
                                <p className="text-blue-800 dark:text-blue-300 text-sm leading-relaxed">
                                    You have the right to withdraw from this contract within 14 days without giving any reason.
                                    The withdrawal period expires after 14 days from the day on which you or a third party indicated by you,
                                    who is not the carrier, took possession of the goods.
                                </p>
                            </div>
                            <p>
                                <strong>Exceptions:</strong> The right of withdrawal does not apply to:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Perishable goods (fresh produce, dairy products)</li>
                                <li>Goods with limited shelf life</li>
                                <li>Opened food packages for hygiene reasons</li>
                            </ul>
                            <p>
                                To exercise your right of withdrawal, contact us at:
                                <br />Email: tropicalfoods830@yahoo.com
                                <br />Phone: 0201-8009-5818
                            </p>
                            <p>
                                Return shipping costs are borne by the customer unless the goods were defective or incorrectly delivered.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§6 Warranty and Liability</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                Statutory warranty rights apply. In case of defects, you may demand supplementary performance,
                                withdrawal from the contract, or price reduction.
                            </p>
                            <p>
                                <strong>Fresh produce guarantee:</strong> We guarantee freshness for at least the stated minimum shelf life.
                                If products arrive damaged or spoiled, we will replace them free of charge or provide a full refund.
                            </p>
                            <p>
                                <strong>Quality complaint procedure:</strong>
                            </p>
                            <ol className="list-decimal pl-6 space-y-1">
                                <li>Contact us within 24 hours of delivery</li>
                                <li>Provide photos of damaged/spoiled items</li>
                                <li>Keep items for inspection until resolution</li>
                                <li>We will arrange replacement or refund within 48 hours</li>
                            </ol>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§7 Data Protection</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                Personal data is processed in accordance with our Privacy Policy and applicable data protection laws (GDPR).
                            </p>
                            <p>
                                Order processing data is retained for 10 years to comply with commercial and tax law requirements.
                            </p>
                            <p>
                                For detailed information about data processing, see our{' '}
                                <a href="/privacy-policy" className="text-green-600 dark:text-green-400 hover:underline">
                                    Privacy Policy
                                </a>.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§8 Force Majeure</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                We are not liable for delays or failure to perform due to circumstances beyond our reasonable control,
                                including but not limited to natural disasters, strikes, governmental actions, or supplier failures.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§9 Dispute Resolution</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                The European Commission provides a platform for online dispute resolution:
                                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline ml-1">
                                    https://ec.europa.eu/consumers/odr/
                                </a>
                            </p>
                            <p>
                                We are not obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§10 Governing Law and Jurisdiction</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                These terms and conditions are governed by German law, excluding the UN Convention on Contracts
                                for the International Sale of Goods (CISG).
                            </p>
                            <p>
                                Place of jurisdiction for all disputes is Essen, Germany, provided the customer is an entrepreneur,
                                legal entity under public law, or special fund under public law.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">§11 Severability Clause</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <p>
                                Should individual provisions of these AGB be or become invalid, this shall not affect the validity
                                of the remaining provisions. Invalid provisions shall be replaced by valid provisions that come
                                closest to the economic purpose of the invalid provisions.
                            </p>
                        </div>
                    </section>

                    <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contact Information</h3>
                        <div className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                            <p><strong>Tropical Food Store</strong></p>
                            <p>266, Altendorfer Str., 45143 Essen, Germany</p>
                            <p>Email: tropicalfoods830@yahoo.com</p>
                            <p>Phone: 0201-8009-5818</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};