import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const items = mainCarouselData.map((items) => (
  <img
    src={items.src}
    className="w-full h-[30rem] object-cover"
    role="presentation"
    alt=""
  />
));

export const MainCarousel = () => (
  <AliceCarousel
    disableButtonsControls
    autoPlay
    autoPlayInterval="2000"
    animationType="fadeout"
    animationDuration={"500"}
    infinite
    items={items}
    controlsStrategy="alternate"
  />
);
