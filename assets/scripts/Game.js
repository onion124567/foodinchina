
let PokerUtil = require("PokerUtil");
let AIHelper = require("AIHelper");
let self;
cc.Class({
    extends: cc.Component,

    properties: {
        menuView: {
            default: null,
            type: cc.Button,
        },
        contentView: {
            default: null,
            type: cc.Label,
        },
    },

    onLoad: function () {
        self=this;

    },





    update: function (dt) {
        // 每帧更新计时器，超过限度还没有生成新的星星
        // 就会调用游戏失败逻辑
        // if (this.timer > this.starDuration) {
        //     this.gameOver();
        //     this.enabled = false;   // disable gameOver logic to avoid load scene repeatedly
        //     return;
        // }
        // this.timer += dt;
    },

});
