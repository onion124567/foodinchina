
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
  //经营阶段店内,每天有6个抉择，可在店内帮工/监工
  //可采购、试吃、挖掘食材、闲逛、海边等等 也能碰到广告、厨师争霸及卫生检查等消息
  //关店阶段，经营结束后，出若干随机事件，跳槽，卫生检查，客人找茬等信息，多为告知类
  function Director() {
    this.status = null;
  }

  var _proto = Director.prototype;

  _proto.run = function run() {
    if (this.editMode) {}

    switch (this.status) {
      case Director.STATUS_NIGHT:
        Director.operateCount = 6;
        break;

      case Director.STATUS_READY:
        break;

      case Director.STATUS_BUSSINESS:
        Director.operateCount--;

        if (Director.operateCount === 0) {
          this.status = Director.STATUS_CLOSE;
        }

        break;

      case Director.STATUS_OUTER:
        Director.operateCount--;

        if (Director.operateCount === 0) {
          this.status = Director.STATUS_CLOSE;
          cc.director.loadScene('game');
        }

      case Director.STATUS_CLOSE:
        break;
    }
  } //每个关键节点调用
  ;

  _proto.saveData = function saveData() {
    var userData = {
      operateCount: Director.operateCount,
      day: 1,
      coin: 100,
      cookerList: [],
      popular: 100 //人气值

    };
    var sceneData = {
      floor: 1,
      sceneList: [{
        name: "大吊灯",
        pic: "xxx.png",
        type: 1,
        locationX: 2,
        floor: 1,
        area: 1,
        //占地面积 同type互斥
        influence: 4 //影响范围

      }]
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
Director.STATUS_OUTER = 4;
Director.STATUS_CLOSE = 5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRGlyZWN0b3IuanMiXSwibmFtZXMiOlsiRGlyZWN0b3IiLCJzdGF0dXMiLCJydW4iLCJlZGl0TW9kZSIsIlNUQVRVU19OSUdIVCIsIm9wZXJhdGVDb3VudCIsIlNUQVRVU19SRUFEWSIsIlNUQVRVU19CVVNTSU5FU1MiLCJTVEFUVVNfQ0xPU0UiLCJTVEFUVVNfT1VURVIiLCJjYyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic2F2ZURhdGEiLCJ1c2VyRGF0YSIsImRheSIsImNvaW4iLCJjb29rZXJMaXN0IiwicG9wdWxhciIsInNjZW5lRGF0YSIsImZsb29yIiwic2NlbmVMaXN0IiwibmFtZSIsInBpYyIsInR5cGUiLCJsb2NhdGlvblgiLCJhcmVhIiwiaW5mbHVlbmNlIiwic3lzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkRGF0YSIsImdldEl0ZW0iLCJHVUlERV9NT0RFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7OztJQVFxQkE7QUFDSTtBQUNGO0FBQ25CO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBLHNCQUFhO0FBQ1QsU0FBS0MsTUFBTCxHQUFZLElBQVo7QUFDSDs7OztTQUVEQyxNQUFBLGVBQUs7QUFDRCxRQUFHLEtBQUtDLFFBQVIsRUFBaUIsQ0FFaEI7O0FBQ0QsWUFBUSxLQUFLRixNQUFiO0FBQ0ksV0FBS0QsUUFBUSxDQUFDSSxZQUFkO0FBQ0lKLFFBQUFBLFFBQVEsQ0FBQ0ssWUFBVCxHQUFzQixDQUF0QjtBQUNBOztBQUNKLFdBQUtMLFFBQVEsQ0FBQ00sWUFBZDtBQUNJOztBQUNKLFdBQUtOLFFBQVEsQ0FBQ08sZ0JBQWQ7QUFDSVAsUUFBQUEsUUFBUSxDQUFDSyxZQUFUOztBQUNBLFlBQUdMLFFBQVEsQ0FBQ0ssWUFBVCxLQUF3QixDQUEzQixFQUE2QjtBQUN6QixlQUFLSixNQUFMLEdBQVlELFFBQVEsQ0FBQ1EsWUFBckI7QUFDSDs7QUFDRDs7QUFDSixXQUFLUixRQUFRLENBQUNTLFlBQWQ7QUFDSVQsUUFBQUEsUUFBUSxDQUFDSyxZQUFUOztBQUNBLFlBQUdMLFFBQVEsQ0FBQ0ssWUFBVCxLQUF3QixDQUEzQixFQUE2QjtBQUN6QixlQUFLSixNQUFMLEdBQVlELFFBQVEsQ0FBQ1EsWUFBckI7QUFDQUUsVUFBQUEsRUFBRSxDQUFDQyxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSDs7QUFDTCxXQUFLWixRQUFRLENBQUNRLFlBQWQ7QUFDSTtBQW5CUjtBQXFCSCxJQUVEOzs7U0FDQUssV0FBQSxvQkFBVTtBQUNOLFFBQUlDLFFBQVEsR0FBRztBQUNYVCxNQUFBQSxZQUFZLEVBQUVMLFFBQVEsQ0FBQ0ssWUFEWjtBQUVYVSxNQUFBQSxHQUFHLEVBQUUsQ0FGTTtBQUdYQyxNQUFBQSxJQUFJLEVBQUUsR0FISztBQUlYQyxNQUFBQSxVQUFVLEVBQUMsRUFKQTtBQUtYQyxNQUFBQSxPQUFPLEVBQUMsR0FMRyxDQUtDOztBQUxELEtBQWY7QUFPQSxRQUFJQyxTQUFTLEdBQUM7QUFDVkMsTUFBQUEsS0FBSyxFQUFDLENBREk7QUFFVkMsTUFBQUEsU0FBUyxFQUFDLENBQ047QUFDSUMsUUFBQUEsSUFBSSxFQUFDLEtBRFQ7QUFFSUMsUUFBQUEsR0FBRyxFQUFDLFNBRlI7QUFHSUMsUUFBQUEsSUFBSSxFQUFDLENBSFQ7QUFJSUMsUUFBQUEsU0FBUyxFQUFDLENBSmQ7QUFLSUwsUUFBQUEsS0FBSyxFQUFDLENBTFY7QUFNSU0sUUFBQUEsSUFBSSxFQUFDLENBTlQ7QUFNVztBQUNQQyxRQUFBQSxTQUFTLEVBQUMsQ0FQZCxDQU9nQjs7QUFQaEIsT0FETTtBQUZBLEtBQWQ7QUFpQkFqQixJQUFBQSxFQUFFLENBQUNrQixHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWxCLFFBQWYsQ0FBeEM7QUFDSCxJQUNEOzs7U0FDQW1CLFdBQUEsb0JBQVU7QUFDUCxRQUFJbkIsUUFBUSxHQUFFSixFQUFFLENBQUNrQixHQUFILENBQU9DLFlBQVAsQ0FBb0JLLE9BQXBCLENBQTRCLFVBQTVCLENBQWQ7QUFDRjs7Ozs7O0FBbkZnQmxDLFNBQ1RtQyxhQUFXO0FBREZuQyxTQUVURyxXQUFTO0FBRkFILFNBSVZlLE1BQUk7QUFKTWYsU0FNVkssZUFBYTtBQU5ITCxTQVFWZ0IsT0FBSztBQVJLaEIsU0FZVkksZUFBYTtBQVpISixTQWNWTSxlQUFhO0FBZEhOLFNBZ0JWTyxtQkFBaUI7QUFoQlBQLFNBa0JWUyxlQUFhO0FBbEJIVCxTQW9CVlEsZUFBYSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiDlr7zmvJTnsbsg5o6n5Yi25pW05L2T5rWB56iLXHJcbiAqIOa4uOaIj+i1hOa6kFxyXG4gKiDkurrmsJQgIOS4jumjn+eJqeWRs+mBk+e6v+aAp+ebuOWFsyDkuI7oiJLpgILluqblj4rmnI3liqHmsLTlubPkuZjns7vmlbDlhbPns7tcclxuICog5a6i5rWB6YePIOWunumZheadpeW6l+S6uuaVsO+8jOWSjOS6uuawlOaIkOato+avlCDlj5fppJDmoYzmlbDph4/pmZDliLZcclxuICog6YeR5biBICAg6ZuH5L2j5Y6o5biI77yM6LSt5Lmw6aOf5p2Q562JXHJcbiAqIOihjOWKqOWAvCDmr4/lpKnoh6rliqjooaXlhag25qyh77yM6ZqP5py65LqL5Lu26YCJ5oup77yM5Lqn55Sf5YW25LuW6LWE5rqQXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcntcclxuICAgIHN0YXRpYyAgR1VJREVfTU9ERT0xOy8v5byV5a+85qih5byPIOiAg+iZkeaYr+WQpuWKoOaPkOekuuagh1xyXG4gICAgc3RhdGljICBlZGl0TW9kZT0wOy8v57yW6L6R5qih5byP77yM5a625YW35bim56Kw5pKe5L2T56ev77yM5Y+v5Yig6Zmk5pGG5pS+XHJcbiAgICAvL+a4uOaIj+aJgOi/m+ihjOeahOaXtumXtFxyXG4gICAgc3RhdGljIGRheT0wO1xyXG4gICAgLy/mnKzlpKnliankvZnmk43kvZzmlbBcclxuICAgIHN0YXRpYyBvcGVyYXRlQ291bnQ9NjtcclxuICAgIC8v5Ymp5L2Z6YeR5biBXHJcbiAgICBzdGF0aWMgY29pbj0wO1xyXG5cclxuICAgIC8v5aSc5pmaIOivleWBmuaWsOiPnOaIliDph43mlrDpkrvnoJTml6foj5zvvIzmr4/kuKrljqjluIjmr4/lpJzlj6/miafooYzkuIDkuKrvvIzlj6/mnInlj6bkuIDljqjluIjljY/liqkuXHJcbiAgICAvLyDoj5zlgZrlpb3lkI7kvJrmlL7liLDljqjluIjnmoToo4XlpIfmoI/ph4zvvIzmr4/kuKrljqjluIjlj6/oo4XlpIcz5Liq6I+cXHJcbiAgICBzdGF0aWMgU1RBVFVTX05JR0hUPTE7XHJcbiAgICAvL+WHhuWkh+mYtuautSzosIPmlbTljqjluIjvvIznu4/okKXorqHliJLvvIzmnI3liqHlkZjmlbDph4/vvIzln7norq3nrYlcclxuICAgIHN0YXRpYyBTVEFUVVNfUkVBRFk9MjtcclxuICAgIC8v57uP6JCl6Zi25q615bqX5YaFLOavj+WkqeaciTbkuKrmionmi6nvvIzlj6/lnKjlupflhoXluK7lt6Uv55uR5belXHJcbiAgICBzdGF0aWMgU1RBVFVTX0JVU1NJTkVTUz0zO1xyXG4gICAgLy/lj6/ph4fotK3jgIHor5XlkIPjgIHmjJbmjpjpo5/mnZDjgIHpl7LpgJvjgIHmtbfovrnnrYnnrYkg5Lmf6IO956Kw5Yiw5bm/5ZGK44CB5Y6o5biI5LqJ6Zy45Y+K5Y2r55Sf5qOA5p+l562J5raI5oGvXHJcbiAgICBzdGF0aWMgU1RBVFVTX09VVEVSPTQ7XHJcbiAgICAvL+WFs+W6l+mYtuaute+8jOe7j+iQpee7k+adn+WQju+8jOWHuuiLpeW5sumaj+acuuS6i+S7tu+8jOi3s+anve+8jOWNq+eUn+ajgOafpe+8jOWuouS6uuaJvuiMrOetieS/oeaBr++8jOWkmuS4uuWRiuefpeexu1xyXG4gICAgc3RhdGljIFNUQVRVU19DTE9TRT01O1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnN0YXR1cz1udWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpe1xyXG4gICAgICAgIGlmKHRoaXMuZWRpdE1vZGUpe1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXR1cyl7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0b3IuU1RBVFVTX05JR0hUOlxyXG4gICAgICAgICAgICAgICAgRGlyZWN0b3Iub3BlcmF0ZUNvdW50PTY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rvci5TVEFUVVNfUkVBRFk6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rvci5TVEFUVVNfQlVTU0lORVNTOlxyXG4gICAgICAgICAgICAgICAgRGlyZWN0b3Iub3BlcmF0ZUNvdW50LS07XHJcbiAgICAgICAgICAgICAgICBpZihEaXJlY3Rvci5vcGVyYXRlQ291bnQ9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cz1EaXJlY3Rvci5TVEFUVVNfQ0xPU0U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rvci5TVEFUVVNfT1VURVI6XHJcbiAgICAgICAgICAgICAgICBEaXJlY3Rvci5vcGVyYXRlQ291bnQtLTtcclxuICAgICAgICAgICAgICAgIGlmKERpcmVjdG9yLm9wZXJhdGVDb3VudD09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzPURpcmVjdG9yLlNUQVRVU19DTE9TRTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rvci5TVEFUVVNfQ0xPU0U6XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+avj+S4quWFs+mUruiKgueCueiwg+eUqFxyXG4gICAgc2F2ZURhdGEoKXtcclxuICAgICAgICBsZXQgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIG9wZXJhdGVDb3VudDogRGlyZWN0b3Iub3BlcmF0ZUNvdW50LFxyXG4gICAgICAgICAgICBkYXk6IDEsXHJcbiAgICAgICAgICAgIGNvaW46IDEwMCxcclxuICAgICAgICAgICAgY29va2VyTGlzdDpbXSxcclxuICAgICAgICAgICAgcG9wdWxhcjoxMDAsLy/kurrmsJTlgLxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBzY2VuZURhdGE9e1xyXG4gICAgICAgICAgICBmbG9vcjoxLFxyXG4gICAgICAgICAgICBzY2VuZUxpc3Q6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6XCLlpKflkIrnga9cIixcclxuICAgICAgICAgICAgICAgICAgICBwaWM6XCJ4eHgucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZToxLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uWDoyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsb29yOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJlYToxLC8v5Y2g5Zyw6Z2i56evIOWQjHR5cGXkupLmlqVcclxuICAgICAgICAgICAgICAgICAgICBpbmZsdWVuY2U6NCwvL+W9seWTjeiMg+WbtFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICAgIH1cclxuICAgIC8v5ri45oiP5ZCv5Yqo6LCD55SoXHJcbiAgICBsb2FkRGF0YSgpe1xyXG4gICAgICAgbGV0IHVzZXJEYXRhPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJyk7XHJcbiAgICB9XHJcblxyXG59Il19