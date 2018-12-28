<template>
    <div class="home">
        <div class="main">
            <!-- 轮播图 -->
            <page-swiper></page-swiper>
            <!-- 电台列表 -->
            <div class="box">
                <borad-list :distSongs='distSongs'></borad-list>
                <hot-list></hot-list>
            </div>
            <page-bottom></page-bottom>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import PageSwiper from '@/components/page_swiper'

import boradList from '@/components/home/boradList'
import hotList from '@/components/home/hotList'
import PageBottom from '@/components/page_bottom'

import {distSongs} from '@/api/index'
export default {
    components:{PageSwiper,boradList,hotList,PageBottom},
    data() {
        return {
            distSongs:{}
        }
    },
    mounted() {
        let paramsObj = {
            key:'579621905',
            s:'电台',
            limit:'2',
            offset:'0',
            type:'song'
        }
        distSongs('search',paramsObj).then((value) => {
            this.distSongs = value.data
            // console.log(this.distSongs)
        })
    }
}
</script>
<style scoped>
.box{
    padding: 8px;
}
</style>


