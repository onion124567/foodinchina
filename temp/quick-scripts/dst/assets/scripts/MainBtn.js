
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01haW5CdG4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJ1dHRvbiIsInByb3BlcnRpZXMiLCJwaWNOdW0iLCJpc0NoZWNrIiwic3ByaXRlIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwic3RhcnQiLCJvbkxvYWQiLCJvbkRlc3Ryb3kiLCJub2RlIiwib2ZmIiwib25Nb3VzZURvd24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wUHJvcGFnYXRpb24iLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsTUFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFDLEtBREM7QUFFUkMsSUFBQUEsT0FBTyxFQUFDLEtBRkE7QUFHUkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKQyxNQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ1E7QUFGTDtBQUhBLEdBSFA7QUFXTEMsRUFBQUEsS0FBSyxFQUFFLGlCQUFZLENBRWY7QUFDQTtBQUVBO0FBQ0E7QUFHSCxHQXBCSTtBQXVCTDtBQUNBO0FBRUFDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWSxDQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsR0F6Q0k7QUEyQ0xDLEVBQUFBLFNBM0NLLHVCQTJDUTtBQUNUO0FBRUEsU0FBS0MsSUFBTCxDQUFVQyxHQUFWLENBQWMsV0FBZCxFQUEyQixLQUFLQyxXQUFoQyxFQUE2QyxJQUE3QztBQUNILEdBL0NJO0FBaURMQSxFQUFBQSxXQUFXLEVBQUUscUJBQVVDLEtBQVYsRUFBaUI7QUFDMUJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUYsSUFBQUEsS0FBSyxDQUFDRyxlQUFOOztBQUNBLFFBQUcsS0FBS2IsT0FBUixFQUFnQjtBQUNaLFdBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsV0FBS08sSUFBTCxDQUFVTyxDQUFWLEdBQVksS0FBS1AsSUFBTCxDQUFVTyxDQUFWLEdBQVksRUFBeEI7QUFDSCxLQUhELE1BR0s7QUFDRCxXQUFLZCxPQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUtPLElBQUwsQ0FBVU8sQ0FBVixHQUFZLEtBQUtQLElBQUwsQ0FBVU8sQ0FBVixHQUFZLEVBQXhCO0FBQ0g7QUFFSjtBQTVESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQnV0dG9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwaWNOdW06XCIxODFcIixcbiAgICAgICAgaXNDaGVjazpmYWxzZSxcbiAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xuICAgICAgICAvLyB2YXIgc3AgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuXG4gICAgICAgIC8vIHNwLnNwcml0ZUZyYW1lID0gY2FyZFBpYztcbiAgICAgICAgLy8gbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG5cblxuICAgIH0sXG5cblxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgLy8gfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBhZGQga2V5IGRvd24gYW5kIGtleSB1cCBldmVudFxuICAgICAgICAvLyBsZXQgcGljTnVtPXRoaXMuZ2FtZS5nZXRQaWNOdW0oKTtcbiAgICAgICAgLy8gY2Muc3lzdGVtRXZlbnQub24oKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24sdGhpcyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGxldCBzZWxmPXRoaXM7XG4gICAgICAgIC8vIGNjLnJlc291cmNlcy5sb2FkKFwicG9rZXJzXCIsIGNjLlNwcml0ZUF0bGFzLCBmdW5jdGlvbiAoZXJyLCBhdGxhcykge1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIGZyYW1lID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWUoc2VsZi5waWNOdW0pO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ29uaW9uPT09JytzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgLy8gICAgIHNlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPWZyYW1lXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnNwcml0ZUZyYW1lPSBmcmFtZTtcbiAgICAgICAgLy8gfSk7XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIC8vIGNjLnN5c3RlbUV2ZW50Lm9mZihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcblxuICAgICAgICB0aGlzLm5vZGUub2ZmKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnUHJlc3MgYSBrZXknKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmKHRoaXMuaXNDaGVjayl7XG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2s9ZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGUueT10aGlzLm5vZGUueS01MDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2s9dHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS55PXRoaXMubm9kZS55KzUwO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG5cbn0pOyJdfQ==