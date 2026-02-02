import { useTranslation } from 'react-i18next';
import { strategicPartners, mediaPartners } from '../../constants';

const PartnersAndMedia = () => {
    const { t } = useTranslation();
    return (
        <div className="py-24 border-t border-slate-100 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Strategic Partners */}
                <div className="mb-20 text-center">
                    <h3 className="text-orange-600 font-bold mb-2">{t('partners.subtitle')}</h3>
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">{t('partners.title')}</h2>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                        {strategicPartners.map((partner, i) => (
                            <div key={i} className="group flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-8 md:h-10 w-auto object-contain opacity-40 group-hover:opacity-100 transition-all duration-300"
                                    style={{
                                        filter: 'grayscale(100%)',
                                        maxWidth: '140px'
                                    }}
                                    title={partner.name}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.filter = 'grayscale(0%)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.filter = 'grayscale(100%)';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Media Partners */}
                <div className="text-center pt-12 border-t border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-10">{t('partners.media_title')}</h2>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                        {mediaPartners.map((media, i) => (
                            <div key={i} className="group flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                                <img
                                    src={media.logo}
                                    alt={media.name}
                                    className="h-6 md:h-8 w-auto object-contain opacity-40 group-hover:opacity-100 transition-all duration-300"
                                    style={{
                                        filter: 'grayscale(100%)',
                                        maxWidth: '120px'
                                    }}
                                    title={media.name}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.filter = 'grayscale(0%)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.filter = 'grayscale(100%)';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersAndMedia;
