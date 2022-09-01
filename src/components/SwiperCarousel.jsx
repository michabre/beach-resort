// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const SwiperCarousel = ({ slides }) => {
  const slideItems = slides.frontmatter.features

  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {slideItems.map((item) => <SwiperSlide key={item.title}>{item.title}</SwiperSlide>)}
    </Swiper>
    </>
  )
}

export default SwiperCarousel