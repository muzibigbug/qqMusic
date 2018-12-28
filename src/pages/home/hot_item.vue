<template>
    <div class="info_box_bd">
        <div class="album">
            <div class="album_m">
                <div class="album__media js_open_music">
                    <img class="album__cover" :src="$route.params.imgg">
                </div>
                <div class="album__bd">
                    <h1 class="album__name js_info_show" data-singername="巅峰榜·流行指数">{{$route.params.name}}</h1>
                    <p class="album__desc">{{$route.params.creatorr}}</p>
                    <p class="album__desc">播放量 {{$route.params.count | ten()}}</p>
                </div>
            </div>
            <div class="opt_box">
                <div class="play_bar js_progress_show" style="">
                    <div class="btn_play_all js_play_all">播放全部</div>
                </div>
            </div>
        </div>
        <div class="count_box">
            <div class="count_box__desc">排行榜<span class="count_box__number">共{{songList.length}}首</span></div>
        </div>
        <ul class="qui_list qui_list--rank" id="js_song_list">
            
                <li class="qui_list__item  js_play_song" data-index="0" v-for="(item,index) in songList" :key="item.id" data-songid="225584334" data-songtype="0">
                    <!-- <div class="qui_list__order">
                        <span class="qui_list__decimal">{{index+1}}</span>
                        
                    </div> -->
                    <div class="qui_list__bd">
                        <div class="qui_list__box">
                            <h3 class="qui_list__tit"><span class="qui_list__txt">{{item.creator.name}}</span></h3>
                            <p class="qui_list__desc">
                                <span class="qui_list__txt">{{item.creator.encrypt_uin}}</span>
                            </p>
                        </div>
                        <div class="qui_list__more">
                            <i class="qui_list__dot"></i>
                        </div>
                    </div>
                </li>
            
        </ul>

    </div>
</template>
<script>
import {searchSongs,lyricSearch} from '@/api/index.js'
import fly from 'flyio'
export default {
    data() {
        return{
            songList:[],
        }
    },
    mounted() {
        searchSongs(`search?key=579621905&s=${this.$route.params.name}&limit=20&offset=0&type=list`).then((value) => {
            this.songList = value.data
            // console.log(this.songList)
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
.info_box_bd{
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    background-color: #fff;
    /* background-color: rgba(0,0,0,.5); */
}
.album{
    background-color: black;
    opacity: .8;
    color: #ffffff;
}
.album_m{
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
}

.album__media {
    position: relative;
    width: 125px;
    margin-right: 10px;
    overflow: hidden;
}
.album__media img{
    width: 100%;
}
.album__bd {
    position: relative;
    -webkit-box-flex: 1;
}
.album__name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-height: 47px;
    line-height: 1.3;
    overflow: hidden;
    font-size: 18px;
}
.album__desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-height: 36px;
    overflow: hidden;
    margin-top: 8px;
}
.opt_box {
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 84px;
    padding: 0 16px;
    -webkit-transition: 1s ease-in-out;
}
.song_name__txt {
    display: block;
    max-width: 90%;
    margin-right: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
}
.lyrics__item {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgba(255,255,255,.5);
}
.lyrics__item.current {
    color: #fff;
}
.count_box {
    position: relative;
    display: -webkit-box;
    -webkit-box-align: center;
    height: 54px;
    margin: 0 16px -10px;
    font-size: 14px;
}
.qui_list__item {
    position: relative;
    display: -webkit-box;
}
.qui_list__order {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    width: 45px;
    margin-right: -16px;
}
.qui_list__bd {
    position: relative;
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-align: center;
    padding: 10px 16px;
    overflow: hidden;
}
.qui_list__box {
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
.qui_list--rank .qui_list__item:nth-child(-n+3) .qui_list__decimal {
    color: #FF400B;
}
.qui_list__tit {
    font-size: 16px;
    color: #000;
    font-weight: 200;
}
.qui_list__txt {
    display: block;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.btn_play_all {
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    min-width: 130px;
    padding: 0 20px;
    height: 40px;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    color: #fff;
    border-radius: 20px;
    background: #31c27c;
}
</style>




