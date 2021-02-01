
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Director.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92036gCkblIs7Hs6LmBBYIQ', 'Director');
// scripts/Director.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

/**
 * 导演类 控制整体流程
 * 游戏资源
 * 人气  与食物味道线性相关 与舒适度及服务水平乘系数关系
 * 客流量 实际来店人数，和人气成正比 受餐桌数量限制
 * 金币   雇佣厨师，购买食材等
 * 行动值 每天自动补全6次，随机事件选择，产生其他资源
 */
var Director = /*#__PURE__*/function () {
  //引导模式 考虑是否加提示标
  //编辑模式，家具带碰撞体积，可删除摆放
  //游戏所进行的时间
  //本天剩余操作数
  //剩余金币
  //夜晚 试做新菜或 重新钻研旧菜，每个厨师每夜可执行一个，可有另一厨师协助.
  // 菜做好后会放到厨师的装备栏里，每个厨师可装备3个菜
  //准备阶段,调整厨师，经营计划，服务员数量，培训等
  //经营阶段,每天有6个抉择，可在店内帮工/监工，可出外采购，试吃学习菜谱，可挖掘食材，
  // 也能碰到广告、厨师争霸及卫生检查等消息
  //关店阶段，经营结束后，出若干随机事件，跳槽，卫生检查，客人找茬等信息，多为告知类
  function Director() {
    this.status = null;
  }

  var _proto = Director.prototype;

  _proto.run = function run() {
    if (this.editMode) {}

    switch (this.status) {
      case Director.STATUS_NIGHT:
        break;

      case Director.STATUS_READY:
        break;

      case Director.STATUS_BUSSINESS:
        break;

      case Director.STATUS_CLOSE:
        break;
    }
  } //每个关键节点调用
  ;

  _proto.saveData = function saveData() {
    var userData = {
      operateCount: operateCount,
      day: 1,
      coin: 100,
      cookerList: [],
      popular: 100
    };
    cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
  } //游戏启动调用
  ;

  _proto.loadData = function loadData() {
    var userData = cc.sys.localStorage.getItem('userData');
  };

  return Director;
}();

