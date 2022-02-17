import Vue from 'vue'
import App from './App.vue'
import fabric from 'fabric'
import 'echarts-fabric'
import * as echarts from 'echarts'
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts;
Vue.use(fabric);

new Vue({
  render: h => h(App),
}).$mount('#app')
