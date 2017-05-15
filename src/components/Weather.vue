<template>
  <div id="weather" class="card" >
    <svg class="menu" style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </svg>
    <div class="cardtitlebar">
      <div class="cardicon icon"></div>
      <a class="cardtitle"></a>
    </div>
    <div id="wcontent" class="card-container">
      <img v-bind:src = "imgsrc"></img>
      <span id="temperature">{{wendu}}℃</span>
      <span id="air" class="subtitle">空气质量：{{aqi}} , 良好</span>
      <span id="wind" class="subtitle">风力：{{fengli}}</span>
    </div>
  </div>
</template>
<style>
    #weather{
        height:177px;
    }
    #wcontent img{
      width: auto;
      height: 132px;
      position: absolute;
      left: 41px;
      top: 36px;
    }
    #temperature {
      font-size: 40px;
      font-weight: 600;
      letter-spacing: 5px;
      position: absolute;
      top: 48px;
      left: 183px;
      color: #555555;
    }
    .subtitle {
      letter-spacing: 2px;
      color: #555555;
      position: absolute;
      left: 183px;
      font-size: 14px;
    }
    #air {
      top: 107px;
    }
    #wind{
      top:130px;
    }
</style>
<script>
    export default{
      name: 'weather',
      data () {
        return {
          aqi: '',
          fengli: '',
          wendu: '',
          type: ''
        }
      },
      computed: {
        quality () {
          let vm = this
          let aqi = parseInt(vm.aqi)
          let s = '重度污染'
          if (aqi < 200) {
            s = '轻度污染'
          } else if (aqi < 100) {
            s = '良好'
          } else if (aqi < 50) {
            s = '优秀'
          }
          return s
        },
        imgsrc () {
          let vm = this
          switch (vm.type) {
            case '晴':
              return require('../assets/weather/Sun.png')
            case '小雨':
              return require('../assets/weather/LightRain.png')
            case '中雨':
              return require('../assets/weather/ModerateRain.png')
            case '大雨':
              return require('../assets/weather/HeavyRain.png')
            case '阴':
              return require('../assets/weather/Cloud.png')
            case '阵雨':
              return require('../assets/weather/PartlyCloudyRain.png')
            case '暴雨':
              return require('../assets/weather/TorrentialRain.png')
            case '小雪':
              return require('../assets/weather/LightSnow.png')
            case '雨夹雪':
              return require('../assets/weather/Sleet.png')
            case '多云':
              return require('../assets/weather/PartlyCloudy.png')
            case '中雪':
              return require('../assets/weather/Snow.png')
            case '霾':
              return require('../assets/weather/Fog.png')
            default:
              console.log('unkonw weather:', vm.type)
          }
        }
      },
      mounted () {
        this.getResource()
      },
      methods: {
        getResource () {
          let vm = this
          this.$http.get('/api/weather/').then(response => {
            let data = response.body.data
            vm.aqi = data.aqi
            vm.wendu = data.wendu
            vm.type = '晴'
            vm.fengli = response.body.data.forecast[0].fengli
          }, response => {
            window.alert('获取天气失败')
          })
        }
      }
    }
</script>