exports["default"] = Director;
Director.GUIDE_MODE = 1;
Director.editMode = 0;
Director.day = 0;
Director.operateCount = 6;
Director.coin = 0;
Director.STATUS_NIGHT = 1;
Director.STATUS_READY = 2;
Director.STATUS_BUSSINESS = 3;
Director.STATUS_CLOSE = 4;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0RpcmVjdG9yLmpzIl0sIm5hbWVzIjpbIkRpcmVjdG9yIiwic3RhdHVzIiwicnVuIiwiZWRpdE1vZGUiLCJTVEFUVVNfTklHSFQiLCJTVEFUVVNfUkVBRFkiLCJTVEFUVVNfQlVTU0lORVNTIiwiU1RBVFVTX0NMT1NFIiwic2F2ZURhdGEiLCJ1c2VyRGF0YSIsIm9wZXJhdGVDb3VudCIsImRheSIsImNvaW4iLCJjb29rZXJMaXN0IiwicG9wdWxhciIsImNjIiwic3lzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkRGF0YSIsImdldEl0ZW0iLCJHVUlERV9NT0RFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7OztJQVFxQkE7QUFDSTtBQUNGO0FBQ25CO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLHNCQUFhO0FBQ1QsU0FBS0MsTUFBTCxHQUFZLElBQVo7QUFDSDs7OztTQUVEQyxNQUFBLGVBQUs7QUFDRCxRQUFHLEtBQUtDLFFBQVIsRUFBaUIsQ0FFaEI7O0FBQ0QsWUFBUSxLQUFLRixNQUFiO0FBQ0ksV0FBS0QsUUFBUSxDQUFDSSxZQUFkO0FBQ0k7O0FBQ0osV0FBS0osUUFBUSxDQUFDSyxZQUFkO0FBQ0k7O0FBQ0osV0FBS0wsUUFBUSxDQUFDTSxnQkFBZDtBQUdJOztBQUNKLFdBQUtOLFFBQVEsQ0FBQ08sWUFBZDtBQUNJO0FBVlI7QUFZSCxJQUVEOzs7U0FDQUMsV0FBQSxvQkFBVTtBQUNOLFFBQUlDLFFBQVEsR0FBRztBQUNYQyxNQUFBQSxZQUFZLEVBQUVBLFlBREg7QUFFWEMsTUFBQUEsR0FBRyxFQUFFLENBRk07QUFHWEMsTUFBQUEsSUFBSSxFQUFFLEdBSEs7QUFJWEMsTUFBQUEsVUFBVSxFQUFDLEVBSkE7QUFLWEMsTUFBQUEsT0FBTyxFQUFDO0FBTEcsS0FBZjtBQVFBQyxJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxRQUFmLENBQXhDO0FBQ0gsSUFDRDs7O1NBQ0FZLFdBQUEsb0JBQVU7QUFDUCxRQUFJWixRQUFRLEdBQUVNLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CSyxPQUFwQixDQUE0QixVQUE1QixDQUFkO0FBQ0Y7Ozs7OztBQXpEZ0J0QixTQUNUdUIsYUFBVztBQURGdkIsU0FFVEcsV0FBUztBQUZBSCxTQUlWVyxNQUFJO0FBSk1YLFNBTVZVLGVBQWE7QUFOSFYsU0FRVlksT0FBSztBQVJLWixTQVlWSSxlQUFhO0FBWkhKLFNBY1ZLLGVBQWE7QUFkSEwsU0FpQlZNLG1CQUFpQjtBQWpCUE4sU0FtQlZPLGVBQWEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiDlr7zmvJTnsbsg5o6n5Yi25pW05L2T5rWB56iLXG4gKiDmuLjmiI/otYTmupBcbiAqIOS6uuawlCAg5LiO6aOf54mp5ZGz6YGT57q/5oCn55u45YWzIOS4juiIkumAguW6puWPiuacjeWKoeawtOW5s+S5mOezu+aVsOWFs+ezu1xuICog5a6i5rWB6YePIOWunumZheadpeW6l+S6uuaVsO+8jOWSjOS6uuawlOaIkOato+avlCDlj5fppJDmoYzmlbDph4/pmZDliLZcbiAqIOmHkeW4gSAgIOmbh+S9o+WOqOW4iO+8jOi0reS5sOmjn+adkOetiVxuICog6KGM5Yqo5YC8IOavj+WkqeiHquWKqOihpeWFqDbmrKHvvIzpmo/mnLrkuovku7bpgInmi6nvvIzkuqfnlJ/lhbbku5botYTmupBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J7XG4gICAgc3RhdGljICBHVUlERV9NT0RFPTE7Ly/lvJXlr7zmqKHlvI8g6ICD6JmR5piv5ZCm5Yqg5o+Q56S65qCHXG4gICAgc3RhdGljICBlZGl0TW9kZT0wOy8v57yW6L6R5qih5byP77yM5a625YW35bim56Kw5pKe5L2T56ev77yM5Y+v5Yig6Zmk5pGG5pS+XG4gICAgLy/muLjmiI/miYDov5vooYznmoTml7bpl7RcbiAgICBzdGF0aWMgZGF5PTA7XG4gICAgLy/mnKzlpKnliankvZnmk43kvZzmlbBcbiAgICBzdGF0aWMgb3BlcmF0ZUNvdW50PTY7XG4gICAgLy/liankvZnph5HluIFcbiAgICBzdGF0aWMgY29pbj0wO1xuXG4gICAgLy/lpJzmmZog6K+V5YGa5paw6I+c5oiWIOmHjeaWsOmSu+eglOaXp+iPnO+8jOavj+S4quWOqOW4iOavj+WknOWPr+aJp+ihjOS4gOS4qu+8jOWPr+acieWPpuS4gOWOqOW4iOWNj+WKqS5cbiAgICAvLyDoj5zlgZrlpb3lkI7kvJrmlL7liLDljqjluIjnmoToo4XlpIfmoI/ph4zvvIzmr4/kuKrljqjluIjlj6/oo4XlpIcz5Liq6I+cXG4gICAgc3RhdGljIFNUQVRVU19OSUdIVD0xO1xuICAgIC8v5YeG5aSH6Zi25q61LOiwg+aVtOWOqOW4iO+8jOe7j+iQpeiuoeWIku+8jOacjeWKoeWRmOaVsOmHj++8jOWfueiureetiVxuICAgIHN0YXRpYyBTVEFUVVNfUkVBRFk9MjtcbiAgICAvL+e7j+iQpemYtuautSzmr4/lpKnmnIk25Liq5oqJ5oup77yM5Y+v5Zyo5bqX5YaF5biu5belL+ebkeW3pe+8jOWPr+WHuuWklumHh+i0re+8jOivleWQg+WtpuS5oOiPnOiwse+8jOWPr+aMluaOmOmjn+adkO+8jFxuICAgIC8vIOS5n+iDveeisOWIsOW5v+WRiuOAgeWOqOW4iOS6iemcuOWPiuWNq+eUn+ajgOafpeetiea2iOaBr1xuICAgIHN0YXRpYyBTVEFUVVNfQlVTU0lORVNTPTM7XG4gICAgLy/lhbPlupfpmLbmrrXvvIznu4/okKXnu5PmnZ/lkI7vvIzlh7roi6XlubLpmo/mnLrkuovku7bvvIzot7Pmp73vvIzljavnlJ/mo4Dmn6XvvIzlrqLkurrmib7ojKznrYnkv6Hmga/vvIzlpJrkuLrlkYrnn6XnsbtcbiAgICBzdGF0aWMgU1RBVFVTX0NMT1NFPTQ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zdGF0dXM9bnVsbDtcbiAgICB9XG5cbiAgICBydW4oKXtcbiAgICAgICAgaWYodGhpcy5lZGl0TW9kZSl7XG5cbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdHVzKXtcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0b3IuU1RBVFVTX05JR0hUOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEaXJlY3Rvci5TVEFUVVNfUkVBRFk6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERpcmVjdG9yLlNUQVRVU19CVVNTSU5FU1M6XG5cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEaXJlY3Rvci5TVEFUVVNfQ0xPU0U6XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5q+P5Liq5YWz6ZSu6IqC54K56LCD55SoXG4gICAgc2F2ZURhdGEoKXtcbiAgICAgICAgbGV0IHVzZXJEYXRhID0ge1xuICAgICAgICAgICAgb3BlcmF0ZUNvdW50OiBvcGVyYXRlQ291bnQsXG4gICAgICAgICAgICBkYXk6IDEsXG4gICAgICAgICAgICBjb2luOiAxMDAsXG4gICAgICAgICAgICBjb29rZXJMaXN0OltdLFxuICAgICAgICAgICAgcG9wdWxhcjoxMDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRGF0YScsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XG4gICAgfVxuICAgIC8v5ri45oiP5ZCv5Yqo6LCD55SoXG4gICAgbG9hZERhdGEoKXtcbiAgICAgICBsZXQgdXNlckRhdGE9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKTtcbiAgICB9XG5cbn0iXX0=