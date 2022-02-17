<template>
  <div id="app">
    <canvas id="canvas" width="1200" height="1200"></canvas>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="echart" style="height:300px;width:300px"></div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    let mychart=this.$echarts.init(document.getElementById("echart"));
    let option={
      title: {
              text: 'ECharts 入门示例'
              },
            tooltip: {},
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
              {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              }
            ]
    };
    mychart.setOption(option);
    let canvas=new window.fabric.Canvas("canvas");
    // var offcanvas = mychart.getRenderedCanvas({pixelRatio: 2,backgroundColor: '#fff'});
    // var fabricChart = new window.fabric.Image(offcanvas);
    // canvas.add(fabricChart);

    //添加红色的方框
    // canvas.add(new window.fabric.Rect({
    //   top:100,
    //   left:100,
    //   fill:'red',
    //   width:100,
    //   height:100
    // }))

    // 添加echarts
    let chart =new window.fabric.Chart({
      option:option,
      // theme:'dark',
      width:600,
      height:300,
      
    })
    canvas.add(chart);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
