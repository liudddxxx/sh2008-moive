<template>
    <div class="detail">
        <div class="img">
            <img :src="film.poster" />
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
    </div>
</template>

<script>
import {moiveDetailData} from '@/api/api'
// 引入moment
import moment from 'moment'
export default {
    data() {
        return {
            film: {}
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
    }
}
</script>

<style lang="scss" scoped>
.detail {
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
