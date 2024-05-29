import React from "react";
import { MainCarousel } from "../../components/homeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/homeSectionCarousel/HomeSectionCarousel";
import { MEN } from "../../components/homeSectionCard/HomeSectionCarousel";

export const Home = () => {
  return (
    <>
      <div>
        <MainCarousel />
        <div>
          <HomeSectionCarousel data={MEN} sectionName={"MEN"} />
          <HomeSectionCarousel data={MEN} sectionName={"WOMEN"} />
        </div>
      </div>
    </>
  );
};
