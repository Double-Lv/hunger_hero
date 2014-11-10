var MenuScene = cc.Scene.extend({
    _hero:null,
    _playBtn:null,
    _aboutBtn:null,

    ctor:function () {

        this._super();
        var _this = this;
        var layer = new cc.Layer();
        this.addChild(layer);

        var winSize = cc.winSize;
        var bgWelcome = new cc.Sprite(res.bgWelcome_img);
        bgWelcome.x = winSize.width/2;
        bgWelcome.y = winSize.height/2;
        layer.addChild(bgWelcome);

        var title = new cc.Sprite("#welcome_title.png");
        title.x = 800;
        title.y = 555;
        layer.addChild(title);

        this._hero = new cc.Sprite("#welcome_hero.png");
        this._hero.x = -this._hero.width/2;
        this._hero.y = 400;
        layer.addChild(this._hero);

        var move = cc.moveTo(2, cc.p(this._hero.width/2 + 100, this._hero.y));
        var heroin = cc.EaseBackOut.create(move);
        var heroUpdownAction = cc.RepeatForever.create(this._upDownAction(this._hero));
        // var heroact = cc.Sequence.create(
        //     heroin,
        //     cc.CallFunc.create(function(){_this._hero.runAction(heroUpdownAction)})
        // );

        this._hero.runAction(heroin);

        this._playBtn = new cc.MenuItemImage("#welcome_playButton.png", "#welcome_playButton.png", this._play);
        this._playBtn.x = 700;
        this._playBtn.y = 350;
        this._aboutBtn = new cc.MenuItemImage("#welcome_aboutButton.png", "#welcome_aboutButton.png", this._about, this);
        this._aboutBtn.x = 500;
        this._aboutBtn.y = 250;

        if(cc.sys.isNative)
            var soundButton = new cc.MenuItemToggle(new cc.MenuItemImage("#soundOn0002.png"), new cc.MenuItemImage("#soundOff.png"), Sound.toggleOnOff);
        else
            var soundButton = new SoundButton();
        soundButton.x = 45;
        soundButton.y = winSize.height - 45;
        var menu = new cc.Menu(this._playBtn, this._aboutBtn, soundButton);  //默认都居中叠在一起
        layer.addChild(menu);
        menu.x = menu.y = 0;    //如果不设置menu位置，则自动屏幕居中。

        //上下缓动
        var playbtnUpdownAction = cc.RepeatForever.create(this._upDownAction(this._playBtn));
        var aboutbtnUpdownAction = cc.RepeatForever.create(this._upDownAction(this._aboutBtn));        
        this._playBtn.runAction(playbtnUpdownAction);
        this._aboutBtn.runAction(aboutbtnUpdownAction);

        Sound.playMenuBgMusic();

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyReleased: function(keyCode, event) {
                if (keyCode == cc.KEY.back) {
                    cc.director.end();
                }
            }}, this);

        return true;
    },

    //上下缓动动作
    _upDownAction : function(el){
        return cc.Sequence.create(
            cc.moveTo(1, cc.p(el.x, el.y+20)),
            cc.moveTo(1, cc.p(el.x, el.y))
        );
    },

    _play:function() {
        Sound.playCoffee();
        cc.director.runScene(new GameScene());
    },

    _about:function() {
        Sound.playMushroom();
        cc.director.runScene(new AboutScene());
    }

});
