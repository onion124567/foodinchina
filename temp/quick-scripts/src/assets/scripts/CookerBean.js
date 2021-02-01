"use strict";
cc._RF.push(module, '3c7d2OphdhBWblGryf+MA5+', 'CookerBean');
// scripts/CookerBean.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

/**
 * let cooker= {
           "name": "李大嘴",
           "lv": 1,
           "talent": {
               "id": 1,
               "name": "吝啬鬼",
               "describe": "买菜九八折"
           },
           "attribute": [
               {"steam": 16},
               {"fry": 18},
               {"cut": 12},
               {"boil": 22},
               {"noodles": 14},
           ],
           "foodlist": [
               {
                   "id": 1,
                   "name": "西红柿炒蛋",
                   "value":1.6,
               }
           ]
       };
 */
var CookerBean = /*#__PURE__*/function () {
  function CookerBean() {}

  var _proto = CookerBean.prototype;

  _proto.bindData = function bindData(json) {
    this.data = JSON.parse(json);
  };

  return CookerBean;
}();

exports["default"] = CookerBean;
module.exports = exports["default"];

cc._RF.pop();