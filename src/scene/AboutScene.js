var AboutScene = cc.Scene.extend({

    ctor:function () {
        this._super();
        var layer = new cc.Layer();
        this.addChild(layer);

        var winSize = cc.winSize;
        var bgWelcome = new cc.Sprite(res.bgWelcome_img);
        bgWelcome.x = winSize.width/2;
        bgWelcome.y = winSize.height/2;
        layer.addChild(bgWelcome);

        var aboutText = "饥饿的超人~~~~~create by cocos2d-js-v3.1 lite版";
        var helloLabel = cc.LabelTTF.create(aboutText, "Microsoft Yahei", 30);

        helloLabel.x = winSize.width/2;
        helloLabel.y = winSize.height/2 + 80;

        layer.addChild(helloLabel);

        var backButton = new cc.MenuItemImage("#about_backButton.png", "#about_backButton.png", this._back);
        backButton.x = 150;
        backButton.y = -70;
        var menu = new cc.Menu(backButton);
        layer.addChild(menu);

        cc.eventManager.addListener({event: cc.EventListener.KEYBOARD, onKeyReleased: this._back}, this);

        return true;
    },

    _back:function() {
        Sound.playCoffee();
        cc.director.runScene(new MenuScene());
    }

});
