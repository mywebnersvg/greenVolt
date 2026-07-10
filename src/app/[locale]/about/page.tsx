import Footer from '@/app/components/Footer';
import {  useTranslations } from 'next-intl';
import { FC } from 'react';



const AboutPage:FC = () => {


  const t = useTranslations('AboutPage');

  return (
    <div className="w-full bg-[#0A1210] pb-5">
      <div className="px-5">
        <h1 className="text-white text-2xl font-bold">{t('title')}</h1>
        <p className="text-white text-base font-normal font-sora">{t('description')}</p>
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
