<template>
    <div class="demo">
        <h1>{{address}}</h1>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                address: '成都',
                name: '四川大学'
            }
        },
    }
</script>

<style lang="scss" scoped>
    .demo{
        background-color: red;
    }
</style>