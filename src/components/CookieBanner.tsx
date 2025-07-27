import { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, Settings, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export const CookieBanner = () => {
    const { i18n, t } = useTranslation();
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
                            {t('cookie.title')}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {t('cookie.description')}{' '}
                            <Link to="/privacy-policy" className="text-green-400 hover:text-green-300 underline">
                                {t('cookie.readpolicy')}
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
                        {t('cookie.accept')}
                    </button>
                    <button
                        onClick={handleRejectAll}
                        className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-sm font-medium transition-colors"
                    >
                        {t('cookie.necessary')}
                    </button>
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="px-4 py-2 border border-gray-500 hover:border-gray-400 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Settings size={16} />
                        {t('cookie.customize')}
                        {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>

                {showDetails && (
                    <div className="mt-4 space-y-4 border-t border-gray-700 pt-4">
                        {/* Necessary Cookies */}
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-white">{t('cookie.necessarycookie')}</h4>
                                    <Info size={16} className="text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-400 mb-2">
                                    {t('cookie.essential')}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {t('cookie.legal')}
                                </p>
                            </div>
                            <div className="ml-4">
                                <div className="w-11 h-6 bg-green-600 rounded-full relative">
                                    <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-1 text-center">{t('cookie.always')}</p>
                            </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-white">{t('cookie.analytics')}</h4>
                                    <Info size={16} className="text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-400 mb-2">
                                    {t('cookie.analyticshelp')}
                                </p>
                                <p className="text-xs text-gray-500 mb-1">
                                    {t('cookie.analyticslegal')}
                                </p>
                                <p className="text-xs text-orange-400">
                                    ⚠️ {t('cookie.analyticsdata')}
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
                                    <h4 className="font-semibold text-white">{t('cookie.marketing')}</h4>
                                    <Info size={16} className="text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-400 mb-2">
                                    {t('cookie.marketingdesc')}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {t('cookie.marketinglegal')}
                                </p>
                            </div>
                            <div className="ml-4">
                                <div className="w-11 h-6 bg-gray-600 rounded-full relative">
                                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-1 text-center">{t('cookie.disable')}</p>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-3">
                            <p className="text-xs text-blue-200 leading-relaxed">
                                <strong>{t('cookie.rights')}</strong> {t('cookie.rightsdesc')}{' '}
                                <a href="mailto:tropicalfoods830@yahoo.com" className="text-blue-300 hover:text-blue-200 underline">
                                    tropicalfoods830@yahoo.com
                                </a>
                                {' '}{t('cookie.seeour')}{' '}
                                <Link to="/cookies" className="text-blue-300 hover:text-blue-200 underline">
                                    {t('cookie.policy')}
                                </Link>.
                            </p>
                        </div>

                        {/* Action Buttons for Custom Settings */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <button
                                onClick={() => handleSave(consent)}
                                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md text-sm font-medium transition-colors"
                            >
                                {t('cookie.preference')}
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors"
                            >
                                {t('cookie.accept')}
                            </button>
                            <button
                                onClick={handleRejectAll}
                                className="px-6 py-2 border border-gray-500 hover:border-gray-400 rounded-md text-sm font-medium transition-colors"
                            >
                                {t('cookie.nonessential')}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};