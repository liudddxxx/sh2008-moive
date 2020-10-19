<template>
    <div class="logout">
        <div>
            退出
        </div>
        <!-- <el-row>
            <el-button type="primary" plain>退出登录</el-button>
        </el-row> -->
    </div>
</template>

<script>
    import {userLogin} from '@/api/api'
    export default {
        created() {
            this.eventBus.$emit("footernav", false);
        },
        beforeDestroy() {
            this.eventBus.$emit("footernav", true);
        },
    }
</script>

<style lang="scss" scoped>

</style>
