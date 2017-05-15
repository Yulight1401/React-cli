/*eslint-disable*/
/**
 * Created by yul on 16-12-29.
 * This use localStorage to storage the configs
 * By using Json.stringify and Json.parse to storage a large config objects
 * @param config
 *   @param columns //to storage components' positions &config
 *     [{component1},{2}] //columns1
 *     [{}]               //columns2
 *     [{}]               //3
 *   @param otherconfigsObjects
 */
 //加大数字间隔，来优化插入优化
 //简单点，存的时候直接暴力遍历

class ConfigStorage{
  constructor(){
    this.config = {
      engine: '百度',
      columns: [
        [{
            name: 'weather',
            chname: '天气',
            pos: 0,
            color: 'orange',
            status: true
          },{
            name: 'iknow',
            chname: 'iKnow华科',
            pos: 63,
            color: 'rgb(232,161,0)',
            status: true
          },{
            name: 'product',
            chname: '校园产品',
            pos: 147,
            color: 'rgb(161, 106, 213)',
            status: true
          }
        ],
        [{
            name: 'info',
            chname: '校内资讯',
            pos: 0,
            color: 'rgb(240,83,82)',
            status: true
          },{
            name: 'navigation',
            chname: '常用导航',
            pos: 63,
            color: 'rgb(26,188,156)',
            status: true
          },{
            name: 'door',
            chname: '任意门',
            pos: 147,
            color: 'rgb(93,92,92)',
            status: true
          }
        ],
        [{
            name: 'snavigation',
            chname: '校内导航',
            pos: 0,
            color: 'rgb(73,166,228)',
            status: true
          },{
            name: 'oneword',
            chname: '每日一言',
            pos: 63,
            color: 'black',
            status: true
          }
        ]
      ]
    }
    this.storage=window.localStorage
  }
  getConfig () {
    let config = this.storage.getItem('config');
    if(config == undefined){
      config = this.config;
    }else{
      config = JSON.parse(config)
    }
    return config
  }
  saveConfig (callback) {
    let con = this
    this.storage.setItem('config',JSON.stringify( con.config ));
    callback();
  }
  getPos (name) {
    let pos = ''
    this.config.columns.forEach(function(item,index){
      item.forEach(function(item2,index2){
        if(item2.name == name){
          pos = item2.pos
        }
      })
    })
    return pos
  }
  setPos (){
    let c1 = document.getElementById('column1').childNodes
    let c2 = document.getElementById('column2').childNodes
    let c3 = document.getElementById('column3').childNodes
    let [temp1,temp2,temp3] = [[],[],[]]
    c1.forEach(function(item,index){
      let id = item.id
      let pos = item.style.order
      let state
      item.style.display == 'none' ? state = false : state = true
      let obj = {
        name: id,
        pos: pos,
        status: state
      }
      temp1.push(obj)
    })
    c2.forEach(function(item,index){
      let id = item.id
      let pos = item.style.order
      let state
      item.style.display == 'none' ? state = false : state = true
      let obj = {
        name: id,
        pos: pos,
        status: state
      }
      temp2.push(obj)
    })
    c3.forEach(function(item,index){
      let id = item.id
      let pos = item.style.order
      let state
      item.style.display == 'none' ? state = false : state = true
      let obj = {
        name: id,
        pos: pos,
        status: state
      }
      temp3.push(obj)
    })
    let newconfig = []
    newconfig.push(temp1)
    newconfig.push(temp2)
    newconfig.push(temp3)
    this.config.columns = newconfig
    this.saveConfig(function(){
    })
  }
}
//单利模式
if(Storage in window){
  console.log('创建对象丢失')
}else{
  window.Storage = new ConfigStorage()
}
export default Storage
