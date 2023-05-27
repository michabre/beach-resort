// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './SwiperCarousel.css'

const SwiperCarousel = ({ slides }) => {
  const slideItems = slides

  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {slideItems.map((item) => {
        return (
          <SwiperSlide key={item.title}>
            <div>
              <div className='image-content'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              
              <img src="https://bulma.io/images/placeholders/1280x960.png" />
              
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
    </>
  )
}

export default SwiperCarousel