import { useTranslation } from 'react-i18next';

const LandingFooter = () => {
    const { t } = useTranslation();
    const links = t('footer.links', { returnObjects: true }) as string[];

    return (
        <footer className="bg-white py-12 border-t border-slate-100 text-center">
            <div className="flex justify-center gap-8 mb-8 text-slate-500 text-sm font-medium">
                {links.map((link, i) => (
                    <a key={i} href="#" className="hover:text-slate-900 transition-colors">{link}</a>
                ))}
            </div>
            <p className="text-slate-400 text-xs">{t('footer.rights')}</p>
        </footer>
    );
};

export default LandingFooter;
