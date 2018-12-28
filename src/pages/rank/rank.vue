<template>
    <div class="rank">
        <ul class="mod_topic">
            <li class="topic_item" v-for="item in rankSongs" :key="item.id">
                <div class="topic_main">
                    <router-link :to="{name:'rankItem',params:{creator:item.creator,songTitle:item.name}}" class="topic_media">
                        <img :src="item.pic" alt="">
                        <span class="listen_count">{{item.playCount | ten()}}</span>
                    </router-link>
                    <div class="topic_info">
                        <div class="topic_cont">
                            <h3 class="topic_tit">{{item.name}}</h3>
                            <p>
                                1
                                <span class="text_name">天份</span>
                                - 薛之谦
                            </p>
                            <p>
                                2
                                <span class="text_name">别再闹了</span>
                                - 毛不易
                            </p>
                            <p>
                                3
                                <span class="text_name">生僻字</span>
                                - 陈柯宇
                            </p>
                        </div>
                        <span class="topic_arrow"></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {rankSongs} from '@/api/index.js'
export default {
    data() {
        return{
            rankSongs:{}
        }
    },
    mounted() {
        rankSongs('hotSongList?key=579621905&categoryId=10000000&sortId=1&limit=20').then((value) => {
            this.rankSongs = value.data
            // console.log(this.rankSongs)
        })
    },
    filters: {
        ten(currentVal) {
            return currentVal/10000+'万'
        }
    }
}
</script>
<style scoped>
.mod_topic{
    margin: 0 8px;
}
.mod_topic li {
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #fff;
    margin: 10px 0;
}
.topic_main{
    display: flex;
}
.mod_topic li .topic_media {
    position: relative;
    width: 100px;
    height: 100px;
    display: block;
}
.mod_topic li .topic_media img {
    display: block;
    width: 100px;
    height: 100px;
}
.mod_topic li .topic_media .listen_count {
    position: absolute;
    left: 5px;
    bottom: 7px;
    line-height: 12px;
    color: #fff;
    opacity: .6;
    font-size: 9px;
    z-index: 10;
}
.mod_topic li .topic_info {
    position: relative;
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
}
.mod_topic li .topic_cont {
    -webkit-box-flex: 1;
    margin: 0 10px 0 15px;
    color: rgba(0,0,0,.5);
    font-size: 14px;
    position: relative;
}
.mod_topic li .topic_cont .text_name{
    color: #000
}
.mod_topic li .topic_tit {
    font-size: 16px;
    color: #000;
    font-weight: normal;
    margin-bottom: 5px;
}
.mod_topic li .topic_arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    right: -70%;
    margin-top: -4px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #b2b2b2;
    border-bottom: 1px solid #b2b2b2;
    -webkit-transform: rotate(-45deg);
}
</style>


