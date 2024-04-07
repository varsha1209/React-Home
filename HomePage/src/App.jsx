
import {React, useEffect } from "react";
import ApplyNowFooterSection from "./HomePages/ApplyNowFooterSection.jsx";
import BigBannerSection from "./HomePages/BigBannerSection.jsx";
import CreditFeatureSection from "./HomePages/CreditFeatureSection.jsx";
import DownloadAppBannerSection from "./HomePages/DownloadAppBannerSection.jsx";
import HeaderBannerSection from "./HomePages/HeaderBannerSection.jsx";
import InfoCardSection from "./HomePages/InfoCardSection.jsx";
import PageFooterSection from "./HomePages/PageFooterSection.jsx";
import PromotionListSection from "./HomePages/PromotionListSection.jsx";
import SecondBannerSection from "./HomePages/SecondBannerSection.jsx";
import { throttle } from "./utils/index.jsx";

export default function App() {

  const onScroll = throttle(() => {
    localStorage.setItem("sectionPosition", window.scrollY);
  }, 500);

  useEffect(() => {
    const storedSectionPosition = localStorage.getItem("sectionPosition");
    if (storedSectionPosition) {
      window.scrollTo({
        top: parseFloat(storedSectionPosition)
      });
    }
    setTimeout(() => {
      window.addEventListener("scroll", onScroll);
    }, 1200);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
      <>
        <HeaderBannerSection />
        <div class="py-12 md:py-[150px] second-banner-view">
          <SecondBannerSection />
          <PromotionListSection />
        </div>
        <CreditFeatureSection/>
        <InfoCardSection />
        <BigBannerSection />
        <DownloadAppBannerSection/>
        <PageFooterSection />
        <ApplyNowFooterSection/>
      </>
  );
}
