"use strict";
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