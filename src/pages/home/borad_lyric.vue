<template>
    <div class="lyric">
        {{$route.params.id}}
    </div>
</template>
<script>
import fly from 'flyio'
export default {
    data() {
        return{
            songLyric:'',
            songId:this.$route.params.id
        }
    },
    mounted() {
        console.log(this.songId)
        fly.request('https://api.bzqll.com/music/tencent/lrc?key=579621905&id=004H60Bi0meTBz',{
            method:'GET',
            parseJson:true
        })
        .then((value) => {
            console.log(value.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
}
</script>
<style scoped>

</style>
