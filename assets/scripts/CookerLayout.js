cc.Class({
    extends: cc.Layout,

    properties: {
        picNum:"181",
        isCheck:false,
        sprite: {
            default: null,
            type: cc.SpriteFrame,
        },
        titleView: {
            default: null,
            type: cc.Label,
        },
        contentView: {
            default: null,
            type: cc.Label,
        },
        btnView: {
            default: null,
            type: cc.Button,
        },
    },

    start: function () {

        // var node = new cc.Node('Sprite');
        // var sp = node.addComponent(cc.Sprite);

        // sp.spriteFrame = cardPic;
        // node.parent = this.node;

       let cooker= {
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

    },


    // update: function (dt) {
    // },

    onLoad: function () {
        // add key down and key up event
        // let picNum=this.game.getPicNum();
        // cc.systemEvent.on();
        this.node.on("mousedown", this.onMouseDown,this);

        let self=this;
        cc.resources.load("pokers", cc.SpriteAtlas, function (err, atlas) {

            var frame = atlas.getSpriteFrame(self.picNum);

            // console.log('onion==='+self.getComponent(cc.Sprite));
            self.getComponent(cc.Sprite).spriteFrame =frame
            // this.spriteFrame= frame;
        });
    },

    onDestroy () {
        // cc.systemEvent.off("mousedown", this.onMouseDown);

        this.node.off('mousedown', this.onMouseDown, this);
    },

    onMouseDown: function (event) {
        console.log('Press a key');
        event.stopPropagation();
        // if(this.isCheck){
        //     this.isCheck=false;
        //     this.node.y=this.node.y-50;
        // }else{
        //     this.isCheck=true;
        //     this.node.y=this.node.y+50;
        // }

    },


});