
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Custom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a119d3KwTRF37zMsYXbCKLz', 'Custom');
// scripts/Custom.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    sprite: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  start: function start() {// var node = new cc.Node('Sprite');
    // var sp = node.addComponent(cc.Sprite);
    // sp.spriteFrame = cardPic;
    // node.parent = this.node;
  },
  setPicNum: function setPicNum(picNum) {
    console.log("onion setPicNum" + picNum);
    this.picNum = picNum;
  },
  // update: function (dt) {
  // },
  onLoad: function onLoad() {
    // add key down and key up event
    // let picNum=this.game.getPicNum();
    // cc.systemEvent.on();
    this.node.on("mousedown", this.onMouseDown, this);
    var self = this;
    cc.resources.load("pokers", cc.SpriteAtlas, function (err, atlas) {
      var frame = atlas.getSpriteFrame(self.picNum); // console.log('onion==='+self.getComponent(cc.Sprite));

      self.getComponent(cc.Sprite).spriteFrame = frame; // this.spriteFrame= frame;
    });
  },
  onDestroy: function onDestroy() {
    // cc.systemEvent.off("mousedown", this.onMouseDown);
    this.node.off('mousedown', this.onMouseDown, this);
  },
  onMouseDown: function onMouseDown(event) {
    console.log('Press a key');
    event.stopPropagation();

    if (this.isCheck) {
      this.isCheck = false;
      this.node.y = this.node.y - 50;
    } else {
      this.isCheck = true;
      this.node.y = this.node.y + 50;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ3VzdG9tLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3ByaXRlIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwic3RhcnQiLCJzZXRQaWNOdW0iLCJwaWNOdW0iLCJjb25zb2xlIiwibG9nIiwib25Mb2FkIiwibm9kZSIsIm9uIiwib25Nb3VzZURvd24iLCJzZWxmIiwicmVzb3VyY2VzIiwibG9hZCIsIlNwcml0ZUF0bGFzIiwiZXJyIiwiYXRsYXMiLCJmcmFtZSIsImdldFNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJvbkRlc3Ryb3kiLCJvZmYiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImlzQ2hlY2siLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSDtBQURBLEdBSFA7QUFTSEMsRUFBQUEsS0FBSyxFQUFFLGlCQUFZLENBRWpCO0FBQ0E7QUFFQTtBQUNBO0FBR0QsR0FsQkU7QUFvQkhDLEVBQUFBLFNBcEJHLHFCQW9CT0MsTUFwQlAsRUFvQmM7QUFDZkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQWtCRixNQUE5QjtBQUNBLFNBQUtBLE1BQUwsR0FBWUEsTUFBWjtBQUNELEdBdkJFO0FBeUJMO0FBQ0E7QUFFQUcsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLFdBQWIsRUFBMEIsS0FBS0MsV0FBL0IsRUFBMkMsSUFBM0M7QUFFRixRQUFJQyxJQUFJLEdBQUMsSUFBVDtBQUNFaEIsSUFBQUEsRUFBRSxDQUFDaUIsU0FBSCxDQUFhQyxJQUFiLENBQWtCLFFBQWxCLEVBQTRCbEIsRUFBRSxDQUFDbUIsV0FBL0IsRUFBNEMsVUFBVUMsR0FBVixFQUFlQyxLQUFmLEVBQXNCO0FBRWhFLFVBQUlDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxjQUFOLENBQXFCUCxJQUFJLENBQUNQLE1BQTFCLENBQVosQ0FGZ0UsQ0FJaEU7O0FBQ0FPLE1BQUFBLElBQUksQ0FBQ1EsWUFBTCxDQUFrQnhCLEVBQUUsQ0FBQ3lCLE1BQXJCLEVBQTZCQyxXQUE3QixHQUEwQ0osS0FBMUMsQ0FMZ0UsQ0FNaEU7QUFDSCxLQVBDO0FBUUgsR0EzQ0k7QUE2Q0xLLEVBQUFBLFNBN0NLLHVCQTZDUTtBQUNUO0FBRUEsU0FBS2QsSUFBTCxDQUFVZSxHQUFWLENBQWMsV0FBZCxFQUEyQixLQUFLYixXQUFoQyxFQUE2QyxJQUE3QztBQUNILEdBakRJO0FBbURMQSxFQUFBQSxXQUFXLEVBQUUscUJBQVVjLEtBQVYsRUFBaUI7QUFDMUJuQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FrQixJQUFBQSxLQUFLLENBQUNDLGVBQU47O0FBQ0EsUUFBRyxLQUFLQyxPQUFSLEVBQWdCO0FBQ2QsV0FBS0EsT0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLbEIsSUFBTCxDQUFVbUIsQ0FBVixHQUFZLEtBQUtuQixJQUFMLENBQVVtQixDQUFWLEdBQVksRUFBeEI7QUFDRCxLQUhELE1BR0s7QUFDSCxXQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUtsQixJQUFMLENBQVVtQixDQUFWLEdBQVksS0FBS25CLElBQUwsQ0FBVW1CLENBQVYsR0FBWSxFQUF4QjtBQUNEO0FBRUo7QUE5REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwcml0ZToge1xuICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFxuICAgICAgICAvLyB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcbiAgICAgICAgLy8gdmFyIHNwID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICBcbiAgICAgICAgLy8gc3Auc3ByaXRlRnJhbWUgPSBjYXJkUGljO1xuICAgICAgICAvLyBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgIFxuICAgICAgfSxcblxuICAgICAgc2V0UGljTnVtKHBpY051bSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25pb24gc2V0UGljTnVtXCIrcGljTnVtKTtcbiAgICAgICAgdGhpcy5waWNOdW09cGljTnVtO1xuICAgICAgfSxcblxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgLy8gfSxcbiAgICBcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYWRkIGtleSBkb3duIGFuZCBrZXkgdXAgZXZlbnRcbiAgICAgICAgLy8gbGV0IHBpY051bT10aGlzLmdhbWUuZ2V0UGljTnVtKCk7XG4gICAgICAgIC8vIGNjLnN5c3RlbUV2ZW50Lm9uKCk7XG4gICAgICAgIHRoaXMubm9kZS5vbihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duLHRoaXMpO1xuICAgICAgICBcbiAgICAgIGxldCBzZWxmPXRoaXM7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicG9rZXJzXCIsIGNjLlNwcml0ZUF0bGFzLCBmdW5jdGlvbiAoZXJyLCBhdGxhcykge1xuICAgICAgICAgXG4gICAgICAgICAgdmFyIGZyYW1lID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWUoc2VsZi5waWNOdW0pO1xuICAgICAgICBcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25pb249PT0nK3NlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICAgIHNlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPWZyYW1lXG4gICAgICAgICAgLy8gdGhpcy5zcHJpdGVGcmFtZT0gZnJhbWU7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95ICgpIHtcbiAgICAgICAgLy8gY2Muc3lzdGVtRXZlbnQub2ZmKFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ub2RlLm9mZignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ByZXNzIGEga2V5Jyk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZih0aGlzLmlzQ2hlY2spe1xuICAgICAgICAgIHRoaXMuaXNDaGVjaz1mYWxzZTtcbiAgICAgICAgICB0aGlzLm5vZGUueT10aGlzLm5vZGUueS01MDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5pc0NoZWNrPXRydWU7XG4gICAgICAgICAgdGhpcy5ub2RlLnk9dGhpcy5ub2RlLnkrNTA7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9LFxuXG5cbn0pO1xuIl19