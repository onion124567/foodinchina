
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CookerLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4cf966YC9JDoIHzObFXQ+dK', 'CookerLayout');
// scripts/CookerLayout.js

"use strict";

cc.Class({
  "extends": cc.Layout,
  properties: {
    picNum: "181",
    isCheck: false,
    sprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    titleView: {
      "default": null,
      type: cc.Label
    },
    contentView: {
      "default": null,
      type: cc.Label
    },
    btnView: {
      "default": null,
      type: cc.Button
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
    event.stopPropagation(); // if(this.isCheck){
    //     this.isCheck=false;
    //     this.node.y=this.node.y-50;
    // }else{
    //     this.isCheck=true;
    //     this.node.y=this.node.y+50;
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29va2VyTGF5b3V0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJMYXlvdXQiLCJwcm9wZXJ0aWVzIiwicGljTnVtIiwiaXNDaGVjayIsInNwcml0ZSIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInRpdGxlVmlldyIsIkxhYmVsIiwiY29udGVudFZpZXciLCJidG5WaWV3IiwiQnV0dG9uIiwic3RhcnQiLCJzZXRQaWNOdW0iLCJjb25zb2xlIiwibG9nIiwib25Mb2FkIiwibm9kZSIsIm9uIiwib25Nb3VzZURvd24iLCJzZWxmIiwicmVzb3VyY2VzIiwibG9hZCIsIlNwcml0ZUF0bGFzIiwiZXJyIiwiYXRsYXMiLCJmcmFtZSIsImdldFNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJvbkRlc3Ryb3kiLCJvZmYiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLE1BRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBQyxLQURDO0FBRVJDLElBQUFBLE9BQU8sRUFBQyxLQUZBO0FBR1JDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0FBRkwsS0FIQTtBQU9SQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBGLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDVTtBQUZGLEtBUEg7QUFXUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUSixNQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ1U7QUFGQSxLQVhMO0FBZVJFLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTLElBREo7QUFFTEwsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNhO0FBRko7QUFmRCxHQUhQO0FBdUJMQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVksQ0FFZjtBQUNBO0FBRUE7QUFDQTtBQUdILEdBaENJO0FBa0NMQyxFQUFBQSxTQWxDSyxxQkFrQ0tYLE1BbENMLEVBa0NZO0FBQ2JZLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFrQmIsTUFBOUI7QUFDQSxTQUFLQSxNQUFMLEdBQVlBLE1BQVo7QUFDSCxHQXJDSTtBQXVDTDtBQUNBO0FBRUFjLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxXQUFiLEVBQTBCLEtBQUtDLFdBQS9CLEVBQTJDLElBQTNDO0FBRUEsUUFBSUMsSUFBSSxHQUFDLElBQVQ7QUFDQXRCLElBQUFBLEVBQUUsQ0FBQ3VCLFNBQUgsQ0FBYUMsSUFBYixDQUFrQixRQUFsQixFQUE0QnhCLEVBQUUsQ0FBQ3lCLFdBQS9CLEVBQTRDLFVBQVVDLEdBQVYsRUFBZUMsS0FBZixFQUFzQjtBQUU5RCxVQUFJQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsY0FBTixDQUFxQlAsSUFBSSxDQUFDbEIsTUFBMUIsQ0FBWixDQUY4RCxDQUk5RDs7QUFDQWtCLE1BQUFBLElBQUksQ0FBQ1EsWUFBTCxDQUFrQjlCLEVBQUUsQ0FBQytCLE1BQXJCLEVBQTZCQyxXQUE3QixHQUEwQ0osS0FBMUMsQ0FMOEQsQ0FNOUQ7QUFDSCxLQVBEO0FBUUgsR0F6REk7QUEyRExLLEVBQUFBLFNBM0RLLHVCQTJEUTtBQUNUO0FBRUEsU0FBS2QsSUFBTCxDQUFVZSxHQUFWLENBQWMsV0FBZCxFQUEyQixLQUFLYixXQUFoQyxFQUE2QyxJQUE3QztBQUNILEdBL0RJO0FBaUVMQSxFQUFBQSxXQUFXLEVBQUUscUJBQVVjLEtBQVYsRUFBaUI7QUFDMUJuQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FrQixJQUFBQSxLQUFLLENBQUNDLGVBQU4sR0FGMEIsQ0FHMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDtBQTVFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5MYXlvdXQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBpY051bTpcIjE4MVwiLFxyXG4gICAgICAgIGlzQ2hlY2s6ZmFsc2UsXHJcbiAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGVWaWV3OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudFZpZXc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidG5WaWV3OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIC8vIHZhciBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblxyXG4gICAgICAgIC8vIHNwLnNwcml0ZUZyYW1lID0gY2FyZFBpYztcclxuICAgICAgICAvLyBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzZXRQaWNOdW0ocGljTnVtKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uIHNldFBpY051bVwiK3BpY051bSk7XHJcbiAgICAgICAgdGhpcy5waWNOdW09cGljTnVtO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBhZGQga2V5IGRvd24gYW5kIGtleSB1cCBldmVudFxyXG4gICAgICAgIC8vIGxldCBwaWNOdW09dGhpcy5nYW1lLmdldFBpY051bSgpO1xyXG4gICAgICAgIC8vIGNjLnN5c3RlbUV2ZW50Lm9uKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24sdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwb2tlcnNcIiwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBhdGxhcy5nZXRTcHJpdGVGcmFtZShzZWxmLnBpY051bSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25pb249PT0nK3NlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgICAgICBzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1mcmFtZVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNwcml0ZUZyYW1lPSBmcmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICAvLyBjYy5zeXN0ZW1FdmVudC5vZmYoXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1ByZXNzIGEga2V5Jyk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgLy8gaWYodGhpcy5pc0NoZWNrKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0NoZWNrPWZhbHNlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueT10aGlzLm5vZGUueS01MDtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0NoZWNrPXRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS55PXRoaXMubm9kZS55KzUwO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbn0pOyJdfQ==