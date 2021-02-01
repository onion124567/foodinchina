
let PokerUtil = require("PokerUtil");
let AIHelper = require("AIHelper");
let self;
/**
 * 经营阶段主界面
 *  经营阶段,每天有6个抉择，
 *  可在店内帮工/监工，出随机事件
 *  可出外采购，试吃学习菜谱，可挖掘食材，
 *  也能碰到广告、厨师争霸及卫生检查等消息
 *  随时可以调整场地
 */
cc.Class({
    extends: cc.Component,

    properties: {
        menuView: {
            default: null,
            type: cc.Button,
        },
        coinValueView: {
            default: null,
            type: cc.Label,
        },
        menuList: {
            default: null,
            type: cc.Layout,
        },
        mainbtn: {
            default: null,
            type: cc.Prefab
        },
    },

    onLoad: function () {
        self=this;
        this.menuView.node.on('click', this.menuCallback, this);
        this.menuList.node.active=false;
    },
    menuCallback:function(){
        if(this.menuList.node.active){
            this.menuList.node.active=false;
        }else {
            let  menu=cc.instantiate(this.mainbtn);
            // let label=menu.getComponent('Button');

            let components=menu.children;
            for(let item of components){
                console.log("onion","menuCallBack"+item.getComponent('Button'));
            }

            // label.string="外出";
            this.menuList.node.addChild(menu);

            menu.node.on('click',this.outerClick,this);
            this.menuList.node.active=true;
        }

    },
    /**
     * 外出 切换场景
     */
    outerClick:function(){

    },
    /**
     * 帮工 随机增加少量人气
     */
    helperClick:function() {

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
