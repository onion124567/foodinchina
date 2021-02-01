
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29va2VyTGF5b3V0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJMYXlvdXQiLCJwcm9wZXJ0aWVzIiwicGljTnVtIiwiaXNDaGVjayIsInNwcml0ZSIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInRpdGxlVmlldyIsIkxhYmVsIiwiY29udGVudFZpZXciLCJidG5WaWV3IiwiQnV0dG9uIiwic3RhcnQiLCJjb29rZXIiLCJvbkxvYWQiLCJub2RlIiwib24iLCJvbk1vdXNlRG93biIsInNlbGYiLCJyZXNvdXJjZXMiLCJsb2FkIiwiU3ByaXRlQXRsYXMiLCJlcnIiLCJhdGxhcyIsImZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIm9uRGVzdHJveSIsIm9mZiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLE1BRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBQyxLQURDO0FBRVJDLElBQUFBLE9BQU8sRUFBQyxLQUZBO0FBR1JDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0FBRkwsS0FIQTtBQU9SQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBGLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDVTtBQUZGLEtBUEg7QUFXUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUSixNQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ1U7QUFGQSxLQVhMO0FBZVJFLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTLElBREo7QUFFTEwsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNhO0FBRko7QUFmRCxHQUhQO0FBd0JMQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVk7QUFFZjtBQUNBO0FBRUE7QUFDQTtBQUVELFFBQUlDLE1BQU0sR0FBRTtBQUNSLGNBQVEsS0FEQTtBQUVSLFlBQU0sQ0FGRTtBQUdSLGdCQUFVO0FBQ04sY0FBTSxDQURBO0FBRU4sZ0JBQVEsS0FGRjtBQUdOLG9CQUFZO0FBSE4sT0FIRjtBQVFSLG1CQUFhLENBQ1Q7QUFBQyxpQkFBUztBQUFWLE9BRFMsRUFFVDtBQUFDLGVBQU87QUFBUixPQUZTLEVBR1Q7QUFBQyxlQUFPO0FBQVIsT0FIUyxFQUlUO0FBQUMsZ0JBQVE7QUFBVCxPQUpTLEVBS1Q7QUFBQyxtQkFBVztBQUFaLE9BTFMsQ0FSTDtBQWVSLGtCQUFZLENBQ1I7QUFDSSxjQUFNLENBRFY7QUFFSSxnQkFBUSxPQUZaO0FBR0ksaUJBQVE7QUFIWixPQURRO0FBZkosS0FBWjtBQXdCRixHQXhESTtBQTJETDtBQUNBO0FBRUFDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxXQUFiLEVBQTBCLEtBQUtDLFdBQS9CLEVBQTJDLElBQTNDO0FBRUEsUUFBSUMsSUFBSSxHQUFDLElBQVQ7QUFDQXBCLElBQUFBLEVBQUUsQ0FBQ3FCLFNBQUgsQ0FBYUMsSUFBYixDQUFrQixRQUFsQixFQUE0QnRCLEVBQUUsQ0FBQ3VCLFdBQS9CLEVBQTRDLFVBQVVDLEdBQVYsRUFBZUMsS0FBZixFQUFzQjtBQUU5RCxVQUFJQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsY0FBTixDQUFxQlAsSUFBSSxDQUFDaEIsTUFBMUIsQ0FBWixDQUY4RCxDQUk5RDs7QUFDQWdCLE1BQUFBLElBQUksQ0FBQ1EsWUFBTCxDQUFrQjVCLEVBQUUsQ0FBQzZCLE1BQXJCLEVBQTZCQyxXQUE3QixHQUEwQ0osS0FBMUMsQ0FMOEQsQ0FNOUQ7QUFDSCxLQVBEO0FBUUgsR0E3RUk7QUErRUxLLEVBQUFBLFNBL0VLLHVCQStFUTtBQUNUO0FBRUEsU0FBS2QsSUFBTCxDQUFVZSxHQUFWLENBQWMsV0FBZCxFQUEyQixLQUFLYixXQUFoQyxFQUE2QyxJQUE3QztBQUNILEdBbkZJO0FBcUZMQSxFQUFBQSxXQUFXLEVBQUUscUJBQVVjLEtBQVYsRUFBaUI7QUFDMUJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUYsSUFBQUEsS0FBSyxDQUFDRyxlQUFOLEdBRjBCLENBRzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUg7QUFoR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuTGF5b3V0LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwaWNOdW06XCIxODFcIixcclxuICAgICAgICBpc0NoZWNrOmZhbHNlLFxyXG4gICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlVmlldzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnRWaWV3OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnRuVmlldzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgLy8gdmFyIHNwID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHJcbiAgICAgICAgLy8gc3Auc3ByaXRlRnJhbWUgPSBjYXJkUGljO1xyXG4gICAgICAgIC8vIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG5cclxuICAgICAgIGxldCBjb29rZXI9IHtcclxuICAgICAgICAgICBcIm5hbWVcIjogXCLmnY7lpKflmLRcIixcclxuICAgICAgICAgICBcImx2XCI6IDEsXHJcbiAgICAgICAgICAgXCJ0YWxlbnRcIjoge1xyXG4gICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuWQneWVrOmsvFwiLFxyXG4gICAgICAgICAgICAgICBcImRlc2NyaWJlXCI6IFwi5Lmw6I+c5Lmd5YWr5oqYXCJcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIFwiYXR0cmlidXRlXCI6IFtcclxuICAgICAgICAgICAgICAge1wic3RlYW1cIjogMTZ9LFxyXG4gICAgICAgICAgICAgICB7XCJmcnlcIjogMTh9LFxyXG4gICAgICAgICAgICAgICB7XCJjdXRcIjogMTJ9LFxyXG4gICAgICAgICAgICAgICB7XCJib2lsXCI6IDIyfSxcclxuICAgICAgICAgICAgICAge1wibm9vZGxlc1wiOiAxNH0sXHJcbiAgICAgICAgICAgXSxcclxuICAgICAgICAgICBcImZvb2RsaXN0XCI6IFtcclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi6KW/57qi5p+/54KS6JuLXCIsXHJcbiAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6MS42LFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXVxyXG4gICAgICAgfTtcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBhZGQga2V5IGRvd24gYW5kIGtleSB1cCBldmVudFxyXG4gICAgICAgIC8vIGxldCBwaWNOdW09dGhpcy5nYW1lLmdldFBpY051bSgpO1xyXG4gICAgICAgIC8vIGNjLnN5c3RlbUV2ZW50Lm9uKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24sdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwb2tlcnNcIiwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBhdGxhcy5nZXRTcHJpdGVGcmFtZShzZWxmLnBpY051bSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25pb249PT0nK3NlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgICAgICBzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1mcmFtZVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNwcml0ZUZyYW1lPSBmcmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICAvLyBjYy5zeXN0ZW1FdmVudC5vZmYoXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1ByZXNzIGEga2V5Jyk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgLy8gaWYodGhpcy5pc0NoZWNrKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0NoZWNrPWZhbHNlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueT10aGlzLm5vZGUueS01MDtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0NoZWNrPXRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS55PXRoaXMubm9kZS55KzUwO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbn0pOyJdfQ==