
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
  start: function start() {
    // var node = new cc.Node('Sprite');
    // var sp = node.addComponent(cc.Sprite);
    // sp.spriteFrame = cardPic;
    // node.parent = this.node;
    var cooker = {
      "name": "李大嘴",
      "lv": 1,
      "talent": {
        "id": 1,
        "name": "吝啬鬼",
        "describe": "买菜九八折"
      },
      "attribute": [{
        "steam": 16
      }, {
        "fry": 18
      }, {
        "cut": 12
      }, {
        "boil": 22
      }, {
        "noodles": 14
      }],
      "foodlist": [{
        "id": 1,
        "name": "西红柿炒蛋",
        "value": 1.6
      }]
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0Nvb2tlckxheW91dC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiTGF5b3V0IiwicHJvcGVydGllcyIsInBpY051bSIsImlzQ2hlY2siLCJzcHJpdGUiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJ0aXRsZVZpZXciLCJMYWJlbCIsImNvbnRlbnRWaWV3IiwiYnRuVmlldyIsIkJ1dHRvbiIsInN0YXJ0IiwiY29va2VyIiwib25Mb2FkIiwibm9kZSIsIm9uIiwib25Nb3VzZURvd24iLCJzZWxmIiwicmVzb3VyY2VzIiwibG9hZCIsIlNwcml0ZUF0bGFzIiwiZXJyIiwiYXRsYXMiLCJmcmFtZSIsImdldFNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJvbkRlc3Ryb3kiLCJvZmYiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxNQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUMsS0FEQztBQUVSQyxJQUFBQSxPQUFPLEVBQUMsS0FGQTtBQUdSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpDLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUTtBQUZMLEtBSEE7QUFPUkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsSUFERjtBQUVQRixNQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ1U7QUFGRixLQVBIO0FBV1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEosTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNVO0FBRkEsS0FYTDtBQWVSRSxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxMLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDYTtBQUZKO0FBZkQsR0FIUDtBQXdCTEMsRUFBQUEsS0FBSyxFQUFFLGlCQUFZO0FBRWY7QUFDQTtBQUVBO0FBQ0E7QUFFRCxRQUFJQyxNQUFNLEdBQUU7QUFDUixjQUFRLEtBREE7QUFFUixZQUFNLENBRkU7QUFHUixnQkFBVTtBQUNOLGNBQU0sQ0FEQTtBQUVOLGdCQUFRLEtBRkY7QUFHTixvQkFBWTtBQUhOLE9BSEY7QUFRUixtQkFBYSxDQUNUO0FBQUMsaUJBQVM7QUFBVixPQURTLEVBRVQ7QUFBQyxlQUFPO0FBQVIsT0FGUyxFQUdUO0FBQUMsZUFBTztBQUFSLE9BSFMsRUFJVDtBQUFDLGdCQUFRO0FBQVQsT0FKUyxFQUtUO0FBQUMsbUJBQVc7QUFBWixPQUxTLENBUkw7QUFlUixrQkFBWSxDQUNSO0FBQ0ksY0FBTSxDQURWO0FBRUksZ0JBQVEsT0FGWjtBQUdJLGlCQUFRO0FBSFosT0FEUTtBQWZKLEtBQVo7QUF3QkYsR0F4REk7QUEyREw7QUFDQTtBQUVBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsV0FBYixFQUEwQixLQUFLQyxXQUEvQixFQUEyQyxJQUEzQztBQUVBLFFBQUlDLElBQUksR0FBQyxJQUFUO0FBQ0FwQixJQUFBQSxFQUFFLENBQUNxQixTQUFILENBQWFDLElBQWIsQ0FBa0IsUUFBbEIsRUFBNEJ0QixFQUFFLENBQUN1QixXQUEvQixFQUE0QyxVQUFVQyxHQUFWLEVBQWVDLEtBQWYsRUFBc0I7QUFFOUQsVUFBSUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLGNBQU4sQ0FBcUJQLElBQUksQ0FBQ2hCLE1BQTFCLENBQVosQ0FGOEQsQ0FJOUQ7O0FBQ0FnQixNQUFBQSxJQUFJLENBQUNRLFlBQUwsQ0FBa0I1QixFQUFFLENBQUM2QixNQUFyQixFQUE2QkMsV0FBN0IsR0FBMENKLEtBQTFDLENBTDhELENBTTlEO0FBQ0gsS0FQRDtBQVFILEdBN0VJO0FBK0VMSyxFQUFBQSxTQS9FSyx1QkErRVE7QUFDVDtBQUVBLFNBQUtkLElBQUwsQ0FBVWUsR0FBVixDQUFjLFdBQWQsRUFBMkIsS0FBS2IsV0FBaEMsRUFBNkMsSUFBN0M7QUFDSCxHQW5GSTtBQXFGTEEsRUFBQUEsV0FBVyxFQUFFLHFCQUFVYyxLQUFWLEVBQWlCO0FBQzFCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FGLElBQUFBLEtBQUssQ0FBQ0csZUFBTixHQUYwQixDQUcxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVIO0FBaEdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5MYXlvdXQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBpY051bTpcIjE4MVwiLFxuICAgICAgICBpc0NoZWNrOmZhbHNlLFxuICAgICAgICBzcHJpdGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVWaWV3OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRWaWV3OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIH0sXG4gICAgICAgIGJ0blZpZXc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4gICAgICAgIC8vIHZhciBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbiAgICAgICAgLy8gc3Auc3ByaXRlRnJhbWUgPSBjYXJkUGljO1xuICAgICAgICAvLyBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgIGxldCBjb29rZXI9IHtcbiAgICAgICAgICAgXCJuYW1lXCI6IFwi5p2O5aSn5Zi0XCIsXG4gICAgICAgICAgIFwibHZcIjogMSxcbiAgICAgICAgICAgXCJ0YWxlbnRcIjoge1xuICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi5ZCd5ZWs6ay8XCIsXG4gICAgICAgICAgICAgICBcImRlc2NyaWJlXCI6IFwi5Lmw6I+c5Lmd5YWr5oqYXCJcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgXCJhdHRyaWJ1dGVcIjogW1xuICAgICAgICAgICAgICAge1wic3RlYW1cIjogMTZ9LFxuICAgICAgICAgICAgICAge1wiZnJ5XCI6IDE4fSxcbiAgICAgICAgICAgICAgIHtcImN1dFwiOiAxMn0sXG4gICAgICAgICAgICAgICB7XCJib2lsXCI6IDIyfSxcbiAgICAgICAgICAgICAgIHtcIm5vb2RsZXNcIjogMTR9LFxuICAgICAgICAgICBdLFxuICAgICAgICAgICBcImZvb2RsaXN0XCI6IFtcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi6KW/57qi5p+/54KS6JuLXCIsXG4gICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOjEuNixcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgXVxuICAgICAgIH07XG5cbiAgICB9LFxuXG5cbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgIC8vIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYWRkIGtleSBkb3duIGFuZCBrZXkgdXAgZXZlbnRcbiAgICAgICAgLy8gbGV0IHBpY051bT10aGlzLmdhbWUuZ2V0UGljTnVtKCk7XG4gICAgICAgIC8vIGNjLnN5c3RlbUV2ZW50Lm9uKCk7XG4gICAgICAgIHRoaXMubm9kZS5vbihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duLHRoaXMpO1xuXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicG9rZXJzXCIsIGNjLlNwcml0ZUF0bGFzLCBmdW5jdGlvbiAoZXJyLCBhdGxhcykge1xuXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBhdGxhcy5nZXRTcHJpdGVGcmFtZShzZWxmLnBpY051bSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmlvbj09PScrc2VsZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICBzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1mcmFtZVxuICAgICAgICAgICAgLy8gdGhpcy5zcHJpdGVGcmFtZT0gZnJhbWU7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICAvLyBjYy5zeXN0ZW1FdmVudC5vZmYoXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9mZignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ByZXNzIGEga2V5Jyk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBpZih0aGlzLmlzQ2hlY2spe1xuICAgICAgICAvLyAgICAgdGhpcy5pc0NoZWNrPWZhbHNlO1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnk9dGhpcy5ub2RlLnktNTA7XG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgICAgdGhpcy5pc0NoZWNrPXRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueT10aGlzLm5vZGUueSs1MDtcbiAgICAgICAgLy8gfVxuXG4gICAgfSxcblxuXG59KTsiXX0=