
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a33bdDMnNJPOoeK9yA2ZiuG', 'Card');
// scripts/Card.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    picNum: "181",
    isCheck: false,
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
    cc.resources.load("pokers", cc.SpriteAtlas, function (err, atlas) {// var frame = atlas.getSpriteFrame(self.picNum);
      // console.log('onion==='+self.getComponent(cc.Sprite));
      // self.getComponent(cc.Sprite).spriteFrame =frame
      // this.spriteFrame= frame;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2FyZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY051bSIsImlzQ2hlY2siLCJzcHJpdGUiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzdGFydCIsInNldFBpY051bSIsImNvbnNvbGUiLCJsb2ciLCJvbkxvYWQiLCJub2RlIiwib24iLCJvbk1vdXNlRG93biIsInNlbGYiLCJyZXNvdXJjZXMiLCJsb2FkIiwiU3ByaXRlQXRsYXMiLCJlcnIiLCJhdGxhcyIsIm9uRGVzdHJveSIsIm9mZiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLE1BQU0sRUFBQyxLQURHO0FBRVZDLElBQUFBLE9BQU8sRUFBQyxLQUZFO0FBR1JDLElBQUFBLE1BQU0sRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0FBRkg7QUFIQSxHQUhQO0FBV0hDLEVBQUFBLEtBQUssRUFBRSxpQkFBWSxDQUVqQjtBQUNBO0FBRUE7QUFDQTtBQUdELEdBcEJFO0FBc0JIQyxFQUFBQSxTQXRCRyxxQkFzQk9OLE1BdEJQLEVBc0JjO0FBQ2ZPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFrQlIsTUFBOUI7QUFDQSxTQUFLQSxNQUFMLEdBQVlBLE1BQVo7QUFDRCxHQXpCRTtBQTJCTDtBQUNBO0FBRUFTLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxXQUFiLEVBQTBCLEtBQUtDLFdBQS9CLEVBQTJDLElBQTNDO0FBRUYsUUFBSUMsSUFBSSxHQUFDLElBQVQ7QUFDRWpCLElBQUFBLEVBQUUsQ0FBQ2tCLFNBQUgsQ0FBYUMsSUFBYixDQUFrQixRQUFsQixFQUE0Qm5CLEVBQUUsQ0FBQ29CLFdBQS9CLEVBQTRDLFVBQVVDLEdBQVYsRUFBZUMsS0FBZixFQUFzQixDQUVoRTtBQUVBO0FBQ0E7QUFDQTtBQUNILEtBUEM7QUFRSCxHQTdDSTtBQStDTEMsRUFBQUEsU0EvQ0ssdUJBK0NRO0FBQ1Q7QUFFQSxTQUFLVCxJQUFMLENBQVVVLEdBQVYsQ0FBYyxXQUFkLEVBQTJCLEtBQUtSLFdBQWhDLEVBQTZDLElBQTdDO0FBQ0gsR0FuREk7QUFxRExBLEVBQUFBLFdBQVcsRUFBRSxxQkFBVVMsS0FBVixFQUFpQjtBQUMxQmQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBYSxJQUFBQSxLQUFLLENBQUNDLGVBQU47O0FBQ0EsUUFBRyxLQUFLckIsT0FBUixFQUFnQjtBQUNkLFdBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsV0FBS1MsSUFBTCxDQUFVYSxDQUFWLEdBQVksS0FBS2IsSUFBTCxDQUFVYSxDQUFWLEdBQVksRUFBeEI7QUFDRCxLQUhELE1BR0s7QUFDSCxXQUFLdEIsT0FBTCxHQUFhLElBQWI7QUFDQSxXQUFLUyxJQUFMLENBQVVhLENBQVYsR0FBWSxLQUFLYixJQUFMLENBQVVhLENBQVYsR0FBWSxFQUF4QjtBQUNEO0FBRUo7QUFoRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgIHBpY051bTpcIjE4MVwiLFxyXG4gICAgICBpc0NoZWNrOmZhbHNlLFxyXG4gICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIC8vIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIC8vIHZhciBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBcclxuICAgICAgICAvLyBzcC5zcHJpdGVGcmFtZSA9IGNhcmRQaWM7XHJcbiAgICAgICAgLy8gbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcblxyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzZXRQaWNOdW0ocGljTnVtKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uIHNldFBpY051bVwiK3BpY051bSk7XHJcbiAgICAgICAgdGhpcy5waWNOdW09cGljTnVtO1xyXG4gICAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAvLyB9LFxyXG4gICAgXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBhZGQga2V5IGRvd24gYW5kIGtleSB1cCBldmVudFxyXG4gICAgICAgIC8vIGxldCBwaWNOdW09dGhpcy5nYW1lLmdldFBpY051bSgpO1xyXG4gICAgICAgIC8vIGNjLnN5c3RlbUV2ZW50Lm9uKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24sdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwb2tlcnNcIiwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgLy8gdmFyIGZyYW1lID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWUoc2VsZi5waWNOdW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uaW9uPT09JytzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcclxuICAgICAgICAgIC8vIHNlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPWZyYW1lXHJcbiAgICAgICAgICAvLyB0aGlzLnNwcml0ZUZyYW1lPSBmcmFtZTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgLy8gY2Muc3lzdGVtRXZlbnQub2ZmKFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1ByZXNzIGEga2V5Jyk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgaWYodGhpcy5pc0NoZWNrKXtcclxuICAgICAgICAgIHRoaXMuaXNDaGVjaz1mYWxzZTtcclxuICAgICAgICAgIHRoaXMubm9kZS55PXRoaXMubm9kZS55LTUwO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5pc0NoZWNrPXRydWU7XHJcbiAgICAgICAgICB0aGlzLm5vZGUueT10aGlzLm5vZGUueSs1MDtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH0sXHJcblxyXG5cclxufSk7XHJcbiJdfQ==