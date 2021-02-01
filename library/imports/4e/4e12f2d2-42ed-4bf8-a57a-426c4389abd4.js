"use strict";
cc._RF.push(module, '4e12fLSQu1L+KV6QmxDiavU', 'Game');
// scripts/Game.js

"use strict";

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
    outerMenu: {
      "default": null,
      type: cc.Button
    },
    helpMenu: {
      "default": null,
      type: cc.Button
    },
    customPrefab: {
      "default": null,
      type: cc.Prefab
    },
    floor1: {
      "default": null,
      type: cc.Layout
    },
    floor2: {
      "default": null,
      type: cc.Layout
    },
    floor3: {
      "default": null,
      type: cc.Layout
    },
    floor4: {
      "default": null,
      type: cc.Layout
    }
  },
  onLoad: function onLoad() {
    self = this;
    this.menuView.node.on('click', this.menuCallback, this);
    this.helpMenu.node.on('click', this.helperClick, this);
    this.outerMenu.node.on('click', this.outerClick, this); // 这里的 this 指向 component

    this.customEntry(this.floor1.node, this.floor1.node.width, this.floor1.node.width);
    this.customEntry(this.floor1.node, this.floor1.node.width, this.floor1.node.width / 2);
  },
  menuCallback: function menuCallback() {
    if (this.menuList.node.active) {
      this.menuList.node.active = false;
    } else {
      this.menuList.node.active = true;
    }
  },
  customEntry: function customEntry(floorNode, orgLocation, distance) {
    var newCustom = cc.instantiate(this.customPrefab); // 将新增的节点添加到 Canvas 节点下面

    floorNode.addChild(newCustom);
    newCustom.setPosition(cc.v2(orgLocation - 50, -50));
    this.schedule(function () {
      this.move(newCustom, distance);
    }, 5);
  },
  move: function move(node, distance) {
    // 创建一个移动动作
    var seq = cc.repeat(cc.sequence(cc.moveBy(2, -distance, 50), cc.moveBy(2, distance, -50)), 2); // 执行动作

    node.runAction(seq); // 停止一个动作
    //         node.stopAction(action);
  },

  /**
   * 外出 切换场景
   */
  outerClick: function outerClick() {
    cc.director.loadScene('outerchoice');
  },

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