import Vue from "vue";

export default {
    install() {
        console.log('使用插件');
        //全局过滤器
        Vue.filter('filter2', (value) =>
            value.slice(0, 4));
        //全局自定义指令
        Vue.directive('add', function (element, binding) {
            console.log(element, binding);
            console.log('add');
            element.innerText = binding.value;
        })
        //定义混入
        Vue.mixin({
            data() {
                return {
                    x:120,
                    y:200
                }
            },
        })
    }
}