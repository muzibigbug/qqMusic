<template>
    <div class="">
        <!-- 轮播图 -->
        <div class="swiper" >
            <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(img,index) in swiperImg" :key="index">
                      <!-- 动态路由传参 -->
                      <router-link :to="'/swiper_item/'+img.id">
                          <img :src="img.pic" alt="">
                      </router-link>
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
        
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import {swiperSongs} from '@/api/index.js'
export default {
    data() {
        return {
            swiperImg:{}
        }
    },
    mounted() {
        swiperSongs('songList?key=579621905&id=1147906982').then((value) => {
            this.swiperImg = value.data.songs.slice(0,4)
            // console.log(this.swiperImg)
        })
    },
    watch:{
        swiperImg(newVal) {
            // 解决初始化dom数据的渲染
            this.$nextTick(() => {
                var mySwiper = new Swiper ('.swiper-container', {
                  direction: 'horizontal', // 水平切换选项
                  loop: true, // 循环模式选项
                  observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            　　  observeParents:true,//修改swiper的父元素时，自动初始化swiper
                  // 如果需要分页器
                  pagination: {
                    el: '.swiper-pagination',
                  },
                  autoplay : {
                      delay: 1000,
                   　　disableOnInteraction: false
                  },
                })
            })
        }
    }
}
</script>
<style scoped>
.swiper{
    /* border: 1px solid red; */
}
.swiper-container {
  /* width: 600px; */
  height: 150px;
}
.swiper-container img{
    width: 100%;
    height: 100%;
}

</style>


