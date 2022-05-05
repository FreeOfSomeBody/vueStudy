// main.js是项目的入口文件

// 引入vue
import Vue from 'vue'
// 引入APP组件
import App from './App.vue'
//引入插件
import plugins from './plugins'

Vue.config.productionTip = false

//使用插件
Vue.use(plugins)
/*
  关于不同版本的vue.js
    vue.js是完整的vue 包含了核心功能和模板解析器。
    vue.runtime.js 是运行时使用的vue 没有模板解析器

    因为没有模板解析器，所以不能使用template，需要使用render函数接受到createElemete函数去解析内容（一般是APP组件）
*/
new Vue({
  render: h => h(App),
}).$mount('#app');