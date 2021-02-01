
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL090aGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja0J1dHRvbiIsInR5cGUiLCJCdXR0b24iLCJwbGF5QnV0dG9uIiwicG9rZXIiLCJOb2RlIiwib25Mb2FkIiwibm9kZSIsIm9uIiwiYmFja0NsaWNrIiwicGxheUNsaWNrIiwic3RyIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInNwYXduIiwibW92ZUJ5Iiwic2NhbGVUbyIsInJ1bkFjdGlvbiIsInNhdmVUZXN0IiwidXNlckRhdGEiLCJuYW1lIiwibGV2ZWwiLCJnb2xkIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FESjtBQUtSQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBTEo7QUFTUjtBQUNBRSxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUztBQUZOO0FBVkMsR0FIUDtBQW1CTDtBQUVBQyxFQUFBQSxNQXJCSyxvQkFxQkk7QUFDTCxTQUFLTixVQUFMLENBQWdCTyxJQUFoQixDQUFxQkMsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBS0MsU0FBdEMsRUFBaUQsSUFBakQ7QUFDQSxTQUFLTixVQUFMLENBQWdCSSxJQUFoQixDQUFxQkMsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBS0UsU0FBdEMsRUFBaUQsSUFBakQ7QUFDQSxRQUFJQyxHQUFHLEdBQUNmLEVBQUUsQ0FBQ2dCLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsQ0FBUjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFRLEtBQVIsR0FBY0wsR0FBMUI7QUFFSCxHQTNCSTtBQTRCTEYsRUFBQUEsU0FBUyxFQUFFLG1CQUFVUSxNQUFWLEVBQWtCO0FBQ3pCckIsSUFBQUEsRUFBRSxDQUFDc0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0gsR0E5Qkk7QUErQkxULEVBQUFBLFNBQVMsRUFBRSxxQkFBWTtBQUNuQixRQUFJQyxHQUFHLEdBQUNmLEVBQUUsQ0FBQ2dCLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsQ0FBUixDQURtQixDQUVuQjtBQUNBO0FBQ0E7O0FBQ0EsUUFBSU0sS0FBSyxHQUFHeEIsRUFBRSxDQUFDd0IsS0FBSCxDQUFTeEIsRUFBRSxDQUFDeUIsTUFBSCxDQUFVLENBQVYsRUFBYSxHQUFiLEVBQWtCLEdBQWxCLENBQVQsRUFBaUN6QixFQUFFLENBQUMwQixPQUFILENBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixDQUFqQyxDQUFaO0FBQ0EsU0FBS2xCLEtBQUwsQ0FBV21CLFNBQVgsQ0FBcUJILEtBQXJCO0FBQ0EsU0FBS0ksUUFBTDtBQUVILEdBeENJO0FBeUNMO0FBQ0FBLEVBQUFBLFFBQVEsRUFBQyxvQkFBVTtBQUNmQyxJQUFBQSxRQUFRLEdBQUc7QUFDUEMsTUFBQUEsSUFBSSxFQUFFLFFBREM7QUFFUEMsTUFBQUEsS0FBSyxFQUFFLENBRkE7QUFHUEMsTUFBQUEsSUFBSSxFQUFFO0FBSEMsS0FBWDtBQU1BaEMsSUFBQUEsRUFBRSxDQUFDZ0IsR0FBSCxDQUFPQyxZQUFQLENBQW9CZ0IsT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixRQUFmLENBQXhDO0FBQ0gsR0FsREk7QUFtRExPLEVBQUFBLEtBbkRLLG1CQW1ERyxDQUVQLENBckRJLENBdURMOztBQXZESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBiYWNrQnV0dG9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIHBsYXlCdXR0b246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy8gcGxheWVyIOiKgueCue+8jOeUqOS6juiOt+WPluS4u+inkuW8uei3s+eahOmrmOW6pu+8jOWSjOaOp+WItuS4u+inkuihjOWKqOW8gOWFs1xuICAgICAgICBwb2tlcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYmFja0J1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMuYmFja0NsaWNrLCB0aGlzKVxuICAgICAgICB0aGlzLnBsYXlCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLnBsYXlDbGljaywgdGhpcylcbiAgICAgICAgbGV0IHN0cj1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIitcInN0clwiK3N0cik7XG4gICAgICAgIFxuICAgIH0sXG4gICAgYmFja0NsaWNrOiBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XG4gICAgfSxcbiAgICBwbGF5Q2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHN0cj1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJyk7XG4gICAgICAgIC8vIHZhciBhY3Rpb24gPSBjYy5tb3ZlVG8oMiwgMTAwLCAxMDApO1xuICAgICAgICAvLyDmiafooYzliqjkvZxcbiAgICAgICAgLy8gICB0aGlzLnBva2VyLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgICAgICB2YXIgc3Bhd24gPSBjYy5zcGF3bihjYy5tb3ZlQnkoMiwgMTAwLCAxMDApLCBjYy5zY2FsZVRvKDAuNSwgMC44LCAxLjQpKTtcbiAgICAgICAgdGhpcy5wb2tlci5ydW5BY3Rpb24oc3Bhd24pO1xuICAgICAgICB0aGlzLnNhdmVUZXN0KCk7XG5cbiAgICB9LFxuICAgIC8v5rWL6K+V5pys5Zyw5a2Y5YKoXG4gICAgc2F2ZVRlc3Q6ZnVuY3Rpb24oKXtcbiAgICAgICAgdXNlckRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiAnVHJhY2VyJyxcbiAgICAgICAgICAgIGxldmVsOiAxLFxuICAgICAgICAgICAgZ29sZDogMTAwXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=