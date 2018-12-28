<template>
    <div class="boradList">
        <h2 class="list_title">电台</h2>
        <ul class="mod_twocol_list ">
            <li class="list_li" v-for="dist in distSongs" :key="dist.id">
                <router-link :to="'/lyric/'+ dist.id">
                    <img :src="dist.pic"  alt="">
                    <h3 class="list_tit">{{dist.name}}</h3>
                </router-link>
            </li>            
        </ul>
    </div>
</template>
<script>
// import {distSongs} from '@/api/index.js'
export default {
    props:['distSongs'],
    data() {
        return {
            // distSongs:{}
        }
    },
    // mounted() {
    //     distSongs('hotSongList?key=579621905&categoryId=10000000&sortId=2&limit=1').then((value) => {
    //         this.distSongs = value.data
    //     })
    // }
}
</script>
<style scoped>
.list_title{
    font-size: 16px;
    color: #000;
    margin-bottom: 11px;
    font-weight: normal;
}
.mod_twocol_list li{
    width: 50%;
    -webkit-box-sizing: border-box;
    margin-bottom: 10px;
    overflow: hidden;
    width: 50%;
    background-color: #fff;
    padding-bottom: 20px;
    font-weight: 200;
}
.mod_twocol_list li:first-child{
    margin-right: 8px;
}
.mod_twocol_list{
    display: flex;
    justify-content: space-between;
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
</style>
