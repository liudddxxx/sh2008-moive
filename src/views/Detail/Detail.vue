<template>
    <div class="detail">
        <div class="img">
            <img v-lazy="film.poster" />
        </div>
        <div>
            <div>{{film.name}}</div>
            <div>{{film.category}}</div>
            <div>{{film.premiereAt | parsePremiereAt}}上映</div>
            <div>{{film.nation}} | {{film.funtime}} 分钟</div>
            <div>
                {{film.synopsis}}
            </div>
        </div>
        <div>
            <p>演职人员</p>
            <Swiper :key="'actors_' + film.actors.length">
                <div v-for="(item,index) in film.actors" :key="index" class="swiper-slide">
                    <img :src="item.avatarAddress" alt="">
                </div>
            </Swiper>
            <p>剧照</p>
            <Swiper :key="'photos_' + film.photos.length">
                <div v-for="(item,index) in film.photos" :key="index" class="target-img">
                    <img :src="item" alt="">
                </div>
            </Swiper>
        </div>
    </div>
</template>

<script>
import {moiveDetailData} from '@/api/api'
// 引入moment
import moment from 'moment'
import Swiper from '@/components/Swiper'
export default {
    data() {
        return {
            film: {
                actors: [],
                photos: []
            },
        }
    },
    async mounted() {
        let ret = await moiveDetailData(this.$route.params.filmId)
        // console.log(ret.data)
        this.film = ret.data.data.film
    },
    filters:{
        parsePremiereAt: function(value){
            // value单位是秒，需要乘以1000
            return moment(value * 1000).format('YYYY-MM-DD')
        }
    },
    components:{
        Swiper
    },
    created() {
        // 发起通知，通知App.vue移除底部菜单
        this.eventBus.$emit('footernav',false)
    },
    beforeDestroy() {
        // 发起通知，通知App.vue恢复底部菜单
        this.eventBus.$emit('footernav',true)
    },
}
</script>

<style lang="scss" scoped>
.detail {
    .swiper-slide {
        img {
        width: 80px; 
        }
    }
    .target-img{
        img {
        width: 80px;
        margin: 7px;
        }
    }
    .img {
        width: 100%;
        height: 260px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
