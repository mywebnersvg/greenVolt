import AITools from "../components/AITools";
import BannerInfo from "../components/BannerInfo";
import BannerSection from "../components/BannerSection";
import BottomBanner from "../components/BottomBanner";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ReviewSection from "../components/ReviewSection";

export default function Home() {
  return (
    <>
      <div className="w-full bg-[#0A1210] pb-5">
        <div className="px-5">
          <HeroSection />
          <BannerSection />
          <AITools />
          <BottomBanner />
        </div>

        <BannerInfo />
        <div className="px-5">
          <ReviewSection />
          <FAQ />
        </div>
        <Footer />
      </div>
    </>
  );
}
