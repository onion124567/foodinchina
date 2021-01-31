
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AIHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '440ccQTol9AqII0wAlYk8sK', 'AIHelper');
// scripts/AIHelper.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _PokerUtil = _interopRequireDefault(require("./PokerUtil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pokerWeight = [4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 3, 5, 16, 17, 18]; //主5为18

var LEFT_WIN = -1;
var RIGHT_WIN = 1;

var AIHelper = /*#__PURE__*/function () {
  function AIHelper() {}

  var _proto = AIHelper.prototype;

  // {
  //     type1Array:type1Array,
  //     type2Array:type2Array,
  //     type3Array:type3Array,
  //     type4Array:type4Array,
  //     hostArray:hostArray,
  //     total:total
  // }

  /**
   * 检测用户出的牌是否合法
   * @param gameHost
   * @param roundHost
   * @param userCard
   * @param cardArray
   */
  _proto.checkUserCanSend = function checkUserCanSend(gameHost, roundHost, userPokerObj, willSendCard) {
    if (Array.isArray(willSendCard)) {
      if (willSendCard.length === 1) {
        willSendCard = willSendCard[0];
      } else {
        //暂时不支持
        console.log("onion", "暂时不支持出对====");
        return false;
      }
    }

    if (!roundHost) {
      //没有本轮主，玩家头一个出牌
      return true;
    }

    if (gameHost == roundHost) {
      var targetArray = this.selectArrayFrom(true, roundHost, userPokerObj); //调主

      if (userPokerObj.hostArray.length > 0 || targetArray.length > 0) {
        //有主牌必须出主牌
        var flag1 = userPokerObj.hostArray.indexOf(willSendCard) !== -1;
        var flag2 = targetArray.indexOf(willSendCard) !== -1;
        return flag2 || flag1;
      } //没主了随便出

    } else {
      //花色相同可以出
      var _targetArray = this.selectArrayFrom(true, roundHost, userPokerObj);

      if (_targetArray.length > 0) {
        return _targetArray.indexOf(willSendCard) !== -1;
      } //无roundHost花色可以出

    } //出副牌时，有副牌必须出副牌


    return true;
  }
  /**
   * 游戏每轮逻辑，
   * 赢家出牌，确定本轮主
   * 下家出牌 调sendAIFollowCard
   * 4家都出完结算，积分计算，结束本轮，返回积分
   * @param onRoundCallBack  回调 该相应玩家出牌
   * @param winLocal 优先出牌方 索引从0开始
   * @param gameHost 当前游戏主
   */
  ;

  _proto.roundProgram = function roundProgram(onUserPlayCallBack, onRoundCallBack, roundOverCallBack, winLocal, gameHost, sendArray) {
    var roundHost = null;
    console.log("onion", "轮次逻辑" + winLocal + "/" + sendArray);

    if (!sendArray || sendArray.length === 0) {
      sendArray = []; //本轮出的牌
    } else {
      var pokers = sendArray[0];

      if (Array.isArray(pokers) && pokers.length === 1) {
        pokers = pokers[0];
      }

      if (Array.isArray(pokers)) {
        roundHost = this.intGetType(pokers[0]);
        console.log("onion", "暂不支持出对");
        return;
      } else {
        roundHost = this.intGetType(pokers);
      }
    }

    var orgNum = sendArray.length;

    for (var i = orgNum; i <= 4 - orgNum; i++) {
      var currentPlayer = (winLocal + i) % 4;

      if (currentPlayer == 0) {
        onUserPlayCallBack(gameHost, roundHost, sendArray, currentPlayer);
        return;
      }

      var _pokers = onRoundCallBack(gameHost, roundHost, sendArray, currentPlayer);

      if (sendArray.length == 0) {
        if (Array.isArray(_pokers)) {
          roundHost = this.intGetType(_pokers[0]);
          console.log("onion", "暂不支持出对");
          return;
        } else {
          roundHost = this.intGetType(_pokers);
        }
      }

      sendArray.push(_pokers);
      console.log("onion", "轮次迭代" + winLocal + "/" + _pokers + "数组" + sendArray);
    }

    console.log("onion", "跳出循环" + winLocal);
    var bigger = null;
    var sumSocer = 0;
    var winnerPosition = 0; //判断哪方牌大

    for (var _i = 0; _i < sendArray.length; _i++) {
      var item = sendArray[_i];
      var content = this.intGetContent(item);
      sumSocer += _PokerUtil["default"].quaryIsSocer(content);

      if (bigger == null) {
        bigger = item;
        winnerPosition = _i;
        continue;
      }

      var result = _PokerUtil["default"].comparePoker(gameHost, roundHost, item, bigger);

      if (result == LEFT_WIN) {
        bigger = item;
        winnerPosition = _i;
      }
    }

    winnerPosition += winLocal;
    winnerPosition = winnerPosition % 4;

    if (winnerPosition == 0 || winnerPosition == 2) {//加分
    } else {
      sumSocer = 0;
    }

    roundOverCallBack(winnerPosition, sumSocer);
  }
  /**
   * 先手电脑逻辑
   * 普通打法：
   * 有副出最大的副牌 或者副牌对
   * 其次出最小主牌，不调主对
   * 最后一轮出主对 或主
   * 主应该在后面
   * @param gameHost 主
   * @param cardArray  当前手牌
   */
  ;

  _proto.sendAIHostCard = function sendAIHostCard(gamehost, cardArray) {
    var sendCardIndexs = [];

    for (var i = 0; i < cardArray.length; i++) {
      var type = cardArray[i].substring(2);
      var value = cardArray[i].substring(0, 2);

      var isHost = type == gamehost || _PokerUtil["default"].quaryIsHost(value);

      if (!isHost) {
        if (sendCardIndexs.length === 0) {
          sendCardIndexs.push(i);
        } else {
          if (cardArray[sendCardIndexs[0]] == cardArray[i]) {
            sendCardIndexs.push(i);
            break;
          }

          var sendCard = cardArray[sendCardIndexs[0]];
          var sendValue = sendCard.substring(0, 2);

          var result = _PokerUtil["default"].compareSinglePokerBigger(sendValue, value);

          if (result = RIGHT_WIN) {
            sendCard = value;
          }
        }
      } else {
        if (sendCardIndexs.length === 0) {
          //没有副牌了
          sendCardIndexs.push(i);
        } else {
          if (cardArray[sendCardIndexs[0]] == cardArray[i]) {
            sendCardIndexs.push(i);
            break;
          }

          var _sendCard = cardArray[sendCardIndexs[0]];

          var _sendValue = _sendCard.substring(0, 2);

          var _result = _PokerUtil["default"].compareSinglePokerBigger(_sendValue, value);

          if (_result = LEFT_WIN) {
            _sendCard = value;
          }
        }
      }
    }

    return sendCardIndexs;
  }
  /**
   * 后手电脑逻辑
   * 判断当前谁大，队友大出分，队友小出小牌。
   * 无牌出最小副牌
   *
   * @param gameHost  游戏主
   * @param roundHost 本轮主
   * @param userCard  三方所出的牌
   * @param cardArray  自己剩余的牌
   */
  ;

  _proto.sendAIFollowCard = function sendAIFollowCard(gameHost, roundHost, userCard, pokerObj) {
    switch (userCard.length) {
      case 0:
        //自己是首家 理论上不存在，应该调sendAIHostCard
        console.error("onion", "error 后手电脑调用了sendAIFollowCard 应该调用 sendAIHostCard ");
        break;

      case 1:
        //尽量出大牌
        return this.secondLogic(gameHost, roundHost, userCard, pokerObj);

      case 2:
        //
        return this.sendThridPoker(gameHost, roundHost, userCard, pokerObj);

      case 3:
        //
        return this.sendForthPoker(gameHost, roundHost, userCard, pokerObj);
    }
  };

  _proto.secondLogic = function secondLogic(gameHost, roundHost, userCard, pokerObj) {
    if (userCard[0].length > 1) {//出对的逻辑
    } else {
      return this.selectSingleBigerPoker(gameHost, roundHost, userCard, pokerObj);
    }
  }
  /**
   * 第三手电脑
   * 判断谁出的大,尝试盖过一手
   */
  ;

  _proto.sendThridPoker = function sendThridPoker(gameHost, roundHost, userCard, pokerObj) {
    var firstCard = userCard[0];
    var secondCard = userCard[1];

    var result = _PokerUtil["default"].comparePoker(gameHost, roundHost, firstCard, secondCard);

    if (result === RIGHT_WIN) {
      //对家大，尝试出分或小牌
      return this.selectSocerPoker(gameHost, roundHost, firstCard, pokerObj);
    } else {
      //出最大牌，尝试压过firstCard 最大的牌也压不过就出小牌
      //TODO 可以节约，出仅压过对方的大牌
      return this.selectSingleBigerPoker(gameHost, roundHost, firstCard, pokerObj);
    }
  }
  /**
   * 四手电脑
   */
  ;

  _proto.sendForthPoker = function sendForthPoker(gameHost, roundHost, userCard, pokerObj) {
    var firstCard = userCard[0];
    var secondCard = userCard[1];
    var thridCard = userCard[2];

    var result = _PokerUtil["default"].comparePoker(firstCard, secondCard);

    if (result === RIGHT_WIN) {
      result = _PokerUtil["default"].comparePoker(thridCard, secondCard);
    }

    if (result === RIGHT_WIN) {
      //对家大，尝试出分或小牌
      return this.selectSocerPoker(gameHost, roundHost, firstCard, pokerObj);
    } else {
      //出最大牌，尝试压过firstCard 最大的牌也压不过就出小牌
      //TODO 可以节约，出仅压过对方的大牌
      return this.selectSingleBigerPoker(gameHost, roundHost, firstCard, pokerObj);
    }
  }
  /**
   * 顶牌逻辑
   */
  ;

  _proto.selectSingleBigerPoker = function selectSingleBigerPoker(gameHost, roundHost, targetPoker, pokerObj) {
    //出单的逻辑 1识别是否是主牌
    var cardValue = targetPoker;
    var typeValue = this.intGetType(cardValue);
    var contentValue = this.intGetContent(cardValue);

    var isHost = typeValue == gameHost || _PokerUtil["default"].quaryIsHost(contentValue);

    if (isHost) {
      //顶大牌
      var array = this.selectArrayFrom(true, typeValue, pokerObj);

      if (array.length > 0) {
        var value = array[array.length - 1];

        var result = _PokerUtil["default"].comparePoker(value, cardValue); //能顶过 出大牌


        if (result === LEFT_WIN) {
          return value;
        } else {
          //顶不过 出小牌
          return array[0];
        }
      } else {
        return pokerObj.total[pokerObj.total.length - 1];
      }
    } else {
      //上家是否为A 
      var isA = contentValue == 14;
      console.log("onion", targetPoker + "type" + typeValue); //自己是否还有该花色

      var pokerArray = this.selectArrayFrom(false, typeValue, pokerObj);

      if (pokerArray.length == 0) {
        //出最小的牌杀
        return pokerObj.hostArray[0];
      } else if (isA) {
        return pokerArray[0];
      } else {
        return pokerArray[pokerArray.length - 1];
      }
    }
  }
  /**
   * 上分逻辑 小牌逻辑
   */
  ;

  _proto.selectSocerPoker = function selectSocerPoker(gameHost, roundHost, targetPoker, pokerObj) {
    var cardValue = targetPoker;
    var typeValue = this.intGetType(cardValue);
    var contentValue = this.intGetContent(cardValue);

    var isHost = typeValue == gameHost || _PokerUtil["default"].quaryIsHost(contentValue);

    if (isHost) {
      var array = this.selectArrayFrom(true, typeValue, pokerObj);

      if (array.length > 0) {
        return this.selectScoerFromArray(array);
      } //TODO 待优化 出最小的牌 当前是总牌库的第一张牌 


      return pokerObj.total[0];
    } else {
      var _array = this.selectArrayFrom(true, typeValue, pokerObj);

      if (_array.length > 0) {
        //从该花色选牌
        return this.selectScoerFromArray(_array);
      } //全局选牌


      _array = pokerObj.total;
      return this.selectScoerFromArray(_array);
    }
  };

  _proto.selectScoerFromArray = function selectScoerFromArray(array) {
    for (var i = 0; i < array.length; i++) {
      var result = _PokerUtil["default"].quaryIsSocer(this.intGetContent(array[i]));

      if (result) {
        return array[i];
      }
    }

    return array[0];
  }
  /**
   * 选出对应的牌组
   * @param {*} isHost  固定主数组
   * @param {*} type    花色类型
   * @param {*} pokerObj  牌组对象
   */
  ;

  _proto.selectArrayFrom = function selectArrayFrom(isHost, type, pokerObj) {
    if (isHost) {
      return pokerObj.hostArray;
    }

    switch (type) {
      case 1:
        return pokerObj.type1Array;

      case 2:
        return pokerObj.type2Array;

      case 3:
        return pokerObj.type3Array;

      case 4:
        return pokerObj.type4Array;
    }
  };

  _proto.removePokerFromArray = function removePokerFromArray(gameHost, pokerNum, pokerObj) {
    console.log("onion", "pokerNum" + pokerNum);
    var typeValue = this.intGetType(pokerNum);
    var contentValue = this.intGetContent(pokerNum);

    var isHost = typeValue == gameHost || _PokerUtil["default"].quaryIsHost(contentValue);

    console.log("onion", "移除" + typeValue + "/" + contentValue + "/" + isHost);
    var array = this.selectArrayFrom(isHost, typeValue, pokerObj); //分组数组删除

    var index = array.indexOf(pokerNum);
    array.splice(index, 1); //全局数组删除

    array = pokerObj.total;
    index = array.indexOf(pokerNum);
    array.splice(index, 1);
  };

  _proto.intGetType = function intGetType(cardValue) {
    return Math.floor(cardValue % 10);
  };

  _proto.strGetType = function strGetType(cardValue) {
    return cardValue.substring(2);
  };

  _proto.intGetContent = function intGetContent(cardValue) {
    return Math.floor(cardValue / 10);
  };

  _proto.strGetContent = function strGetContent(cardValue) {
    return cardValue.substring(0, 2);
  };

  _proto.isRealNum = function isRealNum(val) {
    // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除，
    if (val === "" || val == null) {
      return false;
    }

    if (!isNaN(val)) {
      //对于空数组和只有一个数值成员的数组或全是数字组成的字符串，isNaN返回false，例如：'123'、[]、[2]、['123'],isNaN返回false,
      //所以如果不需要val包含这些特殊情况，则这个判断改写为if(!isNaN(val) && typeof val === 'number' )
      return true;
    } else {
      return false;
    }
  };

  return AIHelper;
}();

