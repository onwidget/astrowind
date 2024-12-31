import Swiper from 'swiper';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';


document.addEventListener( 'DOMContentLoaded', function() {

      const thumbs_swiper = new Swiper(".thumbs", {
        modules:[FreeMode],
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      const main_swiper = new Swiper(".main", {
        modules: [Navigation,Thumbs],
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: thumbs_swiper,
        },
      });
});
