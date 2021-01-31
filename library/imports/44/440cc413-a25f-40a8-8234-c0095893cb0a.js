"use strict";
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