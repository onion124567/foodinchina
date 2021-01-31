
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Other.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cad1b5LmG9NiKt2jGuL7bHy', 'Other');
// scripts/Other.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    backButton: {
      "default": null,
      type: cc.Button
    },
    playButton: {
      "default": null,
      type: cc.Button
    },
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    poker: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.backButton.node.on('click', this.backClick, this);
    this.playButton.node.on('click', this.playClick, this);
    var str = cc.sys.localStorage.getItem('userData');
    console.log("onion" + "str" + str);
  },
  backClick: function backClick(button) {
    cc.director.loadScene("game");
  },
  playClick: function playClick() {
    var str = cc.sys.localStorage.getItem('userData'); // var action = cc.moveTo(2, 100, 100);
    // 执行动作
    //   this.poker.runAction(action);

    var spawn = cc.spawn(cc.moveBy(2, 100, 100), cc.scaleTo(0.5, 0.8, 1.4));
    this.poker.runAction(spawn);
    this.saveTest();
  },
  //测试本地存储
  saveTest: function saveTest() {
    userData = {
      name: 'Tracer',
      level: 1,
      gold: 100
    };
    cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcT3RoZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrQnV0dG9uIiwidHlwZSIsIkJ1dHRvbiIsInBsYXlCdXR0b24iLCJwb2tlciIsIk5vZGUiLCJvbkxvYWQiLCJub2RlIiwib24iLCJiYWNrQ2xpY2siLCJwbGF5Q2xpY2siLCJzdHIiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic3Bhd24iLCJtb3ZlQnkiLCJzY2FsZVRvIiwicnVuQWN0aW9uIiwic2F2ZVRlc3QiLCJ1c2VyRGF0YSIsIm5hbWUiLCJsZXZlbCIsImdvbGQiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQURKO0FBS1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FMSjtBQVNSO0FBQ0FFLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNTO0FBRk47QUFWQyxHQUhQO0FBbUJMO0FBRUFDLEVBQUFBLE1BckJLLG9CQXFCSTtBQUNMLFNBQUtOLFVBQUwsQ0FBZ0JPLElBQWhCLENBQXFCQyxFQUFyQixDQUF3QixPQUF4QixFQUFpQyxLQUFLQyxTQUF0QyxFQUFpRCxJQUFqRDtBQUNBLFNBQUtOLFVBQUwsQ0FBZ0JJLElBQWhCLENBQXFCQyxFQUFyQixDQUF3QixPQUF4QixFQUFpQyxLQUFLRSxTQUF0QyxFQUFpRCxJQUFqRDtBQUNBLFFBQUlDLEdBQUcsR0FBQ2YsRUFBRSxDQUFDZ0IsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixVQUE1QixDQUFSO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVEsS0FBUixHQUFjTCxHQUExQjtBQUVILEdBM0JJO0FBNEJMRixFQUFBQSxTQUFTLEVBQUUsbUJBQVVRLE1BQVYsRUFBa0I7QUFDekJyQixJQUFBQSxFQUFFLENBQUNzQixRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSCxHQTlCSTtBQStCTFQsRUFBQUEsU0FBUyxFQUFFLHFCQUFZO0FBQ25CLFFBQUlDLEdBQUcsR0FBQ2YsRUFBRSxDQUFDZ0IsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixVQUE1QixDQUFSLENBRG1CLENBRW5CO0FBQ0E7QUFDQTs7QUFDQSxRQUFJTSxLQUFLLEdBQUd4QixFQUFFLENBQUN3QixLQUFILENBQVN4QixFQUFFLENBQUN5QixNQUFILENBQVUsQ0FBVixFQUFhLEdBQWIsRUFBa0IsR0FBbEIsQ0FBVCxFQUFpQ3pCLEVBQUUsQ0FBQzBCLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBQWpDLENBQVo7QUFDQSxTQUFLbEIsS0FBTCxDQUFXbUIsU0FBWCxDQUFxQkgsS0FBckI7QUFDQSxTQUFLSSxRQUFMO0FBRUgsR0F4Q0k7QUF5Q0w7QUFDQUEsRUFBQUEsUUFBUSxFQUFDLG9CQUFVO0FBQ2ZDLElBQUFBLFFBQVEsR0FBRztBQUNQQyxNQUFBQSxJQUFJLEVBQUUsUUFEQztBQUVQQyxNQUFBQSxLQUFLLEVBQUUsQ0FGQTtBQUdQQyxNQUFBQSxJQUFJLEVBQUU7QUFIQyxLQUFYO0FBTUFoQyxJQUFBQSxFQUFFLENBQUNnQixHQUFILENBQU9DLFlBQVAsQ0FBb0JnQixPQUFwQixDQUE0QixVQUE1QixFQUF3Q0MsSUFBSSxDQUFDQyxTQUFMLENBQWVOLFFBQWYsQ0FBeEM7QUFDSCxHQWxESTtBQW1ETE8sRUFBQUEsS0FuREssbUJBbURHLENBRVAsQ0FyREksQ0F1REw7O0FBdkRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiYWNrQnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGxheUJ1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHBsYXllciDoioLngrnvvIznlKjkuo7ojrflj5bkuLvop5LlvLnot7PnmoTpq5jluqbvvIzlkozmjqfliLbkuLvop5LooYzliqjlvIDlhbNcclxuICAgICAgICBwb2tlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYmFja0J1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMuYmFja0NsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMucGxheUNsaWNrLCB0aGlzKVxyXG4gICAgICAgIGxldCBzdHI9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIitcInN0clwiK3N0cik7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgYmFja0NsaWNrOiBmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgIH0sXHJcbiAgICBwbGF5Q2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc3RyPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKTtcclxuICAgICAgICAvLyB2YXIgYWN0aW9uID0gY2MubW92ZVRvKDIsIDEwMCwgMTAwKTtcclxuICAgICAgICAvLyDmiafooYzliqjkvZxcclxuICAgICAgICAvLyAgIHRoaXMucG9rZXIucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgdmFyIHNwYXduID0gY2Muc3Bhd24oY2MubW92ZUJ5KDIsIDEwMCwgMTAwKSwgY2Muc2NhbGVUbygwLjUsIDAuOCwgMS40KSk7XHJcbiAgICAgICAgdGhpcy5wb2tlci5ydW5BY3Rpb24oc3Bhd24pO1xyXG4gICAgICAgIHRoaXMuc2F2ZVRlc3QoKTtcclxuXHJcbiAgICB9LFxyXG4gICAgLy/mtYvor5XmnKzlnLDlrZjlgqhcclxuICAgIHNhdmVUZXN0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdUcmFjZXInLFxyXG4gICAgICAgICAgICBsZXZlbDogMSxcclxuICAgICAgICAgICAgZ29sZDogMTAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19