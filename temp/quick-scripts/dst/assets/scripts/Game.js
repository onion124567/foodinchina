
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJQb2tlclV0aWwiLCJyZXF1aXJlIiwiQUlIZWxwZXIiLCJzZWxmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtZW51VmlldyIsInR5cGUiLCJCdXR0b24iLCJjb2luVmFsdWVWaWV3IiwiTGFiZWwiLCJtZW51TGlzdCIsIkxheW91dCIsIm91dGVyTWVudSIsImhlbHBNZW51IiwiY3VzdG9tUHJlZmFiIiwiUHJlZmFiIiwiZmxvb3IxIiwiZmxvb3IyIiwiZmxvb3IzIiwiZmxvb3I0Iiwib25Mb2FkIiwibm9kZSIsIm9uIiwibWVudUNhbGxiYWNrIiwiaGVscGVyQ2xpY2siLCJvdXRlckNsaWNrIiwiY3VzdG9tRW50cnkiLCJ3aWR0aCIsImFjdGl2ZSIsImZsb29yTm9kZSIsIm9yZ0xvY2F0aW9uIiwiZGlzdGFuY2UiLCJuZXdDdXN0b20iLCJpbnN0YW50aWF0ZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJ2MiIsInNjaGVkdWxlIiwibW92ZSIsInNlcSIsInJlcGVhdCIsInNlcXVlbmNlIiwibW92ZUJ5IiwicnVuQWN0aW9uIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlDLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBQ0EsSUFBSUUsSUFBSjtBQUNBOzs7Ozs7Ozs7QUFRQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERjtBQUtSQyxJQUFBQSxh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V0FBVyxHQUFDLEVBQWxCLEVBQXNCLENBQUMsRUFBdkIsQ0FBdEI7QUFDQSxTQUFLTyxRQUFMLENBQWMsWUFBVztBQUNyQixXQUFLQyxJQUFMLENBQVVOLFNBQVYsRUFBb0JELFFBQXBCO0FBQ0gsS0FGRCxFQUVHLENBRkg7QUFJSCxHQXhFSTtBQXlFTE8sRUFBQUEsSUFBSSxFQUFDLGNBQVNqQixJQUFULEVBQWNVLFFBQWQsRUFBdUI7QUFDeEI7QUFDQSxRQUFJUSxHQUFHLEdBQUd0QyxFQUFFLENBQUN1QyxNQUFILENBQ052QyxFQUFFLENBQUN3QyxRQUFILENBQ0l4QyxFQUFFLENBQUN5QyxNQUFILENBQVUsQ0FBVixFQUFjLENBQUNYLFFBQWYsRUFBeUIsRUFBekIsQ0FESixFQUVJOUIsRUFBRSxDQUFDeUMsTUFBSCxDQUFVLENBQVYsRUFBWVgsUUFBWixFQUFzQixDQUFDLEVBQXZCLENBRkosQ0FETSxFQUlILENBSkcsQ0FBVixDQUZ3QixDQVNoQzs7QUFDUVYsSUFBQUEsSUFBSSxDQUFDc0IsU0FBTCxDQUFlSixHQUFmLEVBVndCLENBV2hDO0FBQ0E7QUFDSyxHQXRGSTs7QUF1Rkw7OztBQUdBZCxFQUFBQSxVQUFVLEVBQUMsc0JBQVU7QUFDakJ4QixJQUFBQSxFQUFFLENBQUMyQyxRQUFILENBQVlDLFNBQVosQ0FBc0IsYUFBdEI7QUFFSCxHQTdGSTs7QUE4Rkw7OztBQUdBckIsRUFBQUEsV0FBVyxFQUFDLHVCQUFXLENBRXRCLENBbkdJO0FBd0dMc0IsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWMsQ0FDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBakhJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgUG9rZXJVdGlsID0gcmVxdWlyZShcIlBva2VyVXRpbFwiKTtcclxubGV0IEFJSGVscGVyID0gcmVxdWlyZShcIkFJSGVscGVyXCIpO1xyXG5sZXQgc2VsZjtcclxuLyoqXHJcbiAqIOe7j+iQpemYtuauteS4u+eVjOmdolxyXG4gKiAg57uP6JCl6Zi25q61LOavj+WkqeaciTbkuKrmionmi6nvvIxcclxuICogIOWPr+WcqOW6l+WGheW4ruW3pS/nm5Hlt6XvvIzlh7rpmo/mnLrkuovku7ZcclxuICogIOWPr+WHuuWklumHh+i0re+8jOivleWQg+WtpuS5oOiPnOiwse+8jOWPr+aMluaOmOmjn+adkO+8jFxyXG4gKiAg5Lmf6IO956Kw5Yiw5bm/5ZGK44CB5Y6o5biI5LqJ6Zy45Y+K5Y2r55Sf5qOA5p+l562J5raI5oGvXHJcbiAqICDpmo/ml7blj6/ku6XosIPmlbTlnLrlnLBcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbWVudVZpZXc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29pblZhbHVlVmlldzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lbnVMaXN0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxheW91dCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG91dGVyTWVudToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWxwTWVudToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXN0b21QcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbG9vcjE6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYXlvdXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbG9vcjI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYXlvdXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbG9vcjM6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYXlvdXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbG9vcjQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYXlvdXQsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmPXRoaXM7XHJcbiAgICAgICAgdGhpcy5tZW51Vmlldy5ub2RlLm9uKCdjbGljaycsIHRoaXMubWVudUNhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmhlbHBNZW51Lm5vZGUub24oJ2NsaWNrJywgdGhpcy5oZWxwZXJDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vdXRlck1lbnUubm9kZS5vbignY2xpY2snLCB0aGlzLm91dGVyQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICAvLyDov5nph4znmoQgdGhpcyDmjIflkJEgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tRW50cnkodGhpcy5mbG9vcjEubm9kZSx0aGlzLmZsb29yMS5ub2RlLndpZHRoLHRoaXMuZmxvb3IxLm5vZGUud2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbUVudHJ5KHRoaXMuZmxvb3IxLm5vZGUsdGhpcy5mbG9vcjEubm9kZS53aWR0aCx0aGlzLmZsb29yMS5ub2RlLndpZHRoLzIpO1xyXG4gICAgfSxcclxuICAgIG1lbnVDYWxsYmFjazpmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMubWVudUxpc3Qubm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVMaXN0Lm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51TGlzdC5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgY3VzdG9tRW50cnk6ZnVuY3Rpb24oZmxvb3JOb2RlLG9yZ0xvY2F0aW9uLGRpc3RhbmNlKXtcclxuICAgICAgICBsZXQgbmV3Q3VzdG9tID0gY2MuaW5zdGFudGlhdGUodGhpcy5jdXN0b21QcmVmYWIpO1xyXG4gICAgICAgIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXHJcbiAgICAgICAgZmxvb3JOb2RlLmFkZENoaWxkKG5ld0N1c3RvbSk7XHJcbiAgICAgICAgbmV3Q3VzdG9tLnNldFBvc2l0aW9uKGNjLnYyKG9yZ0xvY2F0aW9uLTUwLCAtNTApKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUobmV3Q3VzdG9tLGRpc3RhbmNlKTtcclxuICAgICAgICB9LCA1KTtcclxuXHJcbiAgICB9LFxyXG4gICAgbW92ZTpmdW5jdGlvbihub2RlLGRpc3RhbmNlKXtcclxuICAgICAgICAvLyDliJvlu7rkuIDkuKrnp7vliqjliqjkvZxcclxuICAgICAgICBsZXQgc2VxID0gY2MucmVwZWF0KFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVCeSgyLCAgLWRpc3RhbmNlLCA1MCksXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoMixkaXN0YW5jZSwgLTUwKVxyXG4gICAgICAgICAgICApLCAyKTtcclxuXHJcblxyXG4vLyDmiafooYzliqjkvZxcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihzZXEpO1xyXG4vLyDlgZzmraLkuIDkuKrliqjkvZxcclxuLy8gICAgICAgICBub2RlLnN0b3BBY3Rpb24oYWN0aW9uKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWkluWHuiDliIfmjaLlnLrmma9cclxuICAgICAqL1xyXG4gICAgb3V0ZXJDbGljazpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnb3V0ZXJjaG9pY2UnKTtcclxuXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDluK7lt6Ug6ZqP5py65aKe5Yqg5bCR6YeP5Lq65rCUXHJcbiAgICAgKi9cclxuICAgIGhlbHBlckNsaWNrOmZ1bmN0aW9uKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyDmr4/luKfmm7TmlrDorqHml7blmajvvIzotoXov4fpmZDluqbov5jmsqHmnInnlJ/miJDmlrDnmoTmmJ/mmJ9cclxuICAgICAgICAvLyDlsLHkvJrosIPnlKjmuLjmiI/lpLHotKXpgLvovpFcclxuICAgICAgICAvLyBpZiAodGhpcy50aW1lciA+IHRoaXMuc3RhckR1cmF0aW9uKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7ICAgLy8gZGlzYWJsZSBnYW1lT3ZlciBsb2dpYyB0byBhdm9pZCBsb2FkIHNjZW5lIHJlcGVhdGVkbHlcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=