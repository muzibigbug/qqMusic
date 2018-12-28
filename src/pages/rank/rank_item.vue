<template>
    <div class="info_box_bd">
        <div class="album">
            <div class="album_m">
                <div class="album__media js_open_music">
                    <img class="album__cover" src="https://y.gtimg.cn/music/photo_new/T002R300x300M000004KfMU92CZeAd.jpg?max_age=2592000" alt="巅峰榜·流行指数" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist_150.png?max_age=2592000';this.onerror=null;">
                </div>
                <div class="album__bd">
                    <h1 class="album__name js_info_show" data-singername="巅峰榜·流行指数">{{$route.params.songTitle}}</h1>
                    <p class="album__desc">第360天</p>
                    <p class="album__desc">{{currentTime | filterTime}} 更新</p>
                </div>
            </div>
            <div class="opt_box">
                <div class="play_bar js_progress_show" style="">
                    <!-- <div class="play_bar__bd">
                        <h2 class="song_name">
                            <span class="song_name__txt" id="js_current_song">生僻字</span>
                        </h2>
                        <div class="lyrics" id="js_lyric_txt" style="touch-action: none;">
                            <div class="lyrics__bd" id="js_lrc_show" style="transition: -webkit-transform 0ms cubic-bezier(0.1, 0.57, 0.1, 1) 0s; transform: translate(0px, 0px) translateZ(0px);"><p id="line_0" class="lyrics__item current">生僻字 - 陈柯宇</p><p id="line_1" class="lyrics__item">词：陈柯宇</p><p id="line_2" class="lyrics__item">曲：陈柯宇</p><p id="line_3" class="lyrics__item">我们中国的汉字</p><p id="line_4" class="lyrics__item">落笔成画留下五千年的历史</p><p id="line_5" class="lyrics__item">让世界都认识</p><p id="line_6" class="lyrics__item">我们中国的汉字</p><p id="line_7" class="lyrics__item">一撇一捺都是故事</p><p id="line_8" class="lyrics__item">跪举火把虔诚像道光</p><p id="line_9" class="lyrics__item">四方田地落谷成仓</p><p id="line_10" class="lyrics__item">古人象形声意辨恶良</p><p id="line_11" class="lyrics__item">魃魈魁鬾魑魅魍魉</p><p id="line_12" class="lyrics__item">Wu 又双叒叕</p><p id="line_13" class="lyrics__item">Wu 火炎焱燚</p><p id="line_14" class="lyrics__item">Wu 水沝淼㵘</p><p id="line_15" class="lyrics__item">㙓𨰻</p><p id="line_16" class="lyrics__item">茕茕孑立 沆瀣一气</p><p id="line_17" class="lyrics__item">踽踽独行 醍醐灌顶</p><p id="line_18" class="lyrics__item">绵绵瓜瓞 奉为圭臬</p><p id="line_19" class="lyrics__item">龙行龘龘 犄角旮旯</p><p id="line_20" class="lyrics__item">娉婷袅娜 涕泗滂沱</p><p id="line_21" class="lyrics__item">呶呶不休 不稂不莠</p><p id="line_22" class="lyrics__item">卬</p><p id="line_23" class="lyrics__item">咄嗟 蹀躞 耄耋 饕餮</p><p id="line_24" class="lyrics__item">囹圄 蘡薁 觊觎 龃龉</p><p id="line_25" class="lyrics__item">狖轭鼯轩 怙恶不悛</p><p id="line_26" class="lyrics__item">其靁虺虺 腌臢孑孓</p><p id="line_27" class="lyrics__item">陟罚臧否 针砭时弊</p><p id="line_28" class="lyrics__item">鳞次栉比 一张一翕</p><p id="line_29" class="lyrics__item">我们中国的汉字</p><p id="line_30" class="lyrics__item">落笔成画留下五千年的历史</p><p id="line_31" class="lyrics__item">让世界都认识</p><p id="line_32" class="lyrics__item">我们中国的汉字</p><p id="line_33" class="lyrics__item">一撇一捺都是故事</p><p id="line_34" class="lyrics__item">现在全世界各地</p><p id="line_35" class="lyrics__item">到处有中国字</p><p id="line_36" class="lyrics__item">黄皮肤的人骄傲地把头抬起</p><p id="line_37" class="lyrics__item">我们中国的汉字</p><p id="line_38" class="lyrics__item">一平一仄谱写成诗</p><p id="line_39" class="lyrics__item">茕茕孑立 沆瀣一气</p><p id="line_40" class="lyrics__item">踽踽独行 醍醐灌顶</p><p id="line_41" class="lyrics__item">绵绵瓜瓞 奉为圭臬</p><p id="line_42" class="lyrics__item">龙行龘龘 犄角旮旯</p><p id="line_43" class="lyrics__item">娉婷袅娜 涕泗滂沱</p><p id="line_44" class="lyrics__item">呶呶不休 不稂不莠</p><p id="line_45" class="lyrics__item">卬</p><p id="line_46" class="lyrics__item">咄嗟 蹀躞 耄耋 饕餮</p><p id="line_47" class="lyrics__item">囹圄 蘡薁 觊觎 龃龉</p><p id="line_48" class="lyrics__item">狖轭鼯轩 怙恶不悛</p><p id="line_49" class="lyrics__item">其靁虺虺 腌臢孑孓</p><p id="line_50" class="lyrics__item">陟罚臧否 针砭时弊</p><p id="line_51" class="lyrics__item">鳞次栉比 一张一翕</p><p id="line_52" class="lyrics__item">我们中国的汉字</p><p id="line_53" class="lyrics__item">落笔成画留下五千年的历史</p><p id="line_54" class="lyrics__item">让世界都认识</p><p id="line_55" class="lyrics__item">我们中国的汉字</p><p id="line_56" class="lyrics__item">一撇一捺都是故事</p><p id="line_57" class="lyrics__item">现在全世界各地</p><p id="line_58" class="lyrics__item">到处有中国字</p><p id="line_59" class="lyrics__item">黄皮肤的人骄傲地把头抬起</p><p id="line_60" class="lyrics__item">我们中国的汉字</p><p id="line_61" class="lyrics__item">一平一仄谱写成诗</p><p id="line_62" class="lyrics__item">优美旋律自宫商角徵羽</p><p id="line_63" class="lyrics__item">众人皆说成之于语故成语</p><p class="lyrics__item">(完)</p></div>
                        </div>
                    </div> -->
                    <div class="btn_play_all js_play_all">播放全部</div>
                </div>
            </div>
        </div>
        <div class="count_box">
            <div class="count_box__desc">排行榜<span class="count_box__number">共{{rankItemSongs.length}}首</span></div>
        </div>
        <ul class="qui_list qui_list--rank" id="js_song_list">
            
                <li class="qui_list__item  js_play_song" data-index="0" v-for="(item,index) in rankItemSongs" :key="item.id" data-songid="225584334" data-songtype="0">
                    <div class="qui_list__order">
                        <span class="qui_list__decimal">{{index+1}}</span>
                        
                    </div>
                    <div class="qui_list__bd">
                        <div class="qui_list__box">
                            <h3 class="qui_list__tit"><span class="qui_list__txt">{{item.name}}</span></h3>
                            <p class="qui_list__desc">
                                
                                <span class="qui_list__txt">{{item.singer}}</span>
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
import {searchSongs} from '@/api/index.js'
import moment from 'moment'
export default {
    data() {
        return {
            rankItemSongs:{},
            currentTime: new Date()
        }
    },
    mounted() {
        searchSongs(`search?key=579621905&s=${this.$route.params.creator}&limit=100&offset=0&type=song`).then((value) => {
            this.rankItemSongs = value.data
            // console.log(this.rankItemSongs)
        })
    },
    filters: {
        filterTime(date){
            return moment(date).format('YYYY-MM-DD HH:mm:ss')
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


