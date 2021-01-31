"use strict";
cc._RF.push(module, 'b3130nkOe5KfJWQ6ASQsvDe', 'MainHotel');
// scripts/MainHotel.js

"use strict";

var PokerUtil = require("PokerUtil");

var AIHelper = require("AIHelper");

var self;
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    self = this;
  },
  refreshCallback: function refreshCallback(button) {
    this.publishPokers();
  },
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