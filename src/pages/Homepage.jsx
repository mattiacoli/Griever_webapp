import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

export default function Homepage() {
  return (
    <div className="homepage ">
      <div className="welcome text-center">
        <h1>GRIEVER</h1>
        <h3>LOVES SHY GUY</h3>
        <p>Benvenuti nella pagina dei ragazzi timidi</p>
      </div>

      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img src="/assets/img/DSC_0139.JPG" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/DSC_0142.JPG" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/DSC_0171.JPG" alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
