<template>
    <div class="box">
        <p><span>ID:</span>&emsp;{{song.id}}</p>
        <p><span>Name:</span>&emsp;{{song.name}}</p>
        <p><span>Auther:</span>&emsp;{{song.singer}}</p>
        <div class="img">
            <img class="bg" :src="song.pic" alt="">
            <img class="above" :src="song.pic" alt="">
        </div>
    </div>
</template>
<script>
import {swiperSong} from '@/api/index.js'
export default {
    data() {
        return{
            song:{}
        }
    },
    mounted() {
        swiperSong(`song?key=579621905&id=${this.$route.params.id}`).then((value) => {
            this.song = value.data
            // console.log(value)
        })
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    padding: 10px;
}
.img{
    width: 100%;
    position: relative;
}
.img img.bg{
    width: 100%;
}
.img img.above{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 2px 0 5px 5px pink,0px 2px 5px 5px pink;
    width: 200px;
    z-index: 10
}
p span{
    font-weight: 800;
}
</style>


