<template>
    <div>
        <h1>{{age}}</h1>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
    export default {
        name:'student',
        data() {
            return {
                age: '24',
                name: '小郑'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>