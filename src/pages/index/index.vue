<template>
    <div class="home">
        <page-top></page-top>
        <!-- 导航 -->
        <home-nav></home-nav>
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>
<script>


import PageTop from '@/components/page_top'
import HomeNav from '@/components/home/home_nav'
export default {
    components:{PageTop,HomeNav,},
}
</script>
<style scoped>

</style>


