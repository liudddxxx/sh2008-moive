<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- 插槽（坑） -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
    mounted(){
        this.$nextTick(()=>{
            new Swiper(".swiper-container",{
                slidesPerView: 4,
                // spaceBetween: 10,
                // // init: false,
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },
                // breakpoints: {
                //     300: {
                //     slidesPerView: 2,
                //     spaceBetween: 20,
                //     },
                //     374: {
                //     slidesPerView: 4,
                //     spaceBetween: 40,
                //     },
                //     400: {
                //     slidesPerView: 5,
                //     spaceBetween: 50,
                //     },
                // }
            })
        })
    }
}
</script>