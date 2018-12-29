<template>
    <div class="home_nav">
        <ul class="mod_ul">
            <li   >
                <router-link to='/home'  class="mod_a">推荐</router-link>
            </li>
            <li  >
                <router-link to='/rank' class="mod_a">排行榜</router-link>
            </li>
            <li  >
                <router-link to='/search' class="mod_a">搜索</router-link>
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
.mod_ul li{
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
.mod_a {
    display: block;
    height: 40px;
    line-height: 40px;
    width: 100%;
}
.router-link-active{
    color: #31c27c ;
    border-bottom: 2px solid #31c27c;
}

</style>


