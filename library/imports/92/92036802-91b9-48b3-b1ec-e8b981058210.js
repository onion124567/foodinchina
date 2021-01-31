"use strict";
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
//游戏所进行的时间
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