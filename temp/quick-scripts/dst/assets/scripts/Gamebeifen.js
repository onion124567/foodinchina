
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Gamebeifen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0612deHWLpCuJSSpnvVg6h9', 'Gamebeifen');
// scripts/Gamebeifen.js

"use strict";

var PokerUtil = require("PokerUtil");

var AIHelper = require("AIHelper");

var self;
cc.Class({
  "extends": cc.Component,
  properties: {
    // 这个属性引用了星星预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    cardPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    currentCardPosition: 0,
    startCardPostion: 0,
    cardWidth: 80,
    logicHelper: null,
    cardArray: [cc.String],
    //初始牌数组 逆时针 主角是第一个数组
    pokerPlayer: [],
    //当前轮次出牌节点,
    roundPoker: [],
    sendArray: [],
    //主角当前牌节点
    playerControlNodeArray: [],
    //洗牌
    refreshButton: {
      "default": null,
      type: cc.Button
    },
    //出牌
    sendButton: {
      "default": null,
      type: cc.Button
    },
    //出牌
    backButton: {
      "default": null,
      type: cc.Button
    },
    //当前胜方
    currentWinner: 1,
    //本轮主
    gameHost: "1",
    //玩家拥有牌
    layoutContainer: {
      "default": null,
      type: cc.Layout
    },
    //玩家出的牌 
    layoutBottom: {
      "default": null,
      type: cc.Layout
    },
    //对家出牌 第三位
    layoutTop: {
      "default": null,
      type: cc.Layout
    },
    //下家出牌 左手第二位
    layoutLeft: {
      "default": null,
      type: cc.Layout
    },
    //上家出牌，右手第四位
    layoutRight: {
      "default": null,
      type: cc.Layout
    },
    //战报
    logLabel: {
      "default": null,
      type: cc.Label
    },
    playLog: "游戏开始",
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    // score label 的引用
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // 得分音效资源
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    self = this; // 获取地平面的 y 轴坐标

    this.groundY = this.ground.y + this.ground.height / 2; // 初始化计时器

    this.timer = 0;
    this.starDuration = 0;
    this.logicHelper = new AIHelper(); //创建图片资源

    for (var i = 0; i < 13; i++) {
      var pre = 3 + i;

      for (var j = 1; j < 5; j++) {
        var str = "";

        if (pre < 10) {
          str = "0";
        }

        str = str + pre + j;
        this.cardArray.push(str);
        this.cardArray.push(str);
      }
    }

    this.cardArray.push("161");
    this.cardArray.push("161");
    this.cardArray.push("171");
    this.cardArray.push("171");
    this.refreshButton.node.on('click', this.refreshCallback, this);
    this.sendButton.node.on('click', this.sendCallback, this);
    this.backButton.node.on('click', this.backClick, this);
    this.publishPokers(); // this.spawnNewStar();
    // 初始化计分

    this.score = 0; // this.onRoundCallBack=this.onRoundCallBack.bind(this);

    this.onRoundCallBack = this.onRoundCallBack.bind(this);
    this.logicHelper.roundProgram(this.onUserPlayCallBack, this.onRoundCallBack, this.roundOverCallBack, 0, this.gameHost, []);
  },

  /**
   * 电脑出牌，直接渲染
   * @param gameHost
   * @param roundHost
   * @param sendArray
   * @param currentPlayer
   */
  onRoundCallBack: function onRoundCallBack(gameHost, roundHost, sendArray, currentPlayer) {
    self.roundHost = roundHost;
    self.sendArray = sendArray;
    console.log("onion", "轮次回调" + sendArray);
    var sendCard = self.logicHelper.sendAIFollowCard(self.gameHost, roundHost, sendArray, self.pokerPlayer[currentPlayer]);
    console.log("onion", "轮次出牌" + sendCard); // sendArray.push(sendCard);

    self.saveRoundPoker(sendCard, currentPlayer + 1, 0);
    return sendCard;
  },

  /**
   * 玩家出牌 出牌按钮可以点击
   * @param gameHost
   * @param roundHost
   * @param sendArray
   * @param currentPlayer
   */
  onUserPlayCallBack: function onUserPlayCallBack(gameHost, roundHost, sendArray, currentPlayer) {
    console.log("onion", "回调到user" + sendArray);
  },
  roundOverCallBack: function roundOverCallBack(winnerPosition, sumSocer) {
    setTimeout(function () {
      PokerUtil.destoryArray(self.roundPoker);
      self.score = sumSocer + self.score;
      self.roundHost = null;
      self.appendLog(winnerPosition + "大,捞分" + sumSocer); // self.logicHelper.roundProgram(self.onUserPlayCallBack,self.onRoundCallBack,
      //     self.roundOverCallBack,winnerPosition,self.gameHost,[]);
    }, 1000);
  },
  refreshCallback: function refreshCallback(button) {
    this.publishPokers();
  },
  backClick: function backClick(button) {
    console.log("onion", "backClick");
    cc.director.loadScene("other");
  },
  sendCallback: function sendCallback(button) {
    // let sendArray = [];
    var willSendCard = null;

    for (var i = 0; i < this.playerControlNodeArray.length; i++) {
      //判断是否可出
      var node = this.playerControlNodeArray[i].getComponent('Card');

      if (node.isCheck) {
        if (willSendCard && !Array.isArray(willSendCard)) {
          willSendCard = [];
          willSendCard.push(node.picNum);
        } else {
          willSendCard = node.picNum;
        }
      } // this.playerControlNodeArray[i].destroy();

    }

    var message = this.logicHelper.checkUserCanSend(this.gameHost, this.roundHost, this.pokerPlayer[0], willSendCard);

    if (!message) {
      console.log("onion", "不能出" + message);
      return;
    } //出牌 移除并添加


    for (var _i = 0; _i < this.playerControlNodeArray.length;) {
      //判断是否可出
      var _node = this.playerControlNodeArray[_i].getComponent('Card');

      if (_node.isCheck) {
        // willSendArray.push(node.picNum);
        this.saveRoundPoker(_node.picNum, 1, _i * this.cardWidth);

        this.playerControlNodeArray[_i].destroy();

        this.playerControlNodeArray.splice(_i, 1);
      } else {
        _i++;
      } // this.playerControlNodeArray[i].destroy();

    }

    if (!this.sendArray) {
      this.sendArray = [];
    }

    this.sendArray.push(willSendCard);
    this.logicHelper.roundProgram(this.onUserPlayCallBack, this.onRoundCallBack, this.roundOverCallBack, 0, this.gameHost, this.sendArray);
  },
  //保存出牌  1 2 3 4 顺时针位
  saveRoundPoker: function saveRoundPoker(picNum, index, offset) {
    var newStar = cc.instantiate(this.cardPrefab); // newStar.setPicNum("i"+i);

    newStar.getComponent('Card').picNum = picNum;
    newStar.scaleX = 0.5;
    newStar.scaleY = 0.5;
    this.roundPoker.push(newStar);
    console.log("onion", "保存出牌" + picNum + "index" + index); // this.node.addChild(newStar);
    // let height = this.ground.height / 2 * -1;

    switch (index) {
      case 1:
        this.layoutBottom.node.addChild(newStar);
        this.logicHelper.removePokerFromArray(this.gameHost, picNum, this.pokerPlayer[0]);
        break;

      case 2:
        this.layoutLeft.node.addChild(newStar);
        this.logicHelper.removePokerFromArray(this.gameHost, picNum, this.pokerPlayer[1]);
        break;

      case 3:
        this.layoutTop.node.addChild(newStar);
        this.logicHelper.removePokerFromArray(this.gameHost, picNum, this.pokerPlayer[2]);
        break;

      case 4:
        this.layoutRight.node.addChild(newStar);
        this.logicHelper.removePokerFromArray(this.gameHost, picNum, this.pokerPlayer[3]);
        break;
    } // newStar.setPosition(cc.v2(-150 + this.startCardPostion + offset, height));

  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); // 将新增的节点添加到 Canvas 节点下面

    this.node.addChild(newStar); // 为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition()); // 在星星组件上暂存 Game 对象的引用

    newStar.getComponent('Star').game = this; // 重置计时器，根据消失时间范围随机取一个值

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },

  /**
   * 移除旧的节点
   * 添加新节点
   */
  spawnBottomCard: function spawnBottomCard() {
    if (this.playerControlNodeArray.length > 0) {
      var destoryNode = this.playerControlNodeArray;
      PokerUtil.destoryArray(destoryNode);
      this.playerControlNodeArray = [];
    }

    this.createBottomCard();
  },

  /**
   * type1Array:type1Array,
          type2Array:type2Array,
          type3Array:type3Array,
          type4Array:type4Array,
          hostArray:hostArray,
          total:total
   */
  createBottomCard: function createBottomCard() {
    var startPosition = 0;
    var userObj = this.pokerPlayer[0];

    for (var i = 0; i < userObj.total.length; i++) {
      // 使用给定的模板在场景中生成一个新节点
      var newStar = cc.instantiate(this.cardPrefab); // newStar.setPicNum("i"+i);

      newStar.getComponent('Card').picNum = userObj.total[i];
      this.playerControlNodeArray.push(newStar); // this.node.addChild(newStar);

      this.layoutContainer.node.addChild(newStar);
      var height = this.ground.height / 2 * -1;
      startPosition = i * this.cardWidth;

      if (i > 13) {
        height = height - 150;
        startPosition = (i - 13) * this.cardWidth;
      } // newStar.setPosition(cc.v2(-200 + this.startCardPostion + startPosition, height));

    }
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // 根据屏幕宽度，随机得到一个星星 x 坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // 返回星星坐标

    return cc.v2(randX, randY);
  },
  getCardBottomPosition: function getCardBottomPosition() {
    var randX = this.currentCardPosition;
    var randY = 0;
    this.currentCardPosition = this.currentCardPosition + this.cardWidth;
    return cc.v2(randX, randY);
  },
  update: function update(dt) {// 每帧更新计时器，超过限度还没有生成新的星星
    // 就会调用游戏失败逻辑
    // if (this.timer > this.starDuration) {
    //     this.gameOver();
    //     this.enabled = false;   // disable gameOver logic to avoid load scene repeatedly
    //     return;
    // }
    // this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1; // 更新 scoreDisplay Label 的文字

    this.scoreDisplay.string = 'Score: ' + this.score; // 播放得分音效

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    this.player.stopAllActions(); //停止 player 节点的跳跃动作

    cc.director.loadScene('game');
  },

  /**
  * 把牌发给四家
  */
  publishPokers: function publishPokers() {
    this.pokerPlayer = [];
    this.gameHost = null;
    var pokerArray = this.cardArray.slice(0);
    var host = parseInt(Math.random() * 4); //随机主牌花色

    for (var i = 0; i < 4; i++) {
      var playerPokerArray = [];

      for (var j = 0; j < 27; j++) {
        var pokerNum = Math.random() * pokerArray.length;
        pokerNum = parseInt(pokerNum); //插入手牌中

        var value = pokerArray.splice(pokerNum, 1);
        playerPokerArray.push(value);

        if (this.gameHost == null) {
          //随机到主后，第一张主牌亮出
          if (host == PokerUtil.quaryPokerTypeValue(value)) {
            this.gameHost = value;
            this.appendLog("本轮游戏,主牌" + PokerUtil.quaryPokerValue(value) + "在" + this.expandPlayer(i));
          }
        }
      }

      var playerObj = PokerUtil.sortPokers(host, playerPokerArray);
      console.log("onion====", JSON.stringify(playerObj));
      this.pokerPlayer.push(playerObj);
    }

    this.spawnBottomCard();
  },
  expandPlayer: function expandPlayer(location) {
    switch (location) {
      case 0:
        return "自己";

      case 1:
        return "下家";

      case 2:
        return "对家";

      case 3:
        return "上家";
    }
  },
  appendLog: function appendLog(string) {
    this.playLog = this.playLog + "\n" + string;
    this.logLabel.string = this.playLog;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWViZWlmZW4uanMiXSwibmFtZXMiOlsiUG9rZXJVdGlsIiwicmVxdWlyZSIsIkFJSGVscGVyIiwic2VsZiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhclByZWZhYiIsInR5cGUiLCJQcmVmYWIiLCJjYXJkUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiY3VycmVudENhcmRQb3NpdGlvbiIsInN0YXJ0Q2FyZFBvc3Rpb24iLCJjYXJkV2lkdGgiLCJsb2dpY0hlbHBlciIsImNhcmRBcnJheSIsIlN0cmluZyIsInBva2VyUGxheWVyIiwicm91bmRQb2tlciIsInNlbmRBcnJheSIsInBsYXllckNvbnRyb2xOb2RlQXJyYXkiLCJyZWZyZXNoQnV0dG9uIiwiQnV0dG9uIiwic2VuZEJ1dHRvbiIsImJhY2tCdXR0b24iLCJjdXJyZW50V2lubmVyIiwiZ2FtZUhvc3QiLCJsYXlvdXRDb250YWluZXIiLCJMYXlvdXQiLCJsYXlvdXRCb3R0b20iLCJsYXlvdXRUb3AiLCJsYXlvdXRMZWZ0IiwibGF5b3V0UmlnaHQiLCJsb2dMYWJlbCIsIkxhYmVsIiwicGxheUxvZyIsImdyb3VuZCIsIk5vZGUiLCJwbGF5ZXIiLCJzY29yZURpc3BsYXkiLCJzY29yZUF1ZGlvIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiZ3JvdW5kWSIsInkiLCJoZWlnaHQiLCJ0aW1lciIsInN0YXJEdXJhdGlvbiIsImkiLCJwcmUiLCJqIiwic3RyIiwicHVzaCIsIm5vZGUiLCJvbiIsInJlZnJlc2hDYWxsYmFjayIsInNlbmRDYWxsYmFjayIsImJhY2tDbGljayIsInB1Ymxpc2hQb2tlcnMiLCJzY29yZSIsIm9uUm91bmRDYWxsQmFjayIsImJpbmQiLCJyb3VuZFByb2dyYW0iLCJvblVzZXJQbGF5Q2FsbEJhY2siLCJyb3VuZE92ZXJDYWxsQmFjayIsInJvdW5kSG9zdCIsImN1cnJlbnRQbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwic2VuZENhcmQiLCJzZW5kQUlGb2xsb3dDYXJkIiwic2F2ZVJvdW5kUG9rZXIiLCJ3aW5uZXJQb3NpdGlvbiIsInN1bVNvY2VyIiwic2V0VGltZW91dCIsImRlc3RvcnlBcnJheSIsImFwcGVuZExvZyIsImJ1dHRvbiIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwid2lsbFNlbmRDYXJkIiwibGVuZ3RoIiwiZ2V0Q29tcG9uZW50IiwiaXNDaGVjayIsIkFycmF5IiwiaXNBcnJheSIsInBpY051bSIsIm1lc3NhZ2UiLCJjaGVja1VzZXJDYW5TZW5kIiwiZGVzdHJveSIsInNwbGljZSIsImluZGV4Iiwib2Zmc2V0IiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwic2NhbGVYIiwic2NhbGVZIiwiYWRkQ2hpbGQiLCJyZW1vdmVQb2tlckZyb21BcnJheSIsInNwYXduTmV3U3RhciIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJzcGF3bkJvdHRvbUNhcmQiLCJkZXN0b3J5Tm9kZSIsImNyZWF0ZUJvdHRvbUNhcmQiLCJzdGFydFBvc2l0aW9uIiwidXNlck9iaiIsInRvdGFsIiwicmFuZFgiLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJ2MiIsImdldENhcmRCb3R0b21Qb3NpdGlvbiIsInVwZGF0ZSIsImR0IiwiZ2FpblNjb3JlIiwic3RyaW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiZ2FtZU92ZXIiLCJzdG9wQWxsQWN0aW9ucyIsInBva2VyQXJyYXkiLCJzbGljZSIsImhvc3QiLCJwYXJzZUludCIsInBsYXllclBva2VyQXJyYXkiLCJwb2tlck51bSIsInZhbHVlIiwicXVhcnlQb2tlclR5cGVWYWx1ZSIsInF1YXJ5UG9rZXJWYWx1ZSIsImV4cGFuZFBsYXllciIsInBsYXllck9iaiIsInNvcnRQb2tlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYXRpb24iXSwibWFwcGluZ3MiOiI7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QTlCLENBQVosRUFBa0Q7QUFDOUMsaUJBQUsxRyxRQUFMLEdBQWdCMEcsS0FBaEI7QUFDQSxpQkFBS3hELFNBQUwsQ0FBZSxZQUFZL0UsU0FBUyxDQUFDeUksZUFBVixDQUEwQkYsS0FBMUIsQ0FBWixHQUErQyxHQUEvQyxHQUFxRCxLQUFLRyxZQUFMLENBQWtCdkYsQ0FBbEIsQ0FBcEU7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsVUFBSXdGLFNBQVMsR0FBRzNJLFNBQVMsQ0FBQzRJLFVBQVYsQ0FBcUJULElBQXJCLEVBQTJCRSxnQkFBM0IsQ0FBaEI7QUFDQS9ELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJzRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsU0FBZixDQUF6QjtBQUNBLFdBQUt2SCxXQUFMLENBQWlCbUMsSUFBakIsQ0FBc0JvRixTQUF0QjtBQUNIOztBQUNELFNBQUsvQixlQUFMO0FBRUgsR0FwWUk7QUFxWUw4QixFQUFBQSxZQUFZLEVBQUUsc0JBQVVLLFFBQVYsRUFBb0I7QUFDOUIsWUFBUUEsUUFBUjtBQUNJLFdBQUssQ0FBTDtBQUFRLGVBQU8sSUFBUDs7QUFDUixXQUFLLENBQUw7QUFBUSxlQUFPLElBQVA7O0FBQ1IsV0FBSyxDQUFMO0FBQVEsZUFBTyxJQUFQOztBQUNSLFdBQUssQ0FBTDtBQUFRLGVBQU8sSUFBUDtBQUpaO0FBT0gsR0E3WUk7QUE4WUxoRSxFQUFBQSxTQUFTLEVBQUUsbUJBQVU2QyxNQUFWLEVBQWtCO0FBQ3pCLFNBQUt0RixPQUFMLEdBQWUsS0FBS0EsT0FBTCxHQUFlLElBQWYsR0FBc0JzRixNQUFyQztBQUNBLFNBQUt4RixRQUFMLENBQWN3RixNQUFkLEdBQXVCLEtBQUt0RixPQUE1QjtBQUNIO0FBalpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxubGV0IFBva2VyVXRpbCA9IHJlcXVpcmUoXCJQb2tlclV0aWxcIik7XG5sZXQgQUlIZWxwZXIgPSByZXF1aXJlKFwiQUlIZWxwZXJcIik7XG5sZXQgc2VsZjtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOi/meS4quWxnuaAp+W8leeUqOS6huaYn+aYn+mihOWItui1hOa6kFxuICAgICAgICBzdGFyUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmRQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5pif5pif5Lqn55Sf5ZCO5raI5aSx5pe26Ze055qE6ZqP5py66IyD5Zu0XG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcbiAgICAgICAgbWluU3RhckR1cmF0aW9uOiAwLFxuICAgICAgICBjdXJyZW50Q2FyZFBvc2l0aW9uOiAwLFxuICAgICAgICBzdGFydENhcmRQb3N0aW9uOiAwLFxuICAgICAgICBjYXJkV2lkdGg6IDgwLFxuICAgICAgICBsb2dpY0hlbHBlcjogbnVsbCxcbiAgICAgICAgY2FyZEFycmF5OiBbY2MuU3RyaW5nXSxcbiAgICAgICAgLy/liJ3lp4vniYzmlbDnu4Qg6YCG5pe26ZKIIOS4u+inkuaYr+esrOS4gOS4quaVsOe7hFxuICAgICAgICBwb2tlclBsYXllcjogW10sXG4gICAgICAgIC8v5b2T5YmN6L2u5qyh5Ye654mM6IqC54K5LFxuICAgICAgICByb3VuZFBva2VyOiBbXSxcbiAgICAgICAgc2VuZEFycmF5OltdLFxuICAgICAgICAvL+S4u+inkuW9k+WJjeeJjOiKgueCuVxuICAgICAgICBwbGF5ZXJDb250cm9sTm9kZUFycmF5OiBbXSxcbiAgICAgICAgLy/mtJfniYxcbiAgICAgICAgcmVmcmVzaEJ1dHRvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvL+WHuueJjFxuICAgICAgICBzZW5kQnV0dG9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v5Ye654mMXG4gICAgICAgIGJhY2tCdXR0b246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcblxuICAgICAgICAvL+W9k+WJjeiDnOaWuVxuICAgICAgICBjdXJyZW50V2lubmVyOiAxLFxuICAgICAgICAvL+acrOi9ruS4u1xuICAgICAgICBnYW1lSG9zdDogXCIxXCIsXG4gICAgICAgIC8v546p5a625oul5pyJ54mMXG4gICAgICAgIGxheW91dENvbnRhaW5lcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxheW91dFxuICAgICAgICB9LFxuICAgICAgICAvL+eOqeWutuWHuueahOeJjCBcbiAgICAgICAgbGF5b3V0Qm90dG9tOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGF5b3V0XG4gICAgICAgIH0sXG4gICAgICAgIC8v5a+55a625Ye654mMIOesrOS4ieS9jVxuICAgICAgICBsYXlvdXRUb3A6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYXlvdXRcbiAgICAgICAgfSxcbiAgICAgICAgLy/kuIvlrrblh7rniYwg5bem5omL56ys5LqM5L2NXG4gICAgICAgIGxheW91dExlZnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYXlvdXRcbiAgICAgICAgfSxcbiAgICAgICAgLy/kuIrlrrblh7rniYzvvIzlj7PmiYvnrKzlm5vkvY1cbiAgICAgICAgbGF5b3V0UmlnaHQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYXlvdXRcbiAgICAgICAgfSxcbiAgICAgICAgLy/miJjmiqVcbiAgICAgICAgbG9nTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBwbGF5TG9nOiBcIua4uOaIj+W8gOWni1wiLFxuICAgICAgICAvLyDlnLDpnaLoioLngrnvvIznlKjkuo7noa7lrprmmJ/mmJ/nlJ/miJDnmoTpq5jluqZcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICAvLyBwbGF5ZXIg6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo5byA5YWzXG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2NvcmUgbGFiZWwg55qE5byV55SoXG4gICAgICAgIHNjb3JlRGlzcGxheToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOW+l+WIhumfs+aViOi1hOa6kFxuICAgICAgICBzY29yZUF1ZGlvOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmPXRoaXM7XG4gICAgICAgIC8vIOiOt+WPluWcsOW5s+mdoueahCB5IOi9tOWdkOagh1xuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0IC8gMjtcbiAgICAgICAgLy8g5Yid5aeL5YyW6K6h5pe25ZmoXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMubG9naWNIZWxwZXIgPSBuZXcgQUlIZWxwZXIoKTtcbiAgICAgICAgLy/liJvlu7rlm77niYfotYTmupBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJlID0gMyArIGk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDU7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChwcmUgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RyID0gc3RyICsgcHJlICsgajtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJheS5wdXNoKHN0cik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyYXkucHVzaChzdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FyZEFycmF5LnB1c2goXCIxNjFcIik7XG4gICAgICAgIHRoaXMuY2FyZEFycmF5LnB1c2goXCIxNjFcIik7XG4gICAgICAgIHRoaXMuY2FyZEFycmF5LnB1c2goXCIxNzFcIik7XG4gICAgICAgIHRoaXMuY2FyZEFycmF5LnB1c2goXCIxNzFcIik7XG5cblxuICAgICAgICB0aGlzLnJlZnJlc2hCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLnJlZnJlc2hDYWxsYmFjaywgdGhpcyk7XG4gICAgICAgIHRoaXMuc2VuZEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2VuZENhbGxiYWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5iYWNrQnV0dG9uLm5vZGUub24oJ2NsaWNrJyx0aGlzLmJhY2tDbGljaywgdGhpcylcbiAgICAgICAgdGhpcy5wdWJsaXNoUG9rZXJzKCk7XG4gICAgICAgIC8vIHRoaXMuc3Bhd25OZXdTdGFyKCk7XG4gICAgICAgIC8vIOWIneWni+WMluiuoeWIhlxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgLy8gdGhpcy5vblJvdW5kQ2FsbEJhY2s9dGhpcy5vblJvdW5kQ2FsbEJhY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJvdW5kQ2FsbEJhY2s9dGhpcy5vblJvdW5kQ2FsbEJhY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb2dpY0hlbHBlci5yb3VuZFByb2dyYW0odGhpcy5vblVzZXJQbGF5Q2FsbEJhY2ssdGhpcy5vblJvdW5kQ2FsbEJhY2ssdGhpcy5yb3VuZE92ZXJDYWxsQmFjaywwLHRoaXMuZ2FtZUhvc3QsW10pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog55S16ISR5Ye654mM77yM55u05o6l5riy5p+TXG4gICAgICogQHBhcmFtIGdhbWVIb3N0XG4gICAgICogQHBhcmFtIHJvdW5kSG9zdFxuICAgICAqIEBwYXJhbSBzZW5kQXJyYXlcbiAgICAgKiBAcGFyYW0gY3VycmVudFBsYXllclxuICAgICAqL1xuICAgICBvblJvdW5kQ2FsbEJhY2s6KGdhbWVIb3N0LCByb3VuZEhvc3QsIHNlbmRBcnJheSwgY3VycmVudFBsYXllcik9PntcbiAgICAgICAgIHNlbGYucm91bmRIb3N0PXJvdW5kSG9zdDtcbiAgICAgICAgIHNlbGYuc2VuZEFycmF5PXNlbmRBcnJheTtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIixcIui9ruasoeWbnuiwg1wiK3NlbmRBcnJheSk7XG4gICAgICAgbGV0IHNlbmRDYXJkPSBzZWxmLmxvZ2ljSGVscGVyLnNlbmRBSUZvbGxvd0NhcmQoc2VsZi5nYW1lSG9zdCwgcm91bmRIb3N0LCBzZW5kQXJyYXksIHNlbGYucG9rZXJQbGF5ZXJbY3VycmVudFBsYXllcl0pO1xuICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIixcIui9ruasoeWHuueJjFwiK3NlbmRDYXJkKTtcbiAgICAgICAgLy8gc2VuZEFycmF5LnB1c2goc2VuZENhcmQpO1xuICAgICAgICBzZWxmLnNhdmVSb3VuZFBva2VyKHNlbmRDYXJkLCBjdXJyZW50UGxheWVyKzEsIDApO1xuICAgICAgICByZXR1cm4gc2VuZENhcmQ7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDnjqnlrrblh7rniYwg5Ye654mM5oyJ6ZKu5Y+v5Lul54K55Ye7XG4gICAgICogQHBhcmFtIGdhbWVIb3N0XG4gICAgICogQHBhcmFtIHJvdW5kSG9zdFxuICAgICAqIEBwYXJhbSBzZW5kQXJyYXlcbiAgICAgKiBAcGFyYW0gY3VycmVudFBsYXllclxuICAgICAqL1xuICAgIG9uVXNlclBsYXlDYWxsQmFjazooZ2FtZUhvc3QsIHJvdW5kSG9zdCwgc2VuZEFycmF5LCBjdXJyZW50UGxheWVyKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uXCIsXCLlm57osIPliLB1c2VyXCIrc2VuZEFycmF5KTtcbiAgICB9LFxuXG4gICAgcm91bmRPdmVyQ2FsbEJhY2s6KHdpbm5lclBvc2l0aW9uLHN1bVNvY2VyKT0+e1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBQb2tlclV0aWwuZGVzdG9yeUFycmF5KHNlbGYucm91bmRQb2tlcik7XG4gICAgICAgICAgICBzZWxmLnNjb3JlPXN1bVNvY2VyK3NlbGYuc2NvcmU7XG4gICAgICAgICAgICBzZWxmLnJvdW5kSG9zdD1udWxsO1xuICAgICAgICAgICAgc2VsZi5hcHBlbmRMb2cod2lubmVyUG9zaXRpb24rXCLlpKcs5o2e5YiGXCIrc3VtU29jZXIpO1xuICAgICAgICAgICAgLy8gc2VsZi5sb2dpY0hlbHBlci5yb3VuZFByb2dyYW0oc2VsZi5vblVzZXJQbGF5Q2FsbEJhY2ssc2VsZi5vblJvdW5kQ2FsbEJhY2ssXG4gICAgICAgICAgICAvLyAgICAgc2VsZi5yb3VuZE92ZXJDYWxsQmFjayx3aW5uZXJQb3NpdGlvbixzZWxmLmdhbWVIb3N0LFtdKTtcbiAgICAgICAgfSwxMDAwKTtcbiAgICAgICAgXG4gICAgfSxcblxuXG4gICAgcmVmcmVzaENhbGxiYWNrOiBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIHRoaXMucHVibGlzaFBva2VycygpO1xuICAgIH0sXG4gICAgYmFja0NsaWNrOmZ1bmN0aW9uKGJ1dHRvbil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIixcImJhY2tDbGlja1wiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwib3RoZXJcIik7XG4gICAgfSxcbiAgICBzZW5kQ2FsbGJhY2s6IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgLy8gbGV0IHNlbmRBcnJheSA9IFtdO1xuICAgICAgICBsZXQgd2lsbFNlbmRDYXJkPW51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJDb250cm9sTm9kZUFycmF5Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5Y+v5Ye6XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMucGxheWVyQ29udHJvbE5vZGVBcnJheVtpXS5nZXRDb21wb25lbnQoJ0NhcmQnKTtcbiAgICAgICAgICAgIGlmIChub2RlLmlzQ2hlY2spIHtcbiAgICAgICAgICAgICAgICBpZih3aWxsU2VuZENhcmQmJiFBcnJheS5pc0FycmF5KHdpbGxTZW5kQ2FyZCkpe1xuICAgICAgICAgICAgICAgICAgICB3aWxsU2VuZENhcmQ9W107XG4gICAgICAgICAgICAgICAgICAgIHdpbGxTZW5kQ2FyZC5wdXNoKG5vZGUucGljTnVtKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgd2lsbFNlbmRDYXJkPW5vZGUucGljTnVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMucGxheWVyQ29udHJvbE5vZGVBcnJheVtpXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1lc3NhZ2U9dGhpcy5sb2dpY0hlbHBlci5jaGVja1VzZXJDYW5TZW5kKHRoaXMuZ2FtZUhvc3QsdGhpcy5yb3VuZEhvc3QsdGhpcy5wb2tlclBsYXllclswXSx3aWxsU2VuZENhcmQpO1xuICAgICAgICBpZighbWVzc2FnZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uXCIsXCLkuI3og73lh7pcIittZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy/lh7rniYwg56e76Zmk5bm25re75YqgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJDb250cm9sTm9kZUFycmF5Lmxlbmd0aDspIHtcbiAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5Y+v5Ye6XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMucGxheWVyQ29udHJvbE5vZGVBcnJheVtpXS5nZXRDb21wb25lbnQoJ0NhcmQnKTtcbiAgICAgICAgICAgIGlmIChub2RlLmlzQ2hlY2spIHtcbiAgICAgICAgICAgICAgICAvLyB3aWxsU2VuZEFycmF5LnB1c2gobm9kZS5waWNOdW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVJvdW5kUG9rZXIobm9kZS5waWNOdW0sIDEsIGkgKiB0aGlzLmNhcmRXaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb250cm9sTm9kZUFycmF5W2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckNvbnRyb2xOb2RlQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnBsYXllckNvbnRyb2xOb2RlQXJyYXlbaV0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLnNlbmRBcnJheSl7XG4gICAgICAgICAgICB0aGlzLnNlbmRBcnJheT1bXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbmRBcnJheS5wdXNoKHdpbGxTZW5kQ2FyZCk7XG4gICAgICAgIHRoaXMubG9naWNIZWxwZXIucm91bmRQcm9ncmFtKHRoaXMub25Vc2VyUGxheUNhbGxCYWNrLHRoaXMub25Sb3VuZENhbGxCYWNrLFxuICAgICAgICAgICAgdGhpcy5yb3VuZE92ZXJDYWxsQmFjaywwLHRoaXMuZ2FtZUhvc3QsdGhpcy5zZW5kQXJyYXkpO1xuICAgICAgIFxuICAgIH0sXG4gICAgLy/kv53lrZjlh7rniYwgIDEgMiAzIDQg6aG65pe26ZKI5L2NXG4gICAgc2F2ZVJvdW5kUG9rZXI6IGZ1bmN0aW9uIChwaWNOdW0sIGluZGV4LCBvZmZzZXQpIHtcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRQcmVmYWIpO1xuICAgICAgICAvLyBuZXdTdGFyLnNldFBpY051bShcImlcIitpKTtcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ0NhcmQnKS5waWNOdW0gPSBwaWNOdW07XG4gICAgICAgIG5ld1N0YXIuc2NhbGVYID0gMC41O1xuICAgICAgICBuZXdTdGFyLnNjYWxlWSA9IDAuNTtcbiAgICAgICAgdGhpcy5yb3VuZFBva2VyLnB1c2gobmV3U3Rhcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIixcIuS/neWtmOWHuueJjFwiK3BpY051bStcImluZGV4XCIraW5kZXgpO1xuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XG4gICAgICAgIC8vIGxldCBoZWlnaHQgPSB0aGlzLmdyb3VuZC5oZWlnaHQgLyAyICogLTE7XG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMTogdGhpcy5sYXlvdXRCb3R0b20ubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljSGVscGVyLnJlbW92ZVBva2VyRnJvbUFycmF5KHRoaXMuZ2FtZUhvc3QsIHBpY051bSwgdGhpcy5wb2tlclBsYXllclswXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IHRoaXMubGF5b3V0TGVmdC5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9naWNIZWxwZXIucmVtb3ZlUG9rZXJGcm9tQXJyYXkodGhpcy5nYW1lSG9zdCwgcGljTnVtLCB0aGlzLnBva2VyUGxheWVyWzFdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogdGhpcy5sYXlvdXRUb3Aubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljSGVscGVyLnJlbW92ZVBva2VyRnJvbUFycmF5KHRoaXMuZ2FtZUhvc3QsIHBpY051bSwgdGhpcy5wb2tlclBsYXllclsyXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6IHRoaXMubGF5b3V0UmlnaHQubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljSGVscGVyLnJlbW92ZVBva2VyRnJvbUFycmF5KHRoaXMuZ2FtZUhvc3QsIHBpY051bSwgdGhpcy5wb2tlclBsYXllclszXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmV3U3Rhci5zZXRQb3NpdGlvbihjYy52MigtMTUwICsgdGhpcy5zdGFydENhcmRQb3N0aW9uICsgb2Zmc2V0LCBoZWlnaHQpKTtcbiAgICB9LFxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDkvb/nlKjnu5nlrprnmoTmqKHmnb/lnKjlnLrmma/kuK3nlJ/miJDkuIDkuKrmlrDoioLngrlcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xuICAgICAgICAvLyDlsIbmlrDlop7nmoToioLngrnmt7vliqDliLAgQ2FudmFzIOiKgueCueS4i+mdolxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XG4gICAgICAgIC8vIOS4uuaYn+aYn+iuvue9ruS4gOS4qumaj+acuuS9jee9rlxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xuICAgICAgICAvLyDlnKjmmJ/mmJ/nu4Tku7bkuIrmmoLlrZggR2FtZSDlr7nosaHnmoTlvJXnlKhcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcbiAgICAgICAgLy8g6YeN572u6K6h5pe25Zmo77yM5qC55o2u5raI5aSx5pe26Ze06IyD5Zu06ZqP5py65Y+W5LiA5Liq5YC8XG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOenu+mZpOaXp+eahOiKgueCuVxuICAgICAqIOa3u+WKoOaWsOiKgueCuVxuICAgICAqL1xuICAgIHNwYXduQm90dG9tQ2FyZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDb250cm9sTm9kZUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBkZXN0b3J5Tm9kZSA9IHRoaXMucGxheWVyQ29udHJvbE5vZGVBcnJheTtcbiAgICAgICAgICAgIFBva2VyVXRpbC5kZXN0b3J5QXJyYXkoZGVzdG9yeU5vZGUpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb250cm9sTm9kZUFycmF5ID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUJvdHRvbUNhcmQoKVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHR5cGUxQXJyYXk6dHlwZTFBcnJheSxcbiAgICAgICAgICAgIHR5cGUyQXJyYXk6dHlwZTJBcnJheSxcbiAgICAgICAgICAgIHR5cGUzQXJyYXk6dHlwZTNBcnJheSxcbiAgICAgICAgICAgIHR5cGU0QXJyYXk6dHlwZTRBcnJheSxcbiAgICAgICAgICAgIGhvc3RBcnJheTpob3N0QXJyYXksXG4gICAgICAgICAgICB0b3RhbDp0b3RhbFxuICAgICAqL1xuICAgIGNyZWF0ZUJvdHRvbUNhcmQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IDA7XG4gICAgICAgIGxldCB1c2VyT2JqID0gdGhpcy5wb2tlclBsYXllclswXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyT2JqLnRvdGFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyDkvb/nlKjnu5nlrprnmoTmqKHmnb/lnKjlnLrmma/kuK3nlJ/miJDkuIDkuKrmlrDoioLngrlcbiAgICAgICAgICAgIHZhciBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkUHJlZmFiKTtcbiAgICAgICAgICAgIC8vIG5ld1N0YXIuc2V0UGljTnVtKFwiaVwiK2kpO1xuICAgICAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ0NhcmQnKS5waWNOdW0gPSB1c2VyT2JqLnRvdGFsW2ldO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb250cm9sTm9kZUFycmF5LnB1c2gobmV3U3Rhcik7XG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XG4gICAgICAgICAgICB0aGlzLmxheW91dENvbnRhaW5lci5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuZ3JvdW5kLmhlaWdodCAvIDIgKiAtMTtcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBpICogdGhpcy5jYXJkV2lkdGg7XG4gICAgICAgICAgICBpZiAoaSA+IDEzKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC0gMTUwXG4gICAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbiA9IChpIC0gMTMpICogdGhpcy5jYXJkV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBuZXdTdGFyLnNldFBvc2l0aW9uKGNjLnYyKC0yMDAgKyB0aGlzLnN0YXJ0Q2FyZFBvc3Rpb24gKyBzdGFydFBvc2l0aW9uLCBoZWlnaHQpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmFuZFggPSAwO1xuICAgICAgICAvLyDmoLnmja7lnLDlubPpnaLkvY3nva7lkozkuLvop5Lot7Pot4Ppq5jluqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoQgeSDlnZDmoIdcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xuICAgICAgICAvLyDmoLnmja7lsY/luZXlrr3luqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ8geCDlnZDmoIdcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGggLyAyO1xuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xuICAgICAgICAvLyDov5Tlm57mmJ/mmJ/lnZDmoIdcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gICAgfSxcbiAgICBnZXRDYXJkQm90dG9tUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJhbmRYID0gdGhpcy5jdXJyZW50Q2FyZFBvc2l0aW9uO1xuICAgICAgICB2YXIgcmFuZFkgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRDYXJkUG9zaXRpb24gPSB0aGlzLmN1cnJlbnRDYXJkUG9zaXRpb24gKyB0aGlzLmNhcmRXaWR0aDtcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIC8vIOavj+W4p+abtOaWsOiuoeaXtuWZqO+8jOi2hei/h+mZkOW6pui/mOayoeacieeUn+aIkOaWsOeahOaYn+aYn1xuICAgICAgICAvLyDlsLHkvJrosIPnlKjmuLjmiI/lpLHotKXpgLvovpFcbiAgICAgICAgLy8gaWYgKHRoaXMudGltZXIgPiB0aGlzLnN0YXJEdXJhdGlvbikge1xuICAgICAgICAvLyAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICAvLyAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7ICAgLy8gZGlzYWJsZSBnYW1lT3ZlciBsb2dpYyB0byBhdm9pZCBsb2FkIHNjZW5lIHJlcGVhdGVkbHlcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLnRpbWVyICs9IGR0O1xuICAgIH0sXG5cbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgICAvLyDmm7TmlrAgc2NvcmVEaXNwbGF5IExhYmVsIOeahOaWh+Wtl1xuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSAnU2NvcmU6ICcgKyB0aGlzLnNjb3JlO1xuICAgICAgICAvLyDmkq3mlL7lvpfliIbpn7PmlYhcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTsgLy/lgZzmraIgcGxheWVyIOiKgueCueeahOi3s+i3g+WKqOS9nFxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiDmiorniYzlj5Hnu5nlm5vlrrZcbiAgICAqL1xuICAgIHB1Ymxpc2hQb2tlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wb2tlclBsYXllciA9IFtdO1xuICAgICAgICB0aGlzLmdhbWVIb3N0ID0gbnVsbDtcbiAgICAgICAgbGV0IHBva2VyQXJyYXkgPSB0aGlzLmNhcmRBcnJheS5zbGljZSgwKTtcbiAgICAgICAgbGV0IGhvc3QgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogNCk7Ly/pmo/mnLrkuLvniYzoirHoibJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJQb2tlckFycmF5ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI3OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9rZXJOdW0gPSBNYXRoLnJhbmRvbSgpICogcG9rZXJBcnJheS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcG9rZXJOdW0gPSBwYXJzZUludChwb2tlck51bSk7XG4gICAgICAgICAgICAgICAgLy/mj5LlhaXmiYvniYzkuK1cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwb2tlckFycmF5LnNwbGljZShwb2tlck51bSwgMSk7XG4gICAgICAgICAgICAgICAgcGxheWVyUG9rZXJBcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lSG9zdCA9PSBudWxsKSB7Ly/pmo/mnLrliLDkuLvlkI7vvIznrKzkuIDlvKDkuLvniYzkuq7lh7pcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvc3QgPT0gUG9rZXJVdGlsLnF1YXJ5UG9rZXJUeXBlVmFsdWUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVIb3N0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZExvZyhcIuacrOi9rua4uOaIjyzkuLvniYxcIiArIFBva2VyVXRpbC5xdWFyeVBva2VyVmFsdWUodmFsdWUpICsgXCLlnKhcIiArIHRoaXMuZXhwYW5kUGxheWVyKGkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwbGF5ZXJPYmogPSBQb2tlclV0aWwuc29ydFBva2Vycyhob3N0LCBwbGF5ZXJQb2tlckFycmF5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25pb249PT09XCIsIEpTT04uc3RyaW5naWZ5KHBsYXllck9iaikpO1xuICAgICAgICAgICAgdGhpcy5wb2tlclBsYXllci5wdXNoKHBsYXllck9iaik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGF3bkJvdHRvbUNhcmQoKTtcblxuICAgIH0sXG4gICAgZXhwYW5kUGxheWVyOiBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgICAgc3dpdGNoIChsb2NhdGlvbikge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gXCLoh6rlt7FcIlxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gXCLkuIvlrrZcIlxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gXCLlr7nlrrZcIlxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gXCLkuIrlrrZcIlxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIGFwcGVuZExvZzogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICB0aGlzLnBsYXlMb2cgPSB0aGlzLnBsYXlMb2cgKyBcIlxcblwiICsgc3RyaW5nO1xuICAgICAgICB0aGlzLmxvZ0xhYmVsLnN0cmluZyA9IHRoaXMucGxheUxvZztcbiAgICB9XG5cblxuXG5cblxufSk7XG4iXX0=