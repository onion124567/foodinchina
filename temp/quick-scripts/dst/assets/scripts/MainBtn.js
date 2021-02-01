
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MainBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c630je/l5AuqZ97H6m2qcS', 'MainBtn');
// scripts/MainBtn.js

"use strict";

cc.Class({
  "extends": cc.Button,
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
  // update: function (dt) {
  // },
  onLoad: function onLoad() {// add key down and key up event
    // let picNum=this.game.getPicNum();
    // cc.systemEvent.on();
    // this.node.on("mousedown", this.onMouseDown,this);
    //
    // let self=this;
    // cc.resources.load("pokers", cc.SpriteAtlas, function (err, atlas) {
    //
    //     var frame = atlas.getSpriteFrame(self.picNum);
    //
    //     // console.log('onion==='+self.getComponent(cc.Sprite));
    //     self.getComponent(cc.Sprite).spriteFrame =frame
    //     // this.spriteFrame= frame;
    // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFpbkJ0bi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQnV0dG9uIiwicHJvcGVydGllcyIsInBpY051bSIsImlzQ2hlY2siLCJzcHJpdGUiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzdGFydCIsIm9uTG9hZCIsIm9uRGVzdHJveSIsIm5vZGUiLCJvZmYiLCJvbk1vdXNlRG93biIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInN0b3BQcm9wYWdhdGlvbiIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxNQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUMsS0FEQztBQUVSQyxJQUFBQSxPQUFPLEVBQUMsS0FGQTtBQUdSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpDLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUTtBQUZMO0FBSEEsR0FIUDtBQVdMQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVksQ0FFZjtBQUNBO0FBRUE7QUFDQTtBQUdILEdBcEJJO0FBdUJMO0FBQ0E7QUFFQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZLENBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxHQXpDSTtBQTJDTEMsRUFBQUEsU0EzQ0ssdUJBMkNRO0FBQ1Q7QUFFQSxTQUFLQyxJQUFMLENBQVVDLEdBQVYsQ0FBYyxXQUFkLEVBQTJCLEtBQUtDLFdBQWhDLEVBQTZDLElBQTdDO0FBQ0gsR0EvQ0k7QUFpRExBLEVBQUFBLFdBQVcsRUFBRSxxQkFBVUMsS0FBVixFQUFpQjtBQUMxQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRixJQUFBQSxLQUFLLENBQUNHLGVBQU47O0FBQ0EsUUFBRyxLQUFLYixPQUFSLEVBQWdCO0FBQ1osV0FBS0EsT0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLTyxJQUFMLENBQVVPLENBQVYsR0FBWSxLQUFLUCxJQUFMLENBQVVPLENBQVYsR0FBWSxFQUF4QjtBQUNILEtBSEQsTUFHSztBQUNELFdBQUtkLE9BQUwsR0FBYSxJQUFiO0FBQ0EsV0FBS08sSUFBTCxDQUFVTyxDQUFWLEdBQVksS0FBS1AsSUFBTCxDQUFVTyxDQUFWLEdBQVksRUFBeEI7QUFDSDtBQUVKO0FBNURJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkJ1dHRvbixcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGljTnVtOlwiMTgxXCIsXHJcbiAgICAgICAgaXNDaGVjazpmYWxzZSxcclxuICAgICAgICBzcHJpdGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICAvLyB2YXIgc3AgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cclxuICAgICAgICAvLyBzcC5zcHJpdGVGcmFtZSA9IGNhcmRQaWM7XHJcbiAgICAgICAgLy8gbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGFkZCBrZXkgZG93biBhbmQga2V5IHVwIGV2ZW50XHJcbiAgICAgICAgLy8gbGV0IHBpY051bT10aGlzLmdhbWUuZ2V0UGljTnVtKCk7XHJcbiAgICAgICAgLy8gY2Muc3lzdGVtRXZlbnQub24oKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bix0aGlzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgLy8gY2MucmVzb3VyY2VzLmxvYWQoXCJwb2tlcnNcIiwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgdmFyIGZyYW1lID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWUoc2VsZi5waWNOdW0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdvbmlvbj09PScrc2VsZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XHJcbiAgICAgICAgLy8gICAgIHNlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPWZyYW1lXHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuc3ByaXRlRnJhbWU9IGZyYW1lO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIC8vIGNjLnN5c3RlbUV2ZW50Lm9mZihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUHJlc3MgYSBrZXknKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBpZih0aGlzLmlzQ2hlY2spe1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2s9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55PXRoaXMubm9kZS55LTUwO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2s9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnk9dGhpcy5ub2RlLnkrNTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG5cclxufSk7Il19