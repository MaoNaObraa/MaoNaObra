import './Gallery.css'
import {register} from 'swiper/element/bundle'
import { Swiper, SwiperSlide} from 'swiper/react'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const Gallery = ({images}) => {

    return ( 
        <>
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
            >
                {
                    images.map((image, index)=>(
                        <SwiperSlide key={index}>
                            <div style={{backgroundImage: `url('${image}')`}} className='caroussel-images'></div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
     );
}
 
export default Gallery;