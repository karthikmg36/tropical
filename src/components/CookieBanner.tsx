import { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, Settings, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [consent, setConsent] = useState({
        necessary: true,
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        // Check if we're in the browser
        if (typeof window !== 'undefined' && window.localStorage) {
            const savedConsent = localStorage.getItem('cookieConsent');
            if (!savedConsent) {
                setIsVisible(true);
            } else {
                try {
                    const parsedConsent = JSON.parse(savedConsent);
                    setConsent(parsedConsent);
                    // Only load analytics if consent was given
                    if (parsedConsent.analytics) {
                        loadAnalytics();
                    }
                } catch (error) {
                    console.error('Error parsing cookie consent:', error);
                    setIsVisible(true);
                }
            }
        } else {
            // If localStorage is not available, show the banner
            setIsVisible(true);
        }
    }, []);

    const handleSave = (selectedConsent: typeof consent) => {
        const consentWithTimestamp = {
            ...selectedConsent,
            timestamp: new Date().toISOString(),
            version: '1.0'
        };

        // Check if localStorage is available
        if (typeof window !== 'undefined' && window.localStorage) {
            try {
                localStorage.setItem('cookieConsent', JSON.stringify(consentWithTimestamp));
            } catch (error) {
                console.error('Error saving cookie consent:', error);
            }
        }

        setIsVisible(false);

        // Load analytics only if consent is given
        if (selectedConsent.analytics) {
            loadAnalytics();
        }
    };

    const loadAnalytics = () => {
        console.log('Loading analytics scripts...');
        // Initialize Google Analytics here only after consent
        // gtag('config', 'GA_MEASUREMENT_ID', {
        //     anonymize_ip: true
        // });
    };

    const handleAcceptAll = () => {
        const fullConsent = {
            necessary: true,
            analytics: true,
            marketing: false // Keep marketing disabled as mentioned it's not used
        };
        handleSave(fullConsent);
    };

    const handleRejectAll = () => {
        const minimalConsent = {
            necessary: true,
            analytics: false,
            marketing: false
        };
        handleSave(minimalConsent);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl border-t border-gray-700">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                        <h3 className="font-bold flex items-center gap-2 mb-2">
                            <span className="text-green-400">🍪</span>
                            Cookies & Privacy
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            We use cookies to ensure basic website functionality and, with your consent,
                            to analyze website usage. We respect your privacy and comply with GDPR.{' '}
                            <Link to="/privacy-policy" className="text-green-400 hover:text-green-300 underline">
                                Read our Privacy Policy
                            </Link>
                        </p>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-gray-400 hover:text-white p-1"
                        aria-label="Close without saving preferences"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-4 mb-4">
                    <button
                        onClick={handleAcceptAll}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-sm font-medium transition-colors"
                    >
                        Accept All
                    </button>
                    <button
                        onClick={handleRejectAll}
                        className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-sm font-medium transition-colors"
                    >
                        Necessary Only
                    </button>
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="px-4 py-2 border border-gray-500 hover:border-gray-400 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Settings size={16} />
                        Customize
                        {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>

                {showDetails && (
                    <div className="mt-4 space-y-4 border-t border-gray-700 pt-4">
                        {/* Necessary Cookies */}
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-white">Necessary Cookies</h4>
                                    <Info size={16} className="text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-400 mb-2">
                                    Essential for website functionality, shopping cart, and security.
                                    Cannot be disabled.
                                </p>
                                <p className="text-xs text-gray-500">
                                    Legal basis: Art. 6(1)(f) GDPR (legitimate interest)
                                </p>
                            </div>
                            <div className="ml-4">
                                <div className="w-11 h-6 bg-green-600 rounded-full relative">
                                    <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-1 text-center">Always On</p>
                            </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-white">Analytics Cookies</h4>
                                    <Info size={16} className="text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-400 mb-2">
                                    Help us understand how visitors interact with our website (anonymized data only).
                                </p>
                                <p className="text-xs text-gray-500 mb-1">
                                    Legal basis: Art. 6(1)(a) GDPR (consent)
                                </p>
                                <p className="text-xs text-orange-400">
                                    ⚠️ Data may be transferred to USA (Google Analytics)
                                </p>
                            </div>
                            <div className="ml-4">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={consent.analytics}
                                        onChange={(e) => setConsent({...consent, analytics: e.target.checked})}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                                </label>
                            </div>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg opacity-60">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-white">Marketing Cookies</h4>
                                    <Info size={16} className="text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-400 mb-2">
                                    Used for personalized advertising. Currently not implemented on our website.
                                </p>
                                <p className="text-xs text-gray-500">
                                    Legal basis: Art. 6(1)(a) GDPR (consent)
                                </p>
                            </div>
                            <div className="ml-4">
                                <div className="w-11 h-6 bg-gray-600 rounded-full relative">
                                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-1 text-center">Disabled</p>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-3">
                            <p className="text-xs text-blue-200 leading-relaxed">
                                <strong>Your Rights:</strong> You can change your preferences anytime, withdraw consent,
                                or request data deletion. For questions, contact us at{' '}
                                <a href="mailto:tropicalfoods830@yahoo.com" className="text-blue-300 hover:text-blue-200 underline">
                                    tropicalfoods830@yahoo.com
                                </a>
                                {' '}or see our{' '}
                                <Link to="/cookies" className="text-blue-300 hover:text-blue-200 underline">
                                    Cookie Policy
                                </Link>.
                            </p>
                        </div>

                        {/* Action Buttons for Custom Settings */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <button
                                onClick={() => handleSave(consent)}
                                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md text-sm font-medium transition-colors"
                            >
                                Save My Preferences
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={handleRejectAll}
                                className="px-6 py-2 border border-gray-500 hover:border-gray-400 rounded-md text-sm font-medium transition-colors"
                            >
                                Reject Non-Essential
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};