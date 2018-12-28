<template>
    <div class="boradList">
        <h2 class="list_title">热门歌单</h2>
        <ul class="mod_twocol_list ">
            <li class="list_li" v-for="song in hotSongList" :key="song.id">
                <router-link :to="{name:'hot_item',params:{name:song.name,imgg:song.pic,count:song.playCount,creatorr:song.creator}}">
                    <span class="listen_count">{{song.playCount | ten()}}</span>
                    <img :src="song.pic"  alt="">
                    <h3 class="list_tit">{{song.name}}</h3>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {hotSongs} from '@/api/index'
export default {
    data() {
        return{
            hotSongList:{}
        }
    },
    mounted() {
        hotSongs('hotSongList?key=579621905&categoryId=10000000&sortId=3&limit=20').then((value) => {
            this.hotSongList = value.data
            // console.log(this.hotSongList)
        })
    },
    filters: {
        //播放量为多少万
        ten(currentData) {
            return currentData/10000+'万'
        }
    }
}
</script>
<style scoped>
.list_title{
    font-size: 16px;
    color: #000;
    margin-bottom: 11px;
    font-weight: normal;
}
.mod_twocol_list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.mod_twocol_list li{
    position: relative;
    width: 50%;
    -webkit-box-sizing: border-box;
    margin-bottom: 10px;
    overflow: hidden;
    width: 49%;
    background-color: #fff;
    padding-bottom: 10px;
}
.list_li img{
    width: 100%;
}
.list_tit {
    height: 36px;
    line-height: 18px;
    white-space: normal;
    word-wrap: break-word;
    font-size: 14px;
    padding-left: 8px;
    padding-top: 5px;
}
.listen_count {
    position: absolute;
    left: 5px;
    bottom: 60px;
    display: block;
    line-height: 12px;
    color: #fff;
    font-size: 14px;
}
</style>
