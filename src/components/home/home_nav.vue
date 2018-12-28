<template>
    <div class="home_nav">
        <ul class="mod_ul">
            <li class="mod_li active_li"  @click="changeNav($event)">
                <router-link to='/home'  >推荐</router-link>
            </li>
            <li class="mod_li" :class="{active_li:!flg}" @click="changeNav($event)">
                <router-link to='/rank'>排行榜</router-link>
            </li>
            <li class="mod_li" :class="{active_li:!flg}" @click="changeNav($event)">
                <router-link to='/search'>搜索</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            flg: true
        }
    },
    methods: {
        changeNav(e){
            e.currentTarget.classList.add('active_li')
            // e.currentTarget.nextSibling.classList.remove('active_li')
        }
    }
}
</script>
<style scoped>
.home_nav{
    background-color: #fff;
}
.mod_ul{
    display: flex;
    justify-content: space-evenly;
}
.mod_li {
    -webkit-box-flex: 1;
    position: relative;
    display: block;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    width: 33.33%;
}
.active_li{
    color: #31c27c ;
    border-bottom: 2px solid #31c27c;
}

</style>


