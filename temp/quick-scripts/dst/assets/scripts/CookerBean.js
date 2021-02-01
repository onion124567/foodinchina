
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CookerBean.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29va2VyQmVhbi5qcyJdLCJuYW1lcyI6WyJDb29rZXJCZWFuIiwiYmluZERhdGEiLCJqc29uIiwiZGF0YSIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCcUJBOzs7OztTQUVqQkMsV0FBQSxrQkFBU0MsSUFBVCxFQUFjO0FBQ1osU0FBS0MsSUFBTCxHQUFVQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBWCxDQUFWO0FBQ0QiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBsZXQgY29va2VyPSB7XHJcbiAgICAgICAgICAgXCJuYW1lXCI6IFwi5p2O5aSn5Zi0XCIsXHJcbiAgICAgICAgICAgXCJsdlwiOiAxLFxyXG4gICAgICAgICAgIFwidGFsZW50XCI6IHtcclxuICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICBcIm5hbWVcIjogXCLlkJ3llazprLxcIixcclxuICAgICAgICAgICAgICAgXCJkZXNjcmliZVwiOiBcIuS5sOiPnOS5neWFq+aKmFwiXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBcImF0dHJpYnV0ZVwiOiBbXHJcbiAgICAgICAgICAgICAgIHtcInN0ZWFtXCI6IDE2fSxcclxuICAgICAgICAgICAgICAge1wiZnJ5XCI6IDE4fSxcclxuICAgICAgICAgICAgICAge1wiY3V0XCI6IDEyfSxcclxuICAgICAgICAgICAgICAge1wiYm9pbFwiOiAyMn0sXHJcbiAgICAgICAgICAgICAgIHtcIm5vb2RsZXNcIjogMTR9LFxyXG4gICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgXCJmb29kbGlzdFwiOiBbXHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuilv+e6ouafv+eCkuibi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOjEuNixcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIF1cclxuICAgICAgIH07XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29rZXJCZWFuIHtcclxuXHJcbiAgICBiaW5kRGF0YShqc29uKXtcclxuICAgICAgdGhpcy5kYXRhPUpTT04ucGFyc2UoanNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXX0=