exports["default"] = AIHelper;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQUlIZWxwZXIuanMiXSwibmFtZXMiOlsicG9rZXJXZWlnaHQiLCJMRUZUX1dJTiIsIlJJR0hUX1dJTiIsIkFJSGVscGVyIiwiY2hlY2tVc2VyQ2FuU2VuZCIsImdhbWVIb3N0Iiwicm91bmRIb3N0IiwidXNlclBva2VyT2JqIiwid2lsbFNlbmRDYXJkIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInRhcmdldEFycmF5Iiwic2VsZWN0QXJyYXlGcm9tIiwiaG9zdEFycmF5IiwiZmxhZzEiLCJpbmRleE9mIiwiZmxhZzIiLCJyb3VuZFByb2dyYW0iLCJvblVzZXJQbGF5Q2FsbEJhY2siLCJvblJvdW5kQ2FsbEJhY2siLCJyb3VuZE92ZXJDYWxsQmFjayIsIndpbkxvY2FsIiwic2VuZEFycmF5IiwicG9rZXJzIiwiaW50R2V0VHlwZSIsIm9yZ051bSIsImkiLCJjdXJyZW50UGxheWVyIiwicHVzaCIsImJpZ2dlciIsInN1bVNvY2VyIiwid2lubmVyUG9zaXRpb24iLCJpdGVtIiwiY29udGVudCIsImludEdldENvbnRlbnQiLCJQb2tlclV0aWwiLCJxdWFyeUlzU29jZXIiLCJyZXN1bHQiLCJjb21wYXJlUG9rZXIiLCJzZW5kQUlIb3N0Q2FyZCIsImdhbWVob3N0IiwiY2FyZEFycmF5Iiwic2VuZENhcmRJbmRleHMiLCJ0eXBlIiwic3Vic3RyaW5nIiwidmFsdWUiLCJpc0hvc3QiLCJxdWFyeUlzSG9zdCIsInNlbmRDYXJkIiwic2VuZFZhbHVlIiwiY29tcGFyZVNpbmdsZVBva2VyQmlnZ2VyIiwic2VuZEFJRm9sbG93Q2FyZCIsInVzZXJDYXJkIiwicG9rZXJPYmoiLCJlcnJvciIsInNlY29uZExvZ2ljIiwic2VuZFRocmlkUG9rZXIiLCJzZW5kRm9ydGhQb2tlciIsInNlbGVjdFNpbmdsZUJpZ2VyUG9rZXIiLCJmaXJzdENhcmQiLCJzZWNvbmRDYXJkIiwic2VsZWN0U29jZXJQb2tlciIsInRocmlkQ2FyZCIsInRhcmdldFBva2VyIiwiY2FyZFZhbHVlIiwidHlwZVZhbHVlIiwiY29udGVudFZhbHVlIiwiYXJyYXkiLCJ0b3RhbCIsImlzQSIsInBva2VyQXJyYXkiLCJzZWxlY3RTY29lckZyb21BcnJheSIsInR5cGUxQXJyYXkiLCJ0eXBlMkFycmF5IiwidHlwZTNBcnJheSIsInR5cGU0QXJyYXkiLCJyZW1vdmVQb2tlckZyb21BcnJheSIsInBva2VyTnVtIiwiaW5kZXgiLCJzcGxpY2UiLCJNYXRoIiwiZmxvb3IiLCJzdHJHZXRUeXBlIiwic3RyR2V0Q29udGVudCIsImlzUmVhbE51bSIsInZhbCIsImlzTmFOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBSUEsV0FBVyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsRUFBNUIsRUFBZ0MsRUFBaEMsRUFBb0MsRUFBcEMsRUFBd0MsQ0FBeEMsRUFBMkMsQ0FBM0MsRUFBOEMsRUFBOUMsRUFBa0QsRUFBbEQsRUFBc0QsRUFBdEQsQ0FBbEIsRUFBNEU7O0FBQzVFLElBQUlDLFFBQVEsR0FBRyxDQUFDLENBQWhCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLENBQWhCOztJQUNxQkM7Ozs7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7Ozs7Ozs7U0FPQUMsbUJBQUEsMEJBQWlCQyxRQUFqQixFQUEyQkMsU0FBM0IsRUFBc0NDLFlBQXRDLEVBQW9EQyxZQUFwRCxFQUFrRTtBQUM5RCxRQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsWUFBZCxDQUFKLEVBQWlDO0FBQzdCLFVBQUlBLFlBQVksQ0FBQ0csTUFBYixLQUF3QixDQUE1QixFQUErQjtBQUMzQkgsUUFBQUEsWUFBWSxHQUFHQSxZQUFZLENBQUMsQ0FBRCxDQUEzQjtBQUNILE9BRkQsTUFF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QUcsQ0FBQ0MsS0FBSyxDQUFDRCxHQUFELENBQVQsRUFBZTtBQUNoQjtBQUNDO0FBQ0MsYUFBTyxJQUFQO0FBQ0QsS0FKQSxNQU1FO0FBQ0QsYUFBTyxLQUFQO0FBQ0Q7QUFDRiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBva2VyVXRpbCBmcm9tIFwiLi9Qb2tlclV0aWxcIjtcclxuXHJcbmxldCBwb2tlcldlaWdodCA9IFs0LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAzLCA1LCAxNiwgMTcsIDE4XTsvL+S4uzXkuLoxOFxyXG5sZXQgTEVGVF9XSU4gPSAtMTtcclxubGV0IFJJR0hUX1dJTiA9IDE7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJSGVscGVyIHtcclxuXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgdHlwZTFBcnJheTp0eXBlMUFycmF5LFxyXG4gICAgLy8gICAgIHR5cGUyQXJyYXk6dHlwZTJBcnJheSxcclxuICAgIC8vICAgICB0eXBlM0FycmF5OnR5cGUzQXJyYXksXHJcbiAgICAvLyAgICAgdHlwZTRBcnJheTp0eXBlNEFycmF5LFxyXG4gICAgLy8gICAgIGhvc3RBcnJheTpob3N0QXJyYXksXHJcbiAgICAvLyAgICAgdG90YWw6dG90YWxcclxuICAgIC8vIH1cclxuICAgIC8qKlxyXG4gICAgICog5qOA5rWL55So5oi35Ye655qE54mM5piv5ZCm5ZCI5rOVXHJcbiAgICAgKiBAcGFyYW0gZ2FtZUhvc3RcclxuICAgICAqIEBwYXJhbSByb3VuZEhvc3RcclxuICAgICAqIEBwYXJhbSB1c2VyQ2FyZFxyXG4gICAgICogQHBhcmFtIGNhcmRBcnJheVxyXG4gICAgICovXHJcbiAgICBjaGVja1VzZXJDYW5TZW5kKGdhbWVIb3N0LCByb3VuZEhvc3QsIHVzZXJQb2tlck9iaiwgd2lsbFNlbmRDYXJkKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkod2lsbFNlbmRDYXJkKSkge1xyXG4gICAgICAgICAgICBpZiAod2lsbFNlbmRDYXJkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgd2lsbFNlbmRDYXJkID0gd2lsbFNlbmRDYXJkWzBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/mmoLml7bkuI3mlK/mjIFcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIiwgXCLmmoLml7bkuI3mlK/mjIHlh7rlr7k9PT09XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJvdW5kSG9zdCkge1xyXG4gICAgICAgICAgICAvL+ayoeacieacrOi9ruS4u++8jOeOqeWutuWktOS4gOS4quWHuueJjFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVIb3N0ID09IHJvdW5kSG9zdCkge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0QXJyYXkgPSB0aGlzLnNlbGVjdEFycmF5RnJvbSh0cnVlLCByb3VuZEhvc3QsIHVzZXJQb2tlck9iaik7XHJcbiAgICAgICAgICAgIC8v6LCD5Li7XHJcbiAgICAgICAgICAgIGlmICh1c2VyUG9rZXJPYmouaG9zdEFycmF5Lmxlbmd0aCA+IDAgfHwgdGFyZ2V0QXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/mnInkuLvniYzlv4Xpobvlh7rkuLvniYxcclxuICAgICAgICAgICAgICAgIGxldCBmbGFnMSA9IHVzZXJQb2tlck9iai5ob3N0QXJyYXkuaW5kZXhPZih3aWxsU2VuZENhcmQpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgIGxldCBmbGFnMiA9IHRhcmdldEFycmF5LmluZGV4T2Yod2lsbFNlbmRDYXJkKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxhZzIgfHwgZmxhZzE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/msqHkuLvkuobpmo/kvr/lh7pcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+iKseiJsuebuOWQjOWPr+S7peWHulxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0QXJyYXkgPSB0aGlzLnNlbGVjdEFycmF5RnJvbSh0cnVlLCByb3VuZEhvc3QsIHVzZXJQb2tlck9iaik7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0QXJyYXkuaW5kZXhPZih3aWxsU2VuZENhcmQpICE9PSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+aXoHJvdW5kSG9zdOiKseiJsuWPr+S7peWHulxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lh7rlia/niYzml7bvvIzmnInlia/niYzlv4Xpobvlh7rlia/niYxcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5q+P6L2u6YC76L6R77yMXHJcbiAgICAgKiDotaLlrrblh7rniYzvvIznoa7lrprmnKzova7kuLtcclxuICAgICAqIOS4i+WutuWHuueJjCDosINzZW5kQUlGb2xsb3dDYXJkXHJcbiAgICAgKiA05a626YO95Ye65a6M57uT566X77yM56ev5YiG6K6h566X77yM57uT5p2f5pys6L2u77yM6L+U5Zue56ev5YiGXHJcbiAgICAgKiBAcGFyYW0gb25Sb3VuZENhbGxCYWNrICDlm57osIMg6K+l55u45bqU546p5a625Ye654mMXHJcbiAgICAgKiBAcGFyYW0gd2luTG9jYWwg5LyY5YWI5Ye654mM5pa5IOe0ouW8leS7jjDlvIDlp4tcclxuICAgICAqIEBwYXJhbSBnYW1lSG9zdCDlvZPliY3muLjmiI/kuLtcclxuICAgICAqL1xyXG4gICAgcm91bmRQcm9ncmFtKG9uVXNlclBsYXlDYWxsQmFjaywgb25Sb3VuZENhbGxCYWNrLCByb3VuZE92ZXJDYWxsQmFjaywgd2luTG9jYWwsIGdhbWVIb3N0LCBzZW5kQXJyYXkpIHtcclxuICAgICAgICBsZXQgcm91bmRIb3N0ID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uXCIsXCLova7mrKHpgLvovpFcIit3aW5Mb2NhbCtcIi9cIitzZW5kQXJyYXkpO1xyXG4gICAgICAgIGlmICghc2VuZEFycmF5IHx8IHNlbmRBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc2VuZEFycmF5ID0gW107Ly/mnKzova7lh7rnmoTniYxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcG9rZXJzID0gc2VuZEFycmF5WzBdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShwb2tlcnMpJiZwb2tlcnMubGVuZ3RoPT09MSl7XHJcbiAgICAgICAgICAgICAgICBwb2tlcnM9cG9rZXJzWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwb2tlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICByb3VuZEhvc3QgPSB0aGlzLmludEdldFR5cGUocG9rZXJzWzBdKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIiwgXCLmmoLkuI3mlK/mjIHlh7rlr7lcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3VuZEhvc3QgPSB0aGlzLmludEdldFR5cGUocG9rZXJzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgbGV0IG9yZ051bT1zZW5kQXJyYXkubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBvcmdOdW07IGkgPD0gNCAtIG9yZ051bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGxheWVyID0gKHdpbkxvY2FsICsgaSkgJSA0O1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBsYXllciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBvblVzZXJQbGF5Q2FsbEJhY2soZ2FtZUhvc3QsIHJvdW5kSG9zdCwgc2VuZEFycmF5LCBjdXJyZW50UGxheWVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9rZXJzID0gb25Sb3VuZENhbGxCYWNrKGdhbWVIb3N0LCByb3VuZEhvc3QsIHNlbmRBcnJheSwgY3VycmVudFBsYXllcik7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzZW5kQXJyYXkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBva2VycykpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3VuZEhvc3QgPSB0aGlzLmludEdldFR5cGUocG9rZXJzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uXCIsIFwi5pqC5LiN5pSv5oyB5Ye65a+5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRIb3N0ID0gdGhpcy5pbnRHZXRUeXBlKHBva2Vycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VuZEFycmF5LnB1c2gocG9rZXJzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbmlvblwiLFwi6L2u5qyh6L+t5LujXCIrd2luTG9jYWwrXCIvXCIrcG9rZXJzK1wi5pWw57uEXCIrc2VuZEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbmlvblwiLFwi6Lez5Ye65b6q546vXCIrd2luTG9jYWwpO1xyXG4gICAgICAgIGxldCBiaWdnZXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBzdW1Tb2NlciA9IDA7XHJcbiAgICAgICAgbGV0IHdpbm5lclBvc2l0aW9uID0gMDtcclxuICAgICAgICAvL+WIpOaWreWTquaWueeJjOWkp1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gc2VuZEFycmF5W2ldO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuaW50R2V0Q29udGVudChpdGVtKTtcclxuICAgICAgICAgICAgc3VtU29jZXIgKz0gUG9rZXJVdGlsLnF1YXJ5SXNTb2Nlcihjb250ZW50KTtcclxuICAgICAgICAgICAgaWYgKGJpZ2dlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBiaWdnZXIgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgd2lubmVyUG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gUG9rZXJVdGlsLmNvbXBhcmVQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCBpdGVtLCBiaWdnZXIpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IExFRlRfV0lOKSB7XHJcbiAgICAgICAgICAgICAgICBiaWdnZXIgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgd2lubmVyUG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbm5lclBvc2l0aW9uICs9IHdpbkxvY2FsO1xyXG4gICAgICAgIHdpbm5lclBvc2l0aW9uID0gd2lubmVyUG9zaXRpb24gJSA0O1xyXG4gICAgICAgIGlmICh3aW5uZXJQb3NpdGlvbiA9PSAwIHx8IHdpbm5lclBvc2l0aW9uID09IDIpIHtcclxuICAgICAgICAgICAgLy/liqDliIZcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdW1Tb2NlciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdW5kT3ZlckNhbGxCYWNrKHdpbm5lclBvc2l0aW9uLCBzdW1Tb2Nlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhYjmiYvnlLXohJHpgLvovpFcclxuICAgICAqIOaZrumAmuaJk+azle+8mlxyXG4gICAgICog5pyJ5Ymv5Ye65pyA5aSn55qE5Ymv54mMIOaIluiAheWJr+eJjOWvuVxyXG4gICAgICog5YW25qyh5Ye65pyA5bCP5Li754mM77yM5LiN6LCD5Li75a+5XHJcbiAgICAgKiDmnIDlkI7kuIDova7lh7rkuLvlr7kg5oiW5Li7XHJcbiAgICAgKiDkuLvlupTor6XlnKjlkI7pnaJcclxuICAgICAqIEBwYXJhbSBnYW1lSG9zdCDkuLtcclxuICAgICAqIEBwYXJhbSBjYXJkQXJyYXkgIOW9k+WJjeaJi+eJjFxyXG4gICAgICovXHJcbiAgICBzZW5kQUlIb3N0Q2FyZChnYW1laG9zdCwgY2FyZEFycmF5KSB7XHJcbiAgICAgICAgbGV0IHNlbmRDYXJkSW5kZXhzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHR5cGUgPSBjYXJkQXJyYXlbaV0uc3Vic3RyaW5nKDIpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBjYXJkQXJyYXlbaV0uc3Vic3RyaW5nKDAsIDIpO1xyXG4gICAgICAgICAgICBsZXQgaXNIb3N0ID0gdHlwZSA9PSBnYW1laG9zdCB8fCBQb2tlclV0aWwucXVhcnlJc0hvc3QodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzSG9zdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbmRDYXJkSW5kZXhzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRDYXJkSW5kZXhzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkQXJyYXlbc2VuZENhcmRJbmRleHNbMF1dID09IGNhcmRBcnJheVtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kQ2FyZEluZGV4cy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmRDYXJkID0gY2FyZEFycmF5W3NlbmRDYXJkSW5kZXhzWzBdXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZFZhbHVlID0gc2VuZENhcmQuc3Vic3RyaW5nKDAsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBQb2tlclV0aWwuY29tcGFyZVNpbmdsZVBva2VyQmlnZ2VyKHNlbmRWYWx1ZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPSBSSUdIVF9XSU4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZENhcmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VuZENhcmRJbmRleHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/msqHmnInlia/niYzkuoZcclxuICAgICAgICAgICAgICAgICAgICBzZW5kQ2FyZEluZGV4cy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEFycmF5W3NlbmRDYXJkSW5kZXhzWzBdXSA9PSBjYXJkQXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZENhcmRJbmRleHMucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kQ2FyZCA9IGNhcmRBcnJheVtzZW5kQ2FyZEluZGV4c1swXV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmRWYWx1ZSA9IHNlbmRDYXJkLnN1YnN0cmluZygwLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gUG9rZXJVdGlsLmNvbXBhcmVTaW5nbGVQb2tlckJpZ2dlcihzZW5kVmFsdWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID0gTEVGVF9XSU4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZENhcmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbmRDYXJkSW5kZXhzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWQjuaJi+eUteiEkemAu+i+kVxyXG4gICAgICog5Yik5pat5b2T5YmN6LCB5aSn77yM6Zif5Y+L5aSn5Ye65YiG77yM6Zif5Y+L5bCP5Ye65bCP54mM44CCXHJcbiAgICAgKiDml6DniYzlh7rmnIDlsI/lia/niYxcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZ2FtZUhvc3QgIOa4uOaIj+S4u1xyXG4gICAgICogQHBhcmFtIHJvdW5kSG9zdCDmnKzova7kuLtcclxuICAgICAqIEBwYXJhbSB1c2VyQ2FyZCAg5LiJ5pa55omA5Ye655qE54mMXHJcbiAgICAgKiBAcGFyYW0gY2FyZEFycmF5ICDoh6rlt7HliankvZnnmoTniYxcclxuICAgICAqL1xyXG4gICAgc2VuZEFJRm9sbG93Q2FyZChnYW1lSG9zdCwgcm91bmRIb3N0LCB1c2VyQ2FyZCwgcG9rZXJPYmopIHtcclxuICAgICAgICBzd2l0Y2ggKHVzZXJDYXJkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6Ly/oh6rlt7HmmK/pppblrrYg55CG6K665LiK5LiN5a2Y5Zyo77yM5bqU6K+l6LCDc2VuZEFJSG9zdENhcmRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvbmlvblwiLCBcImVycm9yIOWQjuaJi+eUteiEkeiwg+eUqOS6hnNlbmRBSUZvbGxvd0NhcmQg5bqU6K+l6LCD55SoIHNlbmRBSUhvc3RDYXJkIFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAxOi8v5bC96YeP5Ye65aSn54mMXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmRMb2dpYyhnYW1lSG9zdCwgcm91bmRIb3N0LCB1c2VyQ2FyZCwgcG9rZXJPYmopO1xyXG4gICAgICAgICAgICBjYXNlIDI6Ly9cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRUaHJpZFBva2VyKGdhbWVIb3N0LCByb3VuZEhvc3QsIHVzZXJDYXJkLCBwb2tlck9iaik7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly9cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRGb3J0aFBva2VyKGdhbWVIb3N0LCByb3VuZEhvc3QsIHVzZXJDYXJkLCBwb2tlck9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZWNvbmRMb2dpYyhnYW1lSG9zdCwgcm91bmRIb3N0LCB1c2VyQ2FyZCwgcG9rZXJPYmopIHtcclxuICAgICAgICBpZiAodXNlckNhcmRbMF0ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAvL+WHuuWvueeahOmAu+i+kVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdFNpbmdsZUJpZ2VyUG9rZXIoZ2FtZUhvc3QsIHJvdW5kSG9zdCwgdXNlckNhcmQsIHBva2VyT2JqKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56ys5LiJ5omL55S16ISRXHJcbiAgICAgKiDliKTmlq3osIHlh7rnmoTlpKcs5bCd6K+V55uW6L+H5LiA5omLXHJcbiAgICAgKi9cclxuICAgIHNlbmRUaHJpZFBva2VyKGdhbWVIb3N0LCByb3VuZEhvc3QsIHVzZXJDYXJkLCBwb2tlck9iaikge1xyXG4gICAgICAgIGxldCBmaXJzdENhcmQgPSB1c2VyQ2FyZFswXTtcclxuICAgICAgICBsZXQgc2Vjb25kQ2FyZCA9IHVzZXJDYXJkWzFdO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gUG9rZXJVdGlsLmNvbXBhcmVQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCBmaXJzdENhcmQsIHNlY29uZENhcmQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IFJJR0hUX1dJTikge1xyXG4gICAgICAgICAgICAvL+WvueWutuWkp++8jOWwneivleWHuuWIhuaIluWwj+eJjFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RTb2NlclBva2VyKGdhbWVIb3N0LCByb3VuZEhvc3QsIGZpcnN0Q2FyZCwgcG9rZXJPYmopO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Ye65pyA5aSn54mM77yM5bCd6K+V5Y6L6L+HZmlyc3RDYXJkIOacgOWkp+eahOeJjOS5n+WOi+S4jei/h+WwseWHuuWwj+eJjFxyXG4gICAgICAgICAgICAvL1RPRE8g5Y+v5Lul6IqC57qm77yM5Ye65LuF5Y6L6L+H5a+55pa555qE5aSn54mMXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdFNpbmdsZUJpZ2VyUG9rZXIoZ2FtZUhvc3QsIHJvdW5kSG9zdCwgZmlyc3RDYXJkLCBwb2tlck9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm5vmiYvnlLXohJFcclxuICAgICAqL1xyXG4gICAgc2VuZEZvcnRoUG9rZXIoZ2FtZUhvc3QsIHJvdW5kSG9zdCwgdXNlckNhcmQsIHBva2VyT2JqKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0Q2FyZCA9IHVzZXJDYXJkWzBdO1xyXG4gICAgICAgIGxldCBzZWNvbmRDYXJkID0gdXNlckNhcmRbMV07XHJcbiAgICAgICAgbGV0IHRocmlkQ2FyZCA9IHVzZXJDYXJkWzJdO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBQb2tlclV0aWwuY29tcGFyZVBva2VyKGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gUklHSFRfV0lOKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFBva2VyVXRpbC5jb21wYXJlUG9rZXIodGhyaWRDYXJkLCBzZWNvbmRDYXJkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gUklHSFRfV0lOKSB7XHJcbiAgICAgICAgICAgICAvL+WvueWutuWkp++8jOWwneivleWHuuWIhuaIluWwj+eJjFxyXG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0U29jZXJQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCBmaXJzdENhcmQsIHBva2VyT2JqKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WHuuacgOWkp+eJjO+8jOWwneivleWOi+i/h2ZpcnN0Q2FyZCDmnIDlpKfnmoTniYzkuZ/ljovkuI3ov4flsLHlh7rlsI/niYxcclxuICAgICAgICAgICAgLy9UT0RPIOWPr+S7peiKgue6pu+8jOWHuuS7heWOi+i/h+WvueaWueeahOWkp+eJjFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RTaW5nbGVCaWdlclBva2VyKGdhbWVIb3N0LCByb3VuZEhvc3QsIGZpcnN0Q2FyZCwgcG9rZXJPYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhtueJjOmAu+i+kVxyXG4gICAgICovXHJcbiAgICBzZWxlY3RTaW5nbGVCaWdlclBva2VyKGdhbWVIb3N0LCByb3VuZEhvc3QsIHRhcmdldFBva2VyLCBwb2tlck9iaikge1xyXG4gICAgICAgIC8v5Ye65Y2V55qE6YC76L6RIDHor4bliKvmmK/lkKbmmK/kuLvniYxcclxuICAgICAgICBsZXQgY2FyZFZhbHVlID0gdGFyZ2V0UG9rZXI7XHJcbiAgICAgICAgbGV0IHR5cGVWYWx1ZSA9IHRoaXMuaW50R2V0VHlwZShjYXJkVmFsdWUpO1xyXG4gICAgICAgIGxldCBjb250ZW50VmFsdWUgPSB0aGlzLmludEdldENvbnRlbnQoY2FyZFZhbHVlKTtcclxuICAgICAgICBsZXQgaXNIb3N0ID0gdHlwZVZhbHVlID09IGdhbWVIb3N0IHx8IFBva2VyVXRpbC5xdWFyeUlzSG9zdChjb250ZW50VmFsdWUpO1xyXG4gICAgICAgIGlmIChpc0hvc3QpIHtcclxuICAgICAgICAgICAgLy/pobblpKfniYxcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5zZWxlY3RBcnJheUZyb20odHJ1ZSwgdHlwZVZhbHVlLCBwb2tlck9iaik7XHJcbiAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBQb2tlclV0aWwuY29tcGFyZVBva2VyKHZhbHVlLCBjYXJkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy/og73pobbov4cg5Ye65aSn54mMXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBMRUZUX1dJTikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7Ly/pobbkuI3ov4cg5Ye65bCP54mMXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5WzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBva2VyT2JqLnRvdGFsW3Bva2VyT2JqLnRvdGFsLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/kuIrlrrbmmK/lkKbkuLpBIFxyXG4gICAgICAgICAgICBsZXQgaXNBID0gY29udGVudFZhbHVlID09IDE0O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uXCIsIHRhcmdldFBva2VyICsgXCJ0eXBlXCIgKyB0eXBlVmFsdWUpO1xyXG4gICAgICAgICAgICAvL+iHquW3seaYr+WQpui/mOacieivpeiKseiJslxyXG4gICAgICAgICAgICBsZXQgcG9rZXJBcnJheSA9IHRoaXMuc2VsZWN0QXJyYXlGcm9tKGZhbHNlLCB0eXBlVmFsdWUsIHBva2VyT2JqKTtcclxuICAgICAgICAgICAgaWYgKHBva2VyQXJyYXkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5Ye65pyA5bCP55qE54mM5p2AXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9rZXJPYmouaG9zdEFycmF5WzBdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBva2VyQXJyYXlbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9rZXJBcnJheVtwb2tlckFycmF5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5YiG6YC76L6RIOWwj+eJjOmAu+i+kVxyXG4gICAgICovXHJcbiAgICBzZWxlY3RTb2NlclBva2VyKGdhbWVIb3N0LCByb3VuZEhvc3QsIHRhcmdldFBva2VyLCBwb2tlck9iaikge1xyXG4gICAgICAgIGxldCBjYXJkVmFsdWUgPSB0YXJnZXRQb2tlcjtcclxuICAgICAgICBsZXQgdHlwZVZhbHVlID0gdGhpcy5pbnRHZXRUeXBlKGNhcmRWYWx1ZSk7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRWYWx1ZSA9IHRoaXMuaW50R2V0Q29udGVudChjYXJkVmFsdWUpO1xyXG4gICAgICAgIGxldCBpc0hvc3QgPSB0eXBlVmFsdWUgPT0gZ2FtZUhvc3QgfHwgUG9rZXJVdGlsLnF1YXJ5SXNIb3N0KGNvbnRlbnRWYWx1ZSk7XHJcbiAgICAgICAgaWYgKGlzSG9zdCkge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLnNlbGVjdEFycmF5RnJvbSh0cnVlLCB0eXBlVmFsdWUsIHBva2VyT2JqKTtcclxuICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdFNjb2VyRnJvbUFycmF5KGFycmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1RPRE8g5b6F5LyY5YyWIOWHuuacgOWwj+eahOeJjCDlvZPliY3mmK/mgLvniYzlupPnmoTnrKzkuIDlvKDniYwgXHJcbiAgICAgICAgICAgIHJldHVybiBwb2tlck9iai50b3RhbFswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLnNlbGVjdEFycmF5RnJvbSh0cnVlLCB0eXBlVmFsdWUsIHBva2VyT2JqKTtcclxuICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5LuO6K+l6Iqx6Imy6YCJ54mMXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RTY29lckZyb21BcnJheShhcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lhajlsYDpgInniYxcclxuICAgICAgICAgICAgYXJyYXkgPSBwb2tlck9iai50b3RhbDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0U2NvZXJGcm9tQXJyYXkoYXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RTY29lckZyb21BcnJheShhcnJheSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFBva2VyVXRpbC5xdWFyeUlzU29jZXIodGhpcy5pbnRHZXRDb250ZW50KGFycmF5W2ldKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXlbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgInlh7rlr7nlupTnmoTniYznu4RcclxuICAgICAqIEBwYXJhbSB7Kn0gaXNIb3N0ICDlm7rlrprkuLvmlbDnu4RcclxuICAgICAqIEBwYXJhbSB7Kn0gdHlwZSAgICDoirHoibLnsbvlnotcclxuICAgICAqIEBwYXJhbSB7Kn0gcG9rZXJPYmogIOeJjOe7hOWvueixoVxyXG4gICAgICovXHJcbiAgICBzZWxlY3RBcnJheUZyb20oaXNIb3N0LCB0eXBlLCBwb2tlck9iaikge1xyXG4gICAgICAgIGlmIChpc0hvc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBva2VyT2JqLmhvc3RBcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb2tlck9iai50eXBlMUFycmF5O1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9rZXJPYmoudHlwZTJBcnJheTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBva2VyT2JqLnR5cGUzQXJyYXk7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb2tlck9iai50eXBlNEFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUG9rZXJGcm9tQXJyYXkoZ2FtZUhvc3QsIHBva2VyTnVtLCBwb2tlck9iaikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIixcInBva2VyTnVtXCIrcG9rZXJOdW0pO1xyXG4gICAgICAgIGxldCB0eXBlVmFsdWUgPSB0aGlzLmludEdldFR5cGUocG9rZXJOdW0pO1xyXG4gICAgICAgIGxldCBjb250ZW50VmFsdWUgPSB0aGlzLmludEdldENvbnRlbnQocG9rZXJOdW0pO1xyXG4gICAgICAgIGxldCBpc0hvc3QgPSB0eXBlVmFsdWUgPT0gZ2FtZUhvc3QgfHwgUG9rZXJVdGlsLnF1YXJ5SXNIb3N0KGNvbnRlbnRWYWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbmlvblwiLFwi56e76ZmkXCIrdHlwZVZhbHVlK1wiL1wiK2NvbnRlbnRWYWx1ZStcIi9cIitpc0hvc3QpO1xyXG4gICAgICAgIGxldCBhcnJheSA9IHRoaXMuc2VsZWN0QXJyYXlGcm9tKGlzSG9zdCwgdHlwZVZhbHVlLCBwb2tlck9iaik7XHJcbiAgICAgICAgLy/liIbnu4TmlbDnu4TliKDpmaRcclxuICAgICAgICBsZXQgaW5kZXggPSBhcnJheS5pbmRleE9mKHBva2VyTnVtKTtcclxuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIC8v5YWo5bGA5pWw57uE5Yig6ZmkXHJcbiAgICAgICAgYXJyYXkgPSBwb2tlck9iai50b3RhbDtcclxuICAgICAgICBpbmRleCA9IGFycmF5LmluZGV4T2YocG9rZXJOdW0pO1xyXG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW50R2V0VHlwZShjYXJkVmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihjYXJkVmFsdWUgJSAxMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0ckdldFR5cGUoY2FyZFZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhcmRWYWx1ZS5zdWJzdHJpbmcoMilcclxuICAgIH1cclxuXHJcbiAgICBpbnRHZXRDb250ZW50KGNhcmRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGNhcmRWYWx1ZSAvIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHJHZXRDb250ZW50KGNhcmRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBjYXJkVmFsdWUuc3Vic3RyaW5nKDAsIDIpO1xyXG4gICAgfVxyXG4gICAgaXNSZWFsTnVtKHZhbCl7XHJcbiAgICAgICAgLy8gaXNOYU4oKeWHveaVsCDmiornqbrkuLIg56m65qC8IOS7peWPik5VbGwg5oyJ54WnMOadpeWkhOeQhiDmiYDku6XlhYjljrvpmaTvvIxcclxuICAgICAgICBcclxuICAgIOOAgOOAgGlmKHZhbCA9PT0gXCJcIiB8fCB2YWwgPT1udWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAg44CA44CAfVxyXG4gICAgICAgaWYoIWlzTmFOKHZhbCkpe+OAgOOAgOOAgOOAgFxyXG4gICAg44CA44CALy/lr7nkuo7nqbrmlbDnu4Tlkozlj6rmnInkuIDkuKrmlbDlgLzmiJDlkZjnmoTmlbDnu4TmiJblhajmmK/mlbDlrZfnu4TmiJDnmoTlrZfnrKbkuLLvvIxpc05hTui/lOWbnmZhbHNl77yM5L6L5aaC77yaJzEyMyfjgIFbXeOAgVsyXeOAgVsnMTIzJ10saXNOYU7ov5Tlm55mYWxzZSxcclxuICAgICAgIC8v5omA5Lul5aaC5p6c5LiN6ZyA6KaBdmFs5YyF5ZCr6L+Z5Lqb54m55q6K5oOF5Ya177yM5YiZ6L+Z5Liq5Yik5pat5pS55YaZ5Li6aWYoIWlzTmFOKHZhbCkgJiYgdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgKVxyXG4gICAg44CA44CA44CAIHJldHVybiB0cnVlOyBcclxuICAgIOOAgOOAgH1cclxuICAgIFxyXG4gICAg44CAZWxzZXsgXHJcbiAgICDjgIDjgIDjgIDjgIByZXR1cm4gZmFsc2U7IFxyXG4gICAg44CA44CAfSBcclxuICAgIH1cclxuXHJcbn0iXX0=