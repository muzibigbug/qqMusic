<template>
    <div class="search">
        <div class="inp_search">
            <div class="search_bar_cont">
                <input type="search" v-model="searchValue" class="search_input" placeholder="搜索歌曲、歌单、专辑" @click="handleInp">
            </div>
            <div class="search_bar_tip_text" v-if="!searchFlg" @click="handleDel">取消</div>
        </div>
        <div class="mod_search_result" v-if="searchFlg">
            <h3 class="result_tit">热门搜索</h3>
            <div class="result_tags">
                <!-- 这里进行判断当循环元素的index=0激活tag_hot样式 -->
                <span class="tag_s " :class="{tag_hot:index===0 ? true:false}" @click="handleHotSearch(index,hot.name)" v-for="(hot,index) in hotSearchs" :key="index">{{hot.name}}</span>
            </div>        
        </div>
        <!-- 搜索列表 -->
        <div class="mod_search_content" v-if='!searchFlg'>
            <ul class="search_content">
                <li v-for="item in searchSongs" :key="item.id">
                    <span class="media cover">
                        <img :src="item.pic">
                    </span>
                    <h6 class="main_tit">{{item.name}}</h6>
                    <p class="sub_tit">{{item.singer}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {searchSongs} from '@/api/index.js'
export default {
    data() {
        return {
            searchFlg:true,
            searchValue:'',
            searchSongs:{},
            hotSearchs:[
                {id:1 ,name:'即刻电音'},
                {id:2 ,name:'MERRY CHRISTMAS'},
                {id:3 ,name:'生僻字'},
                {id:4 ,name:'圣诞歌英文儿歌'},
                {id:5 ,name:'我对自己开了一枪'},
            ]
        }
    },
    watch:{
        searchValue(newVal) {
            if(newVal !== '' || newVal !== null) {
                searchSongs(`search?key=579621905&s=${newVal}&limit=20&offset=0&type=song`).then((value) => {
                    this.searchSongs = value.data
                })
            }else{
                this.searchValue = ''
            }
        }
    },
    methods:{
        handleInp() {
            this.searchFlg = false
        },
        handleDel() {
            this.searchFlg = true
            this.searchValue = ''
            this.searchSongs = {}
        },
        handleHotSearch(i,name) {
            this.searchValue = name
            this.handleInp()
            // console.log(e.currentTarget.innerHTML)
        }
    }
}
</script>
<style scoped>
.search{
    background-color: #fff;
}
.inp_search{
    display:flex;
    justify-content: space-between;
    background: #f4f4f4;
}
.search_bar_cont {
    position: relative;
    border-radius: 3px;
    background: #fff;
    /* height: 20px; */
    width: 100%;
    padding: 8px 22px 8px 35px;
    -webkit-box-flex: 1;
    border-radius: 3px;
    margin: 10px;
}
.search_bar_tip_text{
    /* padding-right: 10px; */
    /* padding-left: 10px; */
    font-size: 14px;
    height: 20px;
    width: 60px;
    line-height: 24px;
    margin-top: 20px;
    /* border: 1px solid red; */
}
.search_input {
    height: 20px;
    line-height: 20px;
    border-radius: 3px;
    width: 100%;
    color: rgba(0,0,0,.3);
    /* border: 1px solid rgba(0,0,0,.3); */
    border: none;
    -webkit-appearance: none;
    font-size: 14px;
    padding-left: 10px;
}


.mod_search_result {
    background: #fff;
    padding: 15px 15px 10px 15px;
}
.mod_search_result .result_tit {
    color: rgba(0,0,0,.6);
    margin-bottom: 8px;
    font-size: 14px;
}
.result_tags{
    display: flex;
    flex-wrap: wrap;
}
 .tag_s {
    display: inline-block;
    font-size: 14px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: #000;
    border: 1px solid rgba(0,0,0,.6);
    border-radius: 99px;
    word-break: keep-all;
    margin-bottom: 10px;
    margin-right: 14px;
}
 .tag_hot {
    color: #fc4524;
    border-color: #fc4524;
}
.mod_search_content li {
    position: relative;
    height: 55px;
    padding-left: 56px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
}
.mod_search_content li:first-child{
    border-top: 1px solid #eee;
}
.mod_search_content .media {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 40px;
    height: 40px;
}
.mod_search_content .media img {
    display: block;
    width: 100%;
}
.mod_search_content .main_tit {
    margin: 10px 0 2px;
    line-height: 18px;
    font-size: 16px;
    font-weight: normal;
    color: #000;
}
.mod_search_content .sub_tit {
    color: #808080;
    font-size: 14px
}
</style>


