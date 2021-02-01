
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e12fLSQu1L+KV6QmxDiavU', 'Game');
// scripts/Game.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var PokerUtil = require("PokerUtil");

var AIHelper = require("AIHelper");

var self;
/**
 * 经营阶段主界面
 *  经营阶段,每天有6个抉择，
 *  可在店内帮工/监工，出随机事件
 *  可出外采购，试吃学习菜谱，可挖掘食材，
 *  也能碰到广告、厨师争霸及卫生检查等消息
 *  随时可以调整场地
 */

cc.Class({
  "extends": cc.Component,
  properties: {
    menuView: {
      "default": null,
      type: cc.Button
    },
    coinValueView: {
      "default": null,
      type: cc.Label
    },
    menuList: {
      "default": null,
      type: cc.Layout
    },
    mainbtn: {
      "default": null,
      type: cc.Prefab
    }
  },
  onLoad: function onLoad() {
    self = this;
    this.menuView.node.on('click', this.menuCallback, this);
    this.menuList.node.active = false;
  },
  menuCallback: function menuCallback() {
    if (this.menuList.node.active) {
      this.menuList.node.active = false;
    } else {
      var menu = cc.instantiate(this.mainbtn); // let label=menu.getComponent('Button');

      var components = menu.children;

      for (var _iterator = _createForOfIteratorHelperLoose(components), _step; !(_step = _iterator()).done;) {
        var item = _step.value;
        console.log("onion", "menuCallBack" + item.getComponent('Button'));
      } // label.string="外出";


      this.menuList.node.addChild(menu);
      menu.node.on('click', this.outerClick, this);
      this.menuList.node.active = true;
    }
  },

  /**
   * 外出 切换场景
   */
  outerClick: function outerClick() {},

  /**
   * 帮工 随机增加少量人气
   */
  helperClick: function helperClick() {},
  update: function update(dt) {// 每帧更新计时器，超过限度还没有生成新的星星
    // 就会调用游戏失败逻辑
    // if (this.timer > this.starDuration) {
    //     this.gameOver();
    //     this.enabled = false;   // disable gameOver logic to avoid load scene repeatedly
    //     return;
    // }
    // this.timer += dt;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUuanMiXSwibmFtZXMiOlsiUG9rZXJVdGlsIiwicmVxdWlyZSIsIkFJSGVscGVyIiwic2VsZiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWVudVZpZXciLCJ0eXBlIiwiQnV0dG9uIiwiY29pblZhbHVlVmlldyIsIkxhYmVsIiwibWVudUxpc3QiLCJMYXlvdXQiLCJtYWluYnRuIiwiUHJlZmFiIiwib25Mb2FkIiwibm9kZSIsIm9uIiwibWVudUNhbGxiYWNrIiwiYWN0aXZlIiwibWVudSIsImluc3RhbnRpYXRlIiwiY29tcG9uZW50cyIsImNoaWxkcmVuIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb21wb25lbnQiLCJhZGRDaGlsZCIsIm91dGVyQ2xpY2siLCJoZWxwZXJDbGljayIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFDQSxJQUFJRSxJQUFKO0FBQ0E7Ozs7Ozs7OztBQVFBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQURGO0FBS1JDLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0FBRkUsS0FMUDtBQVNSQyxJQUFBQSxRQUFRLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5KLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDVTtBQUZILEtBVEY7QUFhUkMsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsaUJBQVMsSUFESjtBQUVMTixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1k7QUFGSjtBQWJELEdBSFA7QUFzQkxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQmQsSUFBQUEsSUFBSSxHQUFDLElBQUw7QUFDQSxTQUFLSyxRQUFMLENBQWNVLElBQWQsQ0FBbUJDLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLEtBQUtDLFlBQXBDLEVBQWtELElBQWxEO0FBQ0EsU0FBS1AsUUFBTCxDQUFjSyxJQUFkLENBQW1CRyxNQUFuQixHQUEwQixLQUExQjtBQUNILEdBMUJJO0FBMkJMRCxFQUFBQSxZQUFZLEVBQUMsd0JBQVU7QUFDbkIsUUFBRyxLQUFLUCxRQUFMLENBQWNLLElBQWQsQ0FBbUJHLE1BQXRCLEVBQTZCO0FBQ3pCLFdBQUtSLFFBQUwsQ0FBY0ssSUFBZCxDQUFtQkcsTUFBbkIsR0FBMEIsS0FBMUI7QUFDSCxLQUZELE1BRU07QUFDRixVQUFLQyxJQUFJLEdBQUNsQixFQUFFLENBQUNtQixXQUFILENBQWUsS0FBS1IsT0FBcEIsQ0FBVixDQURFLENBRUY7O0FBRUEsVUFBSVMsVUFBVSxHQUFDRixJQUFJLENBQUNHLFFBQXBCOztBQUNBLDJEQUFnQkQsVUFBaEIsd0NBQTJCO0FBQUEsWUFBbkJFLElBQW1CO0FBQ3ZCQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQW9CLGlCQUFlRixJQUFJLENBQUNHLFlBQUwsQ0FBa0IsUUFBbEIsQ0FBbkM7QUFDSCxPQVBDLENBU0Y7OztBQUNBLFdBQUtoQixRQUFMLENBQWNLLElBQWQsQ0FBbUJZLFFBQW5CLENBQTRCUixJQUE1QjtBQUVBQSxNQUFBQSxJQUFJLENBQUNKLElBQUwsQ0FBVUMsRUFBVixDQUFhLE9BQWIsRUFBcUIsS0FBS1ksVUFBMUIsRUFBcUMsSUFBckM7QUFDQSxXQUFLbEIsUUFBTCxDQUFjSyxJQUFkLENBQW1CRyxNQUFuQixHQUEwQixJQUExQjtBQUNIO0FBRUosR0E5Q0k7O0FBK0NMOzs7QUFHQVUsRUFBQUEsVUFBVSxFQUFDLHNCQUFVLENBRXBCLENBcERJOztBQXFETDs7O0FBR0FDLEVBQUFBLFdBQVcsRUFBQyx1QkFBVyxDQUV0QixDQTFESTtBQStETEMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWMsQ0FDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBeEVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxubGV0IFBva2VyVXRpbCA9IHJlcXVpcmUoXCJQb2tlclV0aWxcIik7XG5sZXQgQUlIZWxwZXIgPSByZXF1aXJlKFwiQUlIZWxwZXJcIik7XG5sZXQgc2VsZjtcbi8qKlxuICog57uP6JCl6Zi25q615Li755WM6Z2iXG4gKiAg57uP6JCl6Zi25q61LOavj+WkqeaciTbkuKrmionmi6nvvIxcbiAqICDlj6/lnKjlupflhoXluK7lt6Uv55uR5bel77yM5Ye66ZqP5py65LqL5Lu2XG4gKiAg5Y+v5Ye65aSW6YeH6LSt77yM6K+V5ZCD5a2m5Lmg6I+c6LCx77yM5Y+v5oyW5o6Y6aOf5p2Q77yMXG4gKiAg5Lmf6IO956Kw5Yiw5bm/5ZGK44CB5Y6o5biI5LqJ6Zy45Y+K5Y2r55Sf5qOA5p+l562J5raI5oGvXG4gKiAg6ZqP5pe25Y+v5Lul6LCD5pW05Zy65ZywXG4gKi9cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1lbnVWaWV3OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxuICAgICAgICB9LFxuICAgICAgICBjb2luVmFsdWVWaWV3OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgICAgIG1lbnVMaXN0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGF5b3V0LFxuICAgICAgICB9LFxuICAgICAgICBtYWluYnRuOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmPXRoaXM7XG4gICAgICAgIHRoaXMubWVudVZpZXcubm9kZS5vbignY2xpY2snLCB0aGlzLm1lbnVDYWxsYmFjaywgdGhpcyk7XG4gICAgICAgIHRoaXMubWVudUxpc3Qubm9kZS5hY3RpdmU9ZmFsc2U7XG4gICAgfSxcbiAgICBtZW51Q2FsbGJhY2s6ZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5tZW51TGlzdC5ub2RlLmFjdGl2ZSl7XG4gICAgICAgICAgICB0aGlzLm1lbnVMaXN0Lm5vZGUuYWN0aXZlPWZhbHNlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBsZXQgIG1lbnU9Y2MuaW5zdGFudGlhdGUodGhpcy5tYWluYnRuKTtcbiAgICAgICAgICAgIC8vIGxldCBsYWJlbD1tZW51LmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGxldCBjb21wb25lbnRzPW1lbnUuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgY29tcG9uZW50cyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbmlvblwiLFwibWVudUNhbGxCYWNrXCIraXRlbS5nZXRDb21wb25lbnQoJ0J1dHRvbicpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbGFiZWwuc3RyaW5nPVwi5aSW5Ye6XCI7XG4gICAgICAgICAgICB0aGlzLm1lbnVMaXN0Lm5vZGUuYWRkQ2hpbGQobWVudSk7XG5cbiAgICAgICAgICAgIG1lbnUubm9kZS5vbignY2xpY2snLHRoaXMub3V0ZXJDbGljayx0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubWVudUxpc3Qubm9kZS5hY3RpdmU9dHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlpJblh7og5YiH5o2i5Zy65pmvXG4gICAgICovXG4gICAgb3V0ZXJDbGljazpmdW5jdGlvbigpe1xuXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDluK7lt6Ug6ZqP5py65aKe5Yqg5bCR6YeP5Lq65rCUXG4gICAgICovXG4gICAgaGVscGVyQ2xpY2s6ZnVuY3Rpb24oKSB7XG5cbiAgICB9LFxuXG5cblxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgLy8g5q+P5bin5pu05paw6K6h5pe25Zmo77yM6LaF6L+H6ZmQ5bqm6L+Y5rKh5pyJ55Sf5oiQ5paw55qE5pif5pifXG4gICAgICAgIC8vIOWwseS8muiwg+eUqOa4uOaIj+Wksei0pemAu+i+kVxuICAgICAgICAvLyBpZiAodGhpcy50aW1lciA+IHRoaXMuc3RhckR1cmF0aW9uKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIC8vICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTsgICAvLyBkaXNhYmxlIGdhbWVPdmVyIGxvZ2ljIHRvIGF2b2lkIGxvYWQgc2NlbmUgcmVwZWF0ZWRseVxuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgfSxcblxufSk7XG4iXX0=