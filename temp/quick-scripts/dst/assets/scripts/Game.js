
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJQb2tlclV0aWwiLCJyZXF1aXJlIiwiQUlIZWxwZXIiLCJzZWxmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtZW51VmlldyIsInR5cGUiLCJCdXR0b24iLCJjb2luVmFsdWVWaWV3IiwiTGFiZWwiLCJtZW51TGlzdCIsIkxheW91dCIsIm1haW5idG4iLCJQcmVmYWIiLCJvbkxvYWQiLCJub2RlIiwib24iLCJtZW51Q2FsbGJhY2siLCJhY3RpdmUiLCJtZW51IiwiaW5zdGFudGlhdGUiLCJjb21wb25lbnRzIiwiY2hpbGRyZW4iLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImdldENvbXBvbmVudCIsImFkZENoaWxkIiwib3V0ZXJDbGljayIsImhlbHBlckNsaWNrIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQUlFLElBQUo7QUFDQTs7Ozs7Ozs7O0FBUUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5DLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZILEtBREY7QUFLUkMsSUFBQUEsYUFBYSxFQUFFO0FBQ1gsaUJBQVMsSUFERTtBQUVYRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7QUFGRSxLQUxQO0FBU1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRkgsS0FURjtBQWFSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxOLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDWTtBQUZKO0FBYkQsR0FIUDtBQXNCTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCZCxJQUFBQSxJQUFJLEdBQUMsSUFBTDtBQUNBLFNBQUtLLFFBQUwsQ0FBY1UsSUFBZCxDQUFtQkMsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsS0FBS0MsWUFBcEMsRUFBa0QsSUFBbEQ7QUFDQSxTQUFLUCxRQUFMLENBQWNLLElBQWQsQ0FBbUJHLE1BQW5CLEdBQTBCLEtBQTFCO0FBQ0gsR0ExQkk7QUEyQkxELEVBQUFBLFlBQVksRUFBQyx3QkFBVTtBQUNuQixRQUFHLEtBQUtQLFFBQUwsQ0FBY0ssSUFBZCxDQUFtQkcsTUFBdEIsRUFBNkI7QUFDekIsV0FBS1IsUUFBTCxDQUFjSyxJQUFkLENBQW1CRyxNQUFuQixHQUEwQixLQUExQjtBQUNILEtBRkQsTUFFTTtBQUNGLFVBQUtDLElBQUksR0FBQ2xCLEVBQUUsQ0FBQ21CLFdBQUgsQ0FBZSxLQUFLUixPQUFwQixDQUFWLENBREUsQ0FFRjs7QUFFQSxVQUFJUyxVQUFVLEdBQUNGLElBQUksQ0FBQ0csUUFBcEI7O0FBQ0EsMkRBQWdCRCxVQUFoQix3Q0FBMkI7QUFBQSxZQUFuQkUsSUFBbUI7QUFDdkJDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0IsaUJBQWVGLElBQUksQ0FBQ0csWUFBTCxDQUFrQixRQUFsQixDQUFuQztBQUNILE9BUEMsQ0FTRjs7O0FBQ0EsV0FBS2hCLFFBQUwsQ0FBY0ssSUFBZCxDQUFtQlksUUFBbkIsQ0FBNEJSLElBQTVCO0FBRUFBLE1BQUFBLElBQUksQ0FBQ0osSUFBTCxDQUFVQyxFQUFWLENBQWEsT0FBYixFQUFxQixLQUFLWSxVQUExQixFQUFxQyxJQUFyQztBQUNBLFdBQUtsQixRQUFMLENBQWNLLElBQWQsQ0FBbUJHLE1BQW5CLEdBQTBCLElBQTFCO0FBQ0g7QUFFSixHQTlDSTs7QUErQ0w7OztBQUdBVSxFQUFBQSxVQUFVLEVBQUMsc0JBQVUsQ0FFcEIsQ0FwREk7O0FBcURMOzs7QUFHQUMsRUFBQUEsV0FBVyxFQUFDLHVCQUFXLENBRXRCLENBMURJO0FBK0RMQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUF4RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBQb2tlclV0aWwgPSByZXF1aXJlKFwiUG9rZXJVdGlsXCIpO1xyXG5sZXQgQUlIZWxwZXIgPSByZXF1aXJlKFwiQUlIZWxwZXJcIik7XHJcbmxldCBzZWxmO1xyXG4vKipcclxuICog57uP6JCl6Zi25q615Li755WM6Z2iXHJcbiAqICDnu4/okKXpmLbmrrUs5q+P5aSp5pyJNuS4quaKieaLqe+8jFxyXG4gKiAg5Y+v5Zyo5bqX5YaF5biu5belL+ebkeW3pe+8jOWHuumaj+acuuS6i+S7tlxyXG4gKiAg5Y+v5Ye65aSW6YeH6LSt77yM6K+V5ZCD5a2m5Lmg6I+c6LCx77yM5Y+v5oyW5o6Y6aOf5p2Q77yMXHJcbiAqICDkuZ/og73norDliLDlub/lkYrjgIHljqjluIjkuonpnLjlj4rljavnlJ/mo4Dmn6XnrYnmtojmga9cclxuICogIOmaj+aXtuWPr+S7peiwg+aVtOWcuuWcsFxyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBtZW51Vmlldzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2luVmFsdWVWaWV3OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudUxpc3Q6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGF5b3V0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFpbmJ0bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmPXRoaXM7XHJcbiAgICAgICAgdGhpcy5tZW51Vmlldy5ub2RlLm9uKCdjbGljaycsIHRoaXMubWVudUNhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm1lbnVMaXN0Lm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIG1lbnVDYWxsYmFjazpmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMubWVudUxpc3Qubm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVMaXN0Lm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgbGV0ICBtZW51PWNjLmluc3RhbnRpYXRlKHRoaXMubWFpbmJ0bik7XHJcbiAgICAgICAgICAgIC8vIGxldCBsYWJlbD1tZW51LmdldENvbXBvbmVudCgnQnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50cz1tZW51LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uXCIsXCJtZW51Q2FsbEJhY2tcIitpdGVtLmdldENvbXBvbmVudCgnQnV0dG9uJykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBsYWJlbC5zdHJpbmc9XCLlpJblh7pcIjtcclxuICAgICAgICAgICAgdGhpcy5tZW51TGlzdC5ub2RlLmFkZENoaWxkKG1lbnUpO1xyXG5cclxuICAgICAgICAgICAgbWVudS5ub2RlLm9uKCdjbGljaycsdGhpcy5vdXRlckNsaWNrLHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVMaXN0Lm5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWkluWHuiDliIfmjaLlnLrmma9cclxuICAgICAqL1xyXG4gICAgb3V0ZXJDbGljazpmdW5jdGlvbigpe1xyXG5cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOW4ruW3pSDpmo/mnLrlop7liqDlsJHph4/kurrmsJRcclxuICAgICAqL1xyXG4gICAgaGVscGVyQ2xpY2s6ZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIC8vIOavj+W4p+abtOaWsOiuoeaXtuWZqO+8jOi2hei/h+mZkOW6pui/mOayoeacieeUn+aIkOaWsOeahOaYn+aYn1xyXG4gICAgICAgIC8vIOWwseS8muiwg+eUqOa4uOaIj+Wksei0pemAu+i+kVxyXG4gICAgICAgIC8vIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTsgICAvLyBkaXNhYmxlIGdhbWVPdmVyIGxvZ2ljIHRvIGF2b2lkIGxvYWQgc2NlbmUgcmVwZWF0ZWRseVxyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==