// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction:false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://imgur.com/CuOe4SJ.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/LjWF0Qy.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/vFi0n0R.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/K4nGddE.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/455E21P.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/iR6783G.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/VppB18E.png" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel;