
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
 *  经营阶段,每天有6个抉择，可在店内帮工/监工，可出外采购，试吃学习菜谱，可挖掘食材，
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
   * 外出
   */
  outerClick: function outerClick() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJQb2tlclV0aWwiLCJyZXF1aXJlIiwiQUlIZWxwZXIiLCJzZWxmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtZW51VmlldyIsInR5cGUiLCJCdXR0b24iLCJjb2luVmFsdWVWaWV3IiwiTGFiZWwiLCJtZW51TGlzdCIsIkxheW91dCIsIm1haW5idG4iLCJQcmVmYWIiLCJvbkxvYWQiLCJub2RlIiwib24iLCJtZW51Q2FsbGJhY2siLCJhY3RpdmUiLCJtZW51IiwiaW5zdGFudGlhdGUiLCJjb21wb25lbnRzIiwiY2hpbGRyZW4iLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImdldENvbXBvbmVudCIsImFkZENoaWxkIiwib3V0ZXJDbGljayIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFDQSxJQUFJRSxJQUFKO0FBQ0E7Ozs7Ozs7QUFNQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERjtBQUtSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZFLEtBTFA7QUFTUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7QUFGSCxLQVRGO0FBYVJDLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTLElBREo7QUFFTE4sTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNZO0FBRko7QUFiRCxHQUhQO0FBc0JMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEJkLElBQUFBLElBQUksR0FBQyxJQUFMO0FBQ0EsU0FBS0ssUUFBTCxDQUFjVSxJQUFkLENBQW1CQyxFQUFuQixDQUFzQixPQUF0QixFQUErQixLQUFLQyxZQUFwQyxFQUFrRCxJQUFsRDtBQUNBLFNBQUtQLFFBQUwsQ0FBY0ssSUFBZCxDQUFtQkcsTUFBbkIsR0FBMEIsS0FBMUI7QUFDSCxHQTFCSTtBQTJCTEQsRUFBQUEsWUFBWSxFQUFDLHdCQUFVO0FBQ25CLFFBQUcsS0FBS1AsUUFBTCxDQUFjSyxJQUFkLENBQW1CRyxNQUF0QixFQUE2QjtBQUN6QixXQUFLUixRQUFMLENBQWNLLElBQWQsQ0FBbUJHLE1BQW5CLEdBQTBCLEtBQTFCO0FBQ0gsS0FGRCxNQUVNO0FBQ0YsVUFBS0MsSUFBSSxHQUFDbEIsRUFBRSxDQUFDbUIsV0FBSCxDQUFlLEtBQUtSLE9BQXBCLENBQVYsQ0FERSxDQUVGOztBQUVBLFVBQUlTLFVBQVUsR0FBQ0YsSUFBSSxDQUFDRyxRQUFwQjs7QUFDQSwyREFBZ0JELFVBQWhCLHdDQUEyQjtBQUFBLFlBQW5CRSxJQUFtQjtBQUN2QkMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQixpQkFBZUYsSUFBSSxDQUFDRyxZQUFMLENBQWtCLFFBQWxCLENBQW5DO0FBQ0gsT0FQQyxDQVNGOzs7QUFDQSxXQUFLaEIsUUFBTCxDQUFjSyxJQUFkLENBQW1CWSxRQUFuQixDQUE0QlIsSUFBNUI7QUFFQUEsTUFBQUEsSUFBSSxDQUFDSixJQUFMLENBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLEtBQUtZLFVBQTFCLEVBQXFDLElBQXJDO0FBQ0EsV0FBS2xCLFFBQUwsQ0FBY0ssSUFBZCxDQUFtQkcsTUFBbkIsR0FBMEIsSUFBMUI7QUFDSDtBQUVKLEdBOUNJOztBQStDTDs7O0FBR0FVLEVBQUFBLFVBQVUsRUFBQyxzQkFBVSxDQUVwQixDQXBESTtBQXlETEMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWMsQ0FDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBbEVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgUG9rZXJVdGlsID0gcmVxdWlyZShcIlBva2VyVXRpbFwiKTtcclxubGV0IEFJSGVscGVyID0gcmVxdWlyZShcIkFJSGVscGVyXCIpO1xyXG5sZXQgc2VsZjtcclxuLyoqXHJcbiAqIOe7j+iQpemYtuauteS4u+eVjOmdolxyXG4gKiAg57uP6JCl6Zi25q61LOavj+WkqeaciTbkuKrmionmi6nvvIzlj6/lnKjlupflhoXluK7lt6Uv55uR5bel77yM5Y+v5Ye65aSW6YeH6LSt77yM6K+V5ZCD5a2m5Lmg6I+c6LCx77yM5Y+v5oyW5o6Y6aOf5p2Q77yMXHJcbiAqICDkuZ/og73norDliLDlub/lkYrjgIHljqjluIjkuonpnLjlj4rljavnlJ/mo4Dmn6XnrYnmtojmga9cclxuICogIOmaj+aXtuWPr+S7peiwg+aVtOWcuuWcsFxyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBtZW51Vmlldzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2luVmFsdWVWaWV3OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudUxpc3Q6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGF5b3V0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFpbmJ0bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmPXRoaXM7XHJcbiAgICAgICAgdGhpcy5tZW51Vmlldy5ub2RlLm9uKCdjbGljaycsIHRoaXMubWVudUNhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm1lbnVMaXN0Lm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIG1lbnVDYWxsYmFjazpmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMubWVudUxpc3Qubm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVMaXN0Lm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgbGV0ICBtZW51PWNjLmluc3RhbnRpYXRlKHRoaXMubWFpbmJ0bik7XHJcbiAgICAgICAgICAgIC8vIGxldCBsYWJlbD1tZW51LmdldENvbXBvbmVudCgnQnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50cz1tZW51LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uXCIsXCJtZW51Q2FsbEJhY2tcIitpdGVtLmdldENvbXBvbmVudCgnQnV0dG9uJykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBsYWJlbC5zdHJpbmc9XCLlpJblh7pcIjtcclxuICAgICAgICAgICAgdGhpcy5tZW51TGlzdC5ub2RlLmFkZENoaWxkKG1lbnUpO1xyXG5cclxuICAgICAgICAgICAgbWVudS5ub2RlLm9uKCdjbGljaycsdGhpcy5vdXRlckNsaWNrLHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVMaXN0Lm5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWkluWHulxyXG4gICAgICovXHJcbiAgICBvdXRlckNsaWNrOmZ1bmN0aW9uKCl7XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIC8vIOavj+W4p+abtOaWsOiuoeaXtuWZqO+8jOi2hei/h+mZkOW6pui/mOayoeacieeUn+aIkOaWsOeahOaYn+aYn1xyXG4gICAgICAgIC8vIOWwseS8muiwg+eUqOa4uOaIj+Wksei0pemAu+i+kVxyXG4gICAgICAgIC8vIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTsgICAvLyBkaXNhYmxlIGdhbWVPdmVyIGxvZ2ljIHRvIGF2b2lkIGxvYWQgc2NlbmUgcmVwZWF0ZWRseVxyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==