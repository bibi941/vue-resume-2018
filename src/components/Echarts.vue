<template>
  <div id="myChart"></div>
</template>
  
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/Radar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  data () {
    return {}
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: ''
        },
        legend: {
          data: ['图一', '图二', '张三', '李四']
        },
        radar: [
          {},
          {
            indicator: [
              { text: 'HTML5', max: 100 },
              { text: 'CSS3', max: 100 },
              { text: 'JavaScript', max: 100 },
              { text: 'Vue', max: 100 },
              { text: 'jQueey', max: 100 },
              { text: '移动端 ', max: 100 }
            ],
            center: ['50%', '50%'],
            name: {
              textStyle: {
                color: '#616161',
                padding: [6, 0, 5, 6],
                fontSize: 16,
                fontWeight: 'bold',
              }
            },
            radius: 100
          }
        ],
        series: [
          {
            name: '成绩单',
            type: 'radar',
            radarIndex: 1,
            data: [
              {
                value: [100, 100, 100, 100, 100, 100],
                name: '张三',
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.value;
                    }
                  }
                }
              },
              {
                value: [90, 70, 68, 70, 50, 60],
                name: '李四',
                areaStyle: {
                  normal: {
                    opacity: 0.9,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                      {
                        color: '#B8D3E4',
                        offset: 0
                      },
                      {
                        color: '#72ACD1',
                        offset: 1
                      }
                    ])
                  }
                }
              }
            ]
          }
        ]
      })
    }
  }
}
</script>
  
<style lang="scss" scoped>
#myChart {
  width: 380px;
  height: 300px;

 
}
</style>
