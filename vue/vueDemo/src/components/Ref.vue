<!-- 
    ref 属性 
    1.被用来给元素和子组件注册引用信息（和id类似）。
    2.在html标签使用，获取的是DOM元素；在组件上使用，获取的是vc对象。
    3.通过this.$refs获取。
-->

<template>
    <div class="demo">
        <h1 ref="address">{{address}}</h1>
        <h1 ref="name">{{name}}</h1>
        <button @click="outDOM" ref="but">点击在控制台输出DOM对象</button>
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
        methods: {
            outDOM() {
                console.log(this.$refs);
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>