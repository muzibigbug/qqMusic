import ajax from './ajax.js'

const api = 'https://api.bzqll.com/music/tencent/'
//首页轮播图
export const swiperSongs = (url) => ajax(`${api}${url}`)
// 电台
export const distSongs = (url,paramsObj) => ajax(`${api}${url}`,paramsObj)
// 热门歌单
export const hotSongs = (url) => ajax(`${api}${url}`)
//搜索歌曲
export const searchSongs = (url) => ajax(`${api}${url}`)
//根据首页轮播图图片的id查看详情
export const swiperSong = (url) => ajax(`${api}${url}`)
// 排行榜
export const rankSongs = (url) => ajax(`${api}${url}`)
//歌词搜索
export const lyricSearch = (url) => ajax(`${api}${url}`)
