"use strict";
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