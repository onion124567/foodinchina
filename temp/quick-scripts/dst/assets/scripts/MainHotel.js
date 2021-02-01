
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MainHotel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01haW5Ib3RlbC5qcyJdLCJuYW1lcyI6WyJQb2tlclV0aWwiLCJyZXF1aXJlIiwiQUlIZWxwZXIiLCJzZWxmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJyZWZyZXNoQ2FsbGJhY2siLCJidXR0b24iLCJwdWJsaXNoUG9rZXJzIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQUlFLElBQUo7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFLTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCTCxJQUFBQSxJQUFJLEdBQUMsSUFBTDtBQUVILEdBUkk7QUFXTE0sRUFBQUEsZUFBZSxFQUFFLHlCQUFVQyxNQUFWLEVBQWtCO0FBQy9CLFNBQUtDLGFBQUw7QUFDSCxHQWJJO0FBZUxDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjLENBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQXhCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBQb2tlclV0aWwgPSByZXF1aXJlKFwiUG9rZXJVdGlsXCIpO1xubGV0IEFJSGVscGVyID0gcmVxdWlyZShcIkFJSGVscGVyXCIpO1xubGV0IHNlbGY7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZj10aGlzO1xuXG4gICAgfSxcblxuXG4gICAgcmVmcmVzaENhbGxiYWNrOiBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIHRoaXMucHVibGlzaFBva2VycygpO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAvLyDmr4/luKfmm7TmlrDorqHml7blmajvvIzotoXov4fpmZDluqbov5jmsqHmnInnlJ/miJDmlrDnmoTmmJ/mmJ9cbiAgICAgICAgLy8g5bCx5Lya6LCD55So5ri45oiP5aSx6LSl6YC76L6RXG4gICAgICAgIC8vIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlOyAgIC8vIGRpc2FibGUgZ2FtZU92ZXIgbG9naWMgdG8gYXZvaWQgbG9hZCBzY2VuZSByZXBlYXRlZGx5XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhpcy50aW1lciArPSBkdDtcbiAgICB9LFxuXG59KTtcbiJdfQ==