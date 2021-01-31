
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
 */
var Director = //引导模式 考虑是否加提示标
//编辑模式，家具带碰撞体积，可删除摆放
//夜晚 试做新菜或 重新钻研旧菜，每个厨师每夜可执行一个，可有另一厨师协助.
// 菜做好后会放到厨师的装备栏里，每个厨师可装备3个菜
//准备阶段,调整厨师，经营计划，服务员数量，培训等
//经营阶段,每天有6个抉择，可在店内帮工/监工，可出外采购，试吃学习菜谱，可挖掘食材，
// 也能碰到广告、厨师争霸及卫生检查等消息
//关店阶段，经营结束后，出若干随机事件，跳槽，卫生检查，客人找茬等信息，多为告知类
function Director() {
  this.status = null;
};

exports["default"] = Director;
Director.GUIDE_MODE = 1;
Director.EDIT_MODE = 0;
Director.day = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRGlyZWN0b3IuanMiXSwibmFtZXMiOlsiRGlyZWN0b3IiLCJzdGF0dXMiLCJHVUlERV9NT0RFIiwiRURJVF9NT0RFIiwiZGF5IiwiU1RBVFVTX05JR0hUIiwiU1RBVFVTX1JFQURZIiwiU1RBVFVTX0JVU1NJTkVTUyIsIlNUQVRVU19DTE9TRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0lBR3FCQSxXQUNJO0FBQ0Q7QUFFcEI7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUEsb0JBQWE7QUFDVCxPQUFLQyxNQUFMLEdBQVksSUFBWjtBQUNIOzs7QUFoQmdCRCxTQUNURSxhQUFXO0FBREZGLFNBRVRHLFlBQVU7QUFGREgsU0FHVkksTUFBSTtBQUhNSixTQU1WSyxlQUFhO0FBTkhMLFNBUVZNLGVBQWE7QUFSSE4sU0FXVk8sbUJBQWlCO0FBWFBQLFNBYVZRLGVBQWEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICog5a+85ryU57G7IOaOp+WItuaVtOS9k+a1geeoi1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J7XHJcbiAgICBzdGF0aWMgIEdVSURFX01PREU9MTsvL+W8leWvvOaooeW8jyDogIPomZHmmK/lkKbliqDmj5DnpLrmoIdcclxuICAgIHN0YXRpYyAgRURJVF9NT0RFPTA7Ly/nvJbovpHmqKHlvI/vvIzlrrblhbfluKbnorDmkp7kvZPnp6/vvIzlj6/liKDpmaTmkYbmlL5cclxuICAgIHN0YXRpYyBkYXk9MDtcclxuICAgIC8v5aSc5pmaIOivleWBmuaWsOiPnOaIliDph43mlrDpkrvnoJTml6foj5zvvIzmr4/kuKrljqjluIjmr4/lpJzlj6/miafooYzkuIDkuKrvvIzlj6/mnInlj6bkuIDljqjluIjljY/liqkuXHJcbiAgICAvLyDoj5zlgZrlpb3lkI7kvJrmlL7liLDljqjluIjnmoToo4XlpIfmoI/ph4zvvIzmr4/kuKrljqjluIjlj6/oo4XlpIcz5Liq6I+cXHJcbiAgICBzdGF0aWMgU1RBVFVTX05JR0hUPTE7XHJcbiAgICAvL+WHhuWkh+mYtuautSzosIPmlbTljqjluIjvvIznu4/okKXorqHliJLvvIzmnI3liqHlkZjmlbDph4/vvIzln7norq3nrYlcclxuICAgIHN0YXRpYyBTVEFUVVNfUkVBRFk9MjtcclxuICAgIC8v57uP6JCl6Zi25q61LOavj+WkqeaciTbkuKrmionmi6nvvIzlj6/lnKjlupflhoXluK7lt6Uv55uR5bel77yM5Y+v5Ye65aSW6YeH6LSt77yM6K+V5ZCD5a2m5Lmg6I+c6LCx77yM5Y+v5oyW5o6Y6aOf5p2Q77yMXHJcbiAgICAvLyDkuZ/og73norDliLDlub/lkYrjgIHljqjluIjkuonpnLjlj4rljavnlJ/mo4Dmn6XnrYnmtojmga9cclxuICAgIHN0YXRpYyBTVEFUVVNfQlVTU0lORVNTPTM7XHJcbiAgICAvL+WFs+W6l+mYtuaute+8jOe7j+iQpee7k+adn+WQju+8jOWHuuiLpeW5sumaj+acuuS6i+S7tu+8jOi3s+anve+8jOWNq+eUn+ajgOafpe+8jOWuouS6uuaJvuiMrOetieS/oeaBr++8jOWkmuS4uuWRiuefpeexu1xyXG4gICAgc3RhdGljIFNUQVRVU19DTE9TRT00O1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnN0YXR1cz1udWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=