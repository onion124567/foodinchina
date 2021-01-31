
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFpbkJ0bi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQnV0dG9uIiwicHJvcGVydGllcyIsInBpY051bSIsImlzQ2hlY2siLCJzcHJpdGUiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzdGFydCIsInNldFBpY051bSIsImNvbnNvbGUiLCJsb2ciLCJvbkxvYWQiLCJub2RlIiwib24iLCJvbk1vdXNlRG93biIsInNlbGYiLCJyZXNvdXJjZXMiLCJsb2FkIiwiU3ByaXRlQXRsYXMiLCJlcnIiLCJhdGxhcyIsImZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIm9uRGVzdHJveSIsIm9mZiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLE1BRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBQyxLQURDO0FBRVJDLElBQUFBLE9BQU8sRUFBQyxLQUZBO0FBR1JDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0FBRkw7QUFIQSxHQUhQO0FBV0xDLEVBQUFBLEtBQUssRUFBRSxpQkFBWSxDQUVmO0FBQ0E7QUFFQTtBQUNBO0FBR0gsR0FwQkk7QUFzQkxDLEVBQUFBLFNBdEJLLHFCQXNCS04sTUF0QkwsRUFzQlk7QUFDYk8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQWtCUixNQUE5QjtBQUNBLFNBQUtBLE1BQUwsR0FBWUEsTUFBWjtBQUNILEdBekJJO0FBMkJMO0FBQ0E7QUFFQVMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLFdBQWIsRUFBMEIsS0FBS0MsV0FBL0IsRUFBMkMsSUFBM0M7QUFFQSxRQUFJQyxJQUFJLEdBQUMsSUFBVDtBQUNBakIsSUFBQUEsRUFBRSxDQUFDa0IsU0FBSCxDQUFhQyxJQUFiLENBQWtCLFFBQWxCLEVBQTRCbkIsRUFBRSxDQUFDb0IsV0FBL0IsRUFBNEMsVUFBVUMsR0FBVixFQUFlQyxLQUFmLEVBQXNCO0FBRTlELFVBQUlDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxjQUFOLENBQXFCUCxJQUFJLENBQUNiLE1BQTFCLENBQVosQ0FGOEQsQ0FJOUQ7O0FBQ0FhLE1BQUFBLElBQUksQ0FBQ1EsWUFBTCxDQUFrQnpCLEVBQUUsQ0FBQzBCLE1BQXJCLEVBQTZCQyxXQUE3QixHQUEwQ0osS0FBMUMsQ0FMOEQsQ0FNOUQ7QUFDSCxLQVBEO0FBUUgsR0E3Q0k7QUErQ0xLLEVBQUFBLFNBL0NLLHVCQStDUTtBQUNUO0FBRUEsU0FBS2QsSUFBTCxDQUFVZSxHQUFWLENBQWMsV0FBZCxFQUEyQixLQUFLYixXQUFoQyxFQUE2QyxJQUE3QztBQUNILEdBbkRJO0FBcURMQSxFQUFBQSxXQUFXLEVBQUUscUJBQVVjLEtBQVYsRUFBaUI7QUFDMUJuQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FrQixJQUFBQSxLQUFLLENBQUNDLGVBQU47O0FBQ0EsUUFBRyxLQUFLMUIsT0FBUixFQUFnQjtBQUNaLFdBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsV0FBS1MsSUFBTCxDQUFVa0IsQ0FBVixHQUFZLEtBQUtsQixJQUFMLENBQVVrQixDQUFWLEdBQVksRUFBeEI7QUFDSCxLQUhELE1BR0s7QUFDRCxXQUFLM0IsT0FBTCxHQUFhLElBQWI7QUFDQSxXQUFLUyxJQUFMLENBQVVrQixDQUFWLEdBQVksS0FBS2xCLElBQUwsQ0FBVWtCLENBQVYsR0FBWSxFQUF4QjtBQUNIO0FBRUo7QUFoRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQnV0dG9uLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwaWNOdW06XCIxODFcIixcclxuICAgICAgICBpc0NoZWNrOmZhbHNlLFxyXG4gICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIC8vIHZhciBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblxyXG4gICAgICAgIC8vIHNwLnNwcml0ZUZyYW1lID0gY2FyZFBpYztcclxuICAgICAgICAvLyBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzZXRQaWNOdW0ocGljTnVtKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uIHNldFBpY051bVwiK3BpY051bSk7XHJcbiAgICAgICAgdGhpcy5waWNOdW09cGljTnVtO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBhZGQga2V5IGRvd24gYW5kIGtleSB1cCBldmVudFxyXG4gICAgICAgIC8vIGxldCBwaWNOdW09dGhpcy5nYW1lLmdldFBpY051bSgpO1xyXG4gICAgICAgIC8vIGNjLnN5c3RlbUV2ZW50Lm9uKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24sdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwb2tlcnNcIiwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBhdGxhcy5nZXRTcHJpdGVGcmFtZShzZWxmLnBpY051bSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25pb249PT0nK3NlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgICAgICBzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1mcmFtZVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNwcml0ZUZyYW1lPSBmcmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICAvLyBjYy5zeXN0ZW1FdmVudC5vZmYoXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1ByZXNzIGEga2V5Jyk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgaWYodGhpcy5pc0NoZWNrKXtcclxuICAgICAgICAgICAgdGhpcy5pc0NoZWNrPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueT10aGlzLm5vZGUueS01MDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5pc0NoZWNrPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55PXRoaXMubm9kZS55KzUwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbn0pOyJdfQ==