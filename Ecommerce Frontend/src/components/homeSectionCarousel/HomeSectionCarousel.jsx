import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";

export default function HomeSectionCarousel({ data, sectionName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 4 },
    1024: { items: 5.5 },
  };

  const items = data.map((product) => (
    <div key={product.id}>
      <HomeSectionCard {...product} />
    </div>
  ));

  const handlePrev = () => {
    carouselRef.current.slidePrev();
  };
  //
  const handleNext = () => {
    carouselRef.current.slideNext();
  };

  const onSlideChanged = (event) => {
    setActiveIndex(event.item);
  };

  return (
    <div className="relative px-4 lg:px-8">
      <h1 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h1>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          onSlideChanged={onSlideChanged}
          ref={carouselRef}
        />

        {activeIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="absolute rounded bg-white shadow-lg top-[8rem] left-0 px-1 py-4"
          >
            <ArrowBackIosIcon />
          </button>
        )}
        {activeIndex !== data.length - 5 && (
          <button
            onClick={handleNext}
            className="absolute rounded bg-white shadow-lg top-[8rem] right-0 px-1 py-4"
          >
            <ArrowForwardIosIcon />
          </button>
        )}
      </div>
    </div>
  );
}
