<template>
    <div>
        <h1>{{name | filter2}}</h1>
        <h2 v-add:value= "company"></h2>
    </div>
</template>
<!--
    插件： 
        用于增强Vue，包含一个install方法，接收第一个参数为Vue，后续参数为插件使用者传递的数据。
        可以单独抽离为一个js，在main.js中使用Vue.use()
-->


<script>
    export default {
        name : 'UsePlugins',
        data() {
            return {
                name: 'abcdefg',
                company : 'efefef'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>