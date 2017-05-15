/* eslint-disable */
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import bar from './Bar'
import DragSystem from './js/dragSystem.js'

Vue.use(VueResource)

let drag = DragSystem
document.body.onmousedown = function(event) {
  drag.mouseDown(event)
}
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
new Vue({
  el: '#nav',
  template: '<bar/>',
  components: {
    bar
  }
})
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    var T, k;
    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }
    var O = Object(this);
    var len = O.length >>> 0; // Hack to convert O.length to a UInt32
    if ({}.toString.call(callback) != "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }
    if (thisArg) {
      T = thisArg;
    }
    k = 0;
    while (k < len) {
      var kValue;
      if (k in O) {
        kValue = O[k];
        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
}
if (!Array.prototype.map) {
  Array.prototype.map = function(fn, context) {
    var arr = [];
    if (typeof fn === "function") {
      for (var k = 0, length = this.length; k < length; k++) {
        arr.push(fn.call(context, this[k], k, this));
      }
    }
    return arr;
  };
}
