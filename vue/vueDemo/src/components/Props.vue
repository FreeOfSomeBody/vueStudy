<template>
    <div class="demo">
        <h1>{{address}}</h1>
        <h1>{{name}}</h1>
        <h1>{{email}}</h1>
    </div>
</template>
<!--
    配置项props
        功能：让组件接收外部传过来的数据
        1.传递数据：
            <Demo name="xx"/> 也可以绑定动态参数<Demo :name="xx"/>
        2.接受数据“
           第一种： props:['name']
           第二种： props:{
               name : String
           }    
           第三种:  props:{
               name : {
                   type : String, //类型
                    required: true,//必要性
                    default: '小王' //默认值
               }
        }

    备注： props是只读的，Vue底层会监测修改，并且不建议对其修改，若业务需要修改可复制内容到data中，修改data的数据
-->

<script>
    export default {
        name:'Props',
        data() {
            return {
                email:'11'
            }
        },
        props: {
            name: {
                type: String
            },
            address: {
                type: String,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .demo{
        background-color: red;
    }
</style>