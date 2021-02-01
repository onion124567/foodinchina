
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FJSGVscGVyLmpzIl0sIm5hbWVzIjpbInBva2VyV2VpZ2h0IiwiTEVGVF9XSU4iLCJSSUdIVF9XSU4iLCJBSUhlbHBlciIsImNoZWNrVXNlckNhblNlbmQiLCJnYW1lSG9zdCIsInJvdW5kSG9zdCIsInVzZXJQb2tlck9iaiIsIndpbGxTZW5kQ2FyZCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXRBcnJheSIsInNlbGVjdEFycmF5RnJvbSIsImhvc3RBcnJheSIsImZsYWcxIiwiaW5kZXhPZiIsImZsYWcyIiwicm91bmRQcm9ncmFtIiwib25Vc2VyUGxheUNhbGxCYWNrIiwib25Sb3VuZENhbGxCYWNrIiwicm91bmRPdmVyQ2FsbEJhY2siLCJ3aW5Mb2NhbCIsInNlbmRBcnJheSIsInBva2VycyIsImludEdldFR5cGUiLCJvcmdOdW0iLCJpIiwiY3VycmVudFBsYXllciIsInB1c2giLCJiaWdnZXIiLCJzdW1Tb2NlciIsIndpbm5lclBvc2l0aW9uIiwiaXRlbSIsImNvbnRlbnQiLCJpbnRHZXRDb250ZW50IiwiUG9rZXJVdGlsIiwicXVhcnlJc1NvY2VyIiwicmVzdWx0IiwiY29tcGFyZVBva2VyIiwic2VuZEFJSG9zdENhcmQiLCJnYW1laG9zdCIsImNhcmRBcnJheSIsInNlbmRDYXJkSW5kZXhzIiwidHlwZSIsInN1YnN0cmluZyIsInZhbHVlIiwiaXNIb3N0IiwicXVhcnlJc0hvc3QiLCJzZW5kQ2FyZCIsInNlbmRWYWx1ZSIsImNvbXBhcmVTaW5nbGVQb2tlckJpZ2dlciIsInNlbmRBSUZvbGxvd0NhcmQiLCJ1c2VyQ2FyZCIsInBva2VyT2JqIiwiZXJyb3IiLCJzZWNvbmRMb2dpYyIsInNlbmRUaHJpZFBva2VyIiwic2VuZEZvcnRoUG9rZXIiLCJzZWxlY3RTaW5nbGVCaWdlclBva2VyIiwiZmlyc3RDYXJkIiwic2Vjb25kQ2FyZCIsInNlbGVjdFNvY2VyUG9rZXIiLCJ0aHJpZENhcmQiLCJ0YXJnZXRQb2tlciIsImNhcmRWYWx1ZSIsInR5cGVWYWx1ZSIsImNvbnRlbnRWYWx1ZSIsImFycmF5IiwidG90YWwiLCJpc0EiLCJwb2tlckFycmF5Iiwic2VsZWN0U2NvZXJGcm9tQXJyYXkiLCJ0eXBlMUFycmF5IiwidHlwZTJBcnJheSIsInR5cGUzQXJyYXkiLCJ0eXBlNEFycmF5IiwicmVtb3ZlUG9rZXJGcm9tQXJyYXkiLCJwb2tlck51bSIsImluZGV4Iiwic3BsaWNlIiwiTWF0aCIsImZsb29yIiwic3RyR2V0VHlwZSIsInN0ckdldENvbnRlbnQiLCJpc1JlYWxOdW0iLCJ2YWwiLCJpc05hTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQUlBLFdBQVcsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLEVBQThDLEVBQTlDLEVBQWtELEVBQWxELEVBQXNELEVBQXRELENBQWxCLEVBQTRFOztBQUM1RSxJQUFJQyxRQUFRLEdBQUcsQ0FBQyxDQUFoQjtBQUNBLElBQUlDLFNBQVMsR0FBRyxDQUFoQjs7SUFDcUJDOzs7OztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOzs7Ozs7O1NBT0FDLG1CQUFBLDBCQUFpQkMsUUFBakIsRUFBMkJDLFNBQTNCLEVBQXNDQyxZQUF0QyxFQUFvREMsWUFBcEQsRUFBa0U7QUFDOUQsUUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFlBQWQsQ0FBSixFQUFpQztBQUM3QixVQUFJQSxZQUFZLENBQUNHLE1BQWIsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDM0JILFFBQUFBLFlBQVksR0FBR0EsWUFBWSxDQUFDLENBQUQsQ0FBM0I7QUFDSCxPQUZELE1BRU87QUFDSDtBQUNBSSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLGFBQXJCO0FBQ0EsZUFBTyxLQUFQO0FBQ0g7QUFFSjs7QUFDRCxRQUFJLENBQUNQLFNBQUwsRUFBZ0I7QUFDWjtBQUNBLGFBQU8sSUFBUDtBQUNIOztBQUNELFFBQUlELFFBQVEsSUFBSUMsU0FBaEIsRUFBMkI7QUFDdkIsVUFBSVEsV0FBVyxHQUFHLEtBQUtDLGVBQUwsQ0FBcUIsSUFBckIsRUFBMkJULFNBQTNCLEVBQXNDQyxZQUF0QyxDQUFsQixDQUR1QixDQUV2Qjs7QUFDQSxVQUFJQSxZQUFZLENBQUNTLFNBQWIsQ0FBdUJMLE1BQXZCLEdBQWdDLENBQWhDLElBQXFDRyxXQUFXLENBQUNILE1BQVosR0FBcUIsQ0FBOUQsRUFBaUU7QUFDN0Q7QUFDQSxZQUFJTSxLQUFLLEdBQUdWLFlBQVksQ0FBQ1MsU0FBYixDQUF1QkUsT0FBdkIsQ0FBK0JWLFlBQS9CLE1BQWlELENBQUMsQ0FBOUQ7QUFDQSxZQUFJVyxLQUFLLEdBQUdMLFdBQVcsQ0FBQ0ksT0FBWixDQUFvQlYsWUFBcEIsTUFBc0MsQ0FBQyxDQUFuRDtBQUNBLGVBQU9XLEtBQUssSUFBSUYsS0FBaEI7QUFDSCxPQVJzQixDQVN2Qjs7QUFDSCxLQVZELE1BVU87QUFDSDtBQUNBLFVBQUlILFlBQVcsR0FBRyxLQUFLQyxlQUFMLENBQXFCLElBQXJCLEVBQTJCVCxTQUEzQixFQUFzQ0MsWUFBdEMsQ0FBbEI7O0FBQ0EsVUFBSU8sWUFBVyxDQUFDSCxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLGVBQU9HLFlBQVcsQ0FBQ0ksT0FBWixDQUFvQlYsWUFBcEIsTUFBc0MsQ0FBQyxDQUE5QztBQUNILE9BTEUsQ0FNSDs7QUFFSCxLQWpDNkQsQ0FrQzlEOzs7QUFDQSxXQUFPLElBQVA7QUFHSDtBQUVEOzs7Ozs7Ozs7OztTQVNBWSxlQUFBLHNCQUFhQyxrQkFBYixFQUFpQ0MsZUFBakMsRUFBa0RDLGlCQUFsRCxFQUFxRUMsUUFBckUsRUFBK0VuQixRQUEvRSxFQUF5Rm9CLFNBQXpGLEVBQW9HO0FBQ2hHLFFBQUluQixTQUFTLEdBQUcsSUFBaEI7QUFDQU0sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQixTQUFPVyxRQUFQLEdBQWdCLEdBQWhCLEdBQW9CQyxTQUF4Qzs7QUFDQSxRQUFJLENBQUNBLFNBQUQsSUFBY0EsU0FBUyxDQUFDZCxNQUFWLEtBQXFCLENBQXZDLEVBQTBDO0FBQ3RDYyxNQUFBQSxTQUFTLEdBQUcsRUFBWixDQURzQyxDQUN2QjtBQUNsQixLQUZELE1BRU87QUFDSCxVQUFJQyxNQUFNLEdBQUdELFNBQVMsQ0FBQyxDQUFELENBQXRCOztBQUVBLFVBQUdoQixLQUFLLENBQUNDLE9BQU4sQ0FBY2dCLE1BQWQsS0FBdUJBLE1BQU0sQ0FBQ2YsTUFBUCxLQUFnQixDQUExQyxFQUE0QztBQUN4Q2UsUUFBQUEsTUFBTSxHQUFDQSxNQUFNLENBQUMsQ0FBRCxDQUFiO0FBQ0g7O0FBRUQsVUFBSWpCLEtBQUssQ0FBQ0MsT0FBTixDQUFjZ0IsTUFBZCxDQUFKLEVBQTJCO0FBQ3ZCcEIsUUFBQUEsU0FBUyxHQUFHLEtBQUtxQixVQUFMLENBQWdCRCxNQUFNLENBQUMsQ0FBRCxDQUF0QixDQUFaO0FBQ0FkLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUIsUUFBckI7QUFDQTtBQUNILE9BSkQsTUFJTztBQUNIUCxRQUFBQSxTQUFTLEdBQUcsS0FBS3FCLFVBQUwsQ0FBZ0JELE1BQWhCLENBQVo7QUFDSDtBQUVKOztBQUVELFFBQUlFLE1BQU0sR0FBQ0gsU0FBUyxDQUFDZCxNQUFyQjs7QUFDQSxTQUFLLElBQUlrQixDQUFDLEdBQUdELE1BQWIsRUFBcUJDLENBQUMsSUFBSSxJQUFJRCxNQUE5QixFQUFzQ0MsQ0FBQyxFQUF2QyxFQUEyQztBQUN2QyxVQUFJQyxhQUFhLEdBQUcsQ0FBQ04sUUFBUSxHQUFHSyxDQUFaLElBQWlCLENBQXJDOztBQUNBLFVBQUlDLGFBQWEsSUFBSSxDQUFyQixFQUF3QjtBQUNwQlQsUUFBQUEsa0JBQWtCLENBQUNoQixRQUFELEVBQVdDLFNBQVgsRUFBc0JtQixTQUF0QixFQUFpQ0ssYUFBakMsQ0FBbEI7QUFDQTtBQUNIOztBQUNELFVBQUlKLE9BQU0sR0FBR0osZUFBZSxDQUFDakIsUUFBRCxFQUFXQyxTQUFYLEVBQXNCbUIsU0FBdEIsRUFBaUNLLGFBQWpDLENBQTVCOztBQUVBLFVBQUlMLFNBQVMsQ0FBQ2QsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUN2QixZQUFJRixLQUFLLENBQUNDLE9BQU4sQ0FBY2dCLE9BQWQsQ0FBSixFQUEyQjtBQUN2QnBCLFVBQUFBLFNBQVMsR0FBRyxLQUFLcUIsVUFBTCxDQUFnQkQsT0FBTSxDQUFDLENBQUQsQ0FBdEIsQ0FBWjtBQUNBZCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLFFBQXJCO0FBQ0E7QUFDSCxTQUpELE1BSU87QUFDSFAsVUFBQUEsU0FBUyxHQUFHLEtBQUtxQixVQUFMLENBQWdCRCxPQUFoQixDQUFaO0FBQ0g7QUFDSjs7QUFDREQsTUFBQUEsU0FBUyxDQUFDTSxJQUFWLENBQWVMLE9BQWY7QUFDQWQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQixTQUFPVyxRQUFQLEdBQWdCLEdBQWhCLEdBQW9CRSxPQUFwQixHQUEyQixJQUEzQixHQUFnQ0QsU0FBcEQ7QUFDSDs7QUFDRGIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQixTQUFPVyxRQUEzQjtBQUNBLFFBQUlRLE1BQU0sR0FBRyxJQUFiO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxRQUFJQyxjQUFjLEdBQUcsQ0FBckIsQ0E5Q2dHLENBK0NoRzs7QUFDQSxTQUFLLElBQUlMLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdKLFNBQVMsQ0FBQ2QsTUFBOUIsRUFBc0NrQixFQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLFVBQUlNLElBQUksR0FBR1YsU0FBUyxDQUFDSSxFQUFELENBQXBCO0FBQ0EsVUFBSU8sT0FBTyxHQUFHLEtBQUtDLGFBQUwsQ0FBbUJGLElBQW5CLENBQWQ7QUFDQUYsTUFBQUEsUUFBUSxJQUFJSyxzQkFBVUMsWUFBVixDQUF1QkgsT0FBdkIsQ0FBWjs7QUFDQSxVQUFJSixNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNoQkEsUUFBQUEsTUFBTSxHQUFHRyxJQUFUO0FBQ0FELFFBQUFBLGNBQWMsR0FBR0wsRUFBakI7QUFDQTtBQUNIOztBQUNELFVBQUlXLE1BQU0sR0FBR0Ysc0JBQVVHLFlBQVYsQ0FBdUJwQyxRQUF2QixFQUFpQ0MsU0FBakMsRUFBNEM2QixJQUE1QyxFQUFrREgsTUFBbEQsQ0FBYjs7QUFDQSxVQUFJUSxNQUFNLElBQUl2QyxRQUFkLEVBQXdCO0FBQ3BCK0IsUUFBQUEsTUFBTSxHQUFHRyxJQUFUO0FBQ0FELFFBQUFBLGNBQWMsR0FBR0wsRUFBakI7QUFDSDtBQUNKOztBQUNESyxJQUFBQSxjQUFjLElBQUlWLFFBQWxCO0FBQ0FVLElBQUFBLGNBQWMsR0FBR0EsY0FBYyxHQUFHLENBQWxDOztBQUNBLFFBQUlBLGNBQWMsSUFBSSxDQUFsQixJQUF1QkEsY0FBYyxJQUFJLENBQTdDLEVBQWdELENBQzVDO0FBQ0gsS0FGRCxNQUVPO0FBQ0hELE1BQUFBLFFBQVEsR0FBRyxDQUFYO0FBQ0g7O0FBQ0RWLElBQUFBLGlCQUFpQixDQUFDVyxjQUFELEVBQWlCRCxRQUFqQixDQUFqQjtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7OztTQVVBUyxpQkFBQSx3QkFBZUMsUUFBZixFQUF5QkMsU0FBekIsRUFBb0M7QUFDaEMsUUFBSUMsY0FBYyxHQUFHLEVBQXJCOztBQUNBLFNBQUssSUFBSWhCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdlLFNBQVMsQ0FBQ2pDLE1BQTlCLEVBQXNDa0IsQ0FBQyxFQUF2QyxFQUEyQztBQUN2QyxVQUFJaUIsSUFBSSxHQUFHRixTQUFTLENBQUNmLENBQUQsQ0FBVCxDQUFha0IsU0FBYixDQUF1QixDQUF2QixDQUFYO0FBQ0EsVUFBSUMsS0FBSyxHQUFHSixTQUFTLENBQUNmLENBQUQsQ0FBVCxDQUFha0IsU0FBYixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFaOztBQUNBLFVBQUlFLE1BQU0sR0FBR0gsSUFBSSxJQUFJSCxRQUFSLElBQW9CTCxzQkFBVVksV0FBVixDQUFzQkYsS0FBdEIsQ0FBakM7O0FBQ0EsVUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDVCxZQUFJSixjQUFjLENBQUNsQyxNQUFmLEtBQTBCLENBQTlCLEVBQWlDO0FBQzdCa0MsVUFBQUEsY0FBYyxDQUFDZCxJQUFmLENBQW9CRixDQUFwQjtBQUNILFNBRkQsTUFFTztBQUNILGNBQUllLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDLENBQUQsQ0FBZixDQUFULElBQWdDRCxTQUFTLENBQUNmLENBQUQsQ0FBN0MsRUFBa0Q7QUFDOUNnQixZQUFBQSxjQUFjLENBQUNkLElBQWYsQ0FBb0JGLENBQXBCO0FBQ0E7QUFDSDs7QUFDRCxjQUFJc0IsUUFBUSxHQUFHUCxTQUFTLENBQUNDLGNBQWMsQ0FBQyxDQUFELENBQWYsQ0FBeEI7QUFDQSxjQUFJTyxTQUFTLEdBQUdELFFBQVEsQ0FBQ0osU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFoQjs7QUFDQSxjQUFJUCxNQUFNLEdBQUdGLHNCQUFVZSx3QkFBVixDQUFtQ0QsU0FBbkMsRUFBOENKLEtBQTlDLENBQWI7O0FBQ0EsY0FBSVIsTUFBTSxHQUFHdEMsU0FBYixFQUF3QjtBQUNwQmlELFlBQUFBLFFBQVEsR0FBR0gsS0FBWDtBQUNIO0FBQ0o7QUFDSixPQWZELE1BZU87QUFDSCxZQUFJSCxjQUFjLENBQUNsQyxNQUFmLEtBQTBCLENBQTlCLEVBQWlDO0FBQzdCO0FBQ0FrQyxVQUFBQSxjQUFjLENBQUNkLElBQWYsQ0FBb0JGLENBQXBCO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsY0FBSWUsU0FBUyxDQUFDQyxjQUFjLENBQUMsQ0FBRCxDQUFmLENBQVQsSUFBZ0NELFNBQVMsQ0FBQ2YsQ0FBRCxDQUE3QyxFQUFrRDtBQUM5Q2dCLFlBQUFBLGNBQWMsQ0FBQ2QsSUFBZixDQUFvQkYsQ0FBcEI7QUFDQTtBQUNIOztBQUNELGNBQUlzQixTQUFRLEdBQUdQLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDLENBQUQsQ0FBZixDQUF4Qjs7QUFDQSxjQUFJTyxVQUFTLEdBQUdELFNBQVEsQ0FBQ0osU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFoQjs7QUFDQSxjQUFJUCxPQUFNLEdBQUdGLHNCQUFVZSx3QkFBVixDQUFtQ0QsVUFBbkMsRUFBOENKLEtBQTlDLENBQWI7O0FBQ0EsY0FBSVIsT0FBTSxHQUFHdkMsUUFBYixFQUF1QjtBQUNuQmtELFlBQUFBLFNBQVEsR0FBR0gsS0FBWDtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUNELFdBQU9ILGNBQVA7QUFFSDtBQUVEOzs7Ozs7Ozs7Ozs7U0FVQVMsbUJBQUEsMEJBQWlCakQsUUFBakIsRUFBMkJDLFNBQTNCLEVBQXNDaUQsUUFBdEMsRUFBZ0RDLFFBQWhELEVBQTBEO0FBQ3RELFlBQVFELFFBQVEsQ0FBQzVDLE1BQWpCO0FBQ0ksV0FBSyxDQUFMO0FBQU87QUFDSEMsUUFBQUEsT0FBTyxDQUFDNkMsS0FBUixDQUFjLE9BQWQsRUFBdUIsb0RBQXZCO0FBQ0E7O0FBRUosV0FBSyxDQUFMO0FBQU87QUFDSCxlQUFPLEtBQUtDLFdBQUwsQ0FBaUJyRCxRQUFqQixFQUEyQkMsU0FBM0IsRUFBc0NpRCxRQUF0QyxFQUFnREMsUUFBaEQsQ0FBUDs7QUFDSixXQUFLLENBQUw7QUFBTztBQUNILGVBQU8sS0FBS0csY0FBTCxDQUFvQnRELFFBQXBCLEVBQThCQyxTQUE5QixFQUF5Q2lELFFBQXpDLEVBQW1EQyxRQUFuRCxDQUFQOztBQUNBLFdBQUssQ0FBTDtBQUFPO0FBQ1AsZUFBTyxLQUFLSSxjQUFMLENBQW9CdkQsUUFBcEIsRUFBOEJDLFNBQTlCLEVBQXlDaUQsUUFBekMsRUFBbURDLFFBQW5ELENBQVA7QUFWUjtBQWFIOztTQUVERSxjQUFBLHFCQUFZckQsUUFBWixFQUFzQkMsU0FBdEIsRUFBaUNpRCxRQUFqQyxFQUEyQ0MsUUFBM0MsRUFBcUQ7QUFDakQsUUFBSUQsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZNUMsTUFBWixHQUFxQixDQUF6QixFQUE0QixDQUN4QjtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sS0FBS2tELHNCQUFMLENBQTRCeEQsUUFBNUIsRUFBc0NDLFNBQXRDLEVBQWlEaUQsUUFBakQsRUFBMkRDLFFBQTNELENBQVA7QUFFSDtBQUNKO0FBRUQ7Ozs7OztTQUlBRyxpQkFBQSx3QkFBZXRELFFBQWYsRUFBeUJDLFNBQXpCLEVBQW9DaUQsUUFBcEMsRUFBOENDLFFBQTlDLEVBQXdEO0FBQ3BELFFBQUlNLFNBQVMsR0FBR1AsUUFBUSxDQUFDLENBQUQsQ0FBeEI7QUFDQSxRQUFJUSxVQUFVLEdBQUdSLFFBQVEsQ0FBQyxDQUFELENBQXpCOztBQUVBLFFBQUlmLE1BQU0sR0FBR0Ysc0JBQVVHLFlBQVYsQ0FBdUJwQyxRQUF2QixFQUFpQ0MsU0FBakMsRUFBNEN3RCxTQUE1QyxFQUF1REMsVUFBdkQsQ0FBYjs7QUFDQSxRQUFJdkIsTUFBTSxLQUFLdEMsU0FBZixFQUEwQjtBQUN0QjtBQUNBLGFBQU8sS0FBSzhELGdCQUFMLENBQXNCM0QsUUFBdEIsRUFBZ0NDLFNBQWhDLEVBQTJDd0QsU0FBM0MsRUFBc0ROLFFBQXRELENBQVA7QUFDSCxLQUhELE1BR087QUFDSDtBQUNBO0FBQ0EsYUFBTyxLQUFLSyxzQkFBTCxDQUE0QnhELFFBQTVCLEVBQXNDQyxTQUF0QyxFQUFpRHdELFNBQWpELEVBQTRETixRQUE1RCxDQUFQO0FBQ0g7QUFHSjtBQUVEOzs7OztTQUdBSSxpQkFBQSx3QkFBZXZELFFBQWYsRUFBeUJDLFNBQXpCLEVBQW9DaUQsUUFBcEMsRUFBOENDLFFBQTlDLEVBQXdEO0FBQ3BELFFBQUlNLFNBQVMsR0FBR1AsUUFBUSxDQUFDLENBQUQsQ0FBeEI7QUFDQSxRQUFJUSxVQUFVLEdBQUdSLFFBQVEsQ0FBQyxDQUFELENBQXpCO0FBQ0EsUUFBSVUsU0FBUyxHQUFHVixRQUFRLENBQUMsQ0FBRCxDQUF4Qjs7QUFDQSxRQUFJZixNQUFNLEdBQUdGLHNCQUFVRyxZQUFWLENBQXVCcUIsU0FBdkIsRUFBa0NDLFVBQWxDLENBQWI7O0FBQ0EsUUFBSXZCLE1BQU0sS0FBS3RDLFNBQWYsRUFBMEI7QUFDdEJzQyxNQUFBQSxNQUFNLEdBQUdGLHNCQUFVRyxZQUFWLENBQXVCd0IsU0FBdkIsRUFBa0NGLFVBQWxDLENBQVQ7QUFDSDs7QUFDRCxRQUFJdkIsTUFBTSxLQUFLdEMsU0FBZixFQUEwQjtBQUNyQjtBQUNBLGFBQU8sS0FBSzhELGdCQUFMLENBQXNCM0QsUUFBdEIsRUFBZ0NDLFNBQWhDLEVBQTJDd0QsU0FBM0MsRUFBc0ROLFFBQXRELENBQVA7QUFDSixLQUhELE1BR087QUFDSDtBQUNBO0FBQ0EsYUFBTyxLQUFLSyxzQkFBTCxDQUE0QnhELFFBQTVCLEVBQXNDQyxTQUF0QyxFQUFpRHdELFNBQWpELEVBQTRETixRQUE1RCxDQUFQO0FBQ0g7QUFDSjtBQUVEOzs7OztTQUdBSyx5QkFBQSxnQ0FBdUJ4RCxRQUF2QixFQUFpQ0MsU0FBakMsRUFBNEM0RCxXQUE1QyxFQUF5RFYsUUFBekQsRUFBbUU7QUFDL0Q7QUFDQSxRQUFJVyxTQUFTLEdBQUdELFdBQWhCO0FBQ0EsUUFBSUUsU0FBUyxHQUFHLEtBQUt6QyxVQUFMLENBQWdCd0MsU0FBaEIsQ0FBaEI7QUFDQSxRQUFJRSxZQUFZLEdBQUcsS0FBS2hDLGFBQUwsQ0FBbUI4QixTQUFuQixDQUFuQjs7QUFDQSxRQUFJbEIsTUFBTSxHQUFHbUIsU0FBUyxJQUFJL0QsUUFBYixJQUF5QmlDLHNCQUFVWSxXQUFWLENBQXNCbUIsWUFBdEIsQ0FBdEM7O0FBQ0EsUUFBSXBCLE1BQUosRUFBWTtBQUNSO0FBQ0EsVUFBSXFCLEtBQUssR0FBRyxLQUFLdkQsZUFBTCxDQUFxQixJQUFyQixFQUEyQnFELFNBQTNCLEVBQXNDWixRQUF0QyxDQUFaOztBQUNBLFVBQUljLEtBQUssQ0FBQzNELE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNsQixZQUFJcUMsS0FBSyxHQUFHc0IsS0FBSyxDQUFDQSxLQUFLLENBQUMzRCxNQUFOLEdBQWUsQ0FBaEIsQ0FBakI7O0FBQ0EsWUFBSTZCLE1BQU0sR0FBR0Ysc0JBQVVHLFlBQVYsQ0FBdUJPLEtBQXZCLEVBQThCbUIsU0FBOUIsQ0FBYixDQUZrQixDQUdsQjs7O0FBQ0EsWUFBSTNCLE1BQU0sS0FBS3ZDLFFBQWYsRUFBeUI7QUFDckIsaUJBQU8rQyxLQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQUM7QUFDSixpQkFBT3NCLEtBQUssQ0FBQyxDQUFELENBQVo7QUFDSDtBQUNKLE9BVEQsTUFTTztBQUNILGVBQU9kLFFBQVEsQ0FBQ2UsS0FBVCxDQUFlZixRQUFRLENBQUNlLEtBQVQsQ0FBZTVELE1BQWYsR0FBd0IsQ0FBdkMsQ0FBUDtBQUNIO0FBQ0osS0FmRCxNQWVPO0FBQ0g7QUFDQSxVQUFJNkQsR0FBRyxHQUFHSCxZQUFZLElBQUksRUFBMUI7QUFDQXpELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJxRCxXQUFXLEdBQUcsTUFBZCxHQUF1QkUsU0FBNUMsRUFIRyxDQUlIOztBQUNBLFVBQUlLLFVBQVUsR0FBRyxLQUFLMUQsZUFBTCxDQUFxQixLQUFyQixFQUE0QnFELFNBQTVCLEVBQXVDWixRQUF2QyxDQUFqQjs7QUFDQSxVQUFJaUIsVUFBVSxDQUFDOUQsTUFBWCxJQUFxQixDQUF6QixFQUE0QjtBQUN4QjtBQUNBLGVBQU82QyxRQUFRLENBQUN4QyxTQUFULENBQW1CLENBQW5CLENBQVA7QUFDSCxPQUhELE1BR08sSUFBSXdELEdBQUosRUFBUztBQUNaLGVBQU9DLFVBQVUsQ0FBQyxDQUFELENBQWpCO0FBQ0gsT0FGTSxNQUVBO0FBQ0gsZUFBT0EsVUFBVSxDQUFDQSxVQUFVLENBQUM5RCxNQUFYLEdBQW9CLENBQXJCLENBQWpCO0FBQ0g7QUFDSjtBQUNKO0FBRUQ7Ozs7O1NBR0FxRCxtQkFBQSwwQkFBaUIzRCxRQUFqQixFQUEyQkMsU0FBM0IsRUFBc0M0RCxXQUF0QyxFQUFtRFYsUUFBbkQsRUFBNkQ7QUFDekQsUUFBSVcsU0FBUyxHQUFHRCxXQUFoQjtBQUNBLFFBQUlFLFNBQVMsR0FBRyxLQUFLekMsVUFBTCxDQUFnQndDLFNBQWhCLENBQWhCO0FBQ0EsUUFBSUUsWUFBWSxHQUFHLEtBQUtoQyxhQUFMLENBQW1COEIsU0FBbkIsQ0FBbkI7O0FBQ0EsUUFBSWxCLE1BQU0sR0FBR21CLFNBQVMsSUFBSS9ELFFBQWIsSUFBeUJpQyxzQkFBVVksV0FBVixDQUFzQm1CLFlBQXRCLENBQXRDOztBQUNBLFFBQUlwQixNQUFKLEVBQVk7QUFDUixVQUFJcUIsS0FBSyxHQUFHLEtBQUt2RCxlQUFMLENBQXFCLElBQXJCLEVBQTJCcUQsU0FBM0IsRUFBc0NaLFFBQXRDLENBQVo7O0FBQ0EsVUFBSWMsS0FBSyxDQUFDM0QsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ2xCLGVBQU8sS0FBSytELG9CQUFMLENBQTBCSixLQUExQixDQUFQO0FBQ0gsT0FKTyxDQUtSOzs7QUFDQSxhQUFPZCxRQUFRLENBQUNlLEtBQVQsQ0FBZSxDQUFmLENBQVA7QUFDSCxLQVBELE1BT087QUFDSCxVQUFJRCxNQUFLLEdBQUcsS0FBS3ZELGVBQUwsQ0FBcUIsSUFBckIsRUFBMkJxRCxTQUEzQixFQUFzQ1osUUFBdEMsQ0FBWjs7QUFDQSxVQUFJYyxNQUFLLENBQUMzRCxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDbEI7QUFDQSxlQUFPLEtBQUsrRCxvQkFBTCxDQUEwQkosTUFBMUIsQ0FBUDtBQUNILE9BTEUsQ0FNSDs7O0FBQ0FBLE1BQUFBLE1BQUssR0FBR2QsUUFBUSxDQUFDZSxLQUFqQjtBQUNBLGFBQU8sS0FBS0csb0JBQUwsQ0FBMEJKLE1BQTFCLENBQVA7QUFDSDtBQUNKOztTQUVESSx1QkFBQSw4QkFBcUJKLEtBQXJCLEVBQTRCO0FBQ3hCLFNBQUssSUFBSXpDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5QyxLQUFLLENBQUMzRCxNQUExQixFQUFrQ2tCLENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsVUFBSVcsTUFBTSxHQUFHRixzQkFBVUMsWUFBVixDQUF1QixLQUFLRixhQUFMLENBQW1CaUMsS0FBSyxDQUFDekMsQ0FBRCxDQUF4QixDQUF2QixDQUFiOztBQUNBLFVBQUlXLE1BQUosRUFBWTtBQUNSLGVBQU84QixLQUFLLENBQUN6QyxDQUFELENBQVo7QUFDSDtBQUNKOztBQUNELFdBQU95QyxLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQ0g7QUFFRDs7Ozs7Ozs7U0FNQXZELGtCQUFBLHlCQUFnQmtDLE1BQWhCLEVBQXdCSCxJQUF4QixFQUE4QlUsUUFBOUIsRUFBd0M7QUFDcEMsUUFBSVAsTUFBSixFQUFZO0FBQ1IsYUFBT08sUUFBUSxDQUFDeEMsU0FBaEI7QUFDSDs7QUFDRCxZQUFROEIsSUFBUjtBQUNJLFdBQUssQ0FBTDtBQUNJLGVBQU9VLFFBQVEsQ0FBQ21CLFVBQWhCOztBQUNKLFdBQUssQ0FBTDtBQUNJLGVBQU9uQixRQUFRLENBQUNvQixVQUFoQjs7QUFDSixXQUFLLENBQUw7QUFDSSxlQUFPcEIsUUFBUSxDQUFDcUIsVUFBaEI7O0FBQ0osV0FBSyxDQUFMO0FBQ0ksZUFBT3JCLFFBQVEsQ0FBQ3NCLFVBQWhCO0FBUlI7QUFXSDs7U0FFREMsdUJBQUEsOEJBQXFCMUUsUUFBckIsRUFBK0IyRSxRQUEvQixFQUF5Q3hCLFFBQXpDLEVBQW1EO0FBQy9DNUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQixhQUFXbUUsUUFBL0I7QUFDQSxRQUFJWixTQUFTLEdBQUcsS0FBS3pDLFVBQUwsQ0FBZ0JxRCxRQUFoQixDQUFoQjtBQUNBLFFBQUlYLFlBQVksR0FBRyxLQUFLaEMsYUFBTCxDQUFtQjJDLFFBQW5CLENBQW5COztBQUNBLFFBQUkvQixNQUFNLEdBQUdtQixTQUFTLElBQUkvRCxRQUFiLElBQXlCaUMsc0JBQVVZLFdBQVYsQ0FBc0JtQixZQUF0QixDQUF0Qzs7QUFDQXpELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0IsT0FBS3VELFNBQUwsR0FBZSxHQUFmLEdBQW1CQyxZQUFuQixHQUFnQyxHQUFoQyxHQUFvQ3BCLE1BQXhEO0FBQ0EsUUFBSXFCLEtBQUssR0FBRyxLQUFLdkQsZUFBTCxDQUFxQmtDLE1BQXJCLEVBQTZCbUIsU0FBN0IsRUFBd0NaLFFBQXhDLENBQVosQ0FOK0MsQ0FPL0M7O0FBQ0EsUUFBSXlCLEtBQUssR0FBR1gsS0FBSyxDQUFDcEQsT0FBTixDQUFjOEQsUUFBZCxDQUFaO0FBQ0FWLElBQUFBLEtBQUssQ0FBQ1ksTUFBTixDQUFhRCxLQUFiLEVBQW9CLENBQXBCLEVBVCtDLENBVS9DOztBQUNBWCxJQUFBQSxLQUFLLEdBQUdkLFFBQVEsQ0FBQ2UsS0FBakI7QUFDQVUsSUFBQUEsS0FBSyxHQUFHWCxLQUFLLENBQUNwRCxPQUFOLENBQWM4RCxRQUFkLENBQVI7QUFDQVYsSUFBQUEsS0FBSyxDQUFDWSxNQUFOLENBQWFELEtBQWIsRUFBb0IsQ0FBcEI7QUFDSDs7U0FFRHRELGFBQUEsb0JBQVd3QyxTQUFYLEVBQXNCO0FBQ2xCLFdBQU9nQixJQUFJLENBQUNDLEtBQUwsQ0FBV2pCLFNBQVMsR0FBRyxFQUF2QixDQUFQO0FBRUg7O1NBRURrQixhQUFBLG9CQUFXbEIsU0FBWCxFQUFzQjtBQUNsQixXQUFPQSxTQUFTLENBQUNwQixTQUFWLENBQW9CLENBQXBCLENBQVA7QUFDSDs7U0FFRFYsZ0JBQUEsdUJBQWM4QixTQUFkLEVBQXlCO0FBQ3JCLFdBQU9nQixJQUFJLENBQUNDLEtBQUwsQ0FBV2pCLFNBQVMsR0FBRyxFQUF2QixDQUFQO0FBQ0g7O1NBRURtQixnQkFBQSx1QkFBY25CLFNBQWQsRUFBeUI7QUFDckIsV0FBT0EsU0FBUyxDQUFDcEIsU0FBVixDQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUFQO0FBQ0g7O1NBQ0R3QyxZQUFBLG1CQUFVQyxHQUFWLEVBQWM7QUFDVjtBQUVGLFFBQUdBLEdBQUcsS0FBSyxFQUFSLElBQWNBLEdBQUcsSUFBRyxJQUF2QixFQUE0QjtBQUN0QixhQUFPLEtBQVA7QUFDTDs7QUFDQSxRQUFHLENBQUNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFULEVBQWU7QUFDaEI7QUFDQztBQUNDLGFBQU8sSUFBUDtBQUNELEtBSkEsTUFNRTtBQUNELGFBQU8sS0FBUDtBQUNEO0FBQ0YiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb2tlclV0aWwgZnJvbSBcIi4vUG9rZXJVdGlsXCI7XG5cbmxldCBwb2tlcldlaWdodCA9IFs0LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAzLCA1LCAxNiwgMTcsIDE4XTsvL+S4uzXkuLoxOFxubGV0IExFRlRfV0lOID0gLTE7XG5sZXQgUklHSFRfV0lOID0gMTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJSGVscGVyIHtcblxuICAgIC8vIHtcbiAgICAvLyAgICAgdHlwZTFBcnJheTp0eXBlMUFycmF5LFxuICAgIC8vICAgICB0eXBlMkFycmF5OnR5cGUyQXJyYXksXG4gICAgLy8gICAgIHR5cGUzQXJyYXk6dHlwZTNBcnJheSxcbiAgICAvLyAgICAgdHlwZTRBcnJheTp0eXBlNEFycmF5LFxuICAgIC8vICAgICBob3N0QXJyYXk6aG9zdEFycmF5LFxuICAgIC8vICAgICB0b3RhbDp0b3RhbFxuICAgIC8vIH1cbiAgICAvKipcbiAgICAgKiDmo4DmtYvnlKjmiLflh7rnmoTniYzmmK/lkKblkIjms5VcbiAgICAgKiBAcGFyYW0gZ2FtZUhvc3RcbiAgICAgKiBAcGFyYW0gcm91bmRIb3N0XG4gICAgICogQHBhcmFtIHVzZXJDYXJkXG4gICAgICogQHBhcmFtIGNhcmRBcnJheVxuICAgICAqL1xuICAgIGNoZWNrVXNlckNhblNlbmQoZ2FtZUhvc3QsIHJvdW5kSG9zdCwgdXNlclBva2VyT2JqLCB3aWxsU2VuZENhcmQpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkod2lsbFNlbmRDYXJkKSkge1xuICAgICAgICAgICAgaWYgKHdpbGxTZW5kQ2FyZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB3aWxsU2VuZENhcmQgPSB3aWxsU2VuZENhcmRbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8v5pqC5pe25LiN5pSv5oyBXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbmlvblwiLCBcIuaaguaXtuS4jeaUr+aMgeWHuuWvuT09PT1cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyb3VuZEhvc3QpIHtcbiAgICAgICAgICAgIC8v5rKh5pyJ5pys6L2u5Li777yM546p5a625aS05LiA5Liq5Ye654mMXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZUhvc3QgPT0gcm91bmRIb3N0KSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0QXJyYXkgPSB0aGlzLnNlbGVjdEFycmF5RnJvbSh0cnVlLCByb3VuZEhvc3QsIHVzZXJQb2tlck9iaik7XG4gICAgICAgICAgICAvL+iwg+S4u1xuICAgICAgICAgICAgaWYgKHVzZXJQb2tlck9iai5ob3N0QXJyYXkubGVuZ3RoID4gMCB8fCB0YXJnZXRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy/mnInkuLvniYzlv4Xpobvlh7rkuLvniYxcbiAgICAgICAgICAgICAgICBsZXQgZmxhZzEgPSB1c2VyUG9rZXJPYmouaG9zdEFycmF5LmluZGV4T2Yod2lsbFNlbmRDYXJkKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgbGV0IGZsYWcyID0gdGFyZ2V0QXJyYXkuaW5kZXhPZih3aWxsU2VuZENhcmQpICE9PSAtMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxhZzIgfHwgZmxhZzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+ayoeS4u+S6humaj+S+v+WHulxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/oirHoibLnm7jlkIzlj6/ku6Xlh7pcbiAgICAgICAgICAgIGxldCB0YXJnZXRBcnJheSA9IHRoaXMuc2VsZWN0QXJyYXlGcm9tKHRydWUsIHJvdW5kSG9zdCwgdXNlclBva2VyT2JqKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldEFycmF5LmluZGV4T2Yod2lsbFNlbmRDYXJkKSAhPT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+aXoHJvdW5kSG9zdOiKseiJsuWPr+S7peWHulxuXG4gICAgICAgIH1cbiAgICAgICAgLy/lh7rlia/niYzml7bvvIzmnInlia/niYzlv4Xpobvlh7rlia/niYxcbiAgICAgICAgcmV0dXJuIHRydWU7XG5cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+avj+i9rumAu+i+ke+8jFxuICAgICAqIOi1ouWutuWHuueJjO+8jOehruWumuacrOi9ruS4u1xuICAgICAqIOS4i+WutuWHuueJjCDosINzZW5kQUlGb2xsb3dDYXJkXG4gICAgICogNOWutumDveWHuuWujOe7k+eul++8jOenr+WIhuiuoeeul++8jOe7k+adn+acrOi9ru+8jOi/lOWbnuenr+WIhlxuICAgICAqIEBwYXJhbSBvblJvdW5kQ2FsbEJhY2sgIOWbnuiwgyDor6Xnm7jlupTnjqnlrrblh7rniYxcbiAgICAgKiBAcGFyYW0gd2luTG9jYWwg5LyY5YWI5Ye654mM5pa5IOe0ouW8leS7jjDlvIDlp4tcbiAgICAgKiBAcGFyYW0gZ2FtZUhvc3Qg5b2T5YmN5ri45oiP5Li7XG4gICAgICovXG4gICAgcm91bmRQcm9ncmFtKG9uVXNlclBsYXlDYWxsQmFjaywgb25Sb3VuZENhbGxCYWNrLCByb3VuZE92ZXJDYWxsQmFjaywgd2luTG9jYWwsIGdhbWVIb3N0LCBzZW5kQXJyYXkpIHtcbiAgICAgICAgbGV0IHJvdW5kSG9zdCA9IG51bGw7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIixcIui9ruasoemAu+i+kVwiK3dpbkxvY2FsK1wiL1wiK3NlbmRBcnJheSk7XG4gICAgICAgIGlmICghc2VuZEFycmF5IHx8IHNlbmRBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNlbmRBcnJheSA9IFtdOy8v5pys6L2u5Ye655qE54mMXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcG9rZXJzID0gc2VuZEFycmF5WzBdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHBva2VycykmJnBva2Vycy5sZW5ndGg9PT0xKXtcbiAgICAgICAgICAgICAgICBwb2tlcnM9cG9rZXJzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwb2tlcnMpKSB7XG4gICAgICAgICAgICAgICAgcm91bmRIb3N0ID0gdGhpcy5pbnRHZXRUeXBlKHBva2Vyc1swXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbmlvblwiLCBcIuaaguS4jeaUr+aMgeWHuuWvuVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdW5kSG9zdCA9IHRoaXMuaW50R2V0VHlwZShwb2tlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGxldCBvcmdOdW09c2VuZEFycmF5Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IG9yZ051bTsgaSA8PSA0IC0gb3JnTnVtOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGxheWVyID0gKHdpbkxvY2FsICsgaSkgJSA0O1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgIG9uVXNlclBsYXlDYWxsQmFjayhnYW1lSG9zdCwgcm91bmRIb3N0LCBzZW5kQXJyYXksIGN1cnJlbnRQbGF5ZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwb2tlcnMgPSBvblJvdW5kQ2FsbEJhY2soZ2FtZUhvc3QsIHJvdW5kSG9zdCwgc2VuZEFycmF5LCBjdXJyZW50UGxheWVyKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc2VuZEFycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocG9rZXJzKSkge1xuICAgICAgICAgICAgICAgICAgICByb3VuZEhvc3QgPSB0aGlzLmludEdldFR5cGUocG9rZXJzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbmlvblwiLCBcIuaaguS4jeaUr+aMgeWHuuWvuVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdW5kSG9zdCA9IHRoaXMuaW50R2V0VHlwZShwb2tlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbmRBcnJheS5wdXNoKHBva2Vycyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uaW9uXCIsXCLova7mrKHov63ku6NcIit3aW5Mb2NhbCtcIi9cIitwb2tlcnMrXCLmlbDnu4RcIitzZW5kQXJyYXkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIixcIui3s+WHuuW+queOr1wiK3dpbkxvY2FsKTtcbiAgICAgICAgbGV0IGJpZ2dlciA9IG51bGw7XG4gICAgICAgIGxldCBzdW1Tb2NlciA9IDA7XG4gICAgICAgIGxldCB3aW5uZXJQb3NpdGlvbiA9IDA7XG4gICAgICAgIC8v5Yik5pat5ZOq5pa554mM5aSnXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHNlbmRBcnJheVtpXTtcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5pbnRHZXRDb250ZW50KGl0ZW0pO1xuICAgICAgICAgICAgc3VtU29jZXIgKz0gUG9rZXJVdGlsLnF1YXJ5SXNTb2Nlcihjb250ZW50KTtcbiAgICAgICAgICAgIGlmIChiaWdnZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJpZ2dlciA9IGl0ZW07XG4gICAgICAgICAgICAgICAgd2lubmVyUG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gUG9rZXJVdGlsLmNvbXBhcmVQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCBpdGVtLCBiaWdnZXIpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBMRUZUX1dJTikge1xuICAgICAgICAgICAgICAgIGJpZ2dlciA9IGl0ZW07XG4gICAgICAgICAgICAgICAgd2lubmVyUG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbm5lclBvc2l0aW9uICs9IHdpbkxvY2FsO1xuICAgICAgICB3aW5uZXJQb3NpdGlvbiA9IHdpbm5lclBvc2l0aW9uICUgNDtcbiAgICAgICAgaWYgKHdpbm5lclBvc2l0aW9uID09IDAgfHwgd2lubmVyUG9zaXRpb24gPT0gMikge1xuICAgICAgICAgICAgLy/liqDliIZcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1bVNvY2VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICByb3VuZE92ZXJDYWxsQmFjayh3aW5uZXJQb3NpdGlvbiwgc3VtU29jZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWFiOaJi+eUteiEkemAu+i+kVxuICAgICAqIOaZrumAmuaJk+azle+8mlxuICAgICAqIOacieWJr+WHuuacgOWkp+eahOWJr+eJjCDmiJbogIXlia/niYzlr7lcbiAgICAgKiDlhbbmrKHlh7rmnIDlsI/kuLvniYzvvIzkuI3osIPkuLvlr7lcbiAgICAgKiDmnIDlkI7kuIDova7lh7rkuLvlr7kg5oiW5Li7XG4gICAgICog5Li75bqU6K+l5Zyo5ZCO6Z2iXG4gICAgICogQHBhcmFtIGdhbWVIb3N0IOS4u1xuICAgICAqIEBwYXJhbSBjYXJkQXJyYXkgIOW9k+WJjeaJi+eJjFxuICAgICAqL1xuICAgIHNlbmRBSUhvc3RDYXJkKGdhbWVob3N0LCBjYXJkQXJyYXkpIHtcbiAgICAgICAgbGV0IHNlbmRDYXJkSW5kZXhzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IGNhcmRBcnJheVtpXS5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBjYXJkQXJyYXlbaV0uc3Vic3RyaW5nKDAsIDIpO1xuICAgICAgICAgICAgbGV0IGlzSG9zdCA9IHR5cGUgPT0gZ2FtZWhvc3QgfHwgUG9rZXJVdGlsLnF1YXJ5SXNIb3N0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghaXNIb3N0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbmRDYXJkSW5kZXhzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZW5kQ2FyZEluZGV4cy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkQXJyYXlbc2VuZENhcmRJbmRleHNbMF1dID09IGNhcmRBcnJheVtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZENhcmRJbmRleHMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kQ2FyZCA9IGNhcmRBcnJheVtzZW5kQ2FyZEluZGV4c1swXV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kVmFsdWUgPSBzZW5kQ2FyZC5zdWJzdHJpbmcoMCwgMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBQb2tlclV0aWwuY29tcGFyZVNpbmdsZVBva2VyQmlnZ2VyKHNlbmRWYWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID0gUklHSFRfV0lOKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kQ2FyZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VuZENhcmRJbmRleHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8v5rKh5pyJ5Ymv54mM5LqGXG4gICAgICAgICAgICAgICAgICAgIHNlbmRDYXJkSW5kZXhzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRBcnJheVtzZW5kQ2FyZEluZGV4c1swXV0gPT0gY2FyZEFycmF5W2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kQ2FyZEluZGV4cy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmRDYXJkID0gY2FyZEFycmF5W3NlbmRDYXJkSW5kZXhzWzBdXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmRWYWx1ZSA9IHNlbmRDYXJkLnN1YnN0cmluZygwLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFBva2VyVXRpbC5jb21wYXJlU2luZ2xlUG9rZXJCaWdnZXIoc2VuZFZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPSBMRUZUX1dJTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZENhcmQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VuZENhcmRJbmRleHM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlkI7miYvnlLXohJHpgLvovpFcbiAgICAgKiDliKTmlq3lvZPliY3osIHlpKfvvIzpmJ/lj4vlpKflh7rliIbvvIzpmJ/lj4vlsI/lh7rlsI/niYzjgIJcbiAgICAgKiDml6DniYzlh7rmnIDlsI/lia/niYxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBnYW1lSG9zdCAg5ri45oiP5Li7XG4gICAgICogQHBhcmFtIHJvdW5kSG9zdCDmnKzova7kuLtcbiAgICAgKiBAcGFyYW0gdXNlckNhcmQgIOS4ieaWueaJgOWHuueahOeJjFxuICAgICAqIEBwYXJhbSBjYXJkQXJyYXkgIOiHquW3seWJqeS9meeahOeJjFxuICAgICAqL1xuICAgIHNlbmRBSUZvbGxvd0NhcmQoZ2FtZUhvc3QsIHJvdW5kSG9zdCwgdXNlckNhcmQsIHBva2VyT2JqKSB7XG4gICAgICAgIHN3aXRjaCAodXNlckNhcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6Ly/oh6rlt7HmmK/pppblrrYg55CG6K665LiK5LiN5a2Y5Zyo77yM5bqU6K+l6LCDc2VuZEFJSG9zdENhcmRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwib25pb25cIiwgXCJlcnJvciDlkI7miYvnlLXohJHosIPnlKjkuoZzZW5kQUlGb2xsb3dDYXJkIOW6lOivpeiwg+eUqCBzZW5kQUlIb3N0Q2FyZCBcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTovL+WwvemHj+WHuuWkp+eJjFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlY29uZExvZ2ljKGdhbWVIb3N0LCByb3VuZEhvc3QsIHVzZXJDYXJkLCBwb2tlck9iaik7XG4gICAgICAgICAgICBjYXNlIDI6Ly9cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kVGhyaWRQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCB1c2VyQ2FyZCwgcG9rZXJPYmopO1xuICAgICAgICAgICAgICAgIGNhc2UgMzovL1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRGb3J0aFBva2VyKGdhbWVIb3N0LCByb3VuZEhvc3QsIHVzZXJDYXJkLCBwb2tlck9iaik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNlY29uZExvZ2ljKGdhbWVIb3N0LCByb3VuZEhvc3QsIHVzZXJDYXJkLCBwb2tlck9iaikge1xuICAgICAgICBpZiAodXNlckNhcmRbMF0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy/lh7rlr7nnmoTpgLvovpFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdFNpbmdsZUJpZ2VyUG9rZXIoZ2FtZUhvc3QsIHJvdW5kSG9zdCwgdXNlckNhcmQsIHBva2VyT2JqKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56ys5LiJ5omL55S16ISRXG4gICAgICog5Yik5pat6LCB5Ye655qE5aSnLOWwneivleeblui/h+S4gOaJi1xuICAgICAqL1xuICAgIHNlbmRUaHJpZFBva2VyKGdhbWVIb3N0LCByb3VuZEhvc3QsIHVzZXJDYXJkLCBwb2tlck9iaikge1xuICAgICAgICBsZXQgZmlyc3RDYXJkID0gdXNlckNhcmRbMF07XG4gICAgICAgIGxldCBzZWNvbmRDYXJkID0gdXNlckNhcmRbMV07XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IFBva2VyVXRpbC5jb21wYXJlUG9rZXIoZ2FtZUhvc3QsIHJvdW5kSG9zdCwgZmlyc3RDYXJkLCBzZWNvbmRDYXJkKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gUklHSFRfV0lOKSB7XG4gICAgICAgICAgICAvL+WvueWutuWkp++8jOWwneivleWHuuWIhuaIluWwj+eJjFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0U29jZXJQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCBmaXJzdENhcmQsIHBva2VyT2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5Ye65pyA5aSn54mM77yM5bCd6K+V5Y6L6L+HZmlyc3RDYXJkIOacgOWkp+eahOeJjOS5n+WOi+S4jei/h+WwseWHuuWwj+eJjFxuICAgICAgICAgICAgLy9UT0RPIOWPr+S7peiKgue6pu+8jOWHuuS7heWOi+i/h+WvueaWueeahOWkp+eJjFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0U2luZ2xlQmlnZXJQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCBmaXJzdENhcmQsIHBva2VyT2JqKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlm5vmiYvnlLXohJFcbiAgICAgKi9cbiAgICBzZW5kRm9ydGhQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCB1c2VyQ2FyZCwgcG9rZXJPYmopIHtcbiAgICAgICAgbGV0IGZpcnN0Q2FyZCA9IHVzZXJDYXJkWzBdO1xuICAgICAgICBsZXQgc2Vjb25kQ2FyZCA9IHVzZXJDYXJkWzFdO1xuICAgICAgICBsZXQgdGhyaWRDYXJkID0gdXNlckNhcmRbMl07XG4gICAgICAgIGxldCByZXN1bHQgPSBQb2tlclV0aWwuY29tcGFyZVBva2VyKGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZCk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFJJR0hUX1dJTikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUG9rZXJVdGlsLmNvbXBhcmVQb2tlcih0aHJpZENhcmQsIHNlY29uZENhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFJJR0hUX1dJTikge1xuICAgICAgICAgICAgIC8v5a+55a625aSn77yM5bCd6K+V5Ye65YiG5oiW5bCP54mMXG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0U29jZXJQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCBmaXJzdENhcmQsIHBva2VyT2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5Ye65pyA5aSn54mM77yM5bCd6K+V5Y6L6L+HZmlyc3RDYXJkIOacgOWkp+eahOeJjOS5n+WOi+S4jei/h+WwseWHuuWwj+eJjFxuICAgICAgICAgICAgLy9UT0RPIOWPr+S7peiKgue6pu+8jOWHuuS7heWOi+i/h+WvueaWueeahOWkp+eJjFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0U2luZ2xlQmlnZXJQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCBmaXJzdENhcmQsIHBva2VyT2JqKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmhtueJjOmAu+i+kVxuICAgICAqL1xuICAgIHNlbGVjdFNpbmdsZUJpZ2VyUG9rZXIoZ2FtZUhvc3QsIHJvdW5kSG9zdCwgdGFyZ2V0UG9rZXIsIHBva2VyT2JqKSB7XG4gICAgICAgIC8v5Ye65Y2V55qE6YC76L6RIDHor4bliKvmmK/lkKbmmK/kuLvniYxcbiAgICAgICAgbGV0IGNhcmRWYWx1ZSA9IHRhcmdldFBva2VyO1xuICAgICAgICBsZXQgdHlwZVZhbHVlID0gdGhpcy5pbnRHZXRUeXBlKGNhcmRWYWx1ZSk7XG4gICAgICAgIGxldCBjb250ZW50VmFsdWUgPSB0aGlzLmludEdldENvbnRlbnQoY2FyZFZhbHVlKTtcbiAgICAgICAgbGV0IGlzSG9zdCA9IHR5cGVWYWx1ZSA9PSBnYW1lSG9zdCB8fCBQb2tlclV0aWwucXVhcnlJc0hvc3QoY29udGVudFZhbHVlKTtcbiAgICAgICAgaWYgKGlzSG9zdCkge1xuICAgICAgICAgICAgLy/pobblpKfniYxcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuc2VsZWN0QXJyYXlGcm9tKHRydWUsIHR5cGVWYWx1ZSwgcG9rZXJPYmopO1xuICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gUG9rZXJVdGlsLmNvbXBhcmVQb2tlcih2YWx1ZSwgY2FyZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAvL+iDvemhtui/hyDlh7rlpKfniYxcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBMRUZUX1dJTikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsvL+mhtuS4jei/hyDlh7rlsI/niYxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5WzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBva2VyT2JqLnRvdGFsW3Bva2VyT2JqLnRvdGFsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/kuIrlrrbmmK/lkKbkuLpBIFxuICAgICAgICAgICAgbGV0IGlzQSA9IGNvbnRlbnRWYWx1ZSA9PSAxNDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25pb25cIiwgdGFyZ2V0UG9rZXIgKyBcInR5cGVcIiArIHR5cGVWYWx1ZSk7XG4gICAgICAgICAgICAvL+iHquW3seaYr+WQpui/mOacieivpeiKseiJslxuICAgICAgICAgICAgbGV0IHBva2VyQXJyYXkgPSB0aGlzLnNlbGVjdEFycmF5RnJvbShmYWxzZSwgdHlwZVZhbHVlLCBwb2tlck9iaik7XG4gICAgICAgICAgICBpZiAocG9rZXJBcnJheS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8v5Ye65pyA5bCP55qE54mM5p2AXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBva2VyT2JqLmhvc3RBcnJheVswXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBva2VyQXJyYXlbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2tlckFycmF5W3Bva2VyQXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuIrliIbpgLvovpEg5bCP54mM6YC76L6RXG4gICAgICovXG4gICAgc2VsZWN0U29jZXJQb2tlcihnYW1lSG9zdCwgcm91bmRIb3N0LCB0YXJnZXRQb2tlciwgcG9rZXJPYmopIHtcbiAgICAgICAgbGV0IGNhcmRWYWx1ZSA9IHRhcmdldFBva2VyO1xuICAgICAgICBsZXQgdHlwZVZhbHVlID0gdGhpcy5pbnRHZXRUeXBlKGNhcmRWYWx1ZSk7XG4gICAgICAgIGxldCBjb250ZW50VmFsdWUgPSB0aGlzLmludEdldENvbnRlbnQoY2FyZFZhbHVlKTtcbiAgICAgICAgbGV0IGlzSG9zdCA9IHR5cGVWYWx1ZSA9PSBnYW1lSG9zdCB8fCBQb2tlclV0aWwucXVhcnlJc0hvc3QoY29udGVudFZhbHVlKTtcbiAgICAgICAgaWYgKGlzSG9zdCkge1xuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5zZWxlY3RBcnJheUZyb20odHJ1ZSwgdHlwZVZhbHVlLCBwb2tlck9iaik7XG4gICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdFNjb2VyRnJvbUFycmF5KGFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vVE9ETyDlvoXkvJjljJYg5Ye65pyA5bCP55qE54mMIOW9k+WJjeaYr+aAu+eJjOW6k+eahOesrOS4gOW8oOeJjCBcbiAgICAgICAgICAgIHJldHVybiBwb2tlck9iai50b3RhbFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuc2VsZWN0QXJyYXlGcm9tKHRydWUsIHR5cGVWYWx1ZSwgcG9rZXJPYmopO1xuICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvL+S7juivpeiKseiJsumAieeJjFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdFNjb2VyRnJvbUFycmF5KGFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v5YWo5bGA6YCJ54mMXG4gICAgICAgICAgICBhcnJheSA9IHBva2VyT2JqLnRvdGFsO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0U2NvZXJGcm9tQXJyYXkoYXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0U2NvZXJGcm9tQXJyYXkoYXJyYXkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFBva2VyVXRpbC5xdWFyeUlzU29jZXIodGhpcy5pbnRHZXRDb250ZW50KGFycmF5W2ldKSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheVswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgInlh7rlr7nlupTnmoTniYznu4RcbiAgICAgKiBAcGFyYW0geyp9IGlzSG9zdCAg5Zu65a6a5Li75pWw57uEXG4gICAgICogQHBhcmFtIHsqfSB0eXBlICAgIOiKseiJsuexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gcG9rZXJPYmogIOeJjOe7hOWvueixoVxuICAgICAqL1xuICAgIHNlbGVjdEFycmF5RnJvbShpc0hvc3QsIHR5cGUsIHBva2VyT2JqKSB7XG4gICAgICAgIGlmIChpc0hvc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2tlck9iai5ob3N0QXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBva2VyT2JqLnR5cGUxQXJyYXk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBva2VyT2JqLnR5cGUyQXJyYXk7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBva2VyT2JqLnR5cGUzQXJyYXk7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBva2VyT2JqLnR5cGU0QXJyYXk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbW92ZVBva2VyRnJvbUFycmF5KGdhbWVIb3N0LCBwb2tlck51bSwgcG9rZXJPYmopIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbmlvblwiLFwicG9rZXJOdW1cIitwb2tlck51bSk7XG4gICAgICAgIGxldCB0eXBlVmFsdWUgPSB0aGlzLmludEdldFR5cGUocG9rZXJOdW0pO1xuICAgICAgICBsZXQgY29udGVudFZhbHVlID0gdGhpcy5pbnRHZXRDb250ZW50KHBva2VyTnVtKTtcbiAgICAgICAgbGV0IGlzSG9zdCA9IHR5cGVWYWx1ZSA9PSBnYW1lSG9zdCB8fCBQb2tlclV0aWwucXVhcnlJc0hvc3QoY29udGVudFZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbmlvblwiLFwi56e76ZmkXCIrdHlwZVZhbHVlK1wiL1wiK2NvbnRlbnRWYWx1ZStcIi9cIitpc0hvc3QpO1xuICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLnNlbGVjdEFycmF5RnJvbShpc0hvc3QsIHR5cGVWYWx1ZSwgcG9rZXJPYmopO1xuICAgICAgICAvL+WIhue7hOaVsOe7hOWIoOmZpFxuICAgICAgICBsZXQgaW5kZXggPSBhcnJheS5pbmRleE9mKHBva2VyTnVtKTtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgLy/lhajlsYDmlbDnu4TliKDpmaRcbiAgICAgICAgYXJyYXkgPSBwb2tlck9iai50b3RhbDtcbiAgICAgICAgaW5kZXggPSBhcnJheS5pbmRleE9mKHBva2VyTnVtKTtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpbnRHZXRUeXBlKGNhcmRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihjYXJkVmFsdWUgJSAxMCk7XG5cbiAgICB9XG5cbiAgICBzdHJHZXRUeXBlKGNhcmRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gY2FyZFZhbHVlLnN1YnN0cmluZygyKVxuICAgIH1cblxuICAgIGludEdldENvbnRlbnQoY2FyZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGNhcmRWYWx1ZSAvIDEwKTtcbiAgICB9XG5cbiAgICBzdHJHZXRDb250ZW50KGNhcmRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gY2FyZFZhbHVlLnN1YnN0cmluZygwLCAyKTtcbiAgICB9XG4gICAgaXNSZWFsTnVtKHZhbCl7XG4gICAgICAgIC8vIGlzTmFOKCnlh73mlbAg5oqK56m65LiyIOepuuagvCDku6Xlj4pOVWxsIOaMieeFpzDmnaXlpITnkIYg5omA5Lul5YWI5Y676Zmk77yMXG4gICAgICAgIFxuICAgIOOAgOOAgGlmKHZhbCA9PT0gXCJcIiB8fCB2YWwgPT1udWxsKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICDjgIDjgIB9XG4gICAgICAgaWYoIWlzTmFOKHZhbCkpe+OAgOOAgOOAgOOAgFxuICAgIOOAgOOAgC8v5a+55LqO56m65pWw57uE5ZKM5Y+q5pyJ5LiA5Liq5pWw5YC85oiQ5ZGY55qE5pWw57uE5oiW5YWo5piv5pWw5a2X57uE5oiQ55qE5a2X56ym5Liy77yMaXNOYU7ov5Tlm55mYWxzZe+8jOS+i+Wmgu+8micxMjMn44CBW13jgIFbMl3jgIFbJzEyMyddLGlzTmFO6L+U5ZueZmFsc2UsXG4gICAgICAgLy/miYDku6XlpoLmnpzkuI3pnIDopoF2YWzljIXlkKvov5nkupvnibnmrormg4XlhrXvvIzliJnov5nkuKrliKTmlq3mlLnlhpnkuLppZighaXNOYU4odmFsKSAmJiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyApXG4gICAg44CA44CA44CAIHJldHVybiB0cnVlOyBcbiAgICDjgIDjgIB9XG4gICAgXG4gICAg44CAZWxzZXsgXG4gICAg44CA44CA44CA44CAcmV0dXJuIGZhbHNlOyBcbiAgICDjgIDjgIB9IFxuICAgIH1cblxufSJdfQ==