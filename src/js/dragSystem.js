/**
 * Created by yul on 16-12-27.
 换位策略：同一列交换，使用flex的order,不同列交换，使用document操作。
 删除策略：懒删除，标记status删除
 */
/* eslint-disable */
import Storage from './configStorage.js'
import Bar from '../Bar.vue'
class DragSystem {
  constructor() {
    this.drag = {
      state: false,
      ele: {},
    }
    this.prenode = document.getElementById('prenode')
  }
  mouseDown(event) {
    let drag = this
    let type = event.target.className.baseVal
    if (type === 'menu') {
      event.preventDefault()
      drag.state = true
      drag.ele = event.target.parentNode
      //将拖动的物体设置为鼠标事件不响应，这时鼠标的事件会穿透这一层
      drag.ele.style.pointerEvents = 'none'
      document.body.onmousemove = function(event) {
        drag.mouseMove(event)
      }
      document.body.onmouseover = function(event) {
        drag.mouseOver(event)
      }
      document.body.onmouseup = function(event) {
        drag.mouseUp(event)
      }
    } else {
      drag.state = false
      drag.ele = {}
    }
  }
  mouseMove(event) {
    event.preventDefault()
    let _this = this
    if (drag.state) {
      // console.log('拖动中')
      let ele = drag.ele
      let offsetX = ele.clientWidth - 28
      let offsetY = 38

      ele.style.position = 'fixed'
      ele.style.zIndex = 2024
      ele.style.left = (event.clientX - offsetX) + 'px'
      ele.style.top = (event.clientY - offsetY) + 'px'

      this.showTrash()
      if (event.clientY < 102) {
        ele.style.opacity = 0.5
      } else {
        ele.style.opacity = 1
      }

      //动态插入逻辑
      //从组件下部插入，自身减一，插入节点继承原来的order,从上面插入，自身加一，自身继承原来的order
      //当在组件里，有组件内容的时候，需要网上遍历，直到找到card

      let card = _this.getCard(event.target)
      if (card.status == true) {
        let ele = card.element
        let parent = ele.parentNode
        let order = Storage.getPos(ele.id)
        let y = event.clientY - ele.getBoundingClientRect().top
        if (y < ele.clientHeight / 2) {
          // console.log('insertIntop',order)
          _this.insertNode(parent, order)
          ele.style.order = ++order
        } else {
          // console.log('insertInB',order)
          _this.insertNode(parent, order)
          ele.style.order = --order
        }
      }else if (card.status == 'container'){
        let parent = card.element
        let order = drag.ele.style.order
        _this.insertNode(parent,order)
      }

      //滚动逻辑
      let wHeight = drag.getViewport().height
      if (102 < event.clientY && event.clientY < wHeight / 3) {
        if (window.timer == null) {
          window.timer = setInterval(function() {
            document.body.scrollTop -= 1.2
            // console.log('滚动中')
          }, 10)
        }
      } else if (event.clientY > wHeight * 2 / 3) {
        if (window.timer == null) {
          window.timer = setInterval(function() {
            document.body.scrollTop += 1.6
            // console.log('滚动中')
          }, 10)
        }
      } else {
        window.clearInterval(window.timer)
        window.timer = null
      }

    }
  }
  mouseOver(event) {
  }
  mouseUp(event) {
    event.preventDefault()
    let _this = this
    // console.log('丢失')
    if (drag.ele.className == 'card') {
      drag.ele.style.position = 'relative'
      drag.ele.style.left = '0px'
      drag.ele.style.top = '0px'
      drag.ele.style.zIndex = 1
    }
    if (event.clientY < 102) {
      // console.log('隐藏')
      if (confirm("确定隐藏组件？可以在工具箱再次添加哦！")) {
        drag.ele.style.display = 'none'
        let item = {}
        item.name = drag.ele.id
        Bar.methods.decorate(item)
        Bar.methods.insert(item)
        Storage.setPos()
      } else {
        drag.ele.style.opacity = 1
      }
    }
    drag.state = false
    this.hideTrash()
    prenode.style.display = 'none'
    drag.ele.style.pointerEvents = 'auto'
    document.body.onmousemove = null
    document.body.onmouseover = null
    document.body.onmouseup = null
    clearInterval(window.timer)
    window.timer = null

    //组件交换逻辑，组件交换时，应该继承prenode的order,就是拖动的组件应该与prenode交换位置
    let parent = prenode.parentNode
    let preorder = prenode.style.order
    if(parent.className == 'column'){
      drag.ele.style.order = preorder
      parent.appendChild(drag.ele)
      Storage.setPos()
    }
    //更新储存的配置
  }
  //尾递归获取到card
  getCard ( ele ) {
    if( ele.className == 'card' && ele.id != 'prenode' ){
      return {
        status: true,
        element: ele
      }
    }
    //截断当是prenode的时候继续递归
    if( ele.id == 'prenode'){
      return {
        status: false
      }
    }
    if( ele.className == 'column'){
      // console.log(ele)
      return{
        status: 'container',
        element: ele
      }
    }
    if ( ele.id == 'app' ) {
      return {
        status: false,
      }
    }
    if(ele.id == 'bar'){
      return {
        status: false,
      }
    }
    let parent = ele.parentNode
    return this.getCard(parent)
  }
  showTrash() {
    document.getElementById('trash').style.top = '0px'
  }
  hideTrash() {
    document.getElementById('trash').style.top = '-60px'
  }
  insertNode(parent, order) {
    let ele = drag.ele
    prenode.style.width = ele.clientHeight + 'px'
    prenode.style.height = ele.clientHeight * 0.92 + 'px'
    prenode.style.order = order
    prenode.style.display = 'block'
    parent.appendChild(prenode)
  }
  getViewport() {　　　　
    if (document.compatMode == "BackCompat") {　　　　　　
      return {　　　　　　　　
        width: document.body.clientWidth,
        height: document.body.clientHeight　　　　　　
      }　　　　
    } else {　　　　　　
      return {　　　　　　　　
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight　　　　　　
      }　　　　
    }　　
  }
}
let drag = new DragSystem()
export default drag
