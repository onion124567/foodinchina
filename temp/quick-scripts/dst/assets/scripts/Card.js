
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NhcmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwaWNOdW0iLCJpc0NoZWNrIiwic3ByaXRlIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwic3RhcnQiLCJzZXRQaWNOdW0iLCJjb25zb2xlIiwibG9nIiwib25Mb2FkIiwibm9kZSIsIm9uIiwib25Nb3VzZURvd24iLCJzZWxmIiwicmVzb3VyY2VzIiwibG9hZCIsIlNwcml0ZUF0bGFzIiwiZXJyIiwiYXRsYXMiLCJmcmFtZSIsImdldFNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJvbkRlc3Ryb3kiLCJvZmYiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxNQUFNLEVBQUMsS0FERztBQUVWQyxJQUFBQSxPQUFPLEVBQUMsS0FGRTtBQUdSQyxJQUFBQSxNQUFNLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5DLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUTtBQUZIO0FBSEEsR0FIUDtBQVdIQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVksQ0FFakI7QUFDQTtBQUVBO0FBQ0E7QUFHRCxHQXBCRTtBQXNCSEMsRUFBQUEsU0F0QkcscUJBc0JPTixNQXRCUCxFQXNCYztBQUNmTyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBa0JSLE1BQTlCO0FBQ0EsU0FBS0EsTUFBTCxHQUFZQSxNQUFaO0FBQ0QsR0F6QkU7QUEyQkw7QUFDQTtBQUVBUyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsV0FBYixFQUEwQixLQUFLQyxXQUEvQixFQUEyQyxJQUEzQztBQUVGLFFBQUlDLElBQUksR0FBQyxJQUFUO0FBQ0VqQixJQUFBQSxFQUFFLENBQUNrQixTQUFILENBQWFDLElBQWIsQ0FBa0IsUUFBbEIsRUFBNEJuQixFQUFFLENBQUNvQixXQUEvQixFQUE0QyxVQUFVQyxHQUFWLEVBQWVDLEtBQWYsRUFBc0I7QUFFaEUsVUFBSUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLGNBQU4sQ0FBcUJQLElBQUksQ0FBQ2IsTUFBMUIsQ0FBWixDQUZnRSxDQUloRTs7QUFDQWEsTUFBQUEsSUFBSSxDQUFDUSxZQUFMLENBQWtCekIsRUFBRSxDQUFDMEIsTUFBckIsRUFBNkJDLFdBQTdCLEdBQTBDSixLQUExQyxDQUxnRSxDQU1oRTtBQUNILEtBUEM7QUFRSCxHQTdDSTtBQStDTEssRUFBQUEsU0EvQ0ssdUJBK0NRO0FBQ1Q7QUFFQSxTQUFLZCxJQUFMLENBQVVlLEdBQVYsQ0FBYyxXQUFkLEVBQTJCLEtBQUtiLFdBQWhDLEVBQTZDLElBQTdDO0FBQ0gsR0FuREk7QUFxRExBLEVBQUFBLFdBQVcsRUFBRSxxQkFBVWMsS0FBVixFQUFpQjtBQUMxQm5CLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQWtCLElBQUFBLEtBQUssQ0FBQ0MsZUFBTjs7QUFDQSxRQUFHLEtBQUsxQixPQUFSLEVBQWdCO0FBQ2QsV0FBS0EsT0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLUyxJQUFMLENBQVVrQixDQUFWLEdBQVksS0FBS2xCLElBQUwsQ0FBVWtCLENBQVYsR0FBWSxFQUF4QjtBQUNELEtBSEQsTUFHSztBQUNILFdBQUszQixPQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUtTLElBQUwsQ0FBVWtCLENBQVYsR0FBWSxLQUFLbEIsSUFBTCxDQUFVa0IsQ0FBVixHQUFZLEVBQXhCO0FBQ0Q7QUFFSjtBQWhFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHBpY051bTpcIjE4MVwiLFxuICAgICAgaXNDaGVjazpmYWxzZSxcbiAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgXG4gICAgICAgIC8vIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xuICAgICAgICAvLyB2YXIgc3AgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIFxuICAgICAgICAvLyBzcC5zcHJpdGVGcmFtZSA9IGNhcmRQaWM7XG4gICAgICAgIC8vIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4gICAgICAgXG4gICAgICB9LFxuXG4gICAgICBzZXRQaWNOdW0ocGljTnVtKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbmlvbiBzZXRQaWNOdW1cIitwaWNOdW0pO1xuICAgICAgICB0aGlzLnBpY051bT1waWNOdW07XG4gICAgICB9LFxuXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAvLyB9LFxuICAgIFxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBhZGQga2V5IGRvd24gYW5kIGtleSB1cCBldmVudFxuICAgICAgICAvLyBsZXQgcGljTnVtPXRoaXMuZ2FtZS5nZXRQaWNOdW0oKTtcbiAgICAgICAgLy8gY2Muc3lzdGVtRXZlbnQub24oKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24sdGhpcyk7XG4gICAgICAgIFxuICAgICAgbGV0IHNlbGY9dGhpcztcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwb2tlcnNcIiwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XG4gICAgICAgICBcbiAgICAgICAgICB2YXIgZnJhbWUgPSBhdGxhcy5nZXRTcHJpdGVGcmFtZShzZWxmLnBpY051bSk7XG4gICAgICAgIFxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmlvbj09PScrc2VsZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgc2VsZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9ZnJhbWVcbiAgICAgICAgICAvLyB0aGlzLnNwcml0ZUZyYW1lPSBmcmFtZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICAvLyBjYy5zeXN0ZW1FdmVudC5vZmYoXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vZGUub2ZmKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnUHJlc3MgYSBrZXknKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmKHRoaXMuaXNDaGVjayl7XG4gICAgICAgICAgdGhpcy5pc0NoZWNrPWZhbHNlO1xuICAgICAgICAgIHRoaXMubm9kZS55PXRoaXMubm9kZS55LTUwO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLmlzQ2hlY2s9dHJ1ZTtcbiAgICAgICAgICB0aGlzLm5vZGUueT10aGlzLm5vZGUueSs1MDtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0sXG5cblxufSk7XG4iXX0=