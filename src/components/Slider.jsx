import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import slides from '../data/slides';

export default function Slider() {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.alt} className='rounded shadow-sm' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